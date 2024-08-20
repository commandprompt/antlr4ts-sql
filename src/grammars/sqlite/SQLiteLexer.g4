/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 by Martin Mirchev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Project : sqlite-parser; an ANTLR4 grammar for SQLite https://github.com/bkiers/sqlite-parser
 * Developed by : Bart Kiers, bart@big-o.nl
 */

// $antlr-format alignTrailingComments on, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments off, useTab off
// $antlr-format allowShortRulesOnASingleLine on, alignSemicolons ownLine

lexer grammar SQLiteLexer;

SCOL      : ';';
DOT       : '.';
OPEN_PAR  : '(';
CLOSE_PAR : ')';
COMMA     : ',';
ASSIGN    : '=';
STAR      : '*';
PLUS      : '+';
MINUS     : '-';
TILDE     : '~';
PIPE2     : '||';
DIV       : '/';
MOD       : '%';
LT2       : '<<';
GT2       : '>>';
AMP       : '&';
PIPE      : '|';
LT        : '<';
LT_EQ     : '<=';
GT        : '>';
GT_EQ     : '>=';
EQ        : '==';
NOT_EQ1   : '!=';
NOT_EQ2   : '<>';

// http://www.sqlite.org/lang_keywords.html
ABORT_             : [aA] [bB] [oO] [rR] [tT];
ACTION_            : [aA] [cC] [tT] [iI] [oO] [nN];
ADD_               : [aA] [dD] [dD];
AFTER_             : [aA] [fF] [tT] [eE] [rR];
ALL_               : [aA] [lL] [lL];
ALTER_             : [aA] [lL] [tT] [eE] [rR];
ANALYZE_           : [aA] [nN] [aA] [lL] [yY] [zZ] [eE];
AND_               : [aA] [nN] [dD];
AS_                : [aA] [sS];
ASC_               : [aA] [sS] [cC];
ATTACH_            : [aA] [tT] [tT] [aA] [cC] [hH];
AUTOINCREMENT_     : [aA] [uU] [tT] [oO] [iI] [nN] [cC] [rR] [eE] [mM] [eE] [nN] [tT];
BEFORE_            : [bB] [eE] [fF] [oO] [rR] [eE];
BEGIN_             : [bB] [eE] [gG] [iI] [nN];
BETWEEN_           : [bB] [eE] [tT] [wW] [eE] [eE] [nN];
BY_                : [bB] [yY];
CASCADE_           : [cC] [aA] [sS] [cC] [aA] [dD] [eE];
CASE_              : [cC] [aA] [sS] [eE];
CAST_              : [cC] [aA] [sS] [tT];
CHECK_             : [cC] [hH] [eE] [cC] [kK];
COLLATE_           : [cC] [oO] [lL] [lL] [aA] [tT] [eE];
COLUMN_            : [cC] [oO] [lL] [uU] [mM] [nN];
COMMIT_            : [cC] [oO] [mM] [mM] [iI] [tT];
CONFLICT_          : [cC] [oO] [nN] [fF] [lL] [iI] [cC] [tT];
CONSTRAINT_        : [cC] [oO] [nN] [sS] [tT] [rR] [aA] [iI] [nN] [tT];
CREATE_            : [cC] [rR] [eE] [aA] [tT] [eE];
CROSS_             : [cC] [rR] [oO] [sS] [sS];
CURRENT_DATE_      : [cC] [uU] [rR] [rR] [eE] [nN] [tT] [_] [dD] [aA] [tT] [eE];
CURRENT_TIME_      : [cC] [uU] [rR] [rR] [eE] [nN] [tT] [_] [tT] [iI] [mM] [eE];
CURRENT_TIMESTAMP_ : [cC] [uU] [rR] [rR] [eE] [nN] [tT] [_] [tT] [iI] [mM] [eE] [sS] [tT] [aA] [mM] [pP];
DATABASE_          : [dD] [aA] [tT] [aA] [bB] [aA] [sS] [eE];
DEFAULT_           : [dD] [eE] [fF] [aA] [uU] [lL] [tT];
DEFERRABLE_        : [dD] [eE] [fF] [eE] [rR] [rR] [aA] [bB] [lL] [eE];
DEFERRED_          : [dD] [eE] [fF] [eE] [rR] [rR] [eE] [dD];
DELETE_            : [dD] [eE] [lL] [eE] [tT] [eE];
DESC_              : [dD] [eE] [sS] [cC];
DETACH_            : [dD] [eE] [tT] [aA] [cC] [hH];
DISTINCT_          : [dD] [iI] [sS] [tT] [iI] [nN] [cC] [tT];
DROP_              : [dD] [rR] [oO] [pP];
EACH_              : [eE] [aA] [cC] [hH];
ELSE_              : [eE] [lL] [sS] [eE];
END_               : [eE] [nN] [dD];
ESCAPE_            : [eE] [sS] [cC] [aA] [pP] [eE];
EXCEPT_            : [eE] [xX] [cC] [eE] [pP] [tT];
EXCLUSIVE_         : [eE] [xX] [cC] [lL] [uU] [sS] [iI] [vV] [eE];
EXISTS_            : [eE] [xX] [iI] [sS] [tT] [sS];
EXPLAIN_           : [eE] [xX] [pP] [lL] [aA] [iI] [nN];
FAIL_              : [fF] [aA] [iI] [lL];
FOR_               : [fF] [oO] [rR];
FOREIGN_           : [fF] [oO] [rR] [eE] [iI] [gG] [nN];
FROM_              : [fF] [rR] [oO] [mM];
FULL_              : [fF] [uU] [lL] [lL];
GLOB_              : [gG] [lL] [oO] [bB];
GROUP_             : [gG] [rR] [oO] [uU] [pP];
HAVING_            : [hH] [aA] [vV] [iI] [nN] [gG];
IF_                : [iI] [fF];
IGNORE_            : [iI] [gG] [nN] [oO] [rR] [eE];
IMMEDIATE_         : [iI] [mM] [mM] [eE] [dD] [iI] [aA] [tT] [eE];
IN_                : [iI] [nN];
INDEX_             : [iI] [nN] [dD] [eE] [xX];
INDEXED_           : [iI] [nN] [dD] [eE] [xX] [eE] [dD];
INITIALLY_         : [iI] [nN] [iI] [tT] [iI] [aA] [lL] [lL] [yY];
INNER_             : [iI] [nN] [nN] [eE] [rR];
INSERT_            : [iI] [nN] [sS] [eE] [rR] [tT];
INSTEAD_           : [iI] [nN] [sS] [tT] [eE] [aA] [dD];
INTERSECT_         : [iI] [nN] [tT] [eE] [rR] [sS] [eE] [cC] [tT];
INTO_              : [iI] [nN] [tT] [oO];
IS_                : [iI] [sS];
ISNULL_            : [iI] [sS] [nN] [uU] [lL] [lL];
JOIN_              : [jJ] [oO] [iI] [nN];
KEY_               : [kK] [eE] [yY];
LEFT_              : [lL] [eE] [fF] [tT];
LIKE_              : [lL] [iI] [kK] [eE];
LIMIT_             : [lL] [iI] [mM] [iI] [tT];
MATCH_             : [mM] [aA] [tT] [cC] [hH];
NATURAL_           : [nN] [aA] [tT] [uU] [rR] [aA] [lL];
NO_                : [nN] [oO];
NOT_               : [nN] [oO] [tT];
NOTNULL_           : [nN] [oO] [tT] [nN] [uU] [lL] [lL];
NULL_              : [nN] [uU] [lL] [lL];
OF_                : [oO] [fF];
OFFSET_            : [oO] [fF] [fF] [sS] [eE] [tT];
ON_                : [oO] [nN];
OR_                : [oO] [rR];
ORDER_             : [oO] [rR] [dD] [eE] [rR];
OUTER_             : [oO] [uU] [tT] [eE] [rR];
PLAN_              : [pP] [lL] [aA] [nN];
PRAGMA_            : [pP] [rR] [aA] [gG] [mM] [aA];
PRIMARY_           : [pP] [rR] [iI] [mM] [aA] [rR] [yY];
QUERY_             : [qQ] [uU] [eE] [rR] [yY];
RAISE_             : [rR] [aA] [iI] [sS] [eE];
RECURSIVE_         : [rR] [eE] [cC] [uU] [rR] [sS] [iI] [vV] [eE];
REFERENCES_        : [rR] [eE] [fF] [eE] [rR] [eE] [nN] [cC] [eE] [sS];
REGEXP_            : [rR] [eE] [gG] [eE] [xX] [pP];
REINDEX_           : [rR] [eE] [iI] [nN] [dD] [eE] [xX];
RELEASE_           : [rR] [eE] [lL] [eE] [aA] [sS] [eE];
RENAME_            : [rR] [eE] [nN] [aA] [mM] [eE];
REPLACE_           : [rR] [eE] [pP] [lL] [aA] [cC] [eE];
RESTRICT_          : [rR] [eE] [sS] [tT] [rR] [iI] [cC] [tT];
RETURNING_         : [rR] [eE] [tT] [uU] [rR] [nN] [iI] [nN] [gG];
RIGHT_             : [rR] [iI] [gG] [hH] [tT];
ROLLBACK_          : [rR] [oO] [lL] [lL] [bB] [aA] [cC] [kK];
ROW_               : [rR] [oO] [wW];
ROWS_              : [rR] [oO] [wW] [sS];
SAVEPOINT_         : [sS] [aA] [vV] [eE] [pP] [oO] [iI] [nN] [tT];
SELECT_            : [sS] [eE] [lL] [eE] [cC] [tT];
SET_               : [sS] [eE] [tT];
TABLE_             : [tT] [aA] [bB] [lL] [eE];
TEMP_              : [tT] [eE] [mM] [pP];
TEMPORARY_         : [tT] [eE] [mM] [pP] [oO] [rR] [aA] [rR] [yY];
THEN_              : [tT] [hH] [eE] [nN];
TO_                : [tT] [oO];
TRANSACTION_       : [tT] [rR] [aA] [nN] [sS] [aA] [cC] [tT] [iI] [oO] [nN];
TRIGGER_           : [tT] [rR] [iI] [gG] [gG] [eE] [rR];
UNION_             : [uU] [nN] [iI] [oO] [nN];
UNIQUE_            : [uU] [nN] [iI] [qQ] [uU] [eE];
UPDATE_            : [uU] [pP] [dD] [aA] [tT] [eE];
USING_             : [uU] [sS] [iI] [nN] [gG];
VACUUM_            : [vV] [aA] [cC] [uU] [uU] [mM];
VALUES_            : [vV] [aA] [lL] [uU] [eE] [sS];
VIEW_              : [vV] [iI] [eE] [wW];
VIRTUAL_           : [vV] [iI] [rR] [tT] [uU] [aA] [lL];
WHEN_              : [wW] [hH] [eE] [nN];
WHERE_             : [wW] [hH] [eE] [rR] [eE];
WITH_              : [wW] [iI] [tT] [hH];
WITHOUT_           : [wW] [iI] [tT] [hH] [oO] [uU] [tT];
FIRST_VALUE_       : [fF] [iI] [rR] [sS] [tT] [_] [vV] [aA] [lL] [uU] [eE];
OVER_              : [oO] [vV] [eE] [rR];
PARTITION_         : [pP] [aA] [rR] [tT] [iI] [tT] [iI] [oO] [nN];
RANGE_             : [rR] [aA] [nN] [gG] [eE];
PRECEDING_         : [pP] [rR] [eE] [cC] [eE] [dD] [iI] [nN] [gG];
UNBOUNDED_         : [uU] [nN] [bB] [oO] [uU] [nN] [dD] [eE] [dD];
CURRENT_           : [cC] [uU] [rR] [rR] [eE] [nN] [tT];
FOLLOWING_         : [fF] [oO] [lL] [lL] [oO] [wW] [iI] [nN] [gG];
CUME_DIST_         : [cC] [uU] [mM] [eE] [_] [dD] [iI] [sS] [tT];
DENSE_RANK_        : [dD] [eE] [nN] [sS] [eE] [_] [rR] [aA] [nN] [kK];
LAG_               : [lL] [aA] [gG];
LAST_VALUE_        : [lL] [aA] [sS] [tT] [_] [vV] [aA] [lL] [uU] [eE];
LEAD_              : [lL] [eE] [aA] [dD];
NTH_VALUE_         : [nN] [tT] [hH] [_] [vV] [aA] [lL] [uU] [eE];
NTILE_             : [nN] [tT] [iI] [lL] [eE];
PERCENT_RANK_      : [pP] [eE] [rR] [cC] [eE] [nN] [tT] [_] [rR] [aA] [nN] [kK];
RANK_              : [rR] [aA] [nN] [kK];
ROW_NUMBER_        : [rR] [oO] [wW] [_] [nN] [uU] [mM] [bB] [eE] [rR];
GENERATED_         : [gG] [eE] [nN] [eE] [rR] [aA] [tT] [eE] [dD];
ALWAYS_            : [aA] [lL] [wW] [aA] [yY] [sS];
STORED_            : [sS] [tT] [oO] [rR] [eE] [dD];
TRUE_              : [tT] [rR] [uU] [eE];
FALSE_             : [fF] [aA] [lL] [sS] [eE];
WINDOW_            : [wW] [iI] [nN] [dD] [oO] [wW];
NULLS_             : [nN] [uU] [lL] [lL] [sS];
FIRST_             : [fF] [iI] [rR] [sS] [tT];
LAST_              : [lL] [aA] [sS] [tT];
FILTER_            : [fF] [iI] [lL] [tT] [eE] [rR] [sS];
GROUPS_            : [gG] [rR] [oO] [uU] [pP] [sS];
EXCLUDE_           : [eE] [xX] [cC] [lL] [uU] [dD] [eE];
TIES_              : [tT] [iI] [eE] [sS];
OTHERS_            : [oO] [tT] [hH] [eE] [rR] [sS];
DO_                : [dD] [oO];
NOTHING_           : [nN] [oO] [tT] [hH] [iI] [nN] [gG];

IDENTIFIER:
    '"' (~'"' | '""')* '"'
    | '`' (~'`' | '``')* '`'
    | '[' ~']'* ']'
    | [A-Z_\u007F-\uFFFF] [A-Z_0-9\u007F-\uFFFF]*
;

NUMERIC_LITERAL: ((DIGIT+ ('.' DIGIT*)?) | ('.' DIGIT+)) ('E' [-+]? DIGIT+)? | '0x' HEX_DIGIT+;

BIND_PARAMETER: '?' DIGIT* | [:@$] IDENTIFIER;

STRING_LITERAL: '\'' ( ~'\'' | '\'\'')* '\'';

BLOB_LITERAL: 'X' STRING_LITERAL;

SINGLE_LINE_COMMENT: '--' ~[\r\n]* (('\r'? '\n') | EOF) -> channel(HIDDEN);

MULTILINE_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

SPACES: [ \u000B\t\r\n] -> channel(HIDDEN);

UNEXPECTED_CHAR: .;

fragment HEX_DIGIT : [0-9A-F];
fragment DIGIT     : [0-9];
