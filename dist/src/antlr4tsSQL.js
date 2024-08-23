"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.antlr4tsSQL = void 0;
const antlr4ts_1 = require("antlr4ts");
const CaseChangingStream_1 = require("./models/CaseChangingStream");
const SQLDialect_1 = require("./models/SQLDialect");
const MultiQueryMySQLParser_1 = require("./grammar-output/mysql/MultiQueryMySQLParser");
const MySQLLexer_1 = require("./grammar-output/mysql/MySQLLexer");
const PLpgSQLLexer_1 = require("./grammar-output/plpgsql/PLpgSQLLexer");
const PLpgSQLParser_1 = require("./grammar-output/plpgsql/PLpgSQLParser");
const PlSqlParser_1 = require("./grammar-output/plsql/PlSqlParser");
const PlSqlLexer_1 = require("./grammar-output/plsql/PlSqlLexer");
const SQLiteLexer_1 = require("./grammar-output/sqlite/SQLiteLexer");
const SQLiteParser_1 = require("./grammar-output/sqlite/SQLiteParser");
class antlr4tsSQL {
    constructor(dialect) {
        this.dialect = dialect;
    }
    getTokens(sqlScript, errorListeners) {
        const chars = new antlr4ts_1.ANTLRInputStream(sqlScript);
        const caseChangingCharStream = new CaseChangingStream_1.CaseChangingStream(chars, true);
        let lexer = null;
        if (this.dialect === SQLDialect_1.SQLDialect.PLSQL) {
            lexer = new PlSqlLexer_1.PlSqlLexer(caseChangingCharStream);
        }
        else if (this.dialect === SQLDialect_1.SQLDialect.PLpgSQL) {
            lexer = new PLpgSQLLexer_1.PLpgSQLLexer(chars);
        }
        else if (this.dialect === SQLDialect_1.SQLDialect.MYSQL) {
            lexer = new MySQLLexer_1.MySQLLexer(chars);
        }
        else if (this.dialect === SQLDialect_1.SQLDialect.SQLITE) {
            lexer = new SQLiteLexer_1.SQLiteLexer(chars);
        }
        if (errorListeners !== null && errorListeners !== undefined) {
            lexer.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
            for (const listener of errorListeners) {
                lexer.addErrorListener(listener);
            }
        }
        const tokens = new antlr4ts_1.CommonTokenStream(lexer);
        return tokens;
    }
    getParser(tokens, errorListeners) {
        let parser = null;
        if (this.dialect === SQLDialect_1.SQLDialect.PLSQL) {
            parser = new PlSqlParser_1.PlSqlParser(tokens);
        }
        else if (this.dialect === SQLDialect_1.SQLDialect.PLpgSQL) {
            parser = new PLpgSQLParser_1.PLpgSQLParser(tokens);
        }
        else if (this.dialect === SQLDialect_1.SQLDialect.MYSQL) {
            parser = new MultiQueryMySQLParser_1.MultiQueryMySQLParser(tokens);
        }
        else if (this.dialect === SQLDialect_1.SQLDialect.SQLITE) {
            parser = new SQLiteParser_1.SQLiteParser(tokens);
        }
        if (errorListeners !== null && errorListeners !== undefined) {
            parser.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
            for (const listener of errorListeners) {
                parser.addErrorListener(listener);
            }
        }
        return parser;
    }
    getParseTree(parser) {
        if (parser instanceof PlSqlParser_1.PlSqlParser) {
            return parser.sql_script();
        }
        else if (parser instanceof PLpgSQLParser_1.PLpgSQLParser) {
            return parser.sql();
        }
        else if (parser instanceof MultiQueryMySQLParser_1.MultiQueryMySQLParser) {
            return parser.sql_script();
        }
        else if (parser instanceof SQLiteParser_1.SQLiteParser) {
            return parser.parse();
        }
        return null;
    }
    /*** Convenience Methods ***/
    getParserFromSQL(sqlScript) {
        return this.getParser(this.getTokens(sqlScript));
    }
    getParseTreeFromSQL(sqlScript) {
        return this.getParseTree(this.getParserFromSQL(sqlScript));
    }
}
exports.antlr4tsSQL = antlr4tsSQL;
//# sourceMappingURL=antlr4tsSQL.js.map