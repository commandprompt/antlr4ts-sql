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

lexer grammar BigQueryLexer;

// ARRAY and STRUCT included in the list of BQ keywords instead of here
QUOTE: '\'';
DQOUTE: '"';
SQUARE_BRACKET_ID: '[' (~']' | ']' ']')* ']';
BK_QUOTE: '`';

EQUAL: '=';
NOT_EQUAL: '<>' | '!=';

GREATER: '>';
LESS: '<';
LESS_LESS: '<<';
GREATER_GREATER: '>>';
LEQ: '<=';
GEQ: '>=';
EXCLAMATION: '!';

PLUS_ASSIGN: '+=';
MINUS_ASSIGN: '-=';
MULT_ASSIGN: '*=';
DIV_ASSIGN: '/=';
MOD_ASSIGN: '%=';
AND_ASSIGN: '&=';
XOR_ASSIGN: '^=';
OR_ASSIGN: '|=';

DOUBLE_BAR: '||';
DOT: '.';
UNDERLINE: '_';
SHARP: '#';
DOLLAR: '$';
LR_BRACKET: '(';
RR_BRACKET: ')';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
COMMA: ',';
SEMI: ';';
COLON: ':';
STAR: '*';
DIVIDE: '/';
MODULE: '%';
PLUS: '+';
MINUS: '-';
BIT_NOT: '~';
BIT_OR: '|';
BIT_AND: '&';
BIT_XOR: '^';

/*
 * BigQuery Keywords: Based off the list of BigQuery Reserved Keywords at:
 * https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical
 */
ALL: A L L;
AND: A N D;
ANY: A N Y;
ARRAY: A R R A Y;
AS: A S;
ASC: A S C;
ASSERT_ROWS_MODIFIED:
	A S S E R T [_] R O W S [_] M O D I F I E D;
AT: A T;
BETWEEN: B E T W E E N;
BY: B Y;
CASE: C A S E;
CAST: C A S T;
COLLATE: C O L L A T E;
CONTAINS: C O N T A I N S;
CREATE: C R E A T E;
CROSS: C R O S S;
CUBE: C U B E;
CURRENT: C U R R E N T;
DEFAULT: D E F A U L T;
DEFINE: D E F I N E;
DESC: D E S C;
DISTINCT: D I S T I N C T;
ELSE: E L S E;
END: E N D;
ENUM: E N U M;
ESCAPE: E S C A P E;
EXCEPT: E X C E P T;
EXCLUDE: E X C L U D E;
EXISTS: E X I S T S;
EXTRACT: E X T R A C T;
FALSE: F A L S E;
FETCH: F E T C H;
FOLLOWING: F O L L O W I N G;
FOR: F O R;
FROM: F R O M;
FULL: F U L L;
GROUP: G R O U P;
GROUPING: G R O U P I N G;
GROUPS: G R O U P S;
HASH: H A S H;
HAVING: H A V I N G;
IF: I F;
IGNORE: I G N O R E;
IN: I N;
INNER: I N N E R;
INTERSECT: I N T E R S E C T;
INTERVAL: I N T E R V A L;
INTO: I N T O;
INT: ('+' | '-')? ('0x')? DIGITS;
FLOAT: ('+' | '-')? DIGITS '.' DIGITS? ('e' ('+' | '-') DIGITS)?
	| DIGITS? '.' DIGITS ('e' ('+' | '-') DIGITS)?
	| DIGITS 'e' ('+' | '-')? DIGITS;
DIGITS: DIGIT+;
IS: I S;
JOIN: J O I N;
LATERAL: L A T E R A L;
LEFT: L E F T;
LIKE: L I K E;
LIMIT: L I M I T;
LOOKUP: L O O K U P;
MERGE: M E R G E;
NATURAL: N A T U R A L;
NEW: N E W;
NO: N O;
NOT: N O T;
S_NULL: N U L L;
NULLS: N U L L S;
OF: O F;
OFFSET: O F F S E T;
ON: O N;
OR: O R;
ORDER: O R D E R;
ORDINAL: O R D I N A L;
OUTER: O U T E R;
OVER: O V E R;
PARTITION: P A R T I T I O N;
PRECEDING: P R E C E D I N G;
PROTO: P R O T O;
RANGE: R A N G E;
RECURSIVE: R E C U R S I V E;
REPLACE: R E P L A C E;
RESPECT: R E S P E C T;
RIGHT: R I G H T;
ROLLUP: R O L L U P;
ROWS: R O W S;
SAFE_OFFSET: S A F E '_' O F F S E T;
SAFE_ORDINAL: S A F E '_' O R D I N A L;
SELECT: S E L E C T;
SET: S E T;
SOME: S O M E;
SSTRUCT: S T R U C T;
SYSTEM: S Y S T E M;
TABLESAMPLE: T A B L E S A M P L E;
THEN: T H E N;
TIME: T I M E;
TO: T O;
TREAT: T R E A T;
TRUE: T R U E;
UNBOUNDED: U N B O U N D E D;
UNION: U N I O N;
UNNEST: U N N E S T;
USING: U S I N G;
WHEN: W H E N;
WHERE: W H E R E;
WINDOW: W I N D O W;
WITH: W I T H;
WITHIN: W I T H I N;

// Whitespace
WS: [ \t\r\n]+ -> skip;
// Comments
CMT: '--' ~[\r\n]* -> skip;
M_CMT: '/*' .*? '*/' -> skip;
// Quoted String
QUOTED_STRING:
	'"' (~'"' | '\\' '"')* '"'
	| '\'' (~'\'' | '\\' '\'')* '\'';
TRIPLE_QUOTED_STRING:
	QUOTE QUOTE QUOTE .*? ~'\\' QUOTE QUOTE QUOTE
	| DQOUTE DQOUTE DQOUTE .*? ~'\\' DQOUTE DQOUTE DQOUTE;
RAW_STRING: R (QUOTED_STRING | TRIPLE_QUOTED_STRING);
BYTE_STRING: B (QUOTED_STRING | TRIPLE_QUOTED_STRING);
RAW_BYTE_STRING: RB (QUOTED_STRING | TRIPLE_QUOTED_STRING);
// ID regex
ID: [a-zA-Z_][-A-Za-z_0-9]*;
RB: [rR][bB] | [bB][rR];
fragment DIGIT: [0-9];
// Fragments for each letter of the alphabet. This is necessary because SQL keywords are case-insensitive.
fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];