/*
 BigQuery grammar. The MIT License (MIT). Copyright (c) 2017, Mark Adams (madams51703@gmail.com)
 Copyright (c) 2015-2017, Ivan Kochurkin (kvanttt@gmail.com), Positive Technologies. Copyright (c)
 2016, Scott Ure (scott@redstormsoftware.com). Copyright (c) 2016, Rui Zhang
 (ruizhang.ccs@gmail.com). Copyright (c) 2016, Marcus Henriksson (kuseman80@gmail.com). Permission
 is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions: The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS",
 WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
 THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

parser grammar BigQueryParser;

options {
	tokenVocab = BigQueryLexer;
}

sql: query_statement;

// Root statement for a SELECT query
query_statement: with_statement? query_expr;

// A Query Expression can contain a Select Statement, a parenthized Query Expression, or a set
// operation of two or more Query Expressions
query_expr:
	select_statement order_clause? limit_clause?
	| LR_BRACKET query_expr RR_BRACKET order_clause? limit_clause?
	| query_expr set_op query_expr order_clause? limit_clause?;

// A Select Statement can select from table columns w/wo aliases, wildcard expressions, or any other 'expr' (Like a function call)
select_statement:
	SELECT (ALL | DISTINCT)? (
		(
			expr? DOT? STAR (except_statement)? (
				replace_statement
			)?
		)
		| expr (AS? alias_name)?
	) (
		COMMA (
			(expr? STAR (except_statement)? (replace_statement)?)
			| expr (AS? alias_name)?
		)
	)* from_statement? where_statement? group_statement? having_statement? window_statement?;

// From Statement can have one or more 'from_item's, separated by a comma
from_statement: FROM from_item (COMMA from_item)*;

// From Item - WIP From Items can be table expressions (project.dataset.table, Query Statements
// (subqueries), or a valid array expression). Array expressions are still WIP
from_item:
	table_expr (AS? alias_name)? (FOR SYSTEM TIME AS OF string)?
	| from_item join_type? JOIN from_item (
		on_clause
		| using_clause
	)
	| LR_BRACKET query_statement RR_BRACKET (AS? alias_name)?
	| UNNEST LR_BRACKET array_expr RR_BRACKET (AS? alias_name)? (
		WITH OFFSET (AS? alias_name)
	)?
	| cte_name (AS? alias_name)?;
// | field_path | UNNEST LR_BRACKET array_path RR_BRACKET (AS? alias_name)? ( WITH OFFSET (AS?
// alias_name) )? | array_path (AS? alias_name)? (WITH OFFSET (AS? alias_name))?;

// Where Statement can contain any boolean expression
where_statement: WHERE bool_expression;

// Group Statement can contain one or more expressions, separated by commas
group_statement:
	GROUP BY (
		(expr (COMMA expr)*)
		| ROLLUP LR_BRACKET expr (COMMA expr)* RR_BRACKET
	);

// Having statement can contain a boolean expression (TODO: Can HAVING statement contain comma separated boolean expressions?)
having_statement: HAVING bool_expression;

// Window statement is not complete
window_statement:
	WINDOW window_name AS LR_BRACKET window_definition RR_BRACKET;

// Order Statement can contain any number of comma separated expressions to order by.
order_clause:
	ORDER BY expr (ASC | DESC)? (COMMA expr (ASC | DESC)?)*;

// Limit Statement can contain a limit number and an optional offset
limit_clause: LIMIT count (OFFSET skip_rows)?;

// Unary Operators
unary_operator: '-' | BIT_NOT | NOT;

// Main expression rule can expand to any valid BigQuery expression. Still WIP
expr:
	number
	| string
	| array_name LEFT_BRACKET (
		OFFSET
		| ORDINAL
		| SAFE_OFFSET
		| SAFE_ORDINAL
	) LR_BRACKET expr RR_BRACKET RIGHT_BRACKET
	| unary_operator expr
	| expr (STAR | DIVIDE) expr
	| expr (PLUS | MINUS) expr
	| expr (LESS_LESS | GREATER_GREATER) expr
	| expr BIT_AND expr
	| expr BIT_XOR expr
	| expr BIT_OR expr
	| expr (
		EQUAL
		| LESS
		| GREATER
		| LEQ
		| GEQ
		| NOT_EQUAL
		| NOT? LIKE
		| NOT? BETWEEN expr AND expr
	) expr
	| expr IS NOT? S_NULL
	| IS NOT? TRUE
	| IS NOT? FALSE
	// TODO: Separate this out into separate STRUCT and ARRAY rules.
	| expr NOT? IN (
		( LR_BRACKET expr (COMMA expr)* RR_BRACKET)
		| query_statement
		| UNNEST LR_BRACKET array_expr RR_BRACKET
	)
	| expr AND expr
	| expr OR expr
	| function_name LR_BRACKET ((expr (COMMA expr)*) | STAR) RR_BRACKET
	| cast_expr
	| LR_BRACKET expr RR_BRACKET
	| column_expr
	| keyword;

// Cast Expression can cast any expression to one of the datatype_name options
cast_expr: CAST LR_BRACKET expr AS datatype_name RR_BRACKET;

column_expr:
	BK_QUOTE column_expr BK_QUOTE
	| (((project_name DOT)? dataset_name DOT)? table_name DOT)? column_name;
// Except Statement can exclude any number of comma separated column names.
except_statement:
	EXCEPT LR_BRACKET column_name (COMMA column_name)* RR_BRACKET;

// Replace Statement can replace any number of optionally aliased, comma separated expressions.
replace_statement:
	REPLACE LR_BRACKET expr (AS? alias_name)? (
		COMMA expr (AS? alias_name)*
	) RR_BRACKET;

// Join Type rule can expand to be any type of JOIN keyword.
join_type:
	INNER
	| CROSS
	| FULL OUTER?
	| LEFT OUTER?
	| RIGHT OUTER?;

// On Clause can contain a single boolean expression
on_clause: ON bool_expression;

// Set Operation expands to the keywords for each type of set operation
set_op:
	UNION (ALL | DISTINCT)?
	| INTERSECT DISTINCT
	| EXCEPT DISTINCT;

// Using Clause expands to a comma separated list of names
using_clause:
	USING LR_BRACKET join_name (COMMA join_name)* RR_BRACKET;

// Field path is WIP
field_path:;
// Struct can be the struct keyword followed by a datatype name. TODO: Need to expand this to support multiple comma separated datatypes
sstruct: SSTRUCT '<' datatype_name '>';
// Array can be the Array keyword followed by a datatype name.
array_expr: ARRAY '<' datatype_name '>';

// Array path is WIP
array_path:;

// Boolean expression can be any expression. (May change this later, but for now it works because we assume all queries are valid)
bool_expression: expr;

// Window name is WIP
window_name:;

// Window Definition is WIP
window_definition:;

// Count can be any number
count: number;
// Skip rows can be any number
skip_rows: number;
//with_query_name : ; WITH statement (CTE statement)
with_statement:
	WITH cte_name AS LR_BRACKET query_expr RR_BRACKET (
		COMMA cte_name AS LR_BRACKET query_expr RR_BRACKET
	)*;

// Name can be any ID or string, with optional quotes and parens
name:
	ID
	| DQOUTE name DQOUTE
	| LR_BRACKET name RR_BRACKET
	| BK_QUOTE name BK_QUOTE
	| QUOTE name QUOTE;
// Name rules

// Each specific type of name just expands to the parent name rule. This lets us assign handlers to
// only a specific type of name. (i.e. we care about cte_names and column_names, but not about
// datatype_names)
alias_name: name;
array_name: name;
column_name: name;
cte_name: name;
dataset_name: name;
datatype_name: name;
function_name: name;
join_name: name;
member_name: name;
project_name: name;
struct_name: name;
table_name: name;
table_expr: (((project_name DOT)? dataset_name DOT)? table_name)
	| BK_QUOTE table_expr BK_QUOTE;

// NUMBER LITERALS
number: integer_type | float_type;
integer_type: INT;
float_type: FLOAT;

// STRING LITERAL
string:
	quoted_string
	| triple_quoted_string
	| raw_string
	| byte_string
	| raw_byte_string
	| special_string;

// Quoted strings can be in single or double quotes. They can contain escaped quotes of the type
// enclosing the string, or non escaped versions of the other type of quote. (A single quoted string
// can contain unescaped double quotes or escaped single quotes, etc)
quoted_string: QUOTED_STRING;
triple_quoted_string: TRIPLE_QUOTED_STRING;
raw_string: RAW_STRING;
byte_string: BYTE_STRING;
raw_byte_string: RAW_BYTE_STRING;
// Special strings are strings with DATE, DATETIME, TIME, or TIMESTAMP preceding the string. These
// keywords are not reserved keywords, which means that they can be used as identifiers without
// backticks.
special_string: datatype_name QUOTED_STRING;

keyword:
	ALL
	| AND
	| ANY
	| ARRAY
	| AS
	| ASC
	| ASSERT_ROWS_MODIFIED
	| AT
	| BETWEEN
	| BY
	| CASE
	| CAST
	| COLLATE
	| CONTAINS
	| CREATE
	| CROSS
	| CUBE
	| CURRENT
	| DEFAULT
	| DEFINE
	| DESC
	| DISTINCT
	| ELSE
	| END
	| ENUM
	| ESCAPE
	| EXCEPT
	| EXCLUDE
	| EXISTS
	| EXTRACT
	| FALSE
	| FETCH
	| FOLLOWING
	| FOR
	| FROM
	| FULL
	| GROUP
	| GROUPING
	| GROUPS
	| HASH
	| HAVING
	| IF
	| IGNORE
	| IN
	| INNER
	| INTERSECT
	| INTERVAL
	| INTO
	| IS
	| JOIN
	| LATERAL
	| LEFT
	| LIKE
	| LIMIT
	| LOOKUP
	| MERGE
	| NATURAL
	| NEW
	| NO
	| NOT
	| S_NULL
	| NULLS
	| OF
	| OFFSET
	| ON
	| OR
	| ORDER
	| ORDINAL
	| OUTER
	| OVER
	| PARTITION
	| PRECEDING
	| PROTO
	| RANGE
	| RECURSIVE
	| REPLACE
	| RESPECT
	| RIGHT
	| ROLLUP
	| ROWS
	| SAFE_OFFSET
	| SAFE_ORDINAL
	| SELECT
	| SET
	| SOME
	| SSTRUCT
	| SYSTEM
	| TABLESAMPLE
	| THEN
	| TIME
	| TO
	| TREAT
	| TRUE
	| UNBOUNDED
	| UNION
	| UNNEST
	| USING
	| WHEN
	| WHERE
	| WINDOW
	| WITH
	| WITHIN;