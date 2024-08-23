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
ABORT             : [aA] [bB] [oO] [rR] [tT];
ACTION            : [aA] [cC] [tT] [iI] [oO] [nN];
ADD               : [aA] [dD] [dD];
AFTER             : [aA] [fF] [tT] [eE] [rR];
ALL               : [aA] [lL] [lL];
ALTER             : [aA] [lL] [tT] [eE] [rR];
ANALYZE           : [aA] [nN] [aA] [lL] [yY] [zZ] [eE];
AND               : [aA] [nN] [dD];
AS                : [aA] [sS];
ASC               : [aA] [sS] [cC];
ATTACH            : [aA] [tT] [tT] [aA] [cC] [hH];
AUTOINCREMENT     : [aA] [uU] [tT] [oO] [iI] [nN] [cC] [rR] [eE] [mM] [eE] [nN] [tT];
BEFORE            : [bB] [eE] [fF] [oO] [rR] [eE];
BEGIN             : [bB] [eE] [gG] [iI] [nN];
BETWEEN           : [bB] [eE] [tT] [wW] [eE] [eE] [nN];
BY                : [bB] [yY];
CASCADE           : [cC] [aA] [sS] [cC] [aA] [dD] [eE];
CASE              : [cC] [aA] [sS] [eE];
CAST              : [cC] [aA] [sS] [tT];
CHECK             : [cC] [hH] [eE] [cC] [kK];
COLLATE           : [cC] [oO] [lL] [lL] [aA] [tT] [eE];
COLUMN            : [cC] [oO] [lL] [uU] [mM] [nN];
COMMIT            : [cC] [oO] [mM] [mM] [iI] [tT];
CONFLICT          : [cC] [oO] [nN] [fF] [lL] [iI] [cC] [tT];
CONSTRAINT        : [cC] [oO] [nN] [sS] [tT] [rR] [aA] [iI] [nN] [tT];
CREATE            : [cC] [rR] [eE] [aA] [tT] [eE];
CROSS             : [cC] [rR] [oO] [sS] [sS];
CURRENT_DATE      : [cC] [uU] [rR] [rR] [eE] [nN] [tT] [_] [dD] [aA] [tT] [eE];
CURRENT_TIME      : [cC] [uU] [rR] [rR] [eE] [nN] [tT] [_] [tT] [iI] [mM] [eE];
CURRENT_TIMESTAMP : [cC] [uU] [rR] [rR] [eE] [nN] [tT] [_] [tT] [iI] [mM] [eE] [sS] [tT] [aA] [mM] [pP];
DATABASE          : [dD] [aA] [tT] [aA] [bB] [aA] [sS] [eE];
DEFAULT           : [dD] [eE] [fF] [aA] [uU] [lL] [tT];
DEFERRABLE        : [dD] [eE] [fF] [eE] [rR] [rR] [aA] [bB] [lL] [eE];
DEFERRED          : [dD] [eE] [fF] [eE] [rR] [rR] [eE] [dD];
DELETE            : [dD] [eE] [lL] [eE] [tT] [eE];
DESC              : [dD] [eE] [sS] [cC];
DETACH            : [dD] [eE] [tT] [aA] [cC] [hH];
DISTINCT          : [dD] [iI] [sS] [tT] [iI] [nN] [cC] [tT];
DROP              : [dD] [rR] [oO] [pP];
EACH              : [eE] [aA] [cC] [hH];
ELSE              : [eE] [lL] [sS] [eE];
END               : [eE] [nN] [dD];
ESCAPE            : [eE] [sS] [cC] [aA] [pP] [eE];
EXCEPT            : [eE] [xX] [cC] [eE] [pP] [tT];
EXCLUSIVE         : [eE] [xX] [cC] [lL] [uU] [sS] [iI] [vV] [eE];
EXISTS            : [eE] [xX] [iI] [sS] [tT] [sS];
EXPLAIN           : [eE] [xX] [pP] [lL] [aA] [iI] [nN];
FAIL              : [fF] [aA] [iI] [lL];
FOR               : [fF] [oO] [rR];
FOREIGN           : [fF] [oO] [rR] [eE] [iI] [gG] [nN];
FROM              : [fF] [rR] [oO] [mM];
FULL              : [fF] [uU] [lL] [lL];
GLOB              : [gG] [lL] [oO] [bB];
GROUP             : [gG] [rR] [oO] [uU] [pP];
HAVING            : [hH] [aA] [vV] [iI] [nN] [gG];
IF                : [iI] [fF];
IGNORE            : [iI] [gG] [nN] [oO] [rR] [eE];
IMMEDIATE         : [iI] [mM] [mM] [eE] [dD] [iI] [aA] [tT] [eE];
IN                : [iI] [nN];
INDEX             : [iI] [nN] [dD] [eE] [xX];
INDEXED           : [iI] [nN] [dD] [eE] [xX] [eE] [dD];
INITIALLY         : [iI] [nN] [iI] [tT] [iI] [aA] [lL] [lL] [yY];
INNER             : [iI] [nN] [nN] [eE] [rR];
INSERT            : [iI] [nN] [sS] [eE] [rR] [tT];
INSTEAD           : [iI] [nN] [sS] [tT] [eE] [aA] [dD];
INTERSECT         : [iI] [nN] [tT] [eE] [rR] [sS] [eE] [cC] [tT];
INTO              : [iI] [nN] [tT] [oO];
IS                : [iI] [sS];
ISNULL            : [iI] [sS] [nN] [uU] [lL] [lL];
JOIN              : [jJ] [oO] [iI] [nN];
KEY               : [kK] [eE] [yY];
LEFT              : [lL] [eE] [fF] [tT];
LIKE              : [lL] [iI] [kK] [eE];
LIMIT             : [lL] [iI] [mM] [iI] [tT];
MATCH             : [mM] [aA] [tT] [cC] [hH];
NATURAL           : [nN] [aA] [tT] [uU] [rR] [aA] [lL];
NO                : [nN] [oO];
NOT               : [nN] [oO] [tT];
NOTNULL           : [nN] [oO] [tT] [nN] [uU] [lL] [lL];
NULL              : [nN] [uU] [lL] [lL];
OF                : [oO] [fF];
OFFSET            : [oO] [fF] [fF] [sS] [eE] [tT];
ON                : [oO] [nN];
OR                : [oO] [rR];
ORDER             : [oO] [rR] [dD] [eE] [rR];
OUTER             : [oO] [uU] [tT] [eE] [rR];
PLAN              : [pP] [lL] [aA] [nN];
PRAGMA            : [pP] [rR] [aA] [gG] [mM] [aA];
PRIMARY           : [pP] [rR] [iI] [mM] [aA] [rR] [yY];
QUERY             : [qQ] [uU] [eE] [rR] [yY];
RAISE             : [rR] [aA] [iI] [sS] [eE];
RECURSIVE         : [rR] [eE] [cC] [uU] [rR] [sS] [iI] [vV] [eE];
REFERENCES        : [rR] [eE] [fF] [eE] [rR] [eE] [nN] [cC] [eE] [sS];
REGEXP            : [rR] [eE] [gG] [eE] [xX] [pP];
REINDEX           : [rR] [eE] [iI] [nN] [dD] [eE] [xX];
RELEASE           : [rR] [eE] [lL] [eE] [aA] [sS] [eE];
RENAME            : [rR] [eE] [nN] [aA] [mM] [eE];
REPLACE           : [rR] [eE] [pP] [lL] [aA] [cC] [eE];
RESTRICT          : [rR] [eE] [sS] [tT] [rR] [iI] [cC] [tT];
RETURNING         : [rR] [eE] [tT] [uU] [rR] [nN] [iI] [nN] [gG];
RIGHT             : [rR] [iI] [gG] [hH] [tT];
ROLLBACK          : [rR] [oO] [lL] [lL] [bB] [aA] [cC] [kK];
ROW               : [rR] [oO] [wW];
ROWS              : [rR] [oO] [wW] [sS];
SAVEPOINT         : [sS] [aA] [vV] [eE] [pP] [oO] [iI] [nN] [tT];
SELECT            : [sS] [eE] [lL] [eE] [cC] [tT];
SET               : [sS] [eE] [tT];
TABLE             : [tT] [aA] [bB] [lL] [eE];
TEMP              : [tT] [eE] [mM] [pP];
TEMPORARY         : [tT] [eE] [mM] [pP] [oO] [rR] [aA] [rR] [yY];
THEN              : [tT] [hH] [eE] [nN];
TO                : [tT] [oO];
TRANSACTION       : [tT] [rR] [aA] [nN] [sS] [aA] [cC] [tT] [iI] [oO] [nN];
TRIGGER           : [tT] [rR] [iI] [gG] [gG] [eE] [rR];
UNION             : [uU] [nN] [iI] [oO] [nN];
UNIQUE            : [uU] [nN] [iI] [qQ] [uU] [eE];
UPDATE            : [uU] [pP] [dD] [aA] [tT] [eE];
USING             : [uU] [sS] [iI] [nN] [gG];
VACUUM            : [vV] [aA] [cC] [uU] [uU] [mM];
VALUES            : [vV] [aA] [lL] [uU] [eE] [sS];
VIEW              : [vV] [iI] [eE] [wW];
VIRTUAL           : [vV] [iI] [rR] [tT] [uU] [aA] [lL];
WHEN              : [wW] [hH] [eE] [nN];
WHERE             : [wW] [hH] [eE] [rR] [eE];
WITH              : [wW] [iI] [tT] [hH];
WITHOUT           : [wW] [iI] [tT] [hH] [oO] [uU] [tT];
FIRST_VALUE       : [fF] [iI] [rR] [sS] [tT] [_] [vV] [aA] [lL] [uU] [eE];
OVER              : [oO] [vV] [eE] [rR];
PARTITION         : [pP] [aA] [rR] [tT] [iI] [tT] [iI] [oO] [nN];
RANGE             : [rR] [aA] [nN] [gG] [eE];
PRECEDING         : [pP] [rR] [eE] [cC] [eE] [dD] [iI] [nN] [gG];
UNBOUNDED         : [uU] [nN] [bB] [oO] [uU] [nN] [dD] [eE] [dD];
CURRENT           : [cC] [uU] [rR] [rR] [eE] [nN] [tT];
FOLLOWING         : [fF] [oO] [lL] [lL] [oO] [wW] [iI] [nN] [gG];
CUME_DIST         : [cC] [uU] [mM] [eE] [_] [dD] [iI] [sS] [tT];
DENSE_RANK        : [dD] [eE] [nN] [sS] [eE] [_] [rR] [aA] [nN] [kK];
LAG               : [lL] [aA] [gG];
LAST_VALUE        : [lL] [aA] [sS] [tT] [_] [vV] [aA] [lL] [uU] [eE];
LEAD              : [lL] [eE] [aA] [dD];
NTH_VALUE         : [nN] [tT] [hH] [_] [vV] [aA] [lL] [uU] [eE];
NTILE             : [nN] [tT] [iI] [lL] [eE];
PERCENT_RANK      : [pP] [eE] [rR] [cC] [eE] [nN] [tT] [_] [rR] [aA] [nN] [kK];
RANK              : [rR] [aA] [nN] [kK];
ROW_NUMBER        : [rR] [oO] [wW] [_] [nN] [uU] [mM] [bB] [eE] [rR];
GENERATED         : [gG] [eE] [nN] [eE] [rR] [aA] [tT] [eE] [dD];
ALWAYS            : [aA] [lL] [wW] [aA] [yY] [sS];
STORED            : [sS] [tT] [oO] [rR] [eE] [dD];
TRUE              : [tT] [rR] [uU] [eE];
FALSE             : [fF] [aA] [lL] [sS] [eE];
WINDOW            : [wW] [iI] [nN] [dD] [oO] [wW];
NULLS             : [nN] [uU] [lL] [lL] [sS];
FIRST             : [fF] [iI] [rR] [sS] [tT];
LAST              : [lL] [aA] [sS] [tT];
FILTER            : [fF] [iI] [lL] [tT] [eE] [rR] [sS];
GROUPS            : [gG] [rR] [oO] [uU] [pP] [sS];
EXCLUDE           : [eE] [xX] [cC] [lL] [uU] [dD] [eE];
TIES              : [tT] [iI] [eE] [sS];
OTHERS            : [oO] [tT] [hH] [eE] [rR] [sS];
DO                : [dD] [oO];
NOTHING           : [nN] [oO] [tT] [hH] [iI] [nN] [gG];

IDENTIFIER:
    '"' (~'"' | '""')* '"'
    | '`' (~'`' | '``')* '`'
    | '[' ~']'* ']'
    | [a-zA-Z_\u007F-\uFFFF] [a-zA-Z_0-9\u007F-\uFFFF]*
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
