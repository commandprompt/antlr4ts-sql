"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlSQLGrammar = exports.PLpgSQLGrammar = exports.MySQLGrammar = void 0;
__exportStar(require("antlr4ts"), exports);
__exportStar(require("antlr4ts/atn"), exports);
__exportStar(require("antlr4ts/dfa"), exports);
__exportStar(require("antlr4ts/misc"), exports);
__exportStar(require("antlr4ts/tree"), exports);
__exportStar(require("antlr4ts/tree/pattern"), exports);
__exportStar(require("antlr4ts/tree/xpath"), exports);
__exportStar(require("./src/antlr4tsSQL"), exports);
__exportStar(require("./src/models/SQLDialect"), exports);
__exportStar(require("./src/models/CaseChangingStream"), exports);
exports.MySQLGrammar = __importStar(require("./src/grammar-output/mysql/MultiQueryMySQLParser"));
__exportStar(require("./src/grammar-output/mysql/MultiQueryMySQLParserListener"), exports);
__exportStar(require("./src/grammar-output/mysql/MySQLLexer"), exports);
__exportStar(require("./src/grammar-output/mysql/common"), exports);
exports.PLpgSQLGrammar = __importStar(require("./src/grammar-output/plpgsql/PLpgSQLParser"));
__exportStar(require("./src/grammar-output/plpgsql/PLpgSQLParserListener"), exports);
__exportStar(require("./src/grammar-output/plpgsql/PLpgSQLLexer"), exports);
exports.PlSQLGrammar = __importStar(require("./src/grammar-output/plsql/PlSqlParser"));
__exportStar(require("./src/grammar-output/plsql/PlSqlParserListener"), exports);
__exportStar(require("./src/grammar-output/plsql/PlSqlLexer"), exports);
//# sourceMappingURL=index.js.map