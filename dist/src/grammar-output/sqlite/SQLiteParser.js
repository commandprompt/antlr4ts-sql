"use strict";
// Generated from src/grammars/sqlite/SQLiteParser.g4 by ANTLR 4.9.0-SNAPSHOT
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compound_select_stmtContext = exports.Simple_select_stmtContext = exports.Factored_select_stmtContext = exports.Select_coreContext = exports.Join_clauseContext = exports.Select_stmtContext = exports.Reindex_stmtContext = exports.Pragma_valueContext = exports.Pragma_stmtContext = exports.Upsert_clauseContext = exports.Returning_clauseContext = exports.Insert_stmtContext = exports.Values_clauseContext = exports.Value_rowContext = exports.Literal_valueContext = exports.Raise_functionContext = exports.ExprContext = exports.Drop_stmtContext = exports.Detach_stmtContext = exports.Delete_stmt_limitedContext = exports.Delete_stmtContext = exports.Common_table_expressionContext = exports.Recursive_cteContext = exports.Cte_table_nameContext = exports.With_clauseContext = exports.Create_virtual_table_stmtContext = exports.Create_view_stmtContext = exports.Create_trigger_stmtContext = exports.Conflict_clauseContext = exports.Foreign_key_clauseContext = exports.Table_constraintContext = exports.Signed_numberContext = exports.Column_constraintContext = exports.Type_nameContext = exports.Column_defContext = exports.Create_table_stmtContext = exports.Indexed_columnContext = exports.Create_index_stmtContext = exports.Release_stmtContext = exports.Savepoint_stmtContext = exports.Rollback_stmtContext = exports.Commit_stmtContext = exports.Begin_stmtContext = exports.Attach_stmtContext = exports.Analyze_stmtContext = exports.Alter_table_stmtContext = exports.Sql_stmtContext = exports.Sql_stmt_listContext = exports.ParseContext = exports.SQLiteParser = void 0;
exports.Trigger_nameContext = exports.Index_nameContext = exports.Foreign_tableContext = exports.Collation_nameContext = exports.Column_nameContext = exports.Table_or_index_nameContext = exports.Table_nameContext = exports.Schema_nameContext = exports.Function_nameContext = exports.NameContext = exports.KeywordContext = exports.Column_aliasContext = exports.Module_argumentContext = exports.Error_messageContext = exports.Unary_operatorContext = exports.Recursive_selectContext = exports.Initial_selectContext = exports.Expr_asc_descContext = exports.Order_by_expr_asc_descContext = exports.Order_by_exprContext = exports.Partition_byContext = exports.Default_valueContext = exports.OffsetContext = exports.Window_functionContext = exports.Frame_singleContext = exports.Frame_rightContext = exports.Frame_leftContext = exports.Asc_descContext = exports.Ordering_termContext = exports.Limit_stmtContext = exports.Order_by_stmtContext = exports.Common_table_stmtContext = exports.Window_function_invocationContext = exports.Aggregate_function_invocationContext = exports.Simple_function_invocationContext = exports.Frame_clauseContext = exports.Frame_specContext = exports.Over_clauseContext = exports.Window_defnContext = exports.Filter_clauseContext = exports.Vacuum_stmtContext = exports.Qualified_table_nameContext = exports.Update_stmt_limitedContext = exports.Column_name_listContext = exports.Update_stmtContext = exports.Compound_operatorContext = exports.Join_constraintContext = exports.Join_operatorContext = exports.Result_columnContext = exports.Table_or_subqueryContext = void 0;
exports.Any_nameContext = exports.Table_function_nameContext = exports.Aggregate_funcContext = exports.Simple_funcContext = exports.Base_window_nameContext = exports.FilenameContext = exports.AliasContext = exports.Window_nameContext = exports.Transaction_nameContext = exports.Table_aliasContext = exports.Savepoint_nameContext = exports.Pragma_nameContext = exports.Module_nameContext = exports.View_nameContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class SQLiteParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return SQLiteParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "SQLiteParser.g4"; }
    // @Override
    get ruleNames() { return SQLiteParser.ruleNames; }
    // @Override
    get serializedATN() { return SQLiteParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SQLiteParser._ATN, this);
    }
    // @RuleVersion(0)
    parse() {
        let _localctx = new ParseContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SQLiteParser.RULE_parse);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.SCOL) | (1 << SQLiteParser.ALTER) | (1 << SQLiteParser.ANALYZE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SQLiteParser.ATTACH - 35)) | (1 << (SQLiteParser.BEGIN - 35)) | (1 << (SQLiteParser.COMMIT - 35)) | (1 << (SQLiteParser.CREATE - 35)) | (1 << (SQLiteParser.DELETE - 35)) | (1 << (SQLiteParser.DETACH - 35)) | (1 << (SQLiteParser.DROP - 35)) | (1 << (SQLiteParser.END - 35)))) !== 0) || _la === SQLiteParser.EXPLAIN || _la === SQLiteParser.INSERT || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (SQLiteParser.PRAGMA - 112)) | (1 << (SQLiteParser.REINDEX - 112)) | (1 << (SQLiteParser.RELEASE - 112)) | (1 << (SQLiteParser.REPLACE - 112)) | (1 << (SQLiteParser.ROLLBACK - 112)) | (1 << (SQLiteParser.SAVEPOINT - 112)) | (1 << (SQLiteParser.SELECT - 112)) | (1 << (SQLiteParser.UPDATE - 112)) | (1 << (SQLiteParser.VACUUM - 112)))) !== 0) || _la === SQLiteParser.VALUES || _la === SQLiteParser.WITH) {
                    {
                        {
                            this.state = 226;
                            this.sql_stmt_list();
                        }
                    }
                    this.state = 231;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 232;
                this.match(SQLiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sql_stmt_list() {
        let _localctx = new Sql_stmt_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SQLiteParser.RULE_sql_stmt_list);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.SCOL) {
                    {
                        {
                            this.state = 234;
                            this.match(SQLiteParser.SCOL);
                        }
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 240;
                this.sql_stmt();
                this.state = 249;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 242;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 241;
                                            this.match(SQLiteParser.SCOL);
                                        }
                                    }
                                    this.state = 244;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === SQLiteParser.SCOL);
                                this.state = 246;
                                this.sql_stmt();
                            }
                        }
                    }
                    this.state = 251;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
                this.state = 255;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 252;
                                this.match(SQLiteParser.SCOL);
                            }
                        }
                    }
                    this.state = 257;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sql_stmt() {
        let _localctx = new Sql_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SQLiteParser.RULE_sql_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.EXPLAIN) {
                    {
                        this.state = 258;
                        this.match(SQLiteParser.EXPLAIN);
                        this.state = 261;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.QUERY) {
                            {
                                this.state = 259;
                                this.match(SQLiteParser.QUERY);
                                this.state = 260;
                                this.match(SQLiteParser.PLAN);
                            }
                        }
                    }
                }
                this.state = 289;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 265;
                            this.alter_table_stmt();
                        }
                        break;
                    case 2:
                        {
                            this.state = 266;
                            this.analyze_stmt();
                        }
                        break;
                    case 3:
                        {
                            this.state = 267;
                            this.attach_stmt();
                        }
                        break;
                    case 4:
                        {
                            this.state = 268;
                            this.begin_stmt();
                        }
                        break;
                    case 5:
                        {
                            this.state = 269;
                            this.commit_stmt();
                        }
                        break;
                    case 6:
                        {
                            this.state = 270;
                            this.create_index_stmt();
                        }
                        break;
                    case 7:
                        {
                            this.state = 271;
                            this.create_table_stmt();
                        }
                        break;
                    case 8:
                        {
                            this.state = 272;
                            this.create_trigger_stmt();
                        }
                        break;
                    case 9:
                        {
                            this.state = 273;
                            this.create_view_stmt();
                        }
                        break;
                    case 10:
                        {
                            this.state = 274;
                            this.create_virtual_table_stmt();
                        }
                        break;
                    case 11:
                        {
                            this.state = 275;
                            this.delete_stmt();
                        }
                        break;
                    case 12:
                        {
                            this.state = 276;
                            this.delete_stmt_limited();
                        }
                        break;
                    case 13:
                        {
                            this.state = 277;
                            this.detach_stmt();
                        }
                        break;
                    case 14:
                        {
                            this.state = 278;
                            this.drop_stmt();
                        }
                        break;
                    case 15:
                        {
                            this.state = 279;
                            this.insert_stmt();
                        }
                        break;
                    case 16:
                        {
                            this.state = 280;
                            this.pragma_stmt();
                        }
                        break;
                    case 17:
                        {
                            this.state = 281;
                            this.reindex_stmt();
                        }
                        break;
                    case 18:
                        {
                            this.state = 282;
                            this.release_stmt();
                        }
                        break;
                    case 19:
                        {
                            this.state = 283;
                            this.rollback_stmt();
                        }
                        break;
                    case 20:
                        {
                            this.state = 284;
                            this.savepoint_stmt();
                        }
                        break;
                    case 21:
                        {
                            this.state = 285;
                            this.select_stmt();
                        }
                        break;
                    case 22:
                        {
                            this.state = 286;
                            this.update_stmt();
                        }
                        break;
                    case 23:
                        {
                            this.state = 287;
                            this.update_stmt_limited();
                        }
                        break;
                    case 24:
                        {
                            this.state = 288;
                            this.vacuum_stmt();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alter_table_stmt() {
        let _localctx = new Alter_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SQLiteParser.RULE_alter_table_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.match(SQLiteParser.ALTER);
                this.state = 292;
                this.match(SQLiteParser.TABLE);
                this.state = 296;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 293;
                            this.schema_name();
                            this.state = 294;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 298;
                this.table_name();
                this.state = 321;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.RENAME:
                        {
                            this.state = 299;
                            this.match(SQLiteParser.RENAME);
                            this.state = 309;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 300;
                                        this.match(SQLiteParser.TO);
                                        this.state = 301;
                                        _localctx._new_table_name = this.table_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 303;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 302;
                                                    this.match(SQLiteParser.COLUMN);
                                                }
                                                break;
                                        }
                                        this.state = 305;
                                        _localctx._old_column_name = this.column_name();
                                        this.state = 306;
                                        this.match(SQLiteParser.TO);
                                        this.state = 307;
                                        _localctx._new_column_name = this.column_name();
                                    }
                                    break;
                            }
                        }
                        break;
                    case SQLiteParser.ADD:
                        {
                            this.state = 311;
                            this.match(SQLiteParser.ADD);
                            this.state = 313;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 312;
                                        this.match(SQLiteParser.COLUMN);
                                    }
                                    break;
                            }
                            this.state = 315;
                            this.column_def();
                        }
                        break;
                    case SQLiteParser.DROP:
                        {
                            this.state = 316;
                            this.match(SQLiteParser.DROP);
                            this.state = 318;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 317;
                                        this.match(SQLiteParser.COLUMN);
                                    }
                                    break;
                            }
                            this.state = 320;
                            this.column_name();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    analyze_stmt() {
        let _localctx = new Analyze_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SQLiteParser.RULE_analyze_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.match(SQLiteParser.ANALYZE);
                this.state = 331;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 324;
                            this.schema_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 328;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 325;
                                        this.schema_name();
                                        this.state = 326;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 330;
                            this.table_or_index_name();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    attach_stmt() {
        let _localctx = new Attach_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SQLiteParser.RULE_attach_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this.match(SQLiteParser.ATTACH);
                this.state = 335;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 334;
                            this.match(SQLiteParser.DATABASE);
                        }
                        break;
                }
                this.state = 337;
                this.expr(0);
                this.state = 338;
                this.match(SQLiteParser.AS);
                this.state = 339;
                this.schema_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    begin_stmt() {
        let _localctx = new Begin_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SQLiteParser.RULE_begin_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 341;
                this.match(SQLiteParser.BEGIN);
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SQLiteParser.DEFERRED - 58)) | (1 << (SQLiteParser.EXCLUSIVE - 58)) | (1 << (SQLiteParser.IMMEDIATE - 58)))) !== 0)) {
                    {
                        this.state = 342;
                        _la = this._input.LA(1);
                        if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (SQLiteParser.DEFERRED - 58)) | (1 << (SQLiteParser.EXCLUSIVE - 58)) | (1 << (SQLiteParser.IMMEDIATE - 58)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.TRANSACTION) {
                    {
                        this.state = 345;
                        this.match(SQLiteParser.TRANSACTION);
                        this.state = 347;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                            case 1:
                                {
                                    this.state = 346;
                                    this.transaction_name();
                                }
                                break;
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    commit_stmt() {
        let _localctx = new Commit_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SQLiteParser.RULE_commit_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.COMMIT || _la === SQLiteParser.END)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.TRANSACTION) {
                    {
                        this.state = 352;
                        this.match(SQLiteParser.TRANSACTION);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rollback_stmt() {
        let _localctx = new Rollback_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SQLiteParser.RULE_rollback_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 355;
                this.match(SQLiteParser.ROLLBACK);
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.TRANSACTION) {
                    {
                        this.state = 356;
                        this.match(SQLiteParser.TRANSACTION);
                    }
                }
                this.state = 364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.TO) {
                    {
                        this.state = 359;
                        this.match(SQLiteParser.TO);
                        this.state = 361;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                            case 1:
                                {
                                    this.state = 360;
                                    this.match(SQLiteParser.SAVEPOINT);
                                }
                                break;
                        }
                        this.state = 363;
                        this.savepoint_name();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    savepoint_stmt() {
        let _localctx = new Savepoint_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SQLiteParser.RULE_savepoint_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.match(SQLiteParser.SAVEPOINT);
                this.state = 367;
                this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    release_stmt() {
        let _localctx = new Release_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SQLiteParser.RULE_release_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(SQLiteParser.RELEASE);
                this.state = 371;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 370;
                            this.match(SQLiteParser.SAVEPOINT);
                        }
                        break;
                }
                this.state = 373;
                this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    create_index_stmt() {
        let _localctx = new Create_index_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SQLiteParser.RULE_create_index_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 375;
                this.match(SQLiteParser.CREATE);
                this.state = 377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.UNIQUE) {
                    {
                        this.state = 376;
                        this.match(SQLiteParser.UNIQUE);
                    }
                }
                this.state = 379;
                this.match(SQLiteParser.INDEX);
                this.state = 383;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 380;
                            this.match(SQLiteParser.IF);
                            this.state = 381;
                            this.match(SQLiteParser.NOT);
                            this.state = 382;
                            this.match(SQLiteParser.EXISTS);
                        }
                        break;
                }
                this.state = 388;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 385;
                            this.schema_name();
                            this.state = 386;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 390;
                this.index_name();
                this.state = 391;
                this.match(SQLiteParser.ON);
                this.state = 392;
                this.table_name();
                this.state = 393;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 394;
                this.indexed_column();
                this.state = 399;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 395;
                            this.match(SQLiteParser.COMMA);
                            this.state = 396;
                            this.indexed_column();
                        }
                    }
                    this.state = 401;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 402;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WHERE) {
                    {
                        this.state = 403;
                        this.match(SQLiteParser.WHERE);
                        this.state = 404;
                        this.expr(0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    indexed_column() {
        let _localctx = new Indexed_columnContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SQLiteParser.RULE_indexed_column);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 409;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 407;
                            this.column_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 408;
                            this.expr(0);
                        }
                        break;
                }
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.COLLATE) {
                    {
                        this.state = 411;
                        this.match(SQLiteParser.COLLATE);
                        this.state = 412;
                        this.collation_name();
                    }
                }
                this.state = 416;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ASC || _la === SQLiteParser.DESC) {
                    {
                        this.state = 415;
                        this.asc_desc();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    create_table_stmt() {
        let _localctx = new Create_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SQLiteParser.RULE_create_table_stmt);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this.match(SQLiteParser.CREATE);
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.TEMP || _la === SQLiteParser.TEMPORARY) {
                    {
                        this.state = 419;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.TEMP || _la === SQLiteParser.TEMPORARY)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 422;
                this.match(SQLiteParser.TABLE);
                this.state = 426;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                    case 1:
                        {
                            this.state = 423;
                            this.match(SQLiteParser.IF);
                            this.state = 424;
                            this.match(SQLiteParser.NOT);
                            this.state = 425;
                            this.match(SQLiteParser.EXISTS);
                        }
                        break;
                }
                this.state = 431;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 428;
                            this.schema_name();
                            this.state = 429;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 433;
                this.table_name();
                this.state = 457;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                        {
                            this.state = 434;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 435;
                            this.column_def();
                            this.state = 440;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 436;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 437;
                                            this.column_def();
                                        }
                                    }
                                }
                                this.state = 442;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                            }
                            this.state = 447;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 443;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 444;
                                        this.table_constraint();
                                    }
                                }
                                this.state = 449;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 450;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 453;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.WITHOUT) {
                                {
                                    this.state = 451;
                                    this.match(SQLiteParser.WITHOUT);
                                    this.state = 452;
                                    _localctx._row_ROW_ID = this.match(SQLiteParser.IDENTIFIER);
                                }
                            }
                        }
                        break;
                    case SQLiteParser.AS:
                        {
                            this.state = 455;
                            this.match(SQLiteParser.AS);
                            this.state = 456;
                            this.select_stmt();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    column_def() {
        let _localctx = new Column_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SQLiteParser.RULE_column_def);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 459;
                this.column_name();
                this.state = 461;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            this.state = 460;
                            this.type_name();
                        }
                        break;
                }
                this.state = 466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SQLiteParser.AS - 33)) | (1 << (SQLiteParser.CHECK - 33)) | (1 << (SQLiteParser.COLLATE - 33)) | (1 << (SQLiteParser.CONSTRAINT - 33)) | (1 << (SQLiteParser.DEFAULT - 33)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SQLiteParser.NOT - 102)) | (1 << (SQLiteParser.NULL - 102)) | (1 << (SQLiteParser.PRIMARY - 102)) | (1 << (SQLiteParser.REFERENCES - 102)))) !== 0) || _la === SQLiteParser.UNIQUE || _la === SQLiteParser.GENERATED) {
                    {
                        {
                            this.state = 463;
                            this.column_constraint();
                        }
                    }
                    this.state = 468;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_name() {
        let _localctx = new Type_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SQLiteParser.RULE_type_name);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 470;
                this._errHandler.sync(this);
                _alt = 1 + 1;
                do {
                    switch (_alt) {
                        case 1 + 1:
                            {
                                {
                                    this.state = 469;
                                    this.name();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 472;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 484;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                    case 1:
                        {
                            this.state = 474;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 475;
                            this.signed_number();
                            this.state = 476;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 2:
                        {
                            this.state = 478;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 479;
                            this.signed_number();
                            this.state = 480;
                            this.match(SQLiteParser.COMMA);
                            this.state = 481;
                            this.signed_number();
                            this.state = 482;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    column_constraint() {
        let _localctx = new Column_constraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SQLiteParser.RULE_column_constraint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.CONSTRAINT) {
                    {
                        this.state = 486;
                        this.match(SQLiteParser.CONSTRAINT);
                        this.state = 487;
                        this.name();
                    }
                }
                this.state = 539;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.PRIMARY:
                        {
                            {
                                this.state = 490;
                                this.match(SQLiteParser.PRIMARY);
                                this.state = 491;
                                this.match(SQLiteParser.KEY);
                                this.state = 493;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.ASC || _la === SQLiteParser.DESC) {
                                    {
                                        this.state = 492;
                                        this.asc_desc();
                                    }
                                }
                                this.state = 496;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.ON) {
                                    {
                                        this.state = 495;
                                        this.conflict_clause();
                                    }
                                }
                                this.state = 499;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.AUTOINCREMENT) {
                                    {
                                        this.state = 498;
                                        this.match(SQLiteParser.AUTOINCREMENT);
                                    }
                                }
                            }
                        }
                        break;
                    case SQLiteParser.NOT:
                    case SQLiteParser.NULL:
                    case SQLiteParser.UNIQUE:
                        {
                            this.state = 506;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.NOT:
                                case SQLiteParser.NULL:
                                    {
                                        this.state = 502;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.NOT) {
                                            {
                                                this.state = 501;
                                                this.match(SQLiteParser.NOT);
                                            }
                                        }
                                        this.state = 504;
                                        this.match(SQLiteParser.NULL);
                                    }
                                    break;
                                case SQLiteParser.UNIQUE:
                                    {
                                        this.state = 505;
                                        this.match(SQLiteParser.UNIQUE);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 509;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.ON) {
                                {
                                    this.state = 508;
                                    this.conflict_clause();
                                }
                            }
                        }
                        break;
                    case SQLiteParser.CHECK:
                        {
                            this.state = 511;
                            this.match(SQLiteParser.CHECK);
                            this.state = 512;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 513;
                            this.expr(0);
                            this.state = 514;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.DEFAULT:
                        {
                            this.state = 516;
                            this.match(SQLiteParser.DEFAULT);
                            this.state = 523;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 517;
                                        this.signed_number();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 518;
                                        this.literal_value();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 519;
                                        this.match(SQLiteParser.OPEN_PAR);
                                        this.state = 520;
                                        this.expr(0);
                                        this.state = 521;
                                        this.match(SQLiteParser.CLOSE_PAR);
                                    }
                                    break;
                            }
                        }
                        break;
                    case SQLiteParser.COLLATE:
                        {
                            this.state = 525;
                            this.match(SQLiteParser.COLLATE);
                            this.state = 526;
                            this.collation_name();
                        }
                        break;
                    case SQLiteParser.REFERENCES:
                        {
                            this.state = 527;
                            this.foreign_key_clause();
                        }
                        break;
                    case SQLiteParser.AS:
                    case SQLiteParser.GENERATED:
                        {
                            this.state = 530;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.GENERATED) {
                                {
                                    this.state = 528;
                                    this.match(SQLiteParser.GENERATED);
                                    this.state = 529;
                                    this.match(SQLiteParser.ALWAYS);
                                }
                            }
                            this.state = 532;
                            this.match(SQLiteParser.AS);
                            this.state = 533;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 534;
                            this.expr(0);
                            this.state = 535;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 537;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.VIRTUAL || _la === SQLiteParser.STORED) {
                                {
                                    this.state = 536;
                                    _la = this._input.LA(1);
                                    if (!(_la === SQLiteParser.VIRTUAL || _la === SQLiteParser.STORED)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    signed_number() {
        let _localctx = new Signed_numberContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, SQLiteParser.RULE_signed_number);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS) {
                    {
                        this.state = 541;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 544;
                this.match(SQLiteParser.NUMERIC_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    table_constraint() {
        let _localctx = new Table_constraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, SQLiteParser.RULE_table_constraint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.CONSTRAINT) {
                    {
                        this.state = 546;
                        this.match(SQLiteParser.CONSTRAINT);
                        this.state = 547;
                        this.name();
                    }
                }
                this.state = 587;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.PRIMARY:
                    case SQLiteParser.UNIQUE:
                        {
                            this.state = 553;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.PRIMARY:
                                    {
                                        this.state = 550;
                                        this.match(SQLiteParser.PRIMARY);
                                        this.state = 551;
                                        this.match(SQLiteParser.KEY);
                                    }
                                    break;
                                case SQLiteParser.UNIQUE:
                                    {
                                        this.state = 552;
                                        this.match(SQLiteParser.UNIQUE);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 555;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 556;
                            this.indexed_column();
                            this.state = 561;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 557;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 558;
                                        this.indexed_column();
                                    }
                                }
                                this.state = 563;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 564;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 566;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.ON) {
                                {
                                    this.state = 565;
                                    this.conflict_clause();
                                }
                            }
                        }
                        break;
                    case SQLiteParser.CHECK:
                        {
                            this.state = 568;
                            this.match(SQLiteParser.CHECK);
                            this.state = 569;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 570;
                            this.expr(0);
                            this.state = 571;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.FOREIGN:
                        {
                            this.state = 573;
                            this.match(SQLiteParser.FOREIGN);
                            this.state = 574;
                            this.match(SQLiteParser.KEY);
                            this.state = 575;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 576;
                            this.column_name();
                            this.state = 581;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 577;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 578;
                                        this.column_name();
                                    }
                                }
                                this.state = 583;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 584;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 585;
                            this.foreign_key_clause();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    foreign_key_clause() {
        let _localctx = new Foreign_key_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, SQLiteParser.RULE_foreign_key_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                this.match(SQLiteParser.REFERENCES);
                this.state = 590;
                this.foreign_table();
                this.state = 602;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 591;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 592;
                        this.column_name();
                        this.state = 597;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 593;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 594;
                                    this.column_name();
                                }
                            }
                            this.state = 599;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 600;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.MATCH || _la === SQLiteParser.ON) {
                    {
                        this.state = 616;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SQLiteParser.ON:
                                {
                                    this.state = 604;
                                    this.match(SQLiteParser.ON);
                                    this.state = 605;
                                    _la = this._input.LA(1);
                                    if (!(_la === SQLiteParser.DELETE || _la === SQLiteParser.UPDATE)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 612;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case SQLiteParser.SET:
                                            {
                                                this.state = 606;
                                                this.match(SQLiteParser.SET);
                                                this.state = 607;
                                                _la = this._input.LA(1);
                                                if (!(_la === SQLiteParser.DEFAULT || _la === SQLiteParser.NULL)) {
                                                    this._errHandler.recoverInline(this);
                                                }
                                                else {
                                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                                        this.matchedEOF = true;
                                                    }
                                                    this._errHandler.reportMatch(this);
                                                    this.consume();
                                                }
                                            }
                                            break;
                                        case SQLiteParser.CASCADE:
                                            {
                                                this.state = 608;
                                                this.match(SQLiteParser.CASCADE);
                                            }
                                            break;
                                        case SQLiteParser.RESTRICT:
                                            {
                                                this.state = 609;
                                                this.match(SQLiteParser.RESTRICT);
                                            }
                                            break;
                                        case SQLiteParser.NO:
                                            {
                                                this.state = 610;
                                                this.match(SQLiteParser.NO);
                                                this.state = 611;
                                                this.match(SQLiteParser.ACTION);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                break;
                            case SQLiteParser.MATCH:
                                {
                                    this.state = 614;
                                    this.match(SQLiteParser.MATCH);
                                    this.state = 615;
                                    this.name();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 620;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 629;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                    case 1:
                        {
                            this.state = 622;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.NOT) {
                                {
                                    this.state = 621;
                                    this.match(SQLiteParser.NOT);
                                }
                            }
                            this.state = 624;
                            this.match(SQLiteParser.DEFERRABLE);
                            this.state = 627;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.INITIALLY) {
                                {
                                    this.state = 625;
                                    this.match(SQLiteParser.INITIALLY);
                                    this.state = 626;
                                    _la = this._input.LA(1);
                                    if (!(_la === SQLiteParser.DEFERRED || _la === SQLiteParser.IMMEDIATE)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conflict_clause() {
        let _localctx = new Conflict_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, SQLiteParser.RULE_conflict_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 631;
                this.match(SQLiteParser.ON);
                this.state = 632;
                this.match(SQLiteParser.CONFLICT);
                this.state = 633;
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.ABORT || _la === SQLiteParser.FAIL || _la === SQLiteParser.IGNORE || _la === SQLiteParser.REPLACE || _la === SQLiteParser.ROLLBACK)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    create_trigger_stmt() {
        let _localctx = new Create_trigger_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, SQLiteParser.RULE_create_trigger_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 635;
                this.match(SQLiteParser.CREATE);
                this.state = 637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.TEMP || _la === SQLiteParser.TEMPORARY) {
                    {
                        this.state = 636;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.TEMP || _la === SQLiteParser.TEMPORARY)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 639;
                this.match(SQLiteParser.TRIGGER);
                this.state = 643;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                    case 1:
                        {
                            this.state = 640;
                            this.match(SQLiteParser.IF);
                            this.state = 641;
                            this.match(SQLiteParser.NOT);
                            this.state = 642;
                            this.match(SQLiteParser.EXISTS);
                        }
                        break;
                }
                this.state = 648;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 645;
                            this.schema_name();
                            this.state = 646;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 650;
                this.trigger_name();
                this.state = 655;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.BEFORE:
                        {
                            this.state = 651;
                            this.match(SQLiteParser.BEFORE);
                        }
                        break;
                    case SQLiteParser.AFTER:
                        {
                            this.state = 652;
                            this.match(SQLiteParser.AFTER);
                        }
                        break;
                    case SQLiteParser.INSTEAD:
                        {
                            this.state = 653;
                            this.match(SQLiteParser.INSTEAD);
                            this.state = 654;
                            this.match(SQLiteParser.OF);
                        }
                        break;
                    case SQLiteParser.DELETE:
                    case SQLiteParser.INSERT:
                    case SQLiteParser.UPDATE:
                        break;
                    default:
                        break;
                }
                this.state = 671;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.DELETE:
                        {
                            this.state = 657;
                            this.match(SQLiteParser.DELETE);
                        }
                        break;
                    case SQLiteParser.INSERT:
                        {
                            this.state = 658;
                            this.match(SQLiteParser.INSERT);
                        }
                        break;
                    case SQLiteParser.UPDATE:
                        {
                            this.state = 659;
                            this.match(SQLiteParser.UPDATE);
                            this.state = 669;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.OF) {
                                {
                                    this.state = 660;
                                    this.match(SQLiteParser.OF);
                                    this.state = 661;
                                    this.column_name();
                                    this.state = 666;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 662;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 663;
                                                this.column_name();
                                            }
                                        }
                                        this.state = 668;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 673;
                this.match(SQLiteParser.ON);
                this.state = 674;
                this.table_name();
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.FOR) {
                    {
                        this.state = 675;
                        this.match(SQLiteParser.FOR);
                        this.state = 676;
                        this.match(SQLiteParser.EACH);
                        this.state = 677;
                        this.match(SQLiteParser.ROW);
                    }
                }
                this.state = 682;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WHEN) {
                    {
                        this.state = 680;
                        this.match(SQLiteParser.WHEN);
                        this.state = 681;
                        this.expr(0);
                    }
                }
                this.state = 684;
                this.match(SQLiteParser.BEGIN);
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 689;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 685;
                                        this.update_stmt();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 686;
                                        this.insert_stmt();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 687;
                                        this.delete_stmt();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 688;
                                        this.select_stmt();
                                    }
                                    break;
                            }
                            this.state = 691;
                            this.match(SQLiteParser.SCOL);
                        }
                    }
                    this.state = 695;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SQLiteParser.DELETE || _la === SQLiteParser.INSERT || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (SQLiteParser.REPLACE - 122)) | (1 << (SQLiteParser.SELECT - 122)) | (1 << (SQLiteParser.UPDATE - 122)) | (1 << (SQLiteParser.VALUES - 122)) | (1 << (SQLiteParser.WITH - 122)))) !== 0));
                this.state = 697;
                this.match(SQLiteParser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    create_view_stmt() {
        let _localctx = new Create_view_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SQLiteParser.RULE_create_view_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 699;
                this.match(SQLiteParser.CREATE);
                this.state = 701;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.TEMP || _la === SQLiteParser.TEMPORARY) {
                    {
                        this.state = 700;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.TEMP || _la === SQLiteParser.TEMPORARY)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 703;
                this.match(SQLiteParser.VIEW);
                this.state = 707;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                    case 1:
                        {
                            this.state = 704;
                            this.match(SQLiteParser.IF);
                            this.state = 705;
                            this.match(SQLiteParser.NOT);
                            this.state = 706;
                            this.match(SQLiteParser.EXISTS);
                        }
                        break;
                }
                this.state = 712;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                    case 1:
                        {
                            this.state = 709;
                            this.schema_name();
                            this.state = 710;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 714;
                this.view_name();
                this.state = 726;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 715;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 716;
                        this.column_name();
                        this.state = 721;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 717;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 718;
                                    this.column_name();
                                }
                            }
                            this.state = 723;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 724;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 728;
                this.match(SQLiteParser.AS);
                this.state = 729;
                this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    create_virtual_table_stmt() {
        let _localctx = new Create_virtual_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SQLiteParser.RULE_create_virtual_table_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 731;
                this.match(SQLiteParser.CREATE);
                this.state = 732;
                this.match(SQLiteParser.VIRTUAL);
                this.state = 733;
                this.match(SQLiteParser.TABLE);
                this.state = 737;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                    case 1:
                        {
                            this.state = 734;
                            this.match(SQLiteParser.IF);
                            this.state = 735;
                            this.match(SQLiteParser.NOT);
                            this.state = 736;
                            this.match(SQLiteParser.EXISTS);
                        }
                        break;
                }
                this.state = 742;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                    case 1:
                        {
                            this.state = 739;
                            this.schema_name();
                            this.state = 740;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 744;
                this.table_name();
                this.state = 745;
                this.match(SQLiteParser.USING);
                this.state = 746;
                this.module_name();
                this.state = 758;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 747;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 748;
                        this.module_argument();
                        this.state = 753;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 749;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 750;
                                    this.module_argument();
                                }
                            }
                            this.state = 755;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 756;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    with_clause() {
        let _localctx = new With_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SQLiteParser.RULE_with_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 760;
                this.match(SQLiteParser.WITH);
                this.state = 762;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                    case 1:
                        {
                            this.state = 761;
                            this.match(SQLiteParser.RECURSIVE);
                        }
                        break;
                }
                this.state = 764;
                this.cte_table_name();
                this.state = 765;
                this.match(SQLiteParser.AS);
                this.state = 766;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 767;
                this.select_stmt();
                this.state = 768;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 778;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 769;
                            this.match(SQLiteParser.COMMA);
                            this.state = 770;
                            this.cte_table_name();
                            this.state = 771;
                            this.match(SQLiteParser.AS);
                            this.state = 772;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 773;
                            this.select_stmt();
                            this.state = 774;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                    }
                    this.state = 780;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cte_table_name() {
        let _localctx = new Cte_table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, SQLiteParser.RULE_cte_table_name);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 781;
                this.table_name();
                this.state = 793;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 782;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 783;
                        this.column_name();
                        this.state = 788;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 784;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 785;
                                    this.column_name();
                                }
                            }
                            this.state = 790;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 791;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recursive_cte() {
        let _localctx = new Recursive_cteContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SQLiteParser.RULE_recursive_cte);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 795;
                this.cte_table_name();
                this.state = 796;
                this.match(SQLiteParser.AS);
                this.state = 797;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 798;
                this.initial_select();
                this.state = 799;
                this.match(SQLiteParser.UNION);
                this.state = 801;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ALL) {
                    {
                        this.state = 800;
                        this.match(SQLiteParser.ALL);
                    }
                }
                this.state = 803;
                this.recursive_select();
                this.state = 804;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    common_table_expression() {
        let _localctx = new Common_table_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SQLiteParser.RULE_common_table_expression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 806;
                this.table_name();
                this.state = 818;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 807;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 808;
                        this.column_name();
                        this.state = 813;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 809;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 810;
                                    this.column_name();
                                }
                            }
                            this.state = 815;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 816;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 820;
                this.match(SQLiteParser.AS);
                this.state = 821;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 822;
                this.select_stmt();
                this.state = 823;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    delete_stmt() {
        let _localctx = new Delete_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SQLiteParser.RULE_delete_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 826;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 825;
                        this.with_clause();
                    }
                }
                this.state = 828;
                this.match(SQLiteParser.DELETE);
                this.state = 829;
                this.match(SQLiteParser.FROM);
                this.state = 830;
                this.qualified_table_name();
                this.state = 833;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WHERE) {
                    {
                        this.state = 831;
                        this.match(SQLiteParser.WHERE);
                        this.state = 832;
                        this.expr(0);
                    }
                }
                this.state = 836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.RETURNING) {
                    {
                        this.state = 835;
                        this.returning_clause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    delete_stmt_limited() {
        let _localctx = new Delete_stmt_limitedContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SQLiteParser.RULE_delete_stmt_limited);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 839;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 838;
                        this.with_clause();
                    }
                }
                this.state = 841;
                this.match(SQLiteParser.DELETE);
                this.state = 842;
                this.match(SQLiteParser.FROM);
                this.state = 843;
                this.qualified_table_name();
                this.state = 846;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WHERE) {
                    {
                        this.state = 844;
                        this.match(SQLiteParser.WHERE);
                        this.state = 845;
                        this.expr(0);
                    }
                }
                this.state = 849;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.RETURNING) {
                    {
                        this.state = 848;
                        this.returning_clause();
                    }
                }
                this.state = 855;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.LIMIT || _la === SQLiteParser.ORDER) {
                    {
                        this.state = 852;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.ORDER) {
                            {
                                this.state = 851;
                                this.order_by_stmt();
                            }
                        }
                        this.state = 854;
                        this.limit_stmt();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    detach_stmt() {
        let _localctx = new Detach_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SQLiteParser.RULE_detach_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 857;
                this.match(SQLiteParser.DETACH);
                this.state = 859;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                    case 1:
                        {
                            this.state = 858;
                            this.match(SQLiteParser.DATABASE);
                        }
                        break;
                }
                this.state = 861;
                this.schema_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    drop_stmt() {
        let _localctx = new Drop_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, SQLiteParser.RULE_drop_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 863;
                this.match(SQLiteParser.DROP);
                this.state = 864;
                _localctx._object = this._input.LT(1);
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.INDEX || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SQLiteParser.TABLE - 132)) | (1 << (SQLiteParser.TRIGGER - 132)) | (1 << (SQLiteParser.VIEW - 132)))) !== 0))) {
                    _localctx._object = this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 867;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                    case 1:
                        {
                            this.state = 865;
                            this.match(SQLiteParser.IF);
                            this.state = 866;
                            this.match(SQLiteParser.EXISTS);
                        }
                        break;
                }
                this.state = 872;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                    case 1:
                        {
                            this.state = 869;
                            this.schema_name();
                            this.state = 870;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 874;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExprContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 64;
        this.enterRecursionRule(_localctx, 64, SQLiteParser.RULE_expr, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 964;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                    case 1:
                        {
                            this.state = 877;
                            this.literal_value();
                        }
                        break;
                    case 2:
                        {
                            this.state = 878;
                            this.match(SQLiteParser.BIND_PARAMETER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 887;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 882;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 879;
                                                    this.schema_name();
                                                    this.state = 880;
                                                    this.match(SQLiteParser.DOT);
                                                }
                                                break;
                                        }
                                        this.state = 884;
                                        this.table_name();
                                        this.state = 885;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 889;
                            this.column_name();
                        }
                        break;
                    case 4:
                        {
                            this.state = 890;
                            this.unary_operator();
                            this.state = 891;
                            this.expr(21);
                        }
                        break;
                    case 5:
                        {
                            this.state = 893;
                            this.function_name();
                            this.state = 894;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 907;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.OPEN_PAR:
                                case SQLiteParser.PLUS:
                                case SQLiteParser.MINUS:
                                case SQLiteParser.TILDE:
                                case SQLiteParser.ABORT:
                                case SQLiteParser.ACTION:
                                case SQLiteParser.ADD:
                                case SQLiteParser.AFTER:
                                case SQLiteParser.ALL:
                                case SQLiteParser.ALTER:
                                case SQLiteParser.ANALYZE:
                                case SQLiteParser.AND:
                                case SQLiteParser.AS:
                                case SQLiteParser.ASC:
                                case SQLiteParser.ATTACH:
                                case SQLiteParser.AUTOINCREMENT:
                                case SQLiteParser.BEFORE:
                                case SQLiteParser.BEGIN:
                                case SQLiteParser.BETWEEN:
                                case SQLiteParser.BY:
                                case SQLiteParser.CASCADE:
                                case SQLiteParser.CASE:
                                case SQLiteParser.CAST:
                                case SQLiteParser.CHECK:
                                case SQLiteParser.COLLATE:
                                case SQLiteParser.COLUMN:
                                case SQLiteParser.COMMIT:
                                case SQLiteParser.CONFLICT:
                                case SQLiteParser.CONSTRAINT:
                                case SQLiteParser.CREATE:
                                case SQLiteParser.CROSS:
                                case SQLiteParser.CURRENT_DATE:
                                case SQLiteParser.CURRENT_TIME:
                                case SQLiteParser.CURRENT_TIMESTAMP:
                                case SQLiteParser.DATABASE:
                                case SQLiteParser.DEFAULT:
                                case SQLiteParser.DEFERRABLE:
                                case SQLiteParser.DEFERRED:
                                case SQLiteParser.DELETE:
                                case SQLiteParser.DESC:
                                case SQLiteParser.DETACH:
                                case SQLiteParser.DISTINCT:
                                case SQLiteParser.DROP:
                                case SQLiteParser.EACH:
                                case SQLiteParser.ELSE:
                                case SQLiteParser.END:
                                case SQLiteParser.ESCAPE:
                                case SQLiteParser.EXCEPT:
                                case SQLiteParser.EXCLUSIVE:
                                case SQLiteParser.EXISTS:
                                case SQLiteParser.EXPLAIN:
                                case SQLiteParser.FAIL:
                                case SQLiteParser.FOR:
                                case SQLiteParser.FOREIGN:
                                case SQLiteParser.FROM:
                                case SQLiteParser.FULL:
                                case SQLiteParser.GLOB:
                                case SQLiteParser.GROUP:
                                case SQLiteParser.HAVING:
                                case SQLiteParser.IF:
                                case SQLiteParser.IGNORE:
                                case SQLiteParser.IMMEDIATE:
                                case SQLiteParser.IN:
                                case SQLiteParser.INDEX:
                                case SQLiteParser.INDEXED:
                                case SQLiteParser.INITIALLY:
                                case SQLiteParser.INNER:
                                case SQLiteParser.INSERT:
                                case SQLiteParser.INSTEAD:
                                case SQLiteParser.INTERSECT:
                                case SQLiteParser.INTO:
                                case SQLiteParser.IS:
                                case SQLiteParser.ISNULL:
                                case SQLiteParser.JOIN:
                                case SQLiteParser.KEY:
                                case SQLiteParser.LEFT:
                                case SQLiteParser.LIKE:
                                case SQLiteParser.LIMIT:
                                case SQLiteParser.MATCH:
                                case SQLiteParser.NATURAL:
                                case SQLiteParser.NO:
                                case SQLiteParser.NOT:
                                case SQLiteParser.NOTNULL:
                                case SQLiteParser.NULL:
                                case SQLiteParser.OF:
                                case SQLiteParser.OFFSET:
                                case SQLiteParser.ON:
                                case SQLiteParser.OR:
                                case SQLiteParser.ORDER:
                                case SQLiteParser.OUTER:
                                case SQLiteParser.PLAN:
                                case SQLiteParser.PRAGMA:
                                case SQLiteParser.PRIMARY:
                                case SQLiteParser.QUERY:
                                case SQLiteParser.RAISE:
                                case SQLiteParser.RECURSIVE:
                                case SQLiteParser.REFERENCES:
                                case SQLiteParser.REGEXP:
                                case SQLiteParser.REINDEX:
                                case SQLiteParser.RELEASE:
                                case SQLiteParser.RENAME:
                                case SQLiteParser.REPLACE:
                                case SQLiteParser.RESTRICT:
                                case SQLiteParser.RETURNING:
                                case SQLiteParser.RIGHT:
                                case SQLiteParser.ROLLBACK:
                                case SQLiteParser.ROW:
                                case SQLiteParser.ROWS:
                                case SQLiteParser.SAVEPOINT:
                                case SQLiteParser.SELECT:
                                case SQLiteParser.SET:
                                case SQLiteParser.TABLE:
                                case SQLiteParser.TEMP:
                                case SQLiteParser.TEMPORARY:
                                case SQLiteParser.THEN:
                                case SQLiteParser.TO:
                                case SQLiteParser.TRANSACTION:
                                case SQLiteParser.TRIGGER:
                                case SQLiteParser.UNION:
                                case SQLiteParser.UNIQUE:
                                case SQLiteParser.UPDATE:
                                case SQLiteParser.USING:
                                case SQLiteParser.VACUUM:
                                case SQLiteParser.VALUES:
                                case SQLiteParser.VIEW:
                                case SQLiteParser.VIRTUAL:
                                case SQLiteParser.WHEN:
                                case SQLiteParser.WHERE:
                                case SQLiteParser.WITH:
                                case SQLiteParser.WITHOUT:
                                case SQLiteParser.FIRST_VALUE:
                                case SQLiteParser.OVER:
                                case SQLiteParser.PARTITION:
                                case SQLiteParser.RANGE:
                                case SQLiteParser.PRECEDING:
                                case SQLiteParser.UNBOUNDED:
                                case SQLiteParser.CURRENT:
                                case SQLiteParser.FOLLOWING:
                                case SQLiteParser.CUME_DIST:
                                case SQLiteParser.DENSE_RANK:
                                case SQLiteParser.LAG:
                                case SQLiteParser.LAST_VALUE:
                                case SQLiteParser.LEAD:
                                case SQLiteParser.NTH_VALUE:
                                case SQLiteParser.NTILE:
                                case SQLiteParser.PERCENT_RANK:
                                case SQLiteParser.RANK:
                                case SQLiteParser.ROW_NUMBER:
                                case SQLiteParser.GENERATED:
                                case SQLiteParser.ALWAYS:
                                case SQLiteParser.STORED:
                                case SQLiteParser.TRUE:
                                case SQLiteParser.FALSE:
                                case SQLiteParser.WINDOW:
                                case SQLiteParser.NULLS:
                                case SQLiteParser.FIRST:
                                case SQLiteParser.LAST:
                                case SQLiteParser.FILTER:
                                case SQLiteParser.GROUPS:
                                case SQLiteParser.EXCLUDE:
                                case SQLiteParser.TIES:
                                case SQLiteParser.OTHERS:
                                case SQLiteParser.DO:
                                case SQLiteParser.NOTHING:
                                case SQLiteParser.IDENTIFIER:
                                case SQLiteParser.NUMERIC_LITERAL:
                                case SQLiteParser.BIND_PARAMETER:
                                case SQLiteParser.STRING_LITERAL:
                                case SQLiteParser.BLOB_LITERAL:
                                    {
                                        {
                                            this.state = 896;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 895;
                                                        this.match(SQLiteParser.DISTINCT);
                                                    }
                                                    break;
                                            }
                                            this.state = 898;
                                            this.expr(0);
                                            this.state = 903;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === SQLiteParser.COMMA) {
                                                {
                                                    {
                                                        this.state = 899;
                                                        this.match(SQLiteParser.COMMA);
                                                        this.state = 900;
                                                        this.expr(0);
                                                    }
                                                }
                                                this.state = 905;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                    }
                                    break;
                                case SQLiteParser.STAR:
                                    {
                                        this.state = 906;
                                        this.match(SQLiteParser.STAR);
                                    }
                                    break;
                                case SQLiteParser.CLOSE_PAR:
                                    break;
                                default:
                                    break;
                            }
                            this.state = 909;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 911;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 910;
                                        this.filter_clause();
                                    }
                                    break;
                            }
                            this.state = 914;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 913;
                                        this.over_clause();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 6:
                        {
                            this.state = 916;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 917;
                            this.expr(0);
                            this.state = 922;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 918;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 919;
                                        this.expr(0);
                                    }
                                }
                                this.state = 924;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 925;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 7:
                        {
                            this.state = 927;
                            this.match(SQLiteParser.CAST);
                            this.state = 928;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 929;
                            this.expr(0);
                            this.state = 930;
                            this.match(SQLiteParser.AS);
                            this.state = 931;
                            this.type_name();
                            this.state = 932;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 8:
                        {
                            this.state = 938;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.EXISTS || _la === SQLiteParser.NOT) {
                                {
                                    this.state = 935;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SQLiteParser.NOT) {
                                        {
                                            this.state = 934;
                                            this.match(SQLiteParser.NOT);
                                        }
                                    }
                                    this.state = 937;
                                    this.match(SQLiteParser.EXISTS);
                                }
                            }
                            this.state = 940;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 941;
                            this.select_stmt();
                            this.state = 942;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 9:
                        {
                            this.state = 944;
                            this.match(SQLiteParser.CASE);
                            this.state = 946;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 945;
                                        this.expr(0);
                                    }
                                    break;
                            }
                            this.state = 953;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 948;
                                        this.match(SQLiteParser.WHEN);
                                        this.state = 949;
                                        this.expr(0);
                                        this.state = 950;
                                        this.match(SQLiteParser.THEN);
                                        this.state = 951;
                                        this.expr(0);
                                    }
                                }
                                this.state = 955;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === SQLiteParser.WHEN);
                            this.state = 959;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.ELSE) {
                                {
                                    this.state = 957;
                                    this.match(SQLiteParser.ELSE);
                                    this.state = 958;
                                    this.expr(0);
                                }
                            }
                            this.state = 961;
                            this.match(SQLiteParser.END);
                        }
                        break;
                    case 10:
                        {
                            this.state = 963;
                            this.raise_function();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1091;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1089;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 966;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 967;
                                        this.match(SQLiteParser.PIPE2);
                                        this.state = 968;
                                        this.expr(21);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 969;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 970;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.STAR) | (1 << SQLiteParser.DIV) | (1 << SQLiteParser.MOD))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 971;
                                        this.expr(20);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 972;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 973;
                                        _la = this._input.LA(1);
                                        if (!(_la === SQLiteParser.PLUS || _la === SQLiteParser.MINUS)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 974;
                                        this.expr(19);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 975;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 976;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.LT2) | (1 << SQLiteParser.GT2) | (1 << SQLiteParser.AMP) | (1 << SQLiteParser.PIPE))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 977;
                                        this.expr(18);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 978;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 979;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.LT) | (1 << SQLiteParser.LT_EQ) | (1 << SQLiteParser.GT) | (1 << SQLiteParser.GT_EQ))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 980;
                                        this.expr(17);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 981;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1000;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 982;
                                                    this.match(SQLiteParser.ASSIGN);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 983;
                                                    this.match(SQLiteParser.EQ);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 984;
                                                    this.match(SQLiteParser.NOT_EQ1);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 985;
                                                    this.match(SQLiteParser.NOT_EQ2);
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 986;
                                                    this.match(SQLiteParser.IS);
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 987;
                                                    this.match(SQLiteParser.IS);
                                                    this.state = 988;
                                                    this.match(SQLiteParser.NOT);
                                                }
                                                break;
                                            case 7:
                                                {
                                                    this.state = 989;
                                                    this.match(SQLiteParser.IS);
                                                    this.state = 991;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if (_la === SQLiteParser.NOT) {
                                                        {
                                                            this.state = 990;
                                                            this.match(SQLiteParser.NOT);
                                                        }
                                                    }
                                                    this.state = 993;
                                                    this.match(SQLiteParser.DISTINCT);
                                                    this.state = 994;
                                                    this.match(SQLiteParser.FROM);
                                                }
                                                break;
                                            case 8:
                                                {
                                                    this.state = 995;
                                                    this.match(SQLiteParser.IN);
                                                }
                                                break;
                                            case 9:
                                                {
                                                    this.state = 996;
                                                    this.match(SQLiteParser.LIKE);
                                                }
                                                break;
                                            case 10:
                                                {
                                                    this.state = 997;
                                                    this.match(SQLiteParser.GLOB);
                                                }
                                                break;
                                            case 11:
                                                {
                                                    this.state = 998;
                                                    this.match(SQLiteParser.MATCH);
                                                }
                                                break;
                                            case 12:
                                                {
                                                    this.state = 999;
                                                    this.match(SQLiteParser.REGEXP);
                                                }
                                                break;
                                        }
                                        this.state = 1002;
                                        this.expr(16);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1003;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1004;
                                        this.match(SQLiteParser.AND);
                                        this.state = 1005;
                                        this.expr(15);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1006;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1007;
                                        this.match(SQLiteParser.OR);
                                        this.state = 1008;
                                        this.expr(14);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1009;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1010;
                                        this.match(SQLiteParser.IS);
                                        this.state = 1012;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1011;
                                                    this.match(SQLiteParser.NOT);
                                                }
                                                break;
                                        }
                                        this.state = 1014;
                                        this.expr(7);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1015;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 1017;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.NOT) {
                                            {
                                                this.state = 1016;
                                                this.match(SQLiteParser.NOT);
                                            }
                                        }
                                        this.state = 1019;
                                        this.match(SQLiteParser.BETWEEN);
                                        this.state = 1020;
                                        this.expr(0);
                                        this.state = 1021;
                                        this.match(SQLiteParser.AND);
                                        this.state = 1022;
                                        this.expr(6);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1024;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1025;
                                        this.match(SQLiteParser.COLLATE);
                                        this.state = 1026;
                                        this.collation_name();
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1027;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1029;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.NOT) {
                                            {
                                                this.state = 1028;
                                                this.match(SQLiteParser.NOT);
                                            }
                                        }
                                        this.state = 1031;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (SQLiteParser.GLOB - 77)) | (1 << (SQLiteParser.LIKE - 77)) | (1 << (SQLiteParser.MATCH - 77)))) !== 0) || _la === SQLiteParser.REGEXP)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1032;
                                        this.expr(0);
                                        this.state = 1035;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1033;
                                                    this.match(SQLiteParser.ESCAPE);
                                                    this.state = 1034;
                                                    this.expr(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1037;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1042;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case SQLiteParser.ISNULL:
                                                {
                                                    this.state = 1038;
                                                    this.match(SQLiteParser.ISNULL);
                                                }
                                                break;
                                            case SQLiteParser.NOTNULL:
                                                {
                                                    this.state = 1039;
                                                    this.match(SQLiteParser.NOTNULL);
                                                }
                                                break;
                                            case SQLiteParser.NOT:
                                                {
                                                    this.state = 1040;
                                                    this.match(SQLiteParser.NOT);
                                                    this.state = 1041;
                                                    this.match(SQLiteParser.NULL);
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExprContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1044;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 1046;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.NOT) {
                                            {
                                                this.state = 1045;
                                                this.match(SQLiteParser.NOT);
                                            }
                                        }
                                        this.state = 1048;
                                        this.match(SQLiteParser.IN);
                                        this.state = 1087;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1049;
                                                    this.match(SQLiteParser.OPEN_PAR);
                                                    this.state = 1059;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 1050;
                                                                this.select_stmt();
                                                            }
                                                            break;
                                                        case 2:
                                                            {
                                                                this.state = 1051;
                                                                this.expr(0);
                                                                this.state = 1056;
                                                                this._errHandler.sync(this);
                                                                _la = this._input.LA(1);
                                                                while (_la === SQLiteParser.COMMA) {
                                                                    {
                                                                        {
                                                                            this.state = 1052;
                                                                            this.match(SQLiteParser.COMMA);
                                                                            this.state = 1053;
                                                                            this.expr(0);
                                                                        }
                                                                    }
                                                                    this.state = 1058;
                                                                    this._errHandler.sync(this);
                                                                    _la = this._input.LA(1);
                                                                }
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1061;
                                                    this.match(SQLiteParser.CLOSE_PAR);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1065;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 1062;
                                                                this.schema_name();
                                                                this.state = 1063;
                                                                this.match(SQLiteParser.DOT);
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1067;
                                                    this.table_name();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1071;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 1068;
                                                                this.schema_name();
                                                                this.state = 1069;
                                                                this.match(SQLiteParser.DOT);
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1073;
                                                    this.table_function_name();
                                                    this.state = 1074;
                                                    this.match(SQLiteParser.OPEN_PAR);
                                                    this.state = 1083;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.OPEN_PAR) | (1 << SQLiteParser.PLUS) | (1 << SQLiteParser.MINUS) | (1 << SQLiteParser.TILDE) | (1 << SQLiteParser.ABORT) | (1 << SQLiteParser.ACTION) | (1 << SQLiteParser.ADD) | (1 << SQLiteParser.AFTER) | (1 << SQLiteParser.ALL) | (1 << SQLiteParser.ALTER) | (1 << SQLiteParser.ANALYZE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SQLiteParser.AND - 32)) | (1 << (SQLiteParser.AS - 32)) | (1 << (SQLiteParser.ASC - 32)) | (1 << (SQLiteParser.ATTACH - 32)) | (1 << (SQLiteParser.AUTOINCREMENT - 32)) | (1 << (SQLiteParser.BEFORE - 32)) | (1 << (SQLiteParser.BEGIN - 32)) | (1 << (SQLiteParser.BETWEEN - 32)) | (1 << (SQLiteParser.BY - 32)) | (1 << (SQLiteParser.CASCADE - 32)) | (1 << (SQLiteParser.CASE - 32)) | (1 << (SQLiteParser.CAST - 32)) | (1 << (SQLiteParser.CHECK - 32)) | (1 << (SQLiteParser.COLLATE - 32)) | (1 << (SQLiteParser.COLUMN - 32)) | (1 << (SQLiteParser.COMMIT - 32)) | (1 << (SQLiteParser.CONFLICT - 32)) | (1 << (SQLiteParser.CONSTRAINT - 32)) | (1 << (SQLiteParser.CREATE - 32)) | (1 << (SQLiteParser.CROSS - 32)) | (1 << (SQLiteParser.CURRENT_DATE - 32)) | (1 << (SQLiteParser.CURRENT_TIME - 32)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP - 32)) | (1 << (SQLiteParser.DATABASE - 32)) | (1 << (SQLiteParser.DEFAULT - 32)) | (1 << (SQLiteParser.DEFERRABLE - 32)) | (1 << (SQLiteParser.DEFERRED - 32)) | (1 << (SQLiteParser.DELETE - 32)) | (1 << (SQLiteParser.DESC - 32)) | (1 << (SQLiteParser.DETACH - 32)) | (1 << (SQLiteParser.DISTINCT - 32)) | (1 << (SQLiteParser.DROP - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SQLiteParser.EACH - 64)) | (1 << (SQLiteParser.ELSE - 64)) | (1 << (SQLiteParser.END - 64)) | (1 << (SQLiteParser.ESCAPE - 64)) | (1 << (SQLiteParser.EXCEPT - 64)) | (1 << (SQLiteParser.EXCLUSIVE - 64)) | (1 << (SQLiteParser.EXISTS - 64)) | (1 << (SQLiteParser.EXPLAIN - 64)) | (1 << (SQLiteParser.FAIL - 64)) | (1 << (SQLiteParser.FOR - 64)) | (1 << (SQLiteParser.FOREIGN - 64)) | (1 << (SQLiteParser.FROM - 64)) | (1 << (SQLiteParser.FULL - 64)) | (1 << (SQLiteParser.GLOB - 64)) | (1 << (SQLiteParser.GROUP - 64)) | (1 << (SQLiteParser.HAVING - 64)) | (1 << (SQLiteParser.IF - 64)) | (1 << (SQLiteParser.IGNORE - 64)) | (1 << (SQLiteParser.IMMEDIATE - 64)) | (1 << (SQLiteParser.IN - 64)) | (1 << (SQLiteParser.INDEX - 64)) | (1 << (SQLiteParser.INDEXED - 64)) | (1 << (SQLiteParser.INITIALLY - 64)) | (1 << (SQLiteParser.INNER - 64)) | (1 << (SQLiteParser.INSERT - 64)) | (1 << (SQLiteParser.INSTEAD - 64)) | (1 << (SQLiteParser.INTERSECT - 64)) | (1 << (SQLiteParser.INTO - 64)) | (1 << (SQLiteParser.IS - 64)) | (1 << (SQLiteParser.ISNULL - 64)) | (1 << (SQLiteParser.JOIN - 64)) | (1 << (SQLiteParser.KEY - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (SQLiteParser.LEFT - 96)) | (1 << (SQLiteParser.LIKE - 96)) | (1 << (SQLiteParser.LIMIT - 96)) | (1 << (SQLiteParser.MATCH - 96)) | (1 << (SQLiteParser.NATURAL - 96)) | (1 << (SQLiteParser.NO - 96)) | (1 << (SQLiteParser.NOT - 96)) | (1 << (SQLiteParser.NOTNULL - 96)) | (1 << (SQLiteParser.NULL - 96)) | (1 << (SQLiteParser.OF - 96)) | (1 << (SQLiteParser.OFFSET - 96)) | (1 << (SQLiteParser.ON - 96)) | (1 << (SQLiteParser.OR - 96)) | (1 << (SQLiteParser.ORDER - 96)) | (1 << (SQLiteParser.OUTER - 96)) | (1 << (SQLiteParser.PLAN - 96)) | (1 << (SQLiteParser.PRAGMA - 96)) | (1 << (SQLiteParser.PRIMARY - 96)) | (1 << (SQLiteParser.QUERY - 96)) | (1 << (SQLiteParser.RAISE - 96)) | (1 << (SQLiteParser.RECURSIVE - 96)) | (1 << (SQLiteParser.REFERENCES - 96)) | (1 << (SQLiteParser.REGEXP - 96)) | (1 << (SQLiteParser.REINDEX - 96)) | (1 << (SQLiteParser.RELEASE - 96)) | (1 << (SQLiteParser.RENAME - 96)) | (1 << (SQLiteParser.REPLACE - 96)) | (1 << (SQLiteParser.RESTRICT - 96)) | (1 << (SQLiteParser.RETURNING - 96)) | (1 << (SQLiteParser.RIGHT - 96)) | (1 << (SQLiteParser.ROLLBACK - 96)) | (1 << (SQLiteParser.ROW - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (SQLiteParser.ROWS - 128)) | (1 << (SQLiteParser.SAVEPOINT - 128)) | (1 << (SQLiteParser.SELECT - 128)) | (1 << (SQLiteParser.SET - 128)) | (1 << (SQLiteParser.TABLE - 128)) | (1 << (SQLiteParser.TEMP - 128)) | (1 << (SQLiteParser.TEMPORARY - 128)) | (1 << (SQLiteParser.THEN - 128)) | (1 << (SQLiteParser.TO - 128)) | (1 << (SQLiteParser.TRANSACTION - 128)) | (1 << (SQLiteParser.TRIGGER - 128)) | (1 << (SQLiteParser.UNION - 128)) | (1 << (SQLiteParser.UNIQUE - 128)) | (1 << (SQLiteParser.UPDATE - 128)) | (1 << (SQLiteParser.USING - 128)) | (1 << (SQLiteParser.VACUUM - 128)) | (1 << (SQLiteParser.VALUES - 128)) | (1 << (SQLiteParser.VIEW - 128)) | (1 << (SQLiteParser.VIRTUAL - 128)) | (1 << (SQLiteParser.WHEN - 128)) | (1 << (SQLiteParser.WHERE - 128)) | (1 << (SQLiteParser.WITH - 128)) | (1 << (SQLiteParser.WITHOUT - 128)) | (1 << (SQLiteParser.FIRST_VALUE - 128)) | (1 << (SQLiteParser.OVER - 128)) | (1 << (SQLiteParser.PARTITION - 128)) | (1 << (SQLiteParser.RANGE - 128)) | (1 << (SQLiteParser.PRECEDING - 128)) | (1 << (SQLiteParser.UNBOUNDED - 128)) | (1 << (SQLiteParser.CURRENT - 128)) | (1 << (SQLiteParser.FOLLOWING - 128)) | (1 << (SQLiteParser.CUME_DIST - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (SQLiteParser.DENSE_RANK - 160)) | (1 << (SQLiteParser.LAG - 160)) | (1 << (SQLiteParser.LAST_VALUE - 160)) | (1 << (SQLiteParser.LEAD - 160)) | (1 << (SQLiteParser.NTH_VALUE - 160)) | (1 << (SQLiteParser.NTILE - 160)) | (1 << (SQLiteParser.PERCENT_RANK - 160)) | (1 << (SQLiteParser.RANK - 160)) | (1 << (SQLiteParser.ROW_NUMBER - 160)) | (1 << (SQLiteParser.GENERATED - 160)) | (1 << (SQLiteParser.ALWAYS - 160)) | (1 << (SQLiteParser.STORED - 160)) | (1 << (SQLiteParser.TRUE - 160)) | (1 << (SQLiteParser.FALSE - 160)) | (1 << (SQLiteParser.WINDOW - 160)) | (1 << (SQLiteParser.NULLS - 160)) | (1 << (SQLiteParser.FIRST - 160)) | (1 << (SQLiteParser.LAST - 160)) | (1 << (SQLiteParser.FILTER - 160)) | (1 << (SQLiteParser.GROUPS - 160)) | (1 << (SQLiteParser.EXCLUDE - 160)) | (1 << (SQLiteParser.TIES - 160)) | (1 << (SQLiteParser.OTHERS - 160)) | (1 << (SQLiteParser.DO - 160)) | (1 << (SQLiteParser.NOTHING - 160)) | (1 << (SQLiteParser.IDENTIFIER - 160)) | (1 << (SQLiteParser.NUMERIC_LITERAL - 160)) | (1 << (SQLiteParser.BIND_PARAMETER - 160)) | (1 << (SQLiteParser.STRING_LITERAL - 160)) | (1 << (SQLiteParser.BLOB_LITERAL - 160)))) !== 0)) {
                                                        {
                                                            this.state = 1075;
                                                            this.expr(0);
                                                            this.state = 1080;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                            while (_la === SQLiteParser.COMMA) {
                                                                {
                                                                    {
                                                                        this.state = 1076;
                                                                        this.match(SQLiteParser.COMMA);
                                                                        this.state = 1077;
                                                                        this.expr(0);
                                                                    }
                                                                }
                                                                this.state = 1082;
                                                                this._errHandler.sync(this);
                                                                _la = this._input.LA(1);
                                                            }
                                                        }
                                                    }
                                                    this.state = 1085;
                                                    this.match(SQLiteParser.CLOSE_PAR);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1093;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    raise_function() {
        let _localctx = new Raise_functionContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, SQLiteParser.RULE_raise_function);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1094;
                this.match(SQLiteParser.RAISE);
                this.state = 1095;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1100;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.IGNORE:
                        {
                            this.state = 1096;
                            this.match(SQLiteParser.IGNORE);
                        }
                        break;
                    case SQLiteParser.ABORT:
                    case SQLiteParser.FAIL:
                    case SQLiteParser.ROLLBACK:
                        {
                            this.state = 1097;
                            _la = this._input.LA(1);
                            if (!(_la === SQLiteParser.ABORT || _la === SQLiteParser.FAIL || _la === SQLiteParser.ROLLBACK)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1098;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1099;
                            this.error_message();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1102;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal_value() {
        let _localctx = new Literal_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, SQLiteParser.RULE_literal_value);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1104;
                _la = this._input.LA(1);
                if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (SQLiteParser.CURRENT_DATE - 52)) | (1 << (SQLiteParser.CURRENT_TIME - 52)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP - 52)))) !== 0) || _la === SQLiteParser.NULL || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & ((1 << (SQLiteParser.TRUE - 172)) | (1 << (SQLiteParser.FALSE - 172)) | (1 << (SQLiteParser.NUMERIC_LITERAL - 172)) | (1 << (SQLiteParser.STRING_LITERAL - 172)) | (1 << (SQLiteParser.BLOB_LITERAL - 172)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value_row() {
        let _localctx = new Value_rowContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, SQLiteParser.RULE_value_row);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1106;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1107;
                this.expr(0);
                this.state = 1112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1108;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1109;
                            this.expr(0);
                        }
                    }
                    this.state = 1114;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1115;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    values_clause() {
        let _localctx = new Values_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SQLiteParser.RULE_values_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1117;
                this.match(SQLiteParser.VALUES);
                this.state = 1118;
                this.value_row();
                this.state = 1123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1119;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1120;
                            this.value_row();
                        }
                    }
                    this.state = 1125;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    insert_stmt() {
        let _localctx = new Insert_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SQLiteParser.RULE_insert_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 1126;
                        this.with_clause();
                    }
                }
                this.state = 1134;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                    case 1:
                        {
                            this.state = 1129;
                            this.match(SQLiteParser.INSERT);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1130;
                            this.match(SQLiteParser.REPLACE);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1131;
                            this.match(SQLiteParser.INSERT);
                            this.state = 1132;
                            this.match(SQLiteParser.OR);
                            this.state = 1133;
                            _la = this._input.LA(1);
                            if (!(_la === SQLiteParser.ABORT || _la === SQLiteParser.FAIL || _la === SQLiteParser.IGNORE || _la === SQLiteParser.REPLACE || _la === SQLiteParser.ROLLBACK)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1136;
                this.match(SQLiteParser.INTO);
                this.state = 1140;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                    case 1:
                        {
                            this.state = 1137;
                            this.schema_name();
                            this.state = 1138;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 1142;
                this.table_name();
                this.state = 1145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.AS) {
                    {
                        this.state = 1143;
                        this.match(SQLiteParser.AS);
                        this.state = 1144;
                        this.table_alias();
                    }
                }
                this.state = 1158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 1147;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1148;
                        this.column_name();
                        this.state = 1153;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1149;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1150;
                                    this.column_name();
                                }
                            }
                            this.state = 1155;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1156;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 1169;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.SELECT:
                    case SQLiteParser.VALUES:
                    case SQLiteParser.WITH:
                        {
                            {
                                this.state = 1162;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1160;
                                            this.values_clause();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1161;
                                            this.select_stmt();
                                        }
                                        break;
                                }
                                this.state = 1165;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.ON) {
                                    {
                                        this.state = 1164;
                                        this.upsert_clause();
                                    }
                                }
                            }
                        }
                        break;
                    case SQLiteParser.DEFAULT:
                        {
                            this.state = 1167;
                            this.match(SQLiteParser.DEFAULT);
                            this.state = 1168;
                            this.match(SQLiteParser.VALUES);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.RETURNING) {
                    {
                        this.state = 1171;
                        this.returning_clause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    returning_clause() {
        let _localctx = new Returning_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SQLiteParser.RULE_returning_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1174;
                this.match(SQLiteParser.RETURNING);
                this.state = 1175;
                this.result_column();
                this.state = 1180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1176;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1177;
                            this.result_column();
                        }
                    }
                    this.state = 1182;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    upsert_clause() {
        let _localctx = new Upsert_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, SQLiteParser.RULE_upsert_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1183;
                this.match(SQLiteParser.ON);
                this.state = 1184;
                this.match(SQLiteParser.CONFLICT);
                this.state = 1199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.OPEN_PAR) {
                    {
                        this.state = 1185;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1186;
                        this.indexed_column();
                        this.state = 1191;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1187;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1188;
                                    this.indexed_column();
                                }
                            }
                            this.state = 1193;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1194;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1197;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.WHERE) {
                            {
                                this.state = 1195;
                                this.match(SQLiteParser.WHERE);
                                this.state = 1196;
                                this.expr(0);
                            }
                        }
                    }
                }
                this.state = 1201;
                this.match(SQLiteParser.DO);
                this.state = 1228;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.NOTHING:
                        {
                            this.state = 1202;
                            this.match(SQLiteParser.NOTHING);
                        }
                        break;
                    case SQLiteParser.UPDATE:
                        {
                            this.state = 1203;
                            this.match(SQLiteParser.UPDATE);
                            this.state = 1204;
                            this.match(SQLiteParser.SET);
                            {
                                this.state = 1207;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1205;
                                            this.column_name();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1206;
                                            this.column_name_list();
                                        }
                                        break;
                                }
                                this.state = 1209;
                                this.match(SQLiteParser.ASSIGN);
                                this.state = 1210;
                                this.expr(0);
                                this.state = 1221;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === SQLiteParser.COMMA) {
                                    {
                                        {
                                            this.state = 1211;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 1214;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1212;
                                                        this.column_name();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1213;
                                                        this.column_name_list();
                                                    }
                                                    break;
                                            }
                                            this.state = 1216;
                                            this.match(SQLiteParser.ASSIGN);
                                            this.state = 1217;
                                            this.expr(0);
                                        }
                                    }
                                    this.state = 1223;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1226;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.WHERE) {
                                    {
                                        this.state = 1224;
                                        this.match(SQLiteParser.WHERE);
                                        this.state = 1225;
                                        this.expr(0);
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pragma_stmt() {
        let _localctx = new Pragma_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SQLiteParser.RULE_pragma_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1230;
                this.match(SQLiteParser.PRAGMA);
                this.state = 1234;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                    case 1:
                        {
                            this.state = 1231;
                            this.schema_name();
                            this.state = 1232;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 1236;
                this.pragma_name();
                this.state = 1243;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.ASSIGN:
                        {
                            this.state = 1237;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 1238;
                            this.pragma_value();
                        }
                        break;
                    case SQLiteParser.OPEN_PAR:
                        {
                            this.state = 1239;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1240;
                            this.pragma_value();
                            this.state = 1241;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.EOF:
                    case SQLiteParser.SCOL:
                    case SQLiteParser.ALTER:
                    case SQLiteParser.ANALYZE:
                    case SQLiteParser.ATTACH:
                    case SQLiteParser.BEGIN:
                    case SQLiteParser.COMMIT:
                    case SQLiteParser.CREATE:
                    case SQLiteParser.DELETE:
                    case SQLiteParser.DETACH:
                    case SQLiteParser.DROP:
                    case SQLiteParser.END:
                    case SQLiteParser.EXPLAIN:
                    case SQLiteParser.INSERT:
                    case SQLiteParser.PRAGMA:
                    case SQLiteParser.REINDEX:
                    case SQLiteParser.RELEASE:
                    case SQLiteParser.REPLACE:
                    case SQLiteParser.ROLLBACK:
                    case SQLiteParser.SAVEPOINT:
                    case SQLiteParser.SELECT:
                    case SQLiteParser.UPDATE:
                    case SQLiteParser.VACUUM:
                    case SQLiteParser.VALUES:
                    case SQLiteParser.WITH:
                        break;
                    default:
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pragma_value() {
        let _localctx = new Pragma_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SQLiteParser.RULE_pragma_value);
        try {
            this.state = 1248;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1245;
                        this.signed_number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1246;
                        this.name();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1247;
                        this.match(SQLiteParser.STRING_LITERAL);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reindex_stmt() {
        let _localctx = new Reindex_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SQLiteParser.RULE_reindex_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1250;
                this.match(SQLiteParser.REINDEX);
                this.state = 1261;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                    case 1:
                        {
                            this.state = 1251;
                            this.collation_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1255;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1252;
                                        this.schema_name();
                                        this.state = 1253;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 1259;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1257;
                                        this.table_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1258;
                                        this.index_name();
                                    }
                                    break;
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    select_stmt() {
        let _localctx = new Select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SQLiteParser.RULE_select_stmt);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1264;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 1263;
                        this.common_table_stmt();
                    }
                }
                this.state = 1266;
                this.select_core();
                this.state = 1272;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1267;
                                this.compound_operator();
                                this.state = 1268;
                                this.select_core();
                            }
                        }
                    }
                    this.state = 1274;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                }
                this.state = 1276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ORDER) {
                    {
                        this.state = 1275;
                        this.order_by_stmt();
                    }
                }
                this.state = 1279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.LIMIT) {
                    {
                        this.state = 1278;
                        this.limit_stmt();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    join_clause() {
        let _localctx = new Join_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, SQLiteParser.RULE_join_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1281;
                this.table_or_subquery();
                this.state = 1289;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA || _la === SQLiteParser.CROSS || _la === SQLiteParser.FULL || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SQLiteParser.INNER - 87)) | (1 << (SQLiteParser.JOIN - 87)) | (1 << (SQLiteParser.LEFT - 87)) | (1 << (SQLiteParser.NATURAL - 87)))) !== 0) || _la === SQLiteParser.RIGHT) {
                    {
                        {
                            this.state = 1282;
                            this.join_operator();
                            this.state = 1283;
                            this.table_or_subquery();
                            this.state = 1285;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1284;
                                        this.join_constraint();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1291;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    select_core() {
        let _localctx = new Select_coreContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SQLiteParser.RULE_select_core);
        let _la;
        try {
            this.state = 1355;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.SELECT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 1292;
                            this.match(SQLiteParser.SELECT);
                            this.state = 1294;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1293;
                                        _la = this._input.LA(1);
                                        if (!(_la === SQLiteParser.ALL || _la === SQLiteParser.DISTINCT)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                    break;
                            }
                            this.state = 1296;
                            this.result_column();
                            this.state = 1301;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 1297;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1298;
                                        this.result_column();
                                    }
                                }
                                this.state = 1303;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1316;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.FROM) {
                                {
                                    this.state = 1304;
                                    this.match(SQLiteParser.FROM);
                                    this.state = 1314;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1305;
                                                this.table_or_subquery();
                                                this.state = 1310;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === SQLiteParser.COMMA) {
                                                    {
                                                        {
                                                            this.state = 1306;
                                                            this.match(SQLiteParser.COMMA);
                                                            this.state = 1307;
                                                            this.table_or_subquery();
                                                        }
                                                    }
                                                    this.state = 1312;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1313;
                                                this.join_clause();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 1320;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.WHERE) {
                                {
                                    this.state = 1318;
                                    this.match(SQLiteParser.WHERE);
                                    this.state = 1319;
                                    _localctx._whereExpr = this.expr(0);
                                }
                            }
                            this.state = 1336;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.GROUP) {
                                {
                                    this.state = 1322;
                                    this.match(SQLiteParser.GROUP);
                                    this.state = 1323;
                                    this.match(SQLiteParser.BY);
                                    this.state = 1324;
                                    _localctx._expr = this.expr(0);
                                    _localctx._groupByExpr.push(_localctx._expr);
                                    this.state = 1329;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1325;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1326;
                                                _localctx._expr = this.expr(0);
                                                _localctx._groupByExpr.push(_localctx._expr);
                                            }
                                        }
                                        this.state = 1331;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1334;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SQLiteParser.HAVING) {
                                        {
                                            this.state = 1332;
                                            this.match(SQLiteParser.HAVING);
                                            this.state = 1333;
                                            _localctx._havingExpr = this.expr(0);
                                        }
                                    }
                                }
                            }
                            this.state = 1352;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.WINDOW) {
                                {
                                    this.state = 1338;
                                    this.match(SQLiteParser.WINDOW);
                                    this.state = 1339;
                                    this.window_name();
                                    this.state = 1340;
                                    this.match(SQLiteParser.AS);
                                    this.state = 1341;
                                    this.window_defn();
                                    this.state = 1349;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1342;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1343;
                                                this.window_name();
                                                this.state = 1344;
                                                this.match(SQLiteParser.AS);
                                                this.state = 1345;
                                                this.window_defn();
                                            }
                                        }
                                        this.state = 1351;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case SQLiteParser.VALUES:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1354;
                        this.values_clause();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    factored_select_stmt() {
        let _localctx = new Factored_select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SQLiteParser.RULE_factored_select_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1357;
                this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simple_select_stmt() {
        let _localctx = new Simple_select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, SQLiteParser.RULE_simple_select_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 1359;
                        this.common_table_stmt();
                    }
                }
                this.state = 1362;
                this.select_core();
                this.state = 1364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ORDER) {
                    {
                        this.state = 1363;
                        this.order_by_stmt();
                    }
                }
                this.state = 1367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.LIMIT) {
                    {
                        this.state = 1366;
                        this.limit_stmt();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compound_select_stmt() {
        let _localctx = new Compound_select_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, SQLiteParser.RULE_compound_select_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 1369;
                        this.common_table_stmt();
                    }
                }
                this.state = 1372;
                this.select_core();
                this.state = 1382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1379;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.UNION:
                                    {
                                        this.state = 1373;
                                        this.match(SQLiteParser.UNION);
                                        this.state = 1375;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === SQLiteParser.ALL) {
                                            {
                                                this.state = 1374;
                                                this.match(SQLiteParser.ALL);
                                            }
                                        }
                                    }
                                    break;
                                case SQLiteParser.INTERSECT:
                                    {
                                        this.state = 1377;
                                        this.match(SQLiteParser.INTERSECT);
                                    }
                                    break;
                                case SQLiteParser.EXCEPT:
                                    {
                                        this.state = 1378;
                                        this.match(SQLiteParser.EXCEPT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1381;
                            this.select_core();
                        }
                    }
                    this.state = 1384;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SQLiteParser.EXCEPT || _la === SQLiteParser.INTERSECT || _la === SQLiteParser.UNION);
                this.state = 1387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ORDER) {
                    {
                        this.state = 1386;
                        this.order_by_stmt();
                    }
                }
                this.state = 1390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.LIMIT) {
                    {
                        this.state = 1389;
                        this.limit_stmt();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    table_or_subquery() {
        let _localctx = new Table_or_subqueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, SQLiteParser.RULE_table_or_subquery);
        let _la;
        try {
            this.state = 1456;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 1395;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1392;
                                        this.schema_name();
                                        this.state = 1393;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 1397;
                            this.table_name();
                            this.state = 1402;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 196, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1399;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1398;
                                                    this.match(SQLiteParser.AS);
                                                }
                                                break;
                                        }
                                        this.state = 1401;
                                        this.table_alias();
                                    }
                                    break;
                            }
                            this.state = 1409;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case SQLiteParser.INDEXED:
                                    {
                                        this.state = 1404;
                                        this.match(SQLiteParser.INDEXED);
                                        this.state = 1405;
                                        this.match(SQLiteParser.BY);
                                        this.state = 1406;
                                        this.index_name();
                                    }
                                    break;
                                case SQLiteParser.NOT:
                                    {
                                        this.state = 1407;
                                        this.match(SQLiteParser.NOT);
                                        this.state = 1408;
                                        this.match(SQLiteParser.INDEXED);
                                    }
                                    break;
                                case SQLiteParser.EOF:
                                case SQLiteParser.SCOL:
                                case SQLiteParser.CLOSE_PAR:
                                case SQLiteParser.COMMA:
                                case SQLiteParser.ALTER:
                                case SQLiteParser.ANALYZE:
                                case SQLiteParser.ATTACH:
                                case SQLiteParser.BEGIN:
                                case SQLiteParser.COMMIT:
                                case SQLiteParser.CREATE:
                                case SQLiteParser.CROSS:
                                case SQLiteParser.DELETE:
                                case SQLiteParser.DETACH:
                                case SQLiteParser.DROP:
                                case SQLiteParser.END:
                                case SQLiteParser.EXCEPT:
                                case SQLiteParser.EXPLAIN:
                                case SQLiteParser.FULL:
                                case SQLiteParser.GROUP:
                                case SQLiteParser.INNER:
                                case SQLiteParser.INSERT:
                                case SQLiteParser.INTERSECT:
                                case SQLiteParser.JOIN:
                                case SQLiteParser.LEFT:
                                case SQLiteParser.LIMIT:
                                case SQLiteParser.NATURAL:
                                case SQLiteParser.ON:
                                case SQLiteParser.ORDER:
                                case SQLiteParser.PRAGMA:
                                case SQLiteParser.REINDEX:
                                case SQLiteParser.RELEASE:
                                case SQLiteParser.REPLACE:
                                case SQLiteParser.RETURNING:
                                case SQLiteParser.RIGHT:
                                case SQLiteParser.ROLLBACK:
                                case SQLiteParser.SAVEPOINT:
                                case SQLiteParser.SELECT:
                                case SQLiteParser.UNION:
                                case SQLiteParser.UPDATE:
                                case SQLiteParser.USING:
                                case SQLiteParser.VACUUM:
                                case SQLiteParser.VALUES:
                                case SQLiteParser.WHERE:
                                case SQLiteParser.WITH:
                                case SQLiteParser.WINDOW:
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1414;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1411;
                                    this.schema_name();
                                    this.state = 1412;
                                    this.match(SQLiteParser.DOT);
                                }
                                break;
                        }
                        this.state = 1416;
                        this.table_function_name();
                        this.state = 1417;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1418;
                        this.expr(0);
                        this.state = 1423;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1419;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1420;
                                    this.expr(0);
                                }
                            }
                            this.state = 1425;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1426;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1431;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 201, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1428;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 200, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1427;
                                                this.match(SQLiteParser.AS);
                                            }
                                            break;
                                    }
                                    this.state = 1430;
                                    this.table_alias();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1433;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1443;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 203, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1434;
                                    this.table_or_subquery();
                                    this.state = 1439;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1435;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1436;
                                                this.table_or_subquery();
                                            }
                                        }
                                        this.state = 1441;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1442;
                                    this.join_clause();
                                }
                                break;
                        }
                        this.state = 1445;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1447;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1448;
                        this.select_stmt();
                        this.state = 1449;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1454;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 205, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1451;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 204, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1450;
                                                this.match(SQLiteParser.AS);
                                            }
                                            break;
                                    }
                                    this.state = 1453;
                                    this.table_alias();
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    result_column() {
        let _localctx = new Result_columnContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, SQLiteParser.RULE_result_column);
        let _la;
        try {
            this.state = 1470;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 209, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1458;
                        this.match(SQLiteParser.STAR);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1459;
                        this.table_name();
                        this.state = 1460;
                        this.match(SQLiteParser.DOT);
                        this.state = 1461;
                        this.match(SQLiteParser.STAR);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1463;
                        this.expr(0);
                        this.state = 1468;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.AS || _la === SQLiteParser.IDENTIFIER || _la === SQLiteParser.STRING_LITERAL) {
                            {
                                this.state = 1465;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SQLiteParser.AS) {
                                    {
                                        this.state = 1464;
                                        this.match(SQLiteParser.AS);
                                    }
                                }
                                this.state = 1467;
                                this.column_alias();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    join_operator() {
        let _localctx = new Join_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, SQLiteParser.RULE_join_operator);
        let _la;
        try {
            this.state = 1485;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.COMMA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1472;
                        this.match(SQLiteParser.COMMA);
                    }
                    break;
                case SQLiteParser.CROSS:
                case SQLiteParser.FULL:
                case SQLiteParser.INNER:
                case SQLiteParser.JOIN:
                case SQLiteParser.LEFT:
                case SQLiteParser.NATURAL:
                case SQLiteParser.RIGHT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1474;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.NATURAL) {
                            {
                                this.state = 1473;
                                this.match(SQLiteParser.NATURAL);
                            }
                        }
                        this.state = 1482;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SQLiteParser.FULL:
                            case SQLiteParser.LEFT:
                            case SQLiteParser.RIGHT:
                                {
                                    this.state = 1476;
                                    _la = this._input.LA(1);
                                    if (!(_la === SQLiteParser.FULL || _la === SQLiteParser.LEFT || _la === SQLiteParser.RIGHT)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1478;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === SQLiteParser.OUTER) {
                                        {
                                            this.state = 1477;
                                            this.match(SQLiteParser.OUTER);
                                        }
                                    }
                                }
                                break;
                            case SQLiteParser.INNER:
                                {
                                    this.state = 1480;
                                    this.match(SQLiteParser.INNER);
                                }
                                break;
                            case SQLiteParser.CROSS:
                                {
                                    this.state = 1481;
                                    this.match(SQLiteParser.CROSS);
                                }
                                break;
                            case SQLiteParser.JOIN:
                                break;
                            default:
                                break;
                        }
                        this.state = 1484;
                        this.match(SQLiteParser.JOIN);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    join_constraint() {
        let _localctx = new Join_constraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, SQLiteParser.RULE_join_constraint);
        let _la;
        try {
            this.state = 1501;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.ON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1487;
                        this.match(SQLiteParser.ON);
                        this.state = 1488;
                        this.expr(0);
                    }
                    break;
                case SQLiteParser.USING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1489;
                        this.match(SQLiteParser.USING);
                        this.state = 1490;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1491;
                        this.column_name();
                        this.state = 1496;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1492;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1493;
                                    this.column_name();
                                }
                            }
                            this.state = 1498;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1499;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compound_operator() {
        let _localctx = new Compound_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, SQLiteParser.RULE_compound_operator);
        let _la;
        try {
            this.state = 1509;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.UNION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1503;
                        this.match(SQLiteParser.UNION);
                        this.state = 1505;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.ALL) {
                            {
                                this.state = 1504;
                                this.match(SQLiteParser.ALL);
                            }
                        }
                    }
                    break;
                case SQLiteParser.INTERSECT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1507;
                        this.match(SQLiteParser.INTERSECT);
                    }
                    break;
                case SQLiteParser.EXCEPT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1508;
                        this.match(SQLiteParser.EXCEPT);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    update_stmt() {
        let _localctx = new Update_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, SQLiteParser.RULE_update_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1512;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 1511;
                        this.with_clause();
                    }
                }
                this.state = 1514;
                this.match(SQLiteParser.UPDATE);
                this.state = 1517;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 219, this._ctx)) {
                    case 1:
                        {
                            this.state = 1515;
                            this.match(SQLiteParser.OR);
                            this.state = 1516;
                            _la = this._input.LA(1);
                            if (!(_la === SQLiteParser.ABORT || _la === SQLiteParser.FAIL || _la === SQLiteParser.IGNORE || _la === SQLiteParser.REPLACE || _la === SQLiteParser.ROLLBACK)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1519;
                this.qualified_table_name();
                this.state = 1520;
                this.match(SQLiteParser.SET);
                this.state = 1523;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 220, this._ctx)) {
                    case 1:
                        {
                            this.state = 1521;
                            this.column_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1522;
                            this.column_name_list();
                        }
                        break;
                }
                this.state = 1525;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1526;
                this.expr(0);
                this.state = 1537;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1527;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1530;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 221, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1528;
                                        this.column_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1529;
                                        this.column_name_list();
                                    }
                                    break;
                            }
                            this.state = 1532;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 1533;
                            this.expr(0);
                        }
                    }
                    this.state = 1539;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1552;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.FROM) {
                    {
                        this.state = 1540;
                        this.match(SQLiteParser.FROM);
                        this.state = 1550;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 224, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1541;
                                    this.table_or_subquery();
                                    this.state = 1546;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1542;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1543;
                                                this.table_or_subquery();
                                            }
                                        }
                                        this.state = 1548;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1549;
                                    this.join_clause();
                                }
                                break;
                        }
                    }
                }
                this.state = 1556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WHERE) {
                    {
                        this.state = 1554;
                        this.match(SQLiteParser.WHERE);
                        this.state = 1555;
                        this.expr(0);
                    }
                }
                this.state = 1559;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.RETURNING) {
                    {
                        this.state = 1558;
                        this.returning_clause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    column_name_list() {
        let _localctx = new Column_name_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, SQLiteParser.RULE_column_name_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1561;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1562;
                this.column_name();
                this.state = 1567;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1563;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1564;
                            this.column_name();
                        }
                    }
                    this.state = 1569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1570;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    update_stmt_limited() {
        let _localctx = new Update_stmt_limitedContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, SQLiteParser.RULE_update_stmt_limited);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WITH) {
                    {
                        this.state = 1572;
                        this.with_clause();
                    }
                }
                this.state = 1575;
                this.match(SQLiteParser.UPDATE);
                this.state = 1578;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 230, this._ctx)) {
                    case 1:
                        {
                            this.state = 1576;
                            this.match(SQLiteParser.OR);
                            this.state = 1577;
                            _la = this._input.LA(1);
                            if (!(_la === SQLiteParser.ABORT || _la === SQLiteParser.FAIL || _la === SQLiteParser.IGNORE || _la === SQLiteParser.REPLACE || _la === SQLiteParser.ROLLBACK)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1580;
                this.qualified_table_name();
                this.state = 1581;
                this.match(SQLiteParser.SET);
                this.state = 1584;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 231, this._ctx)) {
                    case 1:
                        {
                            this.state = 1582;
                            this.column_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1583;
                            this.column_name_list();
                        }
                        break;
                }
                this.state = 1586;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1587;
                this.expr(0);
                this.state = 1598;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1588;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1591;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 232, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1589;
                                        this.column_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1590;
                                        this.column_name_list();
                                    }
                                    break;
                            }
                            this.state = 1593;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 1594;
                            this.expr(0);
                        }
                    }
                    this.state = 1600;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1603;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.WHERE) {
                    {
                        this.state = 1601;
                        this.match(SQLiteParser.WHERE);
                        this.state = 1602;
                        this.expr(0);
                    }
                }
                this.state = 1606;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.RETURNING) {
                    {
                        this.state = 1605;
                        this.returning_clause();
                    }
                }
                this.state = 1612;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.LIMIT || _la === SQLiteParser.ORDER) {
                    {
                        this.state = 1609;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.ORDER) {
                            {
                                this.state = 1608;
                                this.order_by_stmt();
                            }
                        }
                        this.state = 1611;
                        this.limit_stmt();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualified_table_name() {
        let _localctx = new Qualified_table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, SQLiteParser.RULE_qualified_table_name);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1617;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 238, this._ctx)) {
                    case 1:
                        {
                            this.state = 1614;
                            this.schema_name();
                            this.state = 1615;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 1619;
                this.table_name();
                this.state = 1622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.AS) {
                    {
                        this.state = 1620;
                        this.match(SQLiteParser.AS);
                        this.state = 1621;
                        this.alias();
                    }
                }
                this.state = 1629;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.INDEXED:
                        {
                            this.state = 1624;
                            this.match(SQLiteParser.INDEXED);
                            this.state = 1625;
                            this.match(SQLiteParser.BY);
                            this.state = 1626;
                            this.index_name();
                        }
                        break;
                    case SQLiteParser.NOT:
                        {
                            this.state = 1627;
                            this.match(SQLiteParser.NOT);
                            this.state = 1628;
                            this.match(SQLiteParser.INDEXED);
                        }
                        break;
                    case SQLiteParser.EOF:
                    case SQLiteParser.SCOL:
                    case SQLiteParser.ALTER:
                    case SQLiteParser.ANALYZE:
                    case SQLiteParser.ATTACH:
                    case SQLiteParser.BEGIN:
                    case SQLiteParser.COMMIT:
                    case SQLiteParser.CREATE:
                    case SQLiteParser.DELETE:
                    case SQLiteParser.DETACH:
                    case SQLiteParser.DROP:
                    case SQLiteParser.END:
                    case SQLiteParser.EXPLAIN:
                    case SQLiteParser.INSERT:
                    case SQLiteParser.LIMIT:
                    case SQLiteParser.ORDER:
                    case SQLiteParser.PRAGMA:
                    case SQLiteParser.REINDEX:
                    case SQLiteParser.RELEASE:
                    case SQLiteParser.REPLACE:
                    case SQLiteParser.RETURNING:
                    case SQLiteParser.ROLLBACK:
                    case SQLiteParser.SAVEPOINT:
                    case SQLiteParser.SELECT:
                    case SQLiteParser.SET:
                    case SQLiteParser.UPDATE:
                    case SQLiteParser.VACUUM:
                    case SQLiteParser.VALUES:
                    case SQLiteParser.WHERE:
                    case SQLiteParser.WITH:
                        break;
                    default:
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    vacuum_stmt() {
        let _localctx = new Vacuum_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, SQLiteParser.RULE_vacuum_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1631;
                this.match(SQLiteParser.VACUUM);
                this.state = 1633;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 241, this._ctx)) {
                    case 1:
                        {
                            this.state = 1632;
                            this.schema_name();
                        }
                        break;
                }
                this.state = 1637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.INTO) {
                    {
                        this.state = 1635;
                        this.match(SQLiteParser.INTO);
                        this.state = 1636;
                        this.filename();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    filter_clause() {
        let _localctx = new Filter_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, SQLiteParser.RULE_filter_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1639;
                this.match(SQLiteParser.FILTER);
                this.state = 1640;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1641;
                this.match(SQLiteParser.WHERE);
                this.state = 1642;
                this.expr(0);
                this.state = 1643;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    window_defn() {
        let _localctx = new Window_defnContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, SQLiteParser.RULE_window_defn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1645;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1647;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 243, this._ctx)) {
                    case 1:
                        {
                            this.state = 1646;
                            this.base_window_name();
                        }
                        break;
                }
                this.state = 1659;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.PARTITION) {
                    {
                        this.state = 1649;
                        this.match(SQLiteParser.PARTITION);
                        this.state = 1650;
                        this.match(SQLiteParser.BY);
                        this.state = 1651;
                        this.expr(0);
                        this.state = 1656;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SQLiteParser.COMMA) {
                            {
                                {
                                    this.state = 1652;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1653;
                                    this.expr(0);
                                }
                            }
                            this.state = 1658;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                {
                    this.state = 1661;
                    this.match(SQLiteParser.ORDER);
                    this.state = 1662;
                    this.match(SQLiteParser.BY);
                    this.state = 1663;
                    this.ordering_term();
                    this.state = 1668;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === SQLiteParser.COMMA) {
                        {
                            {
                                this.state = 1664;
                                this.match(SQLiteParser.COMMA);
                                this.state = 1665;
                                this.ordering_term();
                            }
                        }
                        this.state = 1670;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 1672;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ROWS || _la === SQLiteParser.RANGE || _la === SQLiteParser.GROUPS) {
                    {
                        this.state = 1671;
                        this.frame_spec();
                    }
                }
                this.state = 1674;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    over_clause() {
        let _localctx = new Over_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, SQLiteParser.RULE_over_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1676;
                this.match(SQLiteParser.OVER);
                this.state = 1710;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 254, this._ctx)) {
                    case 1:
                        {
                            this.state = 1677;
                            this.window_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1678;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1680;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 248, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1679;
                                        this.base_window_name();
                                    }
                                    break;
                            }
                            this.state = 1692;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.PARTITION) {
                                {
                                    this.state = 1682;
                                    this.match(SQLiteParser.PARTITION);
                                    this.state = 1683;
                                    this.match(SQLiteParser.BY);
                                    this.state = 1684;
                                    this.expr(0);
                                    this.state = 1689;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1685;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1686;
                                                this.expr(0);
                                            }
                                        }
                                        this.state = 1691;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1704;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.ORDER) {
                                {
                                    this.state = 1694;
                                    this.match(SQLiteParser.ORDER);
                                    this.state = 1695;
                                    this.match(SQLiteParser.BY);
                                    this.state = 1696;
                                    this.ordering_term();
                                    this.state = 1701;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SQLiteParser.COMMA) {
                                        {
                                            {
                                                this.state = 1697;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1698;
                                                this.ordering_term();
                                            }
                                        }
                                        this.state = 1703;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1707;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.ROWS || _la === SQLiteParser.RANGE || _la === SQLiteParser.GROUPS) {
                                {
                                    this.state = 1706;
                                    this.frame_spec();
                                }
                            }
                            this.state = 1709;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    frame_spec() {
        let _localctx = new Frame_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, SQLiteParser.RULE_frame_spec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1712;
                this.frame_clause();
                this.state = 1722;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.EXCLUDE) {
                    {
                        this.state = 1713;
                        this.match(SQLiteParser.EXCLUDE);
                        this.state = 1720;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case SQLiteParser.NO:
                                {
                                    this.state = 1714;
                                    this.match(SQLiteParser.NO);
                                    this.state = 1715;
                                    this.match(SQLiteParser.OTHERS);
                                }
                                break;
                            case SQLiteParser.CURRENT:
                                {
                                    this.state = 1716;
                                    this.match(SQLiteParser.CURRENT);
                                    this.state = 1717;
                                    this.match(SQLiteParser.ROW);
                                }
                                break;
                            case SQLiteParser.GROUP:
                                {
                                    this.state = 1718;
                                    this.match(SQLiteParser.GROUP);
                                }
                                break;
                            case SQLiteParser.TIES:
                                {
                                    this.state = 1719;
                                    this.match(SQLiteParser.TIES);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    frame_clause() {
        let _localctx = new Frame_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, SQLiteParser.RULE_frame_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1724;
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.ROWS || _la === SQLiteParser.RANGE || _la === SQLiteParser.GROUPS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1731;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 257, this._ctx)) {
                    case 1:
                        {
                            this.state = 1725;
                            this.frame_single();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1726;
                            this.match(SQLiteParser.BETWEEN);
                            this.state = 1727;
                            this.frame_left();
                            this.state = 1728;
                            this.match(SQLiteParser.AND);
                            this.state = 1729;
                            this.frame_right();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simple_function_invocation() {
        let _localctx = new Simple_function_invocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, SQLiteParser.RULE_simple_function_invocation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1733;
                this.simple_func();
                this.state = 1734;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1744;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                    case SQLiteParser.PLUS:
                    case SQLiteParser.MINUS:
                    case SQLiteParser.TILDE:
                    case SQLiteParser.ABORT:
                    case SQLiteParser.ACTION:
                    case SQLiteParser.ADD:
                    case SQLiteParser.AFTER:
                    case SQLiteParser.ALL:
                    case SQLiteParser.ALTER:
                    case SQLiteParser.ANALYZE:
                    case SQLiteParser.AND:
                    case SQLiteParser.AS:
                    case SQLiteParser.ASC:
                    case SQLiteParser.ATTACH:
                    case SQLiteParser.AUTOINCREMENT:
                    case SQLiteParser.BEFORE:
                    case SQLiteParser.BEGIN:
                    case SQLiteParser.BETWEEN:
                    case SQLiteParser.BY:
                    case SQLiteParser.CASCADE:
                    case SQLiteParser.CASE:
                    case SQLiteParser.CAST:
                    case SQLiteParser.CHECK:
                    case SQLiteParser.COLLATE:
                    case SQLiteParser.COLUMN:
                    case SQLiteParser.COMMIT:
                    case SQLiteParser.CONFLICT:
                    case SQLiteParser.CONSTRAINT:
                    case SQLiteParser.CREATE:
                    case SQLiteParser.CROSS:
                    case SQLiteParser.CURRENT_DATE:
                    case SQLiteParser.CURRENT_TIME:
                    case SQLiteParser.CURRENT_TIMESTAMP:
                    case SQLiteParser.DATABASE:
                    case SQLiteParser.DEFAULT:
                    case SQLiteParser.DEFERRABLE:
                    case SQLiteParser.DEFERRED:
                    case SQLiteParser.DELETE:
                    case SQLiteParser.DESC:
                    case SQLiteParser.DETACH:
                    case SQLiteParser.DISTINCT:
                    case SQLiteParser.DROP:
                    case SQLiteParser.EACH:
                    case SQLiteParser.ELSE:
                    case SQLiteParser.END:
                    case SQLiteParser.ESCAPE:
                    case SQLiteParser.EXCEPT:
                    case SQLiteParser.EXCLUSIVE:
                    case SQLiteParser.EXISTS:
                    case SQLiteParser.EXPLAIN:
                    case SQLiteParser.FAIL:
                    case SQLiteParser.FOR:
                    case SQLiteParser.FOREIGN:
                    case SQLiteParser.FROM:
                    case SQLiteParser.FULL:
                    case SQLiteParser.GLOB:
                    case SQLiteParser.GROUP:
                    case SQLiteParser.HAVING:
                    case SQLiteParser.IF:
                    case SQLiteParser.IGNORE:
                    case SQLiteParser.IMMEDIATE:
                    case SQLiteParser.IN:
                    case SQLiteParser.INDEX:
                    case SQLiteParser.INDEXED:
                    case SQLiteParser.INITIALLY:
                    case SQLiteParser.INNER:
                    case SQLiteParser.INSERT:
                    case SQLiteParser.INSTEAD:
                    case SQLiteParser.INTERSECT:
                    case SQLiteParser.INTO:
                    case SQLiteParser.IS:
                    case SQLiteParser.ISNULL:
                    case SQLiteParser.JOIN:
                    case SQLiteParser.KEY:
                    case SQLiteParser.LEFT:
                    case SQLiteParser.LIKE:
                    case SQLiteParser.LIMIT:
                    case SQLiteParser.MATCH:
                    case SQLiteParser.NATURAL:
                    case SQLiteParser.NO:
                    case SQLiteParser.NOT:
                    case SQLiteParser.NOTNULL:
                    case SQLiteParser.NULL:
                    case SQLiteParser.OF:
                    case SQLiteParser.OFFSET:
                    case SQLiteParser.ON:
                    case SQLiteParser.OR:
                    case SQLiteParser.ORDER:
                    case SQLiteParser.OUTER:
                    case SQLiteParser.PLAN:
                    case SQLiteParser.PRAGMA:
                    case SQLiteParser.PRIMARY:
                    case SQLiteParser.QUERY:
                    case SQLiteParser.RAISE:
                    case SQLiteParser.RECURSIVE:
                    case SQLiteParser.REFERENCES:
                    case SQLiteParser.REGEXP:
                    case SQLiteParser.REINDEX:
                    case SQLiteParser.RELEASE:
                    case SQLiteParser.RENAME:
                    case SQLiteParser.REPLACE:
                    case SQLiteParser.RESTRICT:
                    case SQLiteParser.RETURNING:
                    case SQLiteParser.RIGHT:
                    case SQLiteParser.ROLLBACK:
                    case SQLiteParser.ROW:
                    case SQLiteParser.ROWS:
                    case SQLiteParser.SAVEPOINT:
                    case SQLiteParser.SELECT:
                    case SQLiteParser.SET:
                    case SQLiteParser.TABLE:
                    case SQLiteParser.TEMP:
                    case SQLiteParser.TEMPORARY:
                    case SQLiteParser.THEN:
                    case SQLiteParser.TO:
                    case SQLiteParser.TRANSACTION:
                    case SQLiteParser.TRIGGER:
                    case SQLiteParser.UNION:
                    case SQLiteParser.UNIQUE:
                    case SQLiteParser.UPDATE:
                    case SQLiteParser.USING:
                    case SQLiteParser.VACUUM:
                    case SQLiteParser.VALUES:
                    case SQLiteParser.VIEW:
                    case SQLiteParser.VIRTUAL:
                    case SQLiteParser.WHEN:
                    case SQLiteParser.WHERE:
                    case SQLiteParser.WITH:
                    case SQLiteParser.WITHOUT:
                    case SQLiteParser.FIRST_VALUE:
                    case SQLiteParser.OVER:
                    case SQLiteParser.PARTITION:
                    case SQLiteParser.RANGE:
                    case SQLiteParser.PRECEDING:
                    case SQLiteParser.UNBOUNDED:
                    case SQLiteParser.CURRENT:
                    case SQLiteParser.FOLLOWING:
                    case SQLiteParser.CUME_DIST:
                    case SQLiteParser.DENSE_RANK:
                    case SQLiteParser.LAG:
                    case SQLiteParser.LAST_VALUE:
                    case SQLiteParser.LEAD:
                    case SQLiteParser.NTH_VALUE:
                    case SQLiteParser.NTILE:
                    case SQLiteParser.PERCENT_RANK:
                    case SQLiteParser.RANK:
                    case SQLiteParser.ROW_NUMBER:
                    case SQLiteParser.GENERATED:
                    case SQLiteParser.ALWAYS:
                    case SQLiteParser.STORED:
                    case SQLiteParser.TRUE:
                    case SQLiteParser.FALSE:
                    case SQLiteParser.WINDOW:
                    case SQLiteParser.NULLS:
                    case SQLiteParser.FIRST:
                    case SQLiteParser.LAST:
                    case SQLiteParser.FILTER:
                    case SQLiteParser.GROUPS:
                    case SQLiteParser.EXCLUDE:
                    case SQLiteParser.TIES:
                    case SQLiteParser.OTHERS:
                    case SQLiteParser.DO:
                    case SQLiteParser.NOTHING:
                    case SQLiteParser.IDENTIFIER:
                    case SQLiteParser.NUMERIC_LITERAL:
                    case SQLiteParser.BIND_PARAMETER:
                    case SQLiteParser.STRING_LITERAL:
                    case SQLiteParser.BLOB_LITERAL:
                        {
                            this.state = 1735;
                            this.expr(0);
                            this.state = 1740;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 1736;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1737;
                                        this.expr(0);
                                    }
                                }
                                this.state = 1742;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case SQLiteParser.STAR:
                        {
                            this.state = 1743;
                            this.match(SQLiteParser.STAR);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1746;
                this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_function_invocation() {
        let _localctx = new Aggregate_function_invocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, SQLiteParser.RULE_aggregate_function_invocation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1748;
                this.aggregate_func();
                this.state = 1749;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1762;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                    case SQLiteParser.PLUS:
                    case SQLiteParser.MINUS:
                    case SQLiteParser.TILDE:
                    case SQLiteParser.ABORT:
                    case SQLiteParser.ACTION:
                    case SQLiteParser.ADD:
                    case SQLiteParser.AFTER:
                    case SQLiteParser.ALL:
                    case SQLiteParser.ALTER:
                    case SQLiteParser.ANALYZE:
                    case SQLiteParser.AND:
                    case SQLiteParser.AS:
                    case SQLiteParser.ASC:
                    case SQLiteParser.ATTACH:
                    case SQLiteParser.AUTOINCREMENT:
                    case SQLiteParser.BEFORE:
                    case SQLiteParser.BEGIN:
                    case SQLiteParser.BETWEEN:
                    case SQLiteParser.BY:
                    case SQLiteParser.CASCADE:
                    case SQLiteParser.CASE:
                    case SQLiteParser.CAST:
                    case SQLiteParser.CHECK:
                    case SQLiteParser.COLLATE:
                    case SQLiteParser.COLUMN:
                    case SQLiteParser.COMMIT:
                    case SQLiteParser.CONFLICT:
                    case SQLiteParser.CONSTRAINT:
                    case SQLiteParser.CREATE:
                    case SQLiteParser.CROSS:
                    case SQLiteParser.CURRENT_DATE:
                    case SQLiteParser.CURRENT_TIME:
                    case SQLiteParser.CURRENT_TIMESTAMP:
                    case SQLiteParser.DATABASE:
                    case SQLiteParser.DEFAULT:
                    case SQLiteParser.DEFERRABLE:
                    case SQLiteParser.DEFERRED:
                    case SQLiteParser.DELETE:
                    case SQLiteParser.DESC:
                    case SQLiteParser.DETACH:
                    case SQLiteParser.DISTINCT:
                    case SQLiteParser.DROP:
                    case SQLiteParser.EACH:
                    case SQLiteParser.ELSE:
                    case SQLiteParser.END:
                    case SQLiteParser.ESCAPE:
                    case SQLiteParser.EXCEPT:
                    case SQLiteParser.EXCLUSIVE:
                    case SQLiteParser.EXISTS:
                    case SQLiteParser.EXPLAIN:
                    case SQLiteParser.FAIL:
                    case SQLiteParser.FOR:
                    case SQLiteParser.FOREIGN:
                    case SQLiteParser.FROM:
                    case SQLiteParser.FULL:
                    case SQLiteParser.GLOB:
                    case SQLiteParser.GROUP:
                    case SQLiteParser.HAVING:
                    case SQLiteParser.IF:
                    case SQLiteParser.IGNORE:
                    case SQLiteParser.IMMEDIATE:
                    case SQLiteParser.IN:
                    case SQLiteParser.INDEX:
                    case SQLiteParser.INDEXED:
                    case SQLiteParser.INITIALLY:
                    case SQLiteParser.INNER:
                    case SQLiteParser.INSERT:
                    case SQLiteParser.INSTEAD:
                    case SQLiteParser.INTERSECT:
                    case SQLiteParser.INTO:
                    case SQLiteParser.IS:
                    case SQLiteParser.ISNULL:
                    case SQLiteParser.JOIN:
                    case SQLiteParser.KEY:
                    case SQLiteParser.LEFT:
                    case SQLiteParser.LIKE:
                    case SQLiteParser.LIMIT:
                    case SQLiteParser.MATCH:
                    case SQLiteParser.NATURAL:
                    case SQLiteParser.NO:
                    case SQLiteParser.NOT:
                    case SQLiteParser.NOTNULL:
                    case SQLiteParser.NULL:
                    case SQLiteParser.OF:
                    case SQLiteParser.OFFSET:
                    case SQLiteParser.ON:
                    case SQLiteParser.OR:
                    case SQLiteParser.ORDER:
                    case SQLiteParser.OUTER:
                    case SQLiteParser.PLAN:
                    case SQLiteParser.PRAGMA:
                    case SQLiteParser.PRIMARY:
                    case SQLiteParser.QUERY:
                    case SQLiteParser.RAISE:
                    case SQLiteParser.RECURSIVE:
                    case SQLiteParser.REFERENCES:
                    case SQLiteParser.REGEXP:
                    case SQLiteParser.REINDEX:
                    case SQLiteParser.RELEASE:
                    case SQLiteParser.RENAME:
                    case SQLiteParser.REPLACE:
                    case SQLiteParser.RESTRICT:
                    case SQLiteParser.RETURNING:
                    case SQLiteParser.RIGHT:
                    case SQLiteParser.ROLLBACK:
                    case SQLiteParser.ROW:
                    case SQLiteParser.ROWS:
                    case SQLiteParser.SAVEPOINT:
                    case SQLiteParser.SELECT:
                    case SQLiteParser.SET:
                    case SQLiteParser.TABLE:
                    case SQLiteParser.TEMP:
                    case SQLiteParser.TEMPORARY:
                    case SQLiteParser.THEN:
                    case SQLiteParser.TO:
                    case SQLiteParser.TRANSACTION:
                    case SQLiteParser.TRIGGER:
                    case SQLiteParser.UNION:
                    case SQLiteParser.UNIQUE:
                    case SQLiteParser.UPDATE:
                    case SQLiteParser.USING:
                    case SQLiteParser.VACUUM:
                    case SQLiteParser.VALUES:
                    case SQLiteParser.VIEW:
                    case SQLiteParser.VIRTUAL:
                    case SQLiteParser.WHEN:
                    case SQLiteParser.WHERE:
                    case SQLiteParser.WITH:
                    case SQLiteParser.WITHOUT:
                    case SQLiteParser.FIRST_VALUE:
                    case SQLiteParser.OVER:
                    case SQLiteParser.PARTITION:
                    case SQLiteParser.RANGE:
                    case SQLiteParser.PRECEDING:
                    case SQLiteParser.UNBOUNDED:
                    case SQLiteParser.CURRENT:
                    case SQLiteParser.FOLLOWING:
                    case SQLiteParser.CUME_DIST:
                    case SQLiteParser.DENSE_RANK:
                    case SQLiteParser.LAG:
                    case SQLiteParser.LAST_VALUE:
                    case SQLiteParser.LEAD:
                    case SQLiteParser.NTH_VALUE:
                    case SQLiteParser.NTILE:
                    case SQLiteParser.PERCENT_RANK:
                    case SQLiteParser.RANK:
                    case SQLiteParser.ROW_NUMBER:
                    case SQLiteParser.GENERATED:
                    case SQLiteParser.ALWAYS:
                    case SQLiteParser.STORED:
                    case SQLiteParser.TRUE:
                    case SQLiteParser.FALSE:
                    case SQLiteParser.WINDOW:
                    case SQLiteParser.NULLS:
                    case SQLiteParser.FIRST:
                    case SQLiteParser.LAST:
                    case SQLiteParser.FILTER:
                    case SQLiteParser.GROUPS:
                    case SQLiteParser.EXCLUDE:
                    case SQLiteParser.TIES:
                    case SQLiteParser.OTHERS:
                    case SQLiteParser.DO:
                    case SQLiteParser.NOTHING:
                    case SQLiteParser.IDENTIFIER:
                    case SQLiteParser.NUMERIC_LITERAL:
                    case SQLiteParser.BIND_PARAMETER:
                    case SQLiteParser.STRING_LITERAL:
                    case SQLiteParser.BLOB_LITERAL:
                        {
                            this.state = 1751;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 260, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1750;
                                        this.match(SQLiteParser.DISTINCT);
                                    }
                                    break;
                            }
                            this.state = 1753;
                            this.expr(0);
                            this.state = 1758;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 1754;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1755;
                                        this.expr(0);
                                    }
                                }
                                this.state = 1760;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case SQLiteParser.STAR:
                        {
                            this.state = 1761;
                            this.match(SQLiteParser.STAR);
                        }
                        break;
                    case SQLiteParser.CLOSE_PAR:
                        break;
                    default:
                        break;
                }
                this.state = 1764;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.FILTER) {
                    {
                        this.state = 1765;
                        this.filter_clause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    window_function_invocation() {
        let _localctx = new Window_function_invocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, SQLiteParser.RULE_window_function_invocation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1768;
                this.window_function();
                this.state = 1769;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1779;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                    case SQLiteParser.PLUS:
                    case SQLiteParser.MINUS:
                    case SQLiteParser.TILDE:
                    case SQLiteParser.ABORT:
                    case SQLiteParser.ACTION:
                    case SQLiteParser.ADD:
                    case SQLiteParser.AFTER:
                    case SQLiteParser.ALL:
                    case SQLiteParser.ALTER:
                    case SQLiteParser.ANALYZE:
                    case SQLiteParser.AND:
                    case SQLiteParser.AS:
                    case SQLiteParser.ASC:
                    case SQLiteParser.ATTACH:
                    case SQLiteParser.AUTOINCREMENT:
                    case SQLiteParser.BEFORE:
                    case SQLiteParser.BEGIN:
                    case SQLiteParser.BETWEEN:
                    case SQLiteParser.BY:
                    case SQLiteParser.CASCADE:
                    case SQLiteParser.CASE:
                    case SQLiteParser.CAST:
                    case SQLiteParser.CHECK:
                    case SQLiteParser.COLLATE:
                    case SQLiteParser.COLUMN:
                    case SQLiteParser.COMMIT:
                    case SQLiteParser.CONFLICT:
                    case SQLiteParser.CONSTRAINT:
                    case SQLiteParser.CREATE:
                    case SQLiteParser.CROSS:
                    case SQLiteParser.CURRENT_DATE:
                    case SQLiteParser.CURRENT_TIME:
                    case SQLiteParser.CURRENT_TIMESTAMP:
                    case SQLiteParser.DATABASE:
                    case SQLiteParser.DEFAULT:
                    case SQLiteParser.DEFERRABLE:
                    case SQLiteParser.DEFERRED:
                    case SQLiteParser.DELETE:
                    case SQLiteParser.DESC:
                    case SQLiteParser.DETACH:
                    case SQLiteParser.DISTINCT:
                    case SQLiteParser.DROP:
                    case SQLiteParser.EACH:
                    case SQLiteParser.ELSE:
                    case SQLiteParser.END:
                    case SQLiteParser.ESCAPE:
                    case SQLiteParser.EXCEPT:
                    case SQLiteParser.EXCLUSIVE:
                    case SQLiteParser.EXISTS:
                    case SQLiteParser.EXPLAIN:
                    case SQLiteParser.FAIL:
                    case SQLiteParser.FOR:
                    case SQLiteParser.FOREIGN:
                    case SQLiteParser.FROM:
                    case SQLiteParser.FULL:
                    case SQLiteParser.GLOB:
                    case SQLiteParser.GROUP:
                    case SQLiteParser.HAVING:
                    case SQLiteParser.IF:
                    case SQLiteParser.IGNORE:
                    case SQLiteParser.IMMEDIATE:
                    case SQLiteParser.IN:
                    case SQLiteParser.INDEX:
                    case SQLiteParser.INDEXED:
                    case SQLiteParser.INITIALLY:
                    case SQLiteParser.INNER:
                    case SQLiteParser.INSERT:
                    case SQLiteParser.INSTEAD:
                    case SQLiteParser.INTERSECT:
                    case SQLiteParser.INTO:
                    case SQLiteParser.IS:
                    case SQLiteParser.ISNULL:
                    case SQLiteParser.JOIN:
                    case SQLiteParser.KEY:
                    case SQLiteParser.LEFT:
                    case SQLiteParser.LIKE:
                    case SQLiteParser.LIMIT:
                    case SQLiteParser.MATCH:
                    case SQLiteParser.NATURAL:
                    case SQLiteParser.NO:
                    case SQLiteParser.NOT:
                    case SQLiteParser.NOTNULL:
                    case SQLiteParser.NULL:
                    case SQLiteParser.OF:
                    case SQLiteParser.OFFSET:
                    case SQLiteParser.ON:
                    case SQLiteParser.OR:
                    case SQLiteParser.ORDER:
                    case SQLiteParser.OUTER:
                    case SQLiteParser.PLAN:
                    case SQLiteParser.PRAGMA:
                    case SQLiteParser.PRIMARY:
                    case SQLiteParser.QUERY:
                    case SQLiteParser.RAISE:
                    case SQLiteParser.RECURSIVE:
                    case SQLiteParser.REFERENCES:
                    case SQLiteParser.REGEXP:
                    case SQLiteParser.REINDEX:
                    case SQLiteParser.RELEASE:
                    case SQLiteParser.RENAME:
                    case SQLiteParser.REPLACE:
                    case SQLiteParser.RESTRICT:
                    case SQLiteParser.RETURNING:
                    case SQLiteParser.RIGHT:
                    case SQLiteParser.ROLLBACK:
                    case SQLiteParser.ROW:
                    case SQLiteParser.ROWS:
                    case SQLiteParser.SAVEPOINT:
                    case SQLiteParser.SELECT:
                    case SQLiteParser.SET:
                    case SQLiteParser.TABLE:
                    case SQLiteParser.TEMP:
                    case SQLiteParser.TEMPORARY:
                    case SQLiteParser.THEN:
                    case SQLiteParser.TO:
                    case SQLiteParser.TRANSACTION:
                    case SQLiteParser.TRIGGER:
                    case SQLiteParser.UNION:
                    case SQLiteParser.UNIQUE:
                    case SQLiteParser.UPDATE:
                    case SQLiteParser.USING:
                    case SQLiteParser.VACUUM:
                    case SQLiteParser.VALUES:
                    case SQLiteParser.VIEW:
                    case SQLiteParser.VIRTUAL:
                    case SQLiteParser.WHEN:
                    case SQLiteParser.WHERE:
                    case SQLiteParser.WITH:
                    case SQLiteParser.WITHOUT:
                    case SQLiteParser.FIRST_VALUE:
                    case SQLiteParser.OVER:
                    case SQLiteParser.PARTITION:
                    case SQLiteParser.RANGE:
                    case SQLiteParser.PRECEDING:
                    case SQLiteParser.UNBOUNDED:
                    case SQLiteParser.CURRENT:
                    case SQLiteParser.FOLLOWING:
                    case SQLiteParser.CUME_DIST:
                    case SQLiteParser.DENSE_RANK:
                    case SQLiteParser.LAG:
                    case SQLiteParser.LAST_VALUE:
                    case SQLiteParser.LEAD:
                    case SQLiteParser.NTH_VALUE:
                    case SQLiteParser.NTILE:
                    case SQLiteParser.PERCENT_RANK:
                    case SQLiteParser.RANK:
                    case SQLiteParser.ROW_NUMBER:
                    case SQLiteParser.GENERATED:
                    case SQLiteParser.ALWAYS:
                    case SQLiteParser.STORED:
                    case SQLiteParser.TRUE:
                    case SQLiteParser.FALSE:
                    case SQLiteParser.WINDOW:
                    case SQLiteParser.NULLS:
                    case SQLiteParser.FIRST:
                    case SQLiteParser.LAST:
                    case SQLiteParser.FILTER:
                    case SQLiteParser.GROUPS:
                    case SQLiteParser.EXCLUDE:
                    case SQLiteParser.TIES:
                    case SQLiteParser.OTHERS:
                    case SQLiteParser.DO:
                    case SQLiteParser.NOTHING:
                    case SQLiteParser.IDENTIFIER:
                    case SQLiteParser.NUMERIC_LITERAL:
                    case SQLiteParser.BIND_PARAMETER:
                    case SQLiteParser.STRING_LITERAL:
                    case SQLiteParser.BLOB_LITERAL:
                        {
                            this.state = 1770;
                            this.expr(0);
                            this.state = 1775;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SQLiteParser.COMMA) {
                                {
                                    {
                                        this.state = 1771;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1772;
                                        this.expr(0);
                                    }
                                }
                                this.state = 1777;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case SQLiteParser.STAR:
                        {
                            this.state = 1778;
                            this.match(SQLiteParser.STAR);
                        }
                        break;
                    case SQLiteParser.CLOSE_PAR:
                        break;
                    default:
                        break;
                }
                this.state = 1781;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1783;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.FILTER) {
                    {
                        this.state = 1782;
                        this.filter_clause();
                    }
                }
                this.state = 1785;
                this.match(SQLiteParser.OVER);
                this.state = 1788;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 267, this._ctx)) {
                    case 1:
                        {
                            this.state = 1786;
                            this.window_defn();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1787;
                            this.window_name();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    common_table_stmt() {
        let _localctx = new Common_table_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, SQLiteParser.RULE_common_table_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1790;
                this.match(SQLiteParser.WITH);
                this.state = 1792;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 268, this._ctx)) {
                    case 1:
                        {
                            this.state = 1791;
                            this.match(SQLiteParser.RECURSIVE);
                        }
                        break;
                }
                this.state = 1794;
                this.common_table_expression();
                this.state = 1799;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1795;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1796;
                            this.common_table_expression();
                        }
                    }
                    this.state = 1801;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    order_by_stmt() {
        let _localctx = new Order_by_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, SQLiteParser.RULE_order_by_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1802;
                this.match(SQLiteParser.ORDER);
                this.state = 1803;
                this.match(SQLiteParser.BY);
                this.state = 1804;
                this.ordering_term();
                this.state = 1809;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1805;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1806;
                            this.ordering_term();
                        }
                    }
                    this.state = 1811;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    limit_stmt() {
        let _localctx = new Limit_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, SQLiteParser.RULE_limit_stmt);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1812;
                this.match(SQLiteParser.LIMIT);
                this.state = 1813;
                this.expr(0);
                this.state = 1816;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.COMMA || _la === SQLiteParser.OFFSET) {
                    {
                        this.state = 1814;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.COMMA || _la === SQLiteParser.OFFSET)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1815;
                        this.expr(0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ordering_term() {
        let _localctx = new Ordering_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, SQLiteParser.RULE_ordering_term);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1818;
                this.expr(0);
                this.state = 1821;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.COLLATE) {
                    {
                        this.state = 1819;
                        this.match(SQLiteParser.COLLATE);
                        this.state = 1820;
                        this.collation_name();
                    }
                }
                this.state = 1824;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ASC || _la === SQLiteParser.DESC) {
                    {
                        this.state = 1823;
                        this.asc_desc();
                    }
                }
                this.state = 1828;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.NULLS) {
                    {
                        this.state = 1826;
                        this.match(SQLiteParser.NULLS);
                        this.state = 1827;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.FIRST || _la === SQLiteParser.LAST)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    asc_desc() {
        let _localctx = new Asc_descContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, SQLiteParser.RULE_asc_desc);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1830;
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.ASC || _la === SQLiteParser.DESC)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    frame_left() {
        let _localctx = new Frame_leftContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, SQLiteParser.RULE_frame_left);
        try {
            this.state = 1842;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 275, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1832;
                        this.expr(0);
                        this.state = 1833;
                        this.match(SQLiteParser.PRECEDING);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1835;
                        this.expr(0);
                        this.state = 1836;
                        this.match(SQLiteParser.FOLLOWING);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1838;
                        this.match(SQLiteParser.CURRENT);
                        this.state = 1839;
                        this.match(SQLiteParser.ROW);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1840;
                        this.match(SQLiteParser.UNBOUNDED);
                        this.state = 1841;
                        this.match(SQLiteParser.PRECEDING);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    frame_right() {
        let _localctx = new Frame_rightContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, SQLiteParser.RULE_frame_right);
        try {
            this.state = 1854;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 276, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1844;
                        this.expr(0);
                        this.state = 1845;
                        this.match(SQLiteParser.PRECEDING);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1847;
                        this.expr(0);
                        this.state = 1848;
                        this.match(SQLiteParser.FOLLOWING);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1850;
                        this.match(SQLiteParser.CURRENT);
                        this.state = 1851;
                        this.match(SQLiteParser.ROW);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1852;
                        this.match(SQLiteParser.UNBOUNDED);
                        this.state = 1853;
                        this.match(SQLiteParser.FOLLOWING);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    frame_single() {
        let _localctx = new Frame_singleContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, SQLiteParser.RULE_frame_single);
        try {
            this.state = 1863;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 277, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1856;
                        this.expr(0);
                        this.state = 1857;
                        this.match(SQLiteParser.PRECEDING);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1859;
                        this.match(SQLiteParser.UNBOUNDED);
                        this.state = 1860;
                        this.match(SQLiteParser.PRECEDING);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1861;
                        this.match(SQLiteParser.CURRENT);
                        this.state = 1862;
                        this.match(SQLiteParser.ROW);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    window_function() {
        let _localctx = new Window_functionContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, SQLiteParser.RULE_window_function);
        let _la;
        try {
            this.state = 1950;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.FIRST_VALUE:
                case SQLiteParser.LAST_VALUE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1865;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.FIRST_VALUE || _la === SQLiteParser.LAST_VALUE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1866;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1867;
                        this.expr(0);
                        this.state = 1868;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1869;
                        this.match(SQLiteParser.OVER);
                        this.state = 1870;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1872;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.PARTITION) {
                            {
                                this.state = 1871;
                                this.partition_by();
                            }
                        }
                        this.state = 1874;
                        this.order_by_expr_asc_desc();
                        this.state = 1876;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.ROWS || _la === SQLiteParser.RANGE || _la === SQLiteParser.GROUPS) {
                            {
                                this.state = 1875;
                                this.frame_clause();
                            }
                        }
                        this.state = 1878;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.CUME_DIST:
                case SQLiteParser.PERCENT_RANK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1880;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.CUME_DIST || _la === SQLiteParser.PERCENT_RANK)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1881;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1882;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1883;
                        this.match(SQLiteParser.OVER);
                        this.state = 1884;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1886;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.PARTITION) {
                            {
                                this.state = 1885;
                                this.partition_by();
                            }
                        }
                        this.state = 1889;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.ORDER) {
                            {
                                this.state = 1888;
                                this.order_by_expr();
                            }
                        }
                        this.state = 1891;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.DENSE_RANK:
                case SQLiteParser.RANK:
                case SQLiteParser.ROW_NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1892;
                        _la = this._input.LA(1);
                        if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (SQLiteParser.DENSE_RANK - 160)) | (1 << (SQLiteParser.RANK - 160)) | (1 << (SQLiteParser.ROW_NUMBER - 160)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1893;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1894;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1895;
                        this.match(SQLiteParser.OVER);
                        this.state = 1896;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1898;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.PARTITION) {
                            {
                                this.state = 1897;
                                this.partition_by();
                            }
                        }
                        this.state = 1900;
                        this.order_by_expr_asc_desc();
                        this.state = 1901;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.LAG:
                case SQLiteParser.LEAD:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1903;
                        _la = this._input.LA(1);
                        if (!(_la === SQLiteParser.LAG || _la === SQLiteParser.LEAD)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1904;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1905;
                        this.expr(0);
                        this.state = 1907;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 283, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1906;
                                    this.offset();
                                }
                                break;
                        }
                        this.state = 1910;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.COMMA) {
                            {
                                this.state = 1909;
                                this.default_value();
                            }
                        }
                        this.state = 1912;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1913;
                        this.match(SQLiteParser.OVER);
                        this.state = 1914;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1916;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.PARTITION) {
                            {
                                this.state = 1915;
                                this.partition_by();
                            }
                        }
                        this.state = 1918;
                        this.order_by_expr_asc_desc();
                        this.state = 1919;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.NTH_VALUE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1921;
                        this.match(SQLiteParser.NTH_VALUE);
                        this.state = 1922;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1923;
                        this.expr(0);
                        this.state = 1924;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1925;
                        this.signed_number();
                        this.state = 1926;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1927;
                        this.match(SQLiteParser.OVER);
                        this.state = 1928;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1930;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.PARTITION) {
                            {
                                this.state = 1929;
                                this.partition_by();
                            }
                        }
                        this.state = 1932;
                        this.order_by_expr_asc_desc();
                        this.state = 1934;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.ROWS || _la === SQLiteParser.RANGE || _la === SQLiteParser.GROUPS) {
                            {
                                this.state = 1933;
                                this.frame_clause();
                            }
                        }
                        this.state = 1936;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.NTILE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1938;
                        this.match(SQLiteParser.NTILE);
                        this.state = 1939;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1940;
                        this.expr(0);
                        this.state = 1941;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1942;
                        this.match(SQLiteParser.OVER);
                        this.state = 1943;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1945;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SQLiteParser.PARTITION) {
                            {
                                this.state = 1944;
                                this.partition_by();
                            }
                        }
                        this.state = 1947;
                        this.order_by_expr_asc_desc();
                        this.state = 1948;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    offset() {
        let _localctx = new OffsetContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, SQLiteParser.RULE_offset);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1952;
                this.match(SQLiteParser.COMMA);
                this.state = 1953;
                this.signed_number();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    default_value() {
        let _localctx = new Default_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, SQLiteParser.RULE_default_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1955;
                this.match(SQLiteParser.COMMA);
                this.state = 1956;
                this.signed_number();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    partition_by() {
        let _localctx = new Partition_byContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, SQLiteParser.RULE_partition_by);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1958;
                this.match(SQLiteParser.PARTITION);
                this.state = 1959;
                this.match(SQLiteParser.BY);
                this.state = 1961;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1960;
                                    this.expr(0);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1963;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 290, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    order_by_expr() {
        let _localctx = new Order_by_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, SQLiteParser.RULE_order_by_expr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1965;
                this.match(SQLiteParser.ORDER);
                this.state = 1966;
                this.match(SQLiteParser.BY);
                this.state = 1968;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1967;
                            this.expr(0);
                        }
                    }
                    this.state = 1970;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.OPEN_PAR) | (1 << SQLiteParser.PLUS) | (1 << SQLiteParser.MINUS) | (1 << SQLiteParser.TILDE) | (1 << SQLiteParser.ABORT) | (1 << SQLiteParser.ACTION) | (1 << SQLiteParser.ADD) | (1 << SQLiteParser.AFTER) | (1 << SQLiteParser.ALL) | (1 << SQLiteParser.ALTER) | (1 << SQLiteParser.ANALYZE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SQLiteParser.AND - 32)) | (1 << (SQLiteParser.AS - 32)) | (1 << (SQLiteParser.ASC - 32)) | (1 << (SQLiteParser.ATTACH - 32)) | (1 << (SQLiteParser.AUTOINCREMENT - 32)) | (1 << (SQLiteParser.BEFORE - 32)) | (1 << (SQLiteParser.BEGIN - 32)) | (1 << (SQLiteParser.BETWEEN - 32)) | (1 << (SQLiteParser.BY - 32)) | (1 << (SQLiteParser.CASCADE - 32)) | (1 << (SQLiteParser.CASE - 32)) | (1 << (SQLiteParser.CAST - 32)) | (1 << (SQLiteParser.CHECK - 32)) | (1 << (SQLiteParser.COLLATE - 32)) | (1 << (SQLiteParser.COLUMN - 32)) | (1 << (SQLiteParser.COMMIT - 32)) | (1 << (SQLiteParser.CONFLICT - 32)) | (1 << (SQLiteParser.CONSTRAINT - 32)) | (1 << (SQLiteParser.CREATE - 32)) | (1 << (SQLiteParser.CROSS - 32)) | (1 << (SQLiteParser.CURRENT_DATE - 32)) | (1 << (SQLiteParser.CURRENT_TIME - 32)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP - 32)) | (1 << (SQLiteParser.DATABASE - 32)) | (1 << (SQLiteParser.DEFAULT - 32)) | (1 << (SQLiteParser.DEFERRABLE - 32)) | (1 << (SQLiteParser.DEFERRED - 32)) | (1 << (SQLiteParser.DELETE - 32)) | (1 << (SQLiteParser.DESC - 32)) | (1 << (SQLiteParser.DETACH - 32)) | (1 << (SQLiteParser.DISTINCT - 32)) | (1 << (SQLiteParser.DROP - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SQLiteParser.EACH - 64)) | (1 << (SQLiteParser.ELSE - 64)) | (1 << (SQLiteParser.END - 64)) | (1 << (SQLiteParser.ESCAPE - 64)) | (1 << (SQLiteParser.EXCEPT - 64)) | (1 << (SQLiteParser.EXCLUSIVE - 64)) | (1 << (SQLiteParser.EXISTS - 64)) | (1 << (SQLiteParser.EXPLAIN - 64)) | (1 << (SQLiteParser.FAIL - 64)) | (1 << (SQLiteParser.FOR - 64)) | (1 << (SQLiteParser.FOREIGN - 64)) | (1 << (SQLiteParser.FROM - 64)) | (1 << (SQLiteParser.FULL - 64)) | (1 << (SQLiteParser.GLOB - 64)) | (1 << (SQLiteParser.GROUP - 64)) | (1 << (SQLiteParser.HAVING - 64)) | (1 << (SQLiteParser.IF - 64)) | (1 << (SQLiteParser.IGNORE - 64)) | (1 << (SQLiteParser.IMMEDIATE - 64)) | (1 << (SQLiteParser.IN - 64)) | (1 << (SQLiteParser.INDEX - 64)) | (1 << (SQLiteParser.INDEXED - 64)) | (1 << (SQLiteParser.INITIALLY - 64)) | (1 << (SQLiteParser.INNER - 64)) | (1 << (SQLiteParser.INSERT - 64)) | (1 << (SQLiteParser.INSTEAD - 64)) | (1 << (SQLiteParser.INTERSECT - 64)) | (1 << (SQLiteParser.INTO - 64)) | (1 << (SQLiteParser.IS - 64)) | (1 << (SQLiteParser.ISNULL - 64)) | (1 << (SQLiteParser.JOIN - 64)) | (1 << (SQLiteParser.KEY - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (SQLiteParser.LEFT - 96)) | (1 << (SQLiteParser.LIKE - 96)) | (1 << (SQLiteParser.LIMIT - 96)) | (1 << (SQLiteParser.MATCH - 96)) | (1 << (SQLiteParser.NATURAL - 96)) | (1 << (SQLiteParser.NO - 96)) | (1 << (SQLiteParser.NOT - 96)) | (1 << (SQLiteParser.NOTNULL - 96)) | (1 << (SQLiteParser.NULL - 96)) | (1 << (SQLiteParser.OF - 96)) | (1 << (SQLiteParser.OFFSET - 96)) | (1 << (SQLiteParser.ON - 96)) | (1 << (SQLiteParser.OR - 96)) | (1 << (SQLiteParser.ORDER - 96)) | (1 << (SQLiteParser.OUTER - 96)) | (1 << (SQLiteParser.PLAN - 96)) | (1 << (SQLiteParser.PRAGMA - 96)) | (1 << (SQLiteParser.PRIMARY - 96)) | (1 << (SQLiteParser.QUERY - 96)) | (1 << (SQLiteParser.RAISE - 96)) | (1 << (SQLiteParser.RECURSIVE - 96)) | (1 << (SQLiteParser.REFERENCES - 96)) | (1 << (SQLiteParser.REGEXP - 96)) | (1 << (SQLiteParser.REINDEX - 96)) | (1 << (SQLiteParser.RELEASE - 96)) | (1 << (SQLiteParser.RENAME - 96)) | (1 << (SQLiteParser.REPLACE - 96)) | (1 << (SQLiteParser.RESTRICT - 96)) | (1 << (SQLiteParser.RETURNING - 96)) | (1 << (SQLiteParser.RIGHT - 96)) | (1 << (SQLiteParser.ROLLBACK - 96)) | (1 << (SQLiteParser.ROW - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (SQLiteParser.ROWS - 128)) | (1 << (SQLiteParser.SAVEPOINT - 128)) | (1 << (SQLiteParser.SELECT - 128)) | (1 << (SQLiteParser.SET - 128)) | (1 << (SQLiteParser.TABLE - 128)) | (1 << (SQLiteParser.TEMP - 128)) | (1 << (SQLiteParser.TEMPORARY - 128)) | (1 << (SQLiteParser.THEN - 128)) | (1 << (SQLiteParser.TO - 128)) | (1 << (SQLiteParser.TRANSACTION - 128)) | (1 << (SQLiteParser.TRIGGER - 128)) | (1 << (SQLiteParser.UNION - 128)) | (1 << (SQLiteParser.UNIQUE - 128)) | (1 << (SQLiteParser.UPDATE - 128)) | (1 << (SQLiteParser.USING - 128)) | (1 << (SQLiteParser.VACUUM - 128)) | (1 << (SQLiteParser.VALUES - 128)) | (1 << (SQLiteParser.VIEW - 128)) | (1 << (SQLiteParser.VIRTUAL - 128)) | (1 << (SQLiteParser.WHEN - 128)) | (1 << (SQLiteParser.WHERE - 128)) | (1 << (SQLiteParser.WITH - 128)) | (1 << (SQLiteParser.WITHOUT - 128)) | (1 << (SQLiteParser.FIRST_VALUE - 128)) | (1 << (SQLiteParser.OVER - 128)) | (1 << (SQLiteParser.PARTITION - 128)) | (1 << (SQLiteParser.RANGE - 128)) | (1 << (SQLiteParser.PRECEDING - 128)) | (1 << (SQLiteParser.UNBOUNDED - 128)) | (1 << (SQLiteParser.CURRENT - 128)) | (1 << (SQLiteParser.FOLLOWING - 128)) | (1 << (SQLiteParser.CUME_DIST - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (SQLiteParser.DENSE_RANK - 160)) | (1 << (SQLiteParser.LAG - 160)) | (1 << (SQLiteParser.LAST_VALUE - 160)) | (1 << (SQLiteParser.LEAD - 160)) | (1 << (SQLiteParser.NTH_VALUE - 160)) | (1 << (SQLiteParser.NTILE - 160)) | (1 << (SQLiteParser.PERCENT_RANK - 160)) | (1 << (SQLiteParser.RANK - 160)) | (1 << (SQLiteParser.ROW_NUMBER - 160)) | (1 << (SQLiteParser.GENERATED - 160)) | (1 << (SQLiteParser.ALWAYS - 160)) | (1 << (SQLiteParser.STORED - 160)) | (1 << (SQLiteParser.TRUE - 160)) | (1 << (SQLiteParser.FALSE - 160)) | (1 << (SQLiteParser.WINDOW - 160)) | (1 << (SQLiteParser.NULLS - 160)) | (1 << (SQLiteParser.FIRST - 160)) | (1 << (SQLiteParser.LAST - 160)) | (1 << (SQLiteParser.FILTER - 160)) | (1 << (SQLiteParser.GROUPS - 160)) | (1 << (SQLiteParser.EXCLUDE - 160)) | (1 << (SQLiteParser.TIES - 160)) | (1 << (SQLiteParser.OTHERS - 160)) | (1 << (SQLiteParser.DO - 160)) | (1 << (SQLiteParser.NOTHING - 160)) | (1 << (SQLiteParser.IDENTIFIER - 160)) | (1 << (SQLiteParser.NUMERIC_LITERAL - 160)) | (1 << (SQLiteParser.BIND_PARAMETER - 160)) | (1 << (SQLiteParser.STRING_LITERAL - 160)) | (1 << (SQLiteParser.BLOB_LITERAL - 160)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    order_by_expr_asc_desc() {
        let _localctx = new Order_by_expr_asc_descContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, SQLiteParser.RULE_order_by_expr_asc_desc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1972;
                this.match(SQLiteParser.ORDER);
                this.state = 1973;
                this.match(SQLiteParser.BY);
                this.state = 1974;
                this.expr_asc_desc();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr_asc_desc() {
        let _localctx = new Expr_asc_descContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, SQLiteParser.RULE_expr_asc_desc);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1976;
                this.expr(0);
                this.state = 1978;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SQLiteParser.ASC || _la === SQLiteParser.DESC) {
                    {
                        this.state = 1977;
                        this.asc_desc();
                    }
                }
                this.state = 1987;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SQLiteParser.COMMA) {
                    {
                        {
                            this.state = 1980;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1981;
                            this.expr(0);
                            this.state = 1983;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === SQLiteParser.ASC || _la === SQLiteParser.DESC) {
                                {
                                    this.state = 1982;
                                    this.asc_desc();
                                }
                            }
                        }
                    }
                    this.state = 1989;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    initial_select() {
        let _localctx = new Initial_selectContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, SQLiteParser.RULE_initial_select);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1990;
                this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recursive_select() {
        let _localctx = new Recursive_selectContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, SQLiteParser.RULE_recursive_select);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1992;
                this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unary_operator() {
        let _localctx = new Unary_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, SQLiteParser.RULE_unary_operator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1994;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SQLiteParser.PLUS) | (1 << SQLiteParser.MINUS) | (1 << SQLiteParser.TILDE))) !== 0) || _la === SQLiteParser.NOT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    error_message() {
        let _localctx = new Error_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, SQLiteParser.RULE_error_message);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1996;
                this.match(SQLiteParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    module_argument() {
        let _localctx = new Module_argumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, SQLiteParser.RULE_module_argument);
        try {
            this.state = 2000;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 295, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1998;
                        this.expr(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1999;
                        this.column_def();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    column_alias() {
        let _localctx = new Column_aliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, SQLiteParser.RULE_column_alias);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2002;
                _la = this._input.LA(1);
                if (!(_la === SQLiteParser.IDENTIFIER || _la === SQLiteParser.STRING_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    keyword() {
        let _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, SQLiteParser.RULE_keyword);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2004;
                _la = this._input.LA(1);
                if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (SQLiteParser.ABORT - 25)) | (1 << (SQLiteParser.ACTION - 25)) | (1 << (SQLiteParser.ADD - 25)) | (1 << (SQLiteParser.AFTER - 25)) | (1 << (SQLiteParser.ALL - 25)) | (1 << (SQLiteParser.ALTER - 25)) | (1 << (SQLiteParser.ANALYZE - 25)) | (1 << (SQLiteParser.AND - 25)) | (1 << (SQLiteParser.AS - 25)) | (1 << (SQLiteParser.ASC - 25)) | (1 << (SQLiteParser.ATTACH - 25)) | (1 << (SQLiteParser.AUTOINCREMENT - 25)) | (1 << (SQLiteParser.BEFORE - 25)) | (1 << (SQLiteParser.BEGIN - 25)) | (1 << (SQLiteParser.BETWEEN - 25)) | (1 << (SQLiteParser.BY - 25)) | (1 << (SQLiteParser.CASCADE - 25)) | (1 << (SQLiteParser.CASE - 25)) | (1 << (SQLiteParser.CAST - 25)) | (1 << (SQLiteParser.CHECK - 25)) | (1 << (SQLiteParser.COLLATE - 25)) | (1 << (SQLiteParser.COLUMN - 25)) | (1 << (SQLiteParser.COMMIT - 25)) | (1 << (SQLiteParser.CONFLICT - 25)) | (1 << (SQLiteParser.CONSTRAINT - 25)) | (1 << (SQLiteParser.CREATE - 25)) | (1 << (SQLiteParser.CROSS - 25)) | (1 << (SQLiteParser.CURRENT_DATE - 25)) | (1 << (SQLiteParser.CURRENT_TIME - 25)) | (1 << (SQLiteParser.CURRENT_TIMESTAMP - 25)) | (1 << (SQLiteParser.DATABASE - 25)) | (1 << (SQLiteParser.DEFAULT - 25)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SQLiteParser.DEFERRABLE - 57)) | (1 << (SQLiteParser.DEFERRED - 57)) | (1 << (SQLiteParser.DELETE - 57)) | (1 << (SQLiteParser.DESC - 57)) | (1 << (SQLiteParser.DETACH - 57)) | (1 << (SQLiteParser.DISTINCT - 57)) | (1 << (SQLiteParser.DROP - 57)) | (1 << (SQLiteParser.EACH - 57)) | (1 << (SQLiteParser.ELSE - 57)) | (1 << (SQLiteParser.END - 57)) | (1 << (SQLiteParser.ESCAPE - 57)) | (1 << (SQLiteParser.EXCEPT - 57)) | (1 << (SQLiteParser.EXCLUSIVE - 57)) | (1 << (SQLiteParser.EXISTS - 57)) | (1 << (SQLiteParser.EXPLAIN - 57)) | (1 << (SQLiteParser.FAIL - 57)) | (1 << (SQLiteParser.FOR - 57)) | (1 << (SQLiteParser.FOREIGN - 57)) | (1 << (SQLiteParser.FROM - 57)) | (1 << (SQLiteParser.FULL - 57)) | (1 << (SQLiteParser.GLOB - 57)) | (1 << (SQLiteParser.GROUP - 57)) | (1 << (SQLiteParser.HAVING - 57)) | (1 << (SQLiteParser.IF - 57)) | (1 << (SQLiteParser.IGNORE - 57)) | (1 << (SQLiteParser.IMMEDIATE - 57)) | (1 << (SQLiteParser.IN - 57)) | (1 << (SQLiteParser.INDEX - 57)) | (1 << (SQLiteParser.INDEXED - 57)) | (1 << (SQLiteParser.INITIALLY - 57)) | (1 << (SQLiteParser.INNER - 57)) | (1 << (SQLiteParser.INSERT - 57)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (SQLiteParser.INSTEAD - 89)) | (1 << (SQLiteParser.INTERSECT - 89)) | (1 << (SQLiteParser.INTO - 89)) | (1 << (SQLiteParser.IS - 89)) | (1 << (SQLiteParser.ISNULL - 89)) | (1 << (SQLiteParser.JOIN - 89)) | (1 << (SQLiteParser.KEY - 89)) | (1 << (SQLiteParser.LEFT - 89)) | (1 << (SQLiteParser.LIKE - 89)) | (1 << (SQLiteParser.LIMIT - 89)) | (1 << (SQLiteParser.MATCH - 89)) | (1 << (SQLiteParser.NATURAL - 89)) | (1 << (SQLiteParser.NO - 89)) | (1 << (SQLiteParser.NOT - 89)) | (1 << (SQLiteParser.NOTNULL - 89)) | (1 << (SQLiteParser.NULL - 89)) | (1 << (SQLiteParser.OF - 89)) | (1 << (SQLiteParser.OFFSET - 89)) | (1 << (SQLiteParser.ON - 89)) | (1 << (SQLiteParser.OR - 89)) | (1 << (SQLiteParser.ORDER - 89)) | (1 << (SQLiteParser.OUTER - 89)) | (1 << (SQLiteParser.PLAN - 89)) | (1 << (SQLiteParser.PRAGMA - 89)) | (1 << (SQLiteParser.PRIMARY - 89)) | (1 << (SQLiteParser.QUERY - 89)) | (1 << (SQLiteParser.RAISE - 89)) | (1 << (SQLiteParser.RECURSIVE - 89)) | (1 << (SQLiteParser.REFERENCES - 89)) | (1 << (SQLiteParser.REGEXP - 89)) | (1 << (SQLiteParser.REINDEX - 89)) | (1 << (SQLiteParser.RELEASE - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (SQLiteParser.RENAME - 121)) | (1 << (SQLiteParser.REPLACE - 121)) | (1 << (SQLiteParser.RESTRICT - 121)) | (1 << (SQLiteParser.RETURNING - 121)) | (1 << (SQLiteParser.RIGHT - 121)) | (1 << (SQLiteParser.ROLLBACK - 121)) | (1 << (SQLiteParser.ROW - 121)) | (1 << (SQLiteParser.ROWS - 121)) | (1 << (SQLiteParser.SAVEPOINT - 121)) | (1 << (SQLiteParser.SELECT - 121)) | (1 << (SQLiteParser.SET - 121)) | (1 << (SQLiteParser.TABLE - 121)) | (1 << (SQLiteParser.TEMP - 121)) | (1 << (SQLiteParser.TEMPORARY - 121)) | (1 << (SQLiteParser.THEN - 121)) | (1 << (SQLiteParser.TO - 121)) | (1 << (SQLiteParser.TRANSACTION - 121)) | (1 << (SQLiteParser.TRIGGER - 121)) | (1 << (SQLiteParser.UNION - 121)) | (1 << (SQLiteParser.UNIQUE - 121)) | (1 << (SQLiteParser.UPDATE - 121)) | (1 << (SQLiteParser.USING - 121)) | (1 << (SQLiteParser.VACUUM - 121)) | (1 << (SQLiteParser.VALUES - 121)) | (1 << (SQLiteParser.VIEW - 121)) | (1 << (SQLiteParser.VIRTUAL - 121)) | (1 << (SQLiteParser.WHEN - 121)) | (1 << (SQLiteParser.WHERE - 121)) | (1 << (SQLiteParser.WITH - 121)) | (1 << (SQLiteParser.WITHOUT - 121)) | (1 << (SQLiteParser.FIRST_VALUE - 121)) | (1 << (SQLiteParser.OVER - 121)))) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & ((1 << (SQLiteParser.PARTITION - 153)) | (1 << (SQLiteParser.RANGE - 153)) | (1 << (SQLiteParser.PRECEDING - 153)) | (1 << (SQLiteParser.UNBOUNDED - 153)) | (1 << (SQLiteParser.CURRENT - 153)) | (1 << (SQLiteParser.FOLLOWING - 153)) | (1 << (SQLiteParser.CUME_DIST - 153)) | (1 << (SQLiteParser.DENSE_RANK - 153)) | (1 << (SQLiteParser.LAG - 153)) | (1 << (SQLiteParser.LAST_VALUE - 153)) | (1 << (SQLiteParser.LEAD - 153)) | (1 << (SQLiteParser.NTH_VALUE - 153)) | (1 << (SQLiteParser.NTILE - 153)) | (1 << (SQLiteParser.PERCENT_RANK - 153)) | (1 << (SQLiteParser.RANK - 153)) | (1 << (SQLiteParser.ROW_NUMBER - 153)) | (1 << (SQLiteParser.GENERATED - 153)) | (1 << (SQLiteParser.ALWAYS - 153)) | (1 << (SQLiteParser.STORED - 153)) | (1 << (SQLiteParser.TRUE - 153)) | (1 << (SQLiteParser.FALSE - 153)) | (1 << (SQLiteParser.WINDOW - 153)) | (1 << (SQLiteParser.NULLS - 153)) | (1 << (SQLiteParser.FIRST - 153)) | (1 << (SQLiteParser.LAST - 153)) | (1 << (SQLiteParser.FILTER - 153)) | (1 << (SQLiteParser.GROUPS - 153)) | (1 << (SQLiteParser.EXCLUDE - 153)) | (1 << (SQLiteParser.TIES - 153)) | (1 << (SQLiteParser.OTHERS - 153)) | (1 << (SQLiteParser.DO - 153)) | (1 << (SQLiteParser.NOTHING - 153)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    name() {
        let _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, SQLiteParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2006;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function_name() {
        let _localctx = new Function_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, SQLiteParser.RULE_function_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2008;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema_name() {
        let _localctx = new Schema_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, SQLiteParser.RULE_schema_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2010;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    table_name() {
        let _localctx = new Table_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, SQLiteParser.RULE_table_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2012;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    table_or_index_name() {
        let _localctx = new Table_or_index_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, SQLiteParser.RULE_table_or_index_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2014;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    column_name() {
        let _localctx = new Column_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, SQLiteParser.RULE_column_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2016;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    collation_name() {
        let _localctx = new Collation_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, SQLiteParser.RULE_collation_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2018;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    foreign_table() {
        let _localctx = new Foreign_tableContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, SQLiteParser.RULE_foreign_table);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2020;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    index_name() {
        let _localctx = new Index_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, SQLiteParser.RULE_index_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2022;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    trigger_name() {
        let _localctx = new Trigger_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, SQLiteParser.RULE_trigger_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2024;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    view_name() {
        let _localctx = new View_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, SQLiteParser.RULE_view_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2026;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    module_name() {
        let _localctx = new Module_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, SQLiteParser.RULE_module_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2028;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pragma_name() {
        let _localctx = new Pragma_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, SQLiteParser.RULE_pragma_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2030;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    savepoint_name() {
        let _localctx = new Savepoint_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, SQLiteParser.RULE_savepoint_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2032;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    table_alias() {
        let _localctx = new Table_aliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, SQLiteParser.RULE_table_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2034;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    transaction_name() {
        let _localctx = new Transaction_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, SQLiteParser.RULE_transaction_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2036;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    window_name() {
        let _localctx = new Window_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, SQLiteParser.RULE_window_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2038;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alias() {
        let _localctx = new AliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, SQLiteParser.RULE_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2040;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    filename() {
        let _localctx = new FilenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, SQLiteParser.RULE_filename);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2042;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    base_window_name() {
        let _localctx = new Base_window_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, SQLiteParser.RULE_base_window_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2044;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simple_func() {
        let _localctx = new Simple_funcContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, SQLiteParser.RULE_simple_func);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2046;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_func() {
        let _localctx = new Aggregate_funcContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, SQLiteParser.RULE_aggregate_func);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2048;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    table_function_name() {
        let _localctx = new Table_function_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, SQLiteParser.RULE_table_function_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2050;
                this.any_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    any_name() {
        let _localctx = new Any_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, SQLiteParser.RULE_any_name);
        try {
            this.state = 2059;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SQLiteParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2052;
                        this.match(SQLiteParser.IDENTIFIER);
                    }
                    break;
                case SQLiteParser.ABORT:
                case SQLiteParser.ACTION:
                case SQLiteParser.ADD:
                case SQLiteParser.AFTER:
                case SQLiteParser.ALL:
                case SQLiteParser.ALTER:
                case SQLiteParser.ANALYZE:
                case SQLiteParser.AND:
                case SQLiteParser.AS:
                case SQLiteParser.ASC:
                case SQLiteParser.ATTACH:
                case SQLiteParser.AUTOINCREMENT:
                case SQLiteParser.BEFORE:
                case SQLiteParser.BEGIN:
                case SQLiteParser.BETWEEN:
                case SQLiteParser.BY:
                case SQLiteParser.CASCADE:
                case SQLiteParser.CASE:
                case SQLiteParser.CAST:
                case SQLiteParser.CHECK:
                case SQLiteParser.COLLATE:
                case SQLiteParser.COLUMN:
                case SQLiteParser.COMMIT:
                case SQLiteParser.CONFLICT:
                case SQLiteParser.CONSTRAINT:
                case SQLiteParser.CREATE:
                case SQLiteParser.CROSS:
                case SQLiteParser.CURRENT_DATE:
                case SQLiteParser.CURRENT_TIME:
                case SQLiteParser.CURRENT_TIMESTAMP:
                case SQLiteParser.DATABASE:
                case SQLiteParser.DEFAULT:
                case SQLiteParser.DEFERRABLE:
                case SQLiteParser.DEFERRED:
                case SQLiteParser.DELETE:
                case SQLiteParser.DESC:
                case SQLiteParser.DETACH:
                case SQLiteParser.DISTINCT:
                case SQLiteParser.DROP:
                case SQLiteParser.EACH:
                case SQLiteParser.ELSE:
                case SQLiteParser.END:
                case SQLiteParser.ESCAPE:
                case SQLiteParser.EXCEPT:
                case SQLiteParser.EXCLUSIVE:
                case SQLiteParser.EXISTS:
                case SQLiteParser.EXPLAIN:
                case SQLiteParser.FAIL:
                case SQLiteParser.FOR:
                case SQLiteParser.FOREIGN:
                case SQLiteParser.FROM:
                case SQLiteParser.FULL:
                case SQLiteParser.GLOB:
                case SQLiteParser.GROUP:
                case SQLiteParser.HAVING:
                case SQLiteParser.IF:
                case SQLiteParser.IGNORE:
                case SQLiteParser.IMMEDIATE:
                case SQLiteParser.IN:
                case SQLiteParser.INDEX:
                case SQLiteParser.INDEXED:
                case SQLiteParser.INITIALLY:
                case SQLiteParser.INNER:
                case SQLiteParser.INSERT:
                case SQLiteParser.INSTEAD:
                case SQLiteParser.INTERSECT:
                case SQLiteParser.INTO:
                case SQLiteParser.IS:
                case SQLiteParser.ISNULL:
                case SQLiteParser.JOIN:
                case SQLiteParser.KEY:
                case SQLiteParser.LEFT:
                case SQLiteParser.LIKE:
                case SQLiteParser.LIMIT:
                case SQLiteParser.MATCH:
                case SQLiteParser.NATURAL:
                case SQLiteParser.NO:
                case SQLiteParser.NOT:
                case SQLiteParser.NOTNULL:
                case SQLiteParser.NULL:
                case SQLiteParser.OF:
                case SQLiteParser.OFFSET:
                case SQLiteParser.ON:
                case SQLiteParser.OR:
                case SQLiteParser.ORDER:
                case SQLiteParser.OUTER:
                case SQLiteParser.PLAN:
                case SQLiteParser.PRAGMA:
                case SQLiteParser.PRIMARY:
                case SQLiteParser.QUERY:
                case SQLiteParser.RAISE:
                case SQLiteParser.RECURSIVE:
                case SQLiteParser.REFERENCES:
                case SQLiteParser.REGEXP:
                case SQLiteParser.REINDEX:
                case SQLiteParser.RELEASE:
                case SQLiteParser.RENAME:
                case SQLiteParser.REPLACE:
                case SQLiteParser.RESTRICT:
                case SQLiteParser.RETURNING:
                case SQLiteParser.RIGHT:
                case SQLiteParser.ROLLBACK:
                case SQLiteParser.ROW:
                case SQLiteParser.ROWS:
                case SQLiteParser.SAVEPOINT:
                case SQLiteParser.SELECT:
                case SQLiteParser.SET:
                case SQLiteParser.TABLE:
                case SQLiteParser.TEMP:
                case SQLiteParser.TEMPORARY:
                case SQLiteParser.THEN:
                case SQLiteParser.TO:
                case SQLiteParser.TRANSACTION:
                case SQLiteParser.TRIGGER:
                case SQLiteParser.UNION:
                case SQLiteParser.UNIQUE:
                case SQLiteParser.UPDATE:
                case SQLiteParser.USING:
                case SQLiteParser.VACUUM:
                case SQLiteParser.VALUES:
                case SQLiteParser.VIEW:
                case SQLiteParser.VIRTUAL:
                case SQLiteParser.WHEN:
                case SQLiteParser.WHERE:
                case SQLiteParser.WITH:
                case SQLiteParser.WITHOUT:
                case SQLiteParser.FIRST_VALUE:
                case SQLiteParser.OVER:
                case SQLiteParser.PARTITION:
                case SQLiteParser.RANGE:
                case SQLiteParser.PRECEDING:
                case SQLiteParser.UNBOUNDED:
                case SQLiteParser.CURRENT:
                case SQLiteParser.FOLLOWING:
                case SQLiteParser.CUME_DIST:
                case SQLiteParser.DENSE_RANK:
                case SQLiteParser.LAG:
                case SQLiteParser.LAST_VALUE:
                case SQLiteParser.LEAD:
                case SQLiteParser.NTH_VALUE:
                case SQLiteParser.NTILE:
                case SQLiteParser.PERCENT_RANK:
                case SQLiteParser.RANK:
                case SQLiteParser.ROW_NUMBER:
                case SQLiteParser.GENERATED:
                case SQLiteParser.ALWAYS:
                case SQLiteParser.STORED:
                case SQLiteParser.TRUE:
                case SQLiteParser.FALSE:
                case SQLiteParser.WINDOW:
                case SQLiteParser.NULLS:
                case SQLiteParser.FIRST:
                case SQLiteParser.LAST:
                case SQLiteParser.FILTER:
                case SQLiteParser.GROUPS:
                case SQLiteParser.EXCLUDE:
                case SQLiteParser.TIES:
                case SQLiteParser.OTHERS:
                case SQLiteParser.DO:
                case SQLiteParser.NOTHING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2053;
                        this.keyword();
                    }
                    break;
                case SQLiteParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2054;
                        this.match(SQLiteParser.STRING_LITERAL);
                    }
                    break;
                case SQLiteParser.OPEN_PAR:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2055;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 2056;
                        this.any_name();
                        this.state = 2057;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 32:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    }
    expr_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 20);
            case 1:
                return this.precpred(this._ctx, 19);
            case 2:
                return this.precpred(this._ctx, 18);
            case 3:
                return this.precpred(this._ctx, 17);
            case 4:
                return this.precpred(this._ctx, 16);
            case 5:
                return this.precpred(this._ctx, 15);
            case 6:
                return this.precpred(this._ctx, 14);
            case 7:
                return this.precpred(this._ctx, 13);
            case 8:
                return this.precpred(this._ctx, 6);
            case 9:
                return this.precpred(this._ctx, 5);
            case 10:
                return this.precpred(this._ctx, 9);
            case 11:
                return this.precpred(this._ctx, 8);
            case 12:
                return this.precpred(this._ctx, 7);
            case 13:
                return this.precpred(this._ctx, 4);
        }
        return true;
    }
    static get _ATN() {
        if (!SQLiteParser.__ATN) {
            SQLiteParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SQLiteParser._serializedATN));
        }
        return SQLiteParser.__ATN;
    }
}
exports.SQLiteParser = SQLiteParser;
SQLiteParser.SCOL = 1;
SQLiteParser.DOT = 2;
SQLiteParser.OPEN_PAR = 3;
SQLiteParser.CLOSE_PAR = 4;
SQLiteParser.COMMA = 5;
SQLiteParser.ASSIGN = 6;
SQLiteParser.STAR = 7;
SQLiteParser.PLUS = 8;
SQLiteParser.MINUS = 9;
SQLiteParser.TILDE = 10;
SQLiteParser.PIPE2 = 11;
SQLiteParser.DIV = 12;
SQLiteParser.MOD = 13;
SQLiteParser.LT2 = 14;
SQLiteParser.GT2 = 15;
SQLiteParser.AMP = 16;
SQLiteParser.PIPE = 17;
SQLiteParser.LT = 18;
SQLiteParser.LT_EQ = 19;
SQLiteParser.GT = 20;
SQLiteParser.GT_EQ = 21;
SQLiteParser.EQ = 22;
SQLiteParser.NOT_EQ1 = 23;
SQLiteParser.NOT_EQ2 = 24;
SQLiteParser.ABORT = 25;
SQLiteParser.ACTION = 26;
SQLiteParser.ADD = 27;
SQLiteParser.AFTER = 28;
SQLiteParser.ALL = 29;
SQLiteParser.ALTER = 30;
SQLiteParser.ANALYZE = 31;
SQLiteParser.AND = 32;
SQLiteParser.AS = 33;
SQLiteParser.ASC = 34;
SQLiteParser.ATTACH = 35;
SQLiteParser.AUTOINCREMENT = 36;
SQLiteParser.BEFORE = 37;
SQLiteParser.BEGIN = 38;
SQLiteParser.BETWEEN = 39;
SQLiteParser.BY = 40;
SQLiteParser.CASCADE = 41;
SQLiteParser.CASE = 42;
SQLiteParser.CAST = 43;
SQLiteParser.CHECK = 44;
SQLiteParser.COLLATE = 45;
SQLiteParser.COLUMN = 46;
SQLiteParser.COMMIT = 47;
SQLiteParser.CONFLICT = 48;
SQLiteParser.CONSTRAINT = 49;
SQLiteParser.CREATE = 50;
SQLiteParser.CROSS = 51;
SQLiteParser.CURRENT_DATE = 52;
SQLiteParser.CURRENT_TIME = 53;
SQLiteParser.CURRENT_TIMESTAMP = 54;
SQLiteParser.DATABASE = 55;
SQLiteParser.DEFAULT = 56;
SQLiteParser.DEFERRABLE = 57;
SQLiteParser.DEFERRED = 58;
SQLiteParser.DELETE = 59;
SQLiteParser.DESC = 60;
SQLiteParser.DETACH = 61;
SQLiteParser.DISTINCT = 62;
SQLiteParser.DROP = 63;
SQLiteParser.EACH = 64;
SQLiteParser.ELSE = 65;
SQLiteParser.END = 66;
SQLiteParser.ESCAPE = 67;
SQLiteParser.EXCEPT = 68;
SQLiteParser.EXCLUSIVE = 69;
SQLiteParser.EXISTS = 70;
SQLiteParser.EXPLAIN = 71;
SQLiteParser.FAIL = 72;
SQLiteParser.FOR = 73;
SQLiteParser.FOREIGN = 74;
SQLiteParser.FROM = 75;
SQLiteParser.FULL = 76;
SQLiteParser.GLOB = 77;
SQLiteParser.GROUP = 78;
SQLiteParser.HAVING = 79;
SQLiteParser.IF = 80;
SQLiteParser.IGNORE = 81;
SQLiteParser.IMMEDIATE = 82;
SQLiteParser.IN = 83;
SQLiteParser.INDEX = 84;
SQLiteParser.INDEXED = 85;
SQLiteParser.INITIALLY = 86;
SQLiteParser.INNER = 87;
SQLiteParser.INSERT = 88;
SQLiteParser.INSTEAD = 89;
SQLiteParser.INTERSECT = 90;
SQLiteParser.INTO = 91;
SQLiteParser.IS = 92;
SQLiteParser.ISNULL = 93;
SQLiteParser.JOIN = 94;
SQLiteParser.KEY = 95;
SQLiteParser.LEFT = 96;
SQLiteParser.LIKE = 97;
SQLiteParser.LIMIT = 98;
SQLiteParser.MATCH = 99;
SQLiteParser.NATURAL = 100;
SQLiteParser.NO = 101;
SQLiteParser.NOT = 102;
SQLiteParser.NOTNULL = 103;
SQLiteParser.NULL = 104;
SQLiteParser.OF = 105;
SQLiteParser.OFFSET = 106;
SQLiteParser.ON = 107;
SQLiteParser.OR = 108;
SQLiteParser.ORDER = 109;
SQLiteParser.OUTER = 110;
SQLiteParser.PLAN = 111;
SQLiteParser.PRAGMA = 112;
SQLiteParser.PRIMARY = 113;
SQLiteParser.QUERY = 114;
SQLiteParser.RAISE = 115;
SQLiteParser.RECURSIVE = 116;
SQLiteParser.REFERENCES = 117;
SQLiteParser.REGEXP = 118;
SQLiteParser.REINDEX = 119;
SQLiteParser.RELEASE = 120;
SQLiteParser.RENAME = 121;
SQLiteParser.REPLACE = 122;
SQLiteParser.RESTRICT = 123;
SQLiteParser.RETURNING = 124;
SQLiteParser.RIGHT = 125;
SQLiteParser.ROLLBACK = 126;
SQLiteParser.ROW = 127;
SQLiteParser.ROWS = 128;
SQLiteParser.SAVEPOINT = 129;
SQLiteParser.SELECT = 130;
SQLiteParser.SET = 131;
SQLiteParser.TABLE = 132;
SQLiteParser.TEMP = 133;
SQLiteParser.TEMPORARY = 134;
SQLiteParser.THEN = 135;
SQLiteParser.TO = 136;
SQLiteParser.TRANSACTION = 137;
SQLiteParser.TRIGGER = 138;
SQLiteParser.UNION = 139;
SQLiteParser.UNIQUE = 140;
SQLiteParser.UPDATE = 141;
SQLiteParser.USING = 142;
SQLiteParser.VACUUM = 143;
SQLiteParser.VALUES = 144;
SQLiteParser.VIEW = 145;
SQLiteParser.VIRTUAL = 146;
SQLiteParser.WHEN = 147;
SQLiteParser.WHERE = 148;
SQLiteParser.WITH = 149;
SQLiteParser.WITHOUT = 150;
SQLiteParser.FIRST_VALUE = 151;
SQLiteParser.OVER = 152;
SQLiteParser.PARTITION = 153;
SQLiteParser.RANGE = 154;
SQLiteParser.PRECEDING = 155;
SQLiteParser.UNBOUNDED = 156;
SQLiteParser.CURRENT = 157;
SQLiteParser.FOLLOWING = 158;
SQLiteParser.CUME_DIST = 159;
SQLiteParser.DENSE_RANK = 160;
SQLiteParser.LAG = 161;
SQLiteParser.LAST_VALUE = 162;
SQLiteParser.LEAD = 163;
SQLiteParser.NTH_VALUE = 164;
SQLiteParser.NTILE = 165;
SQLiteParser.PERCENT_RANK = 166;
SQLiteParser.RANK = 167;
SQLiteParser.ROW_NUMBER = 168;
SQLiteParser.GENERATED = 169;
SQLiteParser.ALWAYS = 170;
SQLiteParser.STORED = 171;
SQLiteParser.TRUE = 172;
SQLiteParser.FALSE = 173;
SQLiteParser.WINDOW = 174;
SQLiteParser.NULLS = 175;
SQLiteParser.FIRST = 176;
SQLiteParser.LAST = 177;
SQLiteParser.FILTER = 178;
SQLiteParser.GROUPS = 179;
SQLiteParser.EXCLUDE = 180;
SQLiteParser.TIES = 181;
SQLiteParser.OTHERS = 182;
SQLiteParser.DO = 183;
SQLiteParser.NOTHING = 184;
SQLiteParser.IDENTIFIER = 185;
SQLiteParser.NUMERIC_LITERAL = 186;
SQLiteParser.BIND_PARAMETER = 187;
SQLiteParser.STRING_LITERAL = 188;
SQLiteParser.BLOB_LITERAL = 189;
SQLiteParser.SINGLE_LINE_COMMENT = 190;
SQLiteParser.MULTILINE_COMMENT = 191;
SQLiteParser.SPACES = 192;
SQLiteParser.UNEXPECTED_CHAR = 193;
SQLiteParser.RULE_parse = 0;
SQLiteParser.RULE_sql_stmt_list = 1;
SQLiteParser.RULE_sql_stmt = 2;
SQLiteParser.RULE_alter_table_stmt = 3;
SQLiteParser.RULE_analyze_stmt = 4;
SQLiteParser.RULE_attach_stmt = 5;
SQLiteParser.RULE_begin_stmt = 6;
SQLiteParser.RULE_commit_stmt = 7;
SQLiteParser.RULE_rollback_stmt = 8;
SQLiteParser.RULE_savepoint_stmt = 9;
SQLiteParser.RULE_release_stmt = 10;
SQLiteParser.RULE_create_index_stmt = 11;
SQLiteParser.RULE_indexed_column = 12;
SQLiteParser.RULE_create_table_stmt = 13;
SQLiteParser.RULE_column_def = 14;
SQLiteParser.RULE_type_name = 15;
SQLiteParser.RULE_column_constraint = 16;
SQLiteParser.RULE_signed_number = 17;
SQLiteParser.RULE_table_constraint = 18;
SQLiteParser.RULE_foreign_key_clause = 19;
SQLiteParser.RULE_conflict_clause = 20;
SQLiteParser.RULE_create_trigger_stmt = 21;
SQLiteParser.RULE_create_view_stmt = 22;
SQLiteParser.RULE_create_virtual_table_stmt = 23;
SQLiteParser.RULE_with_clause = 24;
SQLiteParser.RULE_cte_table_name = 25;
SQLiteParser.RULE_recursive_cte = 26;
SQLiteParser.RULE_common_table_expression = 27;
SQLiteParser.RULE_delete_stmt = 28;
SQLiteParser.RULE_delete_stmt_limited = 29;
SQLiteParser.RULE_detach_stmt = 30;
SQLiteParser.RULE_drop_stmt = 31;
SQLiteParser.RULE_expr = 32;
SQLiteParser.RULE_raise_function = 33;
SQLiteParser.RULE_literal_value = 34;
SQLiteParser.RULE_value_row = 35;
SQLiteParser.RULE_values_clause = 36;
SQLiteParser.RULE_insert_stmt = 37;
SQLiteParser.RULE_returning_clause = 38;
SQLiteParser.RULE_upsert_clause = 39;
SQLiteParser.RULE_pragma_stmt = 40;
SQLiteParser.RULE_pragma_value = 41;
SQLiteParser.RULE_reindex_stmt = 42;
SQLiteParser.RULE_select_stmt = 43;
SQLiteParser.RULE_join_clause = 44;
SQLiteParser.RULE_select_core = 45;
SQLiteParser.RULE_factored_select_stmt = 46;
SQLiteParser.RULE_simple_select_stmt = 47;
SQLiteParser.RULE_compound_select_stmt = 48;
SQLiteParser.RULE_table_or_subquery = 49;
SQLiteParser.RULE_result_column = 50;
SQLiteParser.RULE_join_operator = 51;
SQLiteParser.RULE_join_constraint = 52;
SQLiteParser.RULE_compound_operator = 53;
SQLiteParser.RULE_update_stmt = 54;
SQLiteParser.RULE_column_name_list = 55;
SQLiteParser.RULE_update_stmt_limited = 56;
SQLiteParser.RULE_qualified_table_name = 57;
SQLiteParser.RULE_vacuum_stmt = 58;
SQLiteParser.RULE_filter_clause = 59;
SQLiteParser.RULE_window_defn = 60;
SQLiteParser.RULE_over_clause = 61;
SQLiteParser.RULE_frame_spec = 62;
SQLiteParser.RULE_frame_clause = 63;
SQLiteParser.RULE_simple_function_invocation = 64;
SQLiteParser.RULE_aggregate_function_invocation = 65;
SQLiteParser.RULE_window_function_invocation = 66;
SQLiteParser.RULE_common_table_stmt = 67;
SQLiteParser.RULE_order_by_stmt = 68;
SQLiteParser.RULE_limit_stmt = 69;
SQLiteParser.RULE_ordering_term = 70;
SQLiteParser.RULE_asc_desc = 71;
SQLiteParser.RULE_frame_left = 72;
SQLiteParser.RULE_frame_right = 73;
SQLiteParser.RULE_frame_single = 74;
SQLiteParser.RULE_window_function = 75;
SQLiteParser.RULE_offset = 76;
SQLiteParser.RULE_default_value = 77;
SQLiteParser.RULE_partition_by = 78;
SQLiteParser.RULE_order_by_expr = 79;
SQLiteParser.RULE_order_by_expr_asc_desc = 80;
SQLiteParser.RULE_expr_asc_desc = 81;
SQLiteParser.RULE_initial_select = 82;
SQLiteParser.RULE_recursive_select = 83;
SQLiteParser.RULE_unary_operator = 84;
SQLiteParser.RULE_error_message = 85;
SQLiteParser.RULE_module_argument = 86;
SQLiteParser.RULE_column_alias = 87;
SQLiteParser.RULE_keyword = 88;
SQLiteParser.RULE_name = 89;
SQLiteParser.RULE_function_name = 90;
SQLiteParser.RULE_schema_name = 91;
SQLiteParser.RULE_table_name = 92;
SQLiteParser.RULE_table_or_index_name = 93;
SQLiteParser.RULE_column_name = 94;
SQLiteParser.RULE_collation_name = 95;
SQLiteParser.RULE_foreign_table = 96;
SQLiteParser.RULE_index_name = 97;
SQLiteParser.RULE_trigger_name = 98;
SQLiteParser.RULE_view_name = 99;
SQLiteParser.RULE_module_name = 100;
SQLiteParser.RULE_pragma_name = 101;
SQLiteParser.RULE_savepoint_name = 102;
SQLiteParser.RULE_table_alias = 103;
SQLiteParser.RULE_transaction_name = 104;
SQLiteParser.RULE_window_name = 105;
SQLiteParser.RULE_alias = 106;
SQLiteParser.RULE_filename = 107;
SQLiteParser.RULE_base_window_name = 108;
SQLiteParser.RULE_simple_func = 109;
SQLiteParser.RULE_aggregate_func = 110;
SQLiteParser.RULE_table_function_name = 111;
SQLiteParser.RULE_any_name = 112;
// tslint:disable:no-trailing-whitespace
SQLiteParser.ruleNames = [
    "parse", "sql_stmt_list", "sql_stmt", "alter_table_stmt", "analyze_stmt",
    "attach_stmt", "begin_stmt", "commit_stmt", "rollback_stmt", "savepoint_stmt",
    "release_stmt", "create_index_stmt", "indexed_column", "create_table_stmt",
    "column_def", "type_name", "column_constraint", "signed_number", "table_constraint",
    "foreign_key_clause", "conflict_clause", "create_trigger_stmt", "create_view_stmt",
    "create_virtual_table_stmt", "with_clause", "cte_table_name", "recursive_cte",
    "common_table_expression", "delete_stmt", "delete_stmt_limited", "detach_stmt",
    "drop_stmt", "expr", "raise_function", "literal_value", "value_row", "values_clause",
    "insert_stmt", "returning_clause", "upsert_clause", "pragma_stmt", "pragma_value",
    "reindex_stmt", "select_stmt", "join_clause", "select_core", "factored_select_stmt",
    "simple_select_stmt", "compound_select_stmt", "table_or_subquery", "result_column",
    "join_operator", "join_constraint", "compound_operator", "update_stmt",
    "column_name_list", "update_stmt_limited", "qualified_table_name", "vacuum_stmt",
    "filter_clause", "window_defn", "over_clause", "frame_spec", "frame_clause",
    "simple_function_invocation", "aggregate_function_invocation", "window_function_invocation",
    "common_table_stmt", "order_by_stmt", "limit_stmt", "ordering_term", "asc_desc",
    "frame_left", "frame_right", "frame_single", "window_function", "offset",
    "default_value", "partition_by", "order_by_expr", "order_by_expr_asc_desc",
    "expr_asc_desc", "initial_select", "recursive_select", "unary_operator",
    "error_message", "module_argument", "column_alias", "keyword", "name",
    "function_name", "schema_name", "table_name", "table_or_index_name", "column_name",
    "collation_name", "foreign_table", "index_name", "trigger_name", "view_name",
    "module_name", "pragma_name", "savepoint_name", "table_alias", "transaction_name",
    "window_name", "alias", "filename", "base_window_name", "simple_func",
    "aggregate_func", "table_function_name", "any_name",
];
SQLiteParser._LITERAL_NAMES = [
    undefined, "';'", "'.'", "'('", "')'", "','", "'='", "'*'", "'+'", "'-'",
    "'~'", "'||'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'<'", "'<='",
    "'>'", "'>='", "'=='", "'!='", "'<>'",
];
SQLiteParser._SYMBOLIC_NAMES = [
    undefined, "SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", "COMMA", "ASSIGN",
    "STAR", "PLUS", "MINUS", "TILDE", "PIPE2", "DIV", "MOD", "LT2", "GT2",
    "AMP", "PIPE", "LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1", "NOT_EQ2",
    "ABORT", "ACTION", "ADD", "AFTER", "ALL", "ALTER", "ANALYZE", "AND", "AS",
    "ASC", "ATTACH", "AUTOINCREMENT", "BEFORE", "BEGIN", "BETWEEN", "BY",
    "CASCADE", "CASE", "CAST", "CHECK", "COLLATE", "COLUMN", "COMMIT", "CONFLICT",
    "CONSTRAINT", "CREATE", "CROSS", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP",
    "DATABASE", "DEFAULT", "DEFERRABLE", "DEFERRED", "DELETE", "DESC", "DETACH",
    "DISTINCT", "DROP", "EACH", "ELSE", "END", "ESCAPE", "EXCEPT", "EXCLUSIVE",
    "EXISTS", "EXPLAIN", "FAIL", "FOR", "FOREIGN", "FROM", "FULL", "GLOB",
    "GROUP", "HAVING", "IF", "IGNORE", "IMMEDIATE", "IN", "INDEX", "INDEXED",
    "INITIALLY", "INNER", "INSERT", "INSTEAD", "INTERSECT", "INTO", "IS",
    "ISNULL", "JOIN", "KEY", "LEFT", "LIKE", "LIMIT", "MATCH", "NATURAL",
    "NO", "NOT", "NOTNULL", "NULL", "OF", "OFFSET", "ON", "OR", "ORDER", "OUTER",
    "PLAN", "PRAGMA", "PRIMARY", "QUERY", "RAISE", "RECURSIVE", "REFERENCES",
    "REGEXP", "REINDEX", "RELEASE", "RENAME", "REPLACE", "RESTRICT", "RETURNING",
    "RIGHT", "ROLLBACK", "ROW", "ROWS", "SAVEPOINT", "SELECT", "SET", "TABLE",
    "TEMP", "TEMPORARY", "THEN", "TO", "TRANSACTION", "TRIGGER", "UNION",
    "UNIQUE", "UPDATE", "USING", "VACUUM", "VALUES", "VIEW", "VIRTUAL", "WHEN",
    "WHERE", "WITH", "WITHOUT", "FIRST_VALUE", "OVER", "PARTITION", "RANGE",
    "PRECEDING", "UNBOUNDED", "CURRENT", "FOLLOWING", "CUME_DIST", "DENSE_RANK",
    "LAG", "LAST_VALUE", "LEAD", "NTH_VALUE", "NTILE", "PERCENT_RANK", "RANK",
    "ROW_NUMBER", "GENERATED", "ALWAYS", "STORED", "TRUE", "FALSE", "WINDOW",
    "NULLS", "FIRST", "LAST", "FILTER", "GROUPS", "EXCLUDE", "TIES", "OTHERS",
    "DO", "NOTHING", "IDENTIFIER", "NUMERIC_LITERAL", "BIND_PARAMETER", "STRING_LITERAL",
    "BLOB_LITERAL", "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", "SPACES",
    "UNEXPECTED_CHAR",
];
SQLiteParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SQLiteParser._LITERAL_NAMES, SQLiteParser._SYMBOLIC_NAMES, []);
SQLiteParser._serializedATNSegments = 4;
SQLiteParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC3\u0810\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
    "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
    "r\tr\x03\x02\x07\x02\xE6\n\x02\f\x02\x0E\x02\xE9\v\x02\x03\x02\x03\x02" +
    "\x03\x03\x07\x03\xEE\n\x03\f\x03\x0E\x03\xF1\v\x03\x03\x03\x03\x03\x06" +
    "\x03\xF5\n\x03\r\x03\x0E\x03\xF6\x03\x03\x07\x03\xFA\n\x03\f\x03\x0E\x03" +
    "\xFD\v\x03\x03\x03\x07\x03\u0100\n\x03\f\x03\x0E\x03\u0103\v\x03\x03\x04" +
    "\x03\x04\x03\x04\x05\x04\u0108\n\x04\x05\x04\u010A\n\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0124\n\x04\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x05\x05\u012B\n\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
    "\x03\x05\x05\x05\u0132\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0138" +
    "\n\x05\x03\x05\x03\x05\x05\x05\u013C\n\x05\x03\x05\x03\x05\x03\x05\x05" +
    "\x05\u0141\n\x05\x03\x05\x05\x05\u0144\n\x05\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x05\x06\u014B\n\x06\x03\x06\x05\x06\u014E\n\x06\x03\x07\x03" +
    "\x07\x05\x07\u0152\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05" +
    "\b\u015A\n\b\x03\b\x03\b\x05\b\u015E\n\b\x05\b\u0160\n\b\x03\t\x03\t\x05" +
    "\t\u0164\n\t\x03\n\x03\n\x05\n\u0168\n\n\x03\n\x03\n\x05\n\u016C\n\n\x03" +
    "\n\x05\n\u016F\n\n\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f\u0176\n\f\x03\f" +
    "\x03\f\x03\r\x03\r\x05\r\u017C\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0182" +
    "\n\r\x03\r\x03\r\x03\r\x05\r\u0187\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
    "\r\x03\r\x07\r\u0190\n\r\f\r\x0E\r\u0193\v\r\x03\r\x03\r\x03\r\x05\r\u0198" +
    "\n\r\x03\x0E\x03\x0E\x05\x0E\u019C\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01A0" +
    "\n\x0E\x03\x0E\x05\x0E\u01A3\n\x0E\x03\x0F\x03\x0F\x05\x0F\u01A7\n\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01AD\n\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x05\x0F\u01B2\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
    "\u01B9\n\x0F\f\x0F\x0E\x0F\u01BC\v\x0F\x03\x0F\x03\x0F\x07\x0F\u01C0\n" +
    "\x0F\f\x0F\x0E\x0F\u01C3\v\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01C8\n" +
    "\x0F\x03\x0F\x03\x0F\x05\x0F\u01CC\n\x0F\x03\x10\x03\x10\x05\x10\u01D0" +
    "\n\x10\x03\x10\x07\x10\u01D3\n\x10\f\x10\x0E\x10\u01D6\v\x10\x03\x11\x06" +
    "\x11\u01D9\n\x11\r\x11\x0E\x11\u01DA\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01E7\n\x11\x03\x12" +
    "\x03\x12\x05\x12\u01EB\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01F0\n\x12" +
    "\x03\x12\x05\x12\u01F3\n\x12\x03\x12\x05\x12\u01F6\n\x12\x03\x12\x05\x12" +
    "\u01F9\n\x12\x03\x12\x03\x12\x05\x12\u01FD\n\x12\x03\x12\x05\x12\u0200" +
    "\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u020E\n\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x05\x12\u0215\n\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x05\x12\u021C\n\x12\x05\x12\u021E\n\x12\x03\x13\x05\x13\u0221" +
    "\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0227\n\x14\x03\x14\x03" +
    "\x14\x03\x14\x05\x14\u022C\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
    "\u0232\n\x14\f\x14\x0E\x14\u0235\v\x14\x03\x14\x03\x14\x05\x14\u0239\n" +
    "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
    "\x14\x03\x14\x03\x14\x07\x14\u0246\n\x14\f\x14\x0E\x14\u0249\v\x14\x03" +
    "\x14\x03\x14\x03\x14\x05\x14\u024E\n\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x07\x15\u0256\n\x15\f\x15\x0E\x15\u0259\v\x15\x03\x15" +
    "\x03\x15\x05\x15\u025D\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x05\x15\u0267\n\x15\x03\x15\x03\x15\x07\x15\u026B" +
    "\n\x15\f\x15\x0E\x15\u026E\v\x15\x03\x15\x05\x15\u0271\n\x15\x03\x15\x03" +
    "\x15\x03\x15\x05\x15\u0276\n\x15\x05\x15\u0278\n\x15\x03\x16\x03\x16\x03" +
    "\x16\x03\x16\x03\x17\x03\x17\x05\x17\u0280\n\x17\x03\x17\x03\x17\x03\x17" +
    "\x03\x17\x05\x17\u0286\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u028B\n\x17" +
    "\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0292\n\x17\x03\x17\x03" +
    "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u029B\n\x17\f\x17" +
    "\x0E\x17\u029E\v\x17\x05\x17\u02A0\n\x17\x05\x17\u02A2\n\x17\x03\x17\x03" +
    "\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02A9\n\x17\x03\x17\x03\x17\x05\x17" +
    "\u02AD\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02B4\n\x17" +
    "\x03\x17\x03\x17\x06\x17\u02B8\n\x17\r\x17\x0E\x17\u02B9\x03\x17\x03\x17" +
    "\x03\x18\x03\x18\x05\x18\u02C0\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
    "\x18\u02C6\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02CB\n\x18\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x07\x18\u02D2\n\x18\f\x18\x0E\x18\u02D5\v" +
    "\x18\x03\x18\x03\x18\x05\x18\u02D9\n\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
    "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02E4\n\x19\x03\x19\x03" +
    "\x19\x03\x19\x05\x19\u02E9\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
    "\x03\x19\x03\x19\x07\x19\u02F2\n\x19\f\x19\x0E\x19\u02F5\v\x19\x03\x19" +
    "\x03\x19\x05\x19\u02F9\n\x19\x03\x1A\x03\x1A\x05\x1A\u02FD\n\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x07\x1A\u030B\n\x1A\f\x1A\x0E\x1A\u030E\v\x1A\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0315\n\x1B\f\x1B\x0E\x1B\u0318" +
    "\v\x1B\x03\x1B\x03\x1B\x05\x1B\u031C\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
    "\x1C\x03\x1C\x03\x1C\x05\x1C\u0324\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
    "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u032E\n\x1D\f\x1D\x0E\x1D\u0331" +
    "\v\x1D\x03\x1D\x03\x1D\x05\x1D\u0335\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1D\x03\x1E\x05\x1E\u033D\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x03\x1E\x05\x1E\u0344\n\x1E\x03\x1E\x05\x1E\u0347\n\x1E\x03\x1F\x05\x1F" +
    "\u034A\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0351\n\x1F" +
    "\x03\x1F\x05\x1F\u0354\n\x1F\x03\x1F\x05\x1F\u0357\n\x1F\x03\x1F\x05\x1F" +
    "\u035A\n\x1F\x03 \x03 \x05 \u035E\n \x03 \x03 \x03!\x03!\x03!\x03!\x05" +
    "!\u0366\n!\x03!\x03!\x03!\x05!\u036B\n!\x03!\x03!\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x05\"\u0375\n\"\x03\"\x03\"\x03\"\x05\"\u037A\n\"\x03\"" +
    "\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0383\n\"\x03\"\x03\"\x03\"" +
    "\x07\"\u0388\n\"\f\"\x0E\"\u038B\v\"\x03\"\x05\"\u038E\n\"\x03\"\x03\"" +
    "\x05\"\u0392\n\"\x03\"\x05\"\u0395\n\"\x03\"\x03\"\x03\"\x03\"\x07\"\u039B" +
    "\n\"\f\"\x0E\"\u039E\v\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x05\"\u03AA\n\"\x03\"\x05\"\u03AD\n\"\x03\"\x03\"\x03\"" +
    "\x03\"\x03\"\x03\"\x05\"\u03B5\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x06\"" +
    "\u03BC\n\"\r\"\x0E\"\u03BD\x03\"\x03\"\x05\"\u03C2\n\"\x03\"\x03\"\x03" +
    "\"\x05\"\u03C7\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x03\"\x03\"\x05\"\u03E2\n\"\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x05\"\u03EB\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x03\"\x05\"\u03F7\n\"\x03\"\x03\"\x03\"\x05\"\u03FC\n\"" +
    "\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0408" +
    "\n\"\x03\"\x03\"\x03\"\x03\"\x05\"\u040E\n\"\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x05\"\u0415\n\"\x03\"\x03\"\x05\"\u0419\n\"\x03\"\x03\"\x03\"\x03\"" +
    "\x03\"\x03\"\x07\"\u0421\n\"\f\"\x0E\"\u0424\v\"\x05\"\u0426\n\"\x03\"" +
    "\x03\"\x03\"\x03\"\x05\"\u042C\n\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0432" +
    "\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u0439\n\"\f\"\x0E\"\u043C\v\"" +
    "\x05\"\u043E\n\"\x03\"\x03\"\x05\"\u0442\n\"\x07\"\u0444\n\"\f\"\x0E\"" +
    "\u0447\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u044F\n#\x03#\x03#\x03$" +
    "\x03$\x03%\x03%\x03%\x03%\x07%\u0459\n%\f%\x0E%\u045C\v%\x03%\x03%\x03" +
    "&\x03&\x03&\x03&\x07&\u0464\n&\f&\x0E&\u0467\v&\x03\'\x05\'\u046A\n\'" +
    "\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0471\n\'\x03\'\x03\'\x03\'\x03\'" +
    "\x05\'\u0477\n\'\x03\'\x03\'\x03\'\x05\'\u047C\n\'\x03\'\x03\'\x03\'\x03" +
    "\'\x07\'\u0482\n\'\f\'\x0E\'\u0485\v\'\x03\'\x03\'\x05\'\u0489\n\'\x03" +
    "\'\x03\'\x05\'\u048D\n\'\x03\'\x05\'\u0490\n\'\x03\'\x03\'\x05\'\u0494" +
    "\n\'\x03\'\x05\'\u0497\n\'\x03(\x03(\x03(\x03(\x07(\u049D\n(\f(\x0E(\u04A0" +
    "\v(\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u04A8\n)\f)\x0E)\u04AB\v)\x03)" +
    "\x03)\x03)\x05)\u04B0\n)\x05)\u04B2\n)\x03)\x03)\x03)\x03)\x03)\x03)\x05" +
    ")\u04BA\n)\x03)\x03)\x03)\x03)\x03)\x05)\u04C1\n)\x03)\x03)\x03)\x07)" +
    "\u04C6\n)\f)\x0E)\u04C9\v)\x03)\x03)\x05)\u04CD\n)\x05)\u04CF\n)\x03*" +
    "\x03*\x03*\x03*\x05*\u04D5\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*" +
    "\u04DE\n*\x03+\x03+\x03+\x05+\u04E3\n+\x03,\x03,\x03,\x03,\x03,\x05,\u04EA" +
    "\n,\x03,\x03,\x05,\u04EE\n,\x05,\u04F0\n,\x03-\x05-\u04F3\n-\x03-\x03" +
    "-\x03-\x03-\x07-\u04F9\n-\f-\x0E-\u04FC\v-\x03-\x05-\u04FF\n-\x03-\x05" +
    "-\u0502\n-\x03.\x03.\x03.\x03.\x05.\u0508\n.\x07.\u050A\n.\f.\x0E.\u050D" +
    "\v.\x03/\x03/\x05/\u0511\n/\x03/\x03/\x03/\x07/\u0516\n/\f/\x0E/\u0519" +
    "\v/\x03/\x03/\x03/\x03/\x07/\u051F\n/\f/\x0E/\u0522\v/\x03/\x05/\u0525" +
    "\n/\x05/\u0527\n/\x03/\x03/\x05/\u052B\n/\x03/\x03/\x03/\x03/\x03/\x07" +
    "/\u0532\n/\f/\x0E/\u0535\v/\x03/\x03/\x05/\u0539\n/\x05/\u053B\n/\x03" +
    "/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u0546\n/\f/\x0E/\u0549" +
    "\v/\x05/\u054B\n/\x03/\x05/\u054E\n/\x030\x030\x031\x051\u0553\n1\x03" +
    "1\x031\x051\u0557\n1\x031\x051\u055A\n1\x032\x052\u055D\n2\x032\x032\x03" +
    "2\x052\u0562\n2\x032\x032\x052\u0566\n2\x032\x062\u0569\n2\r2\x0E2\u056A" +
    "\x032\x052\u056E\n2\x032\x052\u0571\n2\x033\x033\x033\x053\u0576\n3\x03" +
    "3\x033\x053\u057A\n3\x033\x053\u057D\n3\x033\x033\x033\x033\x033\x053" +
    "\u0584\n3\x033\x033\x033\x053\u0589\n3\x033\x033\x033\x033\x033\x073\u0590" +
    "\n3\f3\x0E3\u0593\v3\x033\x033\x053\u0597\n3\x033\x053\u059A\n3\x033\x03" +
    "3\x033\x033\x073\u05A0\n3\f3\x0E3\u05A3\v3\x033\x053\u05A6\n3\x033\x03" +
    "3\x033\x033\x033\x033\x053\u05AE\n3\x033\x053\u05B1\n3\x053\u05B3\n3\x03" +
    "4\x034\x034\x034\x034\x034\x034\x054\u05BC\n4\x034\x054\u05BF\n4\x054" +
    "\u05C1\n4\x035\x035\x055\u05C5\n5\x035\x035\x055\u05C9\n5\x035\x035\x05" +
    "5\u05CD\n5\x035\x055\u05D0\n5\x036\x036\x036\x036\x036\x036\x036\x076" +
    "\u05D9\n6\f6\x0E6\u05DC\v6\x036\x036\x056\u05E0\n6\x037\x037\x057\u05E4" +
    "\n7\x037\x037\x057\u05E8\n7\x038\x058\u05EB\n8\x038\x038\x038\x058\u05F0" +
    "\n8\x038\x038\x038\x038\x058\u05F6\n8\x038\x038\x038\x038\x038\x058\u05FD" +
    "\n8\x038\x038\x038\x078\u0602\n8\f8\x0E8\u0605\v8\x038\x038\x038\x038" +
    "\x078\u060B\n8\f8\x0E8\u060E\v8\x038\x058\u0611\n8\x058\u0613\n8\x038" +
    "\x038\x058\u0617\n8\x038\x058\u061A\n8\x039\x039\x039\x039\x079\u0620" +
    "\n9\f9\x0E9\u0623\v9\x039\x039\x03:\x05:\u0628\n:\x03:\x03:\x03:\x05:" +
    "\u062D\n:\x03:\x03:\x03:\x03:\x05:\u0633\n:\x03:\x03:\x03:\x03:\x03:\x05" +
    ":\u063A\n:\x03:\x03:\x03:\x07:\u063F\n:\f:\x0E:\u0642\v:\x03:\x03:\x05" +
    ":\u0646\n:\x03:\x05:\u0649\n:\x03:\x05:\u064C\n:\x03:\x05:\u064F\n:\x03" +
    ";\x03;\x03;\x05;\u0654\n;\x03;\x03;\x03;\x05;\u0659\n;\x03;\x03;\x03;" +
    "\x03;\x03;\x05;\u0660\n;\x03<\x03<\x05<\u0664\n<\x03<\x03<\x05<\u0668" +
    "\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x05>\u0672\n>\x03>\x03>\x03" +
    ">\x03>\x03>\x07>\u0679\n>\f>\x0E>\u067C\v>\x05>\u067E\n>\x03>\x03>\x03" +
    ">\x03>\x03>\x07>\u0685\n>\f>\x0E>\u0688\v>\x03>\x05>\u068B\n>\x03>\x03" +
    ">\x03?\x03?\x03?\x03?\x05?\u0693\n?\x03?\x03?\x03?\x03?\x03?\x07?\u069A" +
    "\n?\f?\x0E?\u069D\v?\x05?\u069F\n?\x03?\x03?\x03?\x03?\x03?\x07?\u06A6" +
    "\n?\f?\x0E?\u06A9\v?\x05?\u06AB\n?\x03?\x05?\u06AE\n?\x03?\x05?\u06B1" +
    "\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u06BB\n@\x05@\u06BD\n" +
    "@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u06C6\nA\x03B\x03B\x03B\x03" +
    "B\x03B\x07B\u06CD\nB\fB\x0EB\u06D0\vB\x03B\x05B\u06D3\nB\x03B\x03B\x03" +
    "C\x03C\x03C\x05C\u06DA\nC\x03C\x03C\x03C\x07C\u06DF\nC\fC\x0EC\u06E2\v" +
    "C\x03C\x05C\u06E5\nC\x03C\x03C\x05C\u06E9\nC\x03D\x03D\x03D\x03D\x03D" +
    "\x07D\u06F0\nD\fD\x0ED\u06F3\vD\x03D\x05D\u06F6\nD\x03D\x03D\x05D\u06FA" +
    "\nD\x03D\x03D\x03D\x05D\u06FF\nD\x03E\x03E\x05E\u0703\nE\x03E\x03E\x03" +
    "E\x07E\u0708\nE\fE\x0EE\u070B\vE\x03F\x03F\x03F\x03F\x03F\x07F\u0712\n" +
    "F\fF\x0EF\u0715\vF\x03G\x03G\x03G\x03G\x05G\u071B\nG\x03H\x03H\x03H\x05" +
    "H\u0720\nH\x03H\x05H\u0723\nH\x03H\x03H\x05H\u0727\nH\x03I\x03I\x03J\x03" +
    "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0735\nJ\x03K\x03K\x03" +
    "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0741\nK\x03L\x03L\x03L\x03" +
    "L\x03L\x03L\x03L\x05L\u074A\nL\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05" +
    "M\u0753\nM\x03M\x03M\x05M\u0757\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M" +
    "\x03M\x05M\u0761\nM\x03M\x05M\u0764\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
    "M\x05M\u076D\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u0776\nM\x03M" +
    "\x05M\u0779\nM\x03M\x03M\x03M\x03M\x05M\u077F\nM\x03M\x03M\x03M\x03M\x03" +
    "M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u078D\nM\x03M\x03M\x05M\u0791" +
    "\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u079C\nM\x03M\x03" +
    "M\x03M\x05M\u07A1\nM\x03N\x03N\x03N\x03O\x03O\x03O\x03P\x03P\x03P\x06" +
    "P\u07AC\nP\rP\x0EP\u07AD\x03Q\x03Q\x03Q\x06Q\u07B3\nQ\rQ\x0EQ\u07B4\x03" +
    "R\x03R\x03R\x03R\x03S\x03S\x05S\u07BD\nS\x03S\x03S\x03S\x05S\u07C2\nS" +
    "\x07S\u07C4\nS\fS\x0ES\u07C7\vS\x03T\x03T\x03U\x03U\x03V\x03V\x03W\x03" +
    "W\x03X\x03X\x05X\u07D3\nX\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03" +
    "]\x03]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03a\x03b\x03b\x03c\x03c\x03" +
    "d\x03d\x03e\x03e\x03f\x03f\x03g\x03g\x03h\x03h\x03i\x03i\x03j\x03j\x03" +
    "k\x03k\x03l\x03l\x03m\x03m\x03n\x03n\x03o\x03o\x03p\x03p\x03q\x03q\x03" +
    "r\x03r\x03r\x03r\x03r\x03r\x03r\x05r\u080E\nr\x03r\x04\u01BA\u01DA\x02" +
    "\x03Bs\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
    "\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
    "(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
    "D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
    "`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
    "|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
    "\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
    "\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
    "\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
    "\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
    "\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\x02\x1F\x05\x02<" +
    "<GGTT\x04\x0211DD\x03\x02\x87\x88\x04\x02\x94\x94\xAD\xAD\x03\x02\n\v" +
    "\x04\x02==\x8F\x8F\x04\x02::jj\x04\x02<<TT\x07\x02\x1B\x1BJJSS||\x80\x80" +
    "\x06\x02VV\x86\x86\x8C\x8C\x93\x93\x04\x02\t\t\x0E\x0F\x03\x02\x10\x13" +
    "\x03\x02\x14\x17\x06\x02OOcceexx\x05\x02\x1B\x1BJJ\x80\x80\x07\x0268j" +
    "j\xAE\xAF\xBC\xBC\xBE\xBF\x04\x02\x1F\x1F@@\x05\x02NNbb\x7F\x7F\x05\x02" +
    "\x82\x82\x9C\x9C\xB5\xB5\x04\x02\x07\x07ll\x03\x02\xB2\xB3\x04\x02$$>" +
    ">\x04\x02\x99\x99\xA4\xA4\x04\x02\xA1\xA1\xA8\xA8\x04\x02\xA2\xA2\xA9" +
    "\xAA\x04\x02\xA3\xA3\xA5\xA5\x04\x02\n\fhh\x04\x02\xBB\xBB\xBE\xBE\x03" +
    "\x02\x1B\xBA\x02\u092C\x02\xE7\x03\x02\x02\x02\x04\xEF\x03\x02\x02\x02" +
    "\x06\u0109\x03\x02\x02\x02\b\u0125\x03\x02\x02\x02\n\u0145\x03\x02\x02" +
    "\x02\f\u014F\x03\x02\x02\x02\x0E\u0157\x03\x02\x02\x02\x10\u0161\x03\x02" +
    "\x02\x02\x12\u0165\x03\x02\x02\x02\x14\u0170\x03\x02\x02\x02\x16\u0173" +
    "\x03\x02\x02\x02\x18\u0179\x03\x02\x02\x02\x1A\u019B\x03\x02\x02\x02\x1C" +
    "\u01A4\x03\x02\x02";
SQLiteParser._serializedATNSegment1 = "\x02\x1E\u01CD\x03\x02\x02\x02 \u01D8\x03\x02\x02\x02\"\u01EA\x03\x02" +
    "\x02\x02$\u0220\x03\x02\x02\x02&\u0226\x03\x02\x02\x02(\u024F\x03\x02" +
    "\x02\x02*\u0279\x03\x02\x02\x02,\u027D\x03\x02\x02\x02.\u02BD\x03\x02" +
    "\x02\x020\u02DD\x03\x02\x02\x022\u02FA\x03\x02\x02\x024\u030F\x03\x02" +
    "\x02\x026\u031D\x03\x02\x02\x028\u0328\x03\x02\x02\x02:\u033C\x03\x02" +
    "\x02\x02<\u0349\x03\x02\x02\x02>\u035B\x03\x02\x02\x02@\u0361\x03\x02" +
    "\x02\x02B\u03C6\x03\x02\x02\x02D\u0448\x03\x02\x02\x02F\u0452\x03\x02" +
    "\x02\x02H\u0454\x03\x02\x02\x02J\u045F\x03\x02\x02\x02L\u0469\x03\x02" +
    "\x02\x02N\u0498\x03\x02\x02\x02P\u04A1\x03\x02\x02\x02R\u04D0\x03\x02" +
    "\x02\x02T\u04E2\x03\x02\x02\x02V\u04E4\x03\x02\x02\x02X\u04F2\x03\x02" +
    "\x02\x02Z\u0503\x03\x02\x02\x02\\\u054D\x03\x02\x02\x02^\u054F\x03\x02" +
    "\x02\x02`\u0552\x03\x02\x02\x02b\u055C\x03\x02\x02\x02d\u05B2\x03\x02" +
    "\x02\x02f\u05C0\x03\x02\x02\x02h\u05CF\x03\x02\x02\x02j\u05DF\x03\x02" +
    "\x02\x02l\u05E7\x03\x02\x02\x02n\u05EA\x03\x02\x02\x02p\u061B\x03\x02" +
    "\x02\x02r\u0627\x03\x02\x02\x02t\u0653\x03\x02\x02\x02v\u0661\x03\x02" +
    "\x02\x02x\u0669\x03\x02\x02\x02z\u066F\x03\x02\x02\x02|\u068E\x03\x02" +
    "\x02\x02~\u06B2\x03\x02\x02\x02\x80\u06BE\x03\x02\x02\x02\x82\u06C7\x03" +
    "\x02\x02\x02\x84\u06D6\x03\x02\x02\x02\x86\u06EA\x03\x02\x02\x02\x88\u0700" +
    "\x03\x02\x02\x02\x8A\u070C\x03\x02\x02\x02\x8C\u0716\x03\x02\x02\x02\x8E" +
    "\u071C\x03\x02\x02\x02\x90\u0728\x03\x02\x02\x02\x92\u0734\x03\x02\x02" +
    "\x02\x94\u0740\x03\x02\x02\x02\x96\u0749\x03\x02\x02\x02\x98\u07A0\x03" +
    "\x02\x02\x02\x9A\u07A2\x03\x02\x02\x02\x9C\u07A5\x03\x02\x02\x02\x9E\u07A8" +
    "\x03\x02\x02\x02\xA0\u07AF\x03\x02\x02\x02\xA2\u07B6\x03\x02\x02\x02\xA4" +
    "\u07BA\x03\x02\x02\x02\xA6\u07C8\x03\x02\x02\x02\xA8\u07CA\x03\x02\x02" +
    "\x02\xAA\u07CC\x03\x02\x02\x02\xAC\u07CE\x03\x02\x02\x02\xAE\u07D2\x03" +
    "\x02\x02\x02\xB0\u07D4\x03\x02\x02\x02\xB2\u07D6\x03\x02\x02\x02\xB4\u07D8" +
    "\x03\x02\x02\x02\xB6\u07DA\x03\x02\x02\x02\xB8\u07DC\x03\x02\x02\x02\xBA" +
    "\u07DE\x03\x02\x02\x02\xBC\u07E0\x03\x02\x02\x02\xBE\u07E2\x03\x02\x02" +
    "\x02\xC0\u07E4\x03\x02\x02\x02\xC2\u07E6\x03\x02\x02\x02\xC4\u07E8\x03" +
    "\x02\x02\x02\xC6\u07EA\x03\x02\x02\x02\xC8\u07EC\x03\x02\x02\x02\xCA\u07EE" +
    "\x03\x02\x02\x02\xCC\u07F0\x03\x02\x02\x02\xCE\u07F2\x03\x02\x02\x02\xD0" +
    "\u07F4\x03\x02\x02\x02\xD2\u07F6\x03\x02\x02\x02\xD4\u07F8\x03\x02\x02" +
    "\x02\xD6\u07FA\x03\x02\x02\x02\xD8\u07FC\x03\x02\x02\x02\xDA\u07FE\x03" +
    "\x02\x02\x02\xDC\u0800\x03\x02\x02\x02\xDE\u0802\x03\x02\x02\x02\xE0\u0804" +
    "\x03\x02\x02\x02\xE2\u080D\x03\x02\x02\x02\xE4\xE6\x05\x04\x03\x02\xE5" +
    "\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7" +
    "\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA" +
    "\xEB\x07\x02\x02\x03\xEB\x03\x03\x02\x02\x02\xEC\xEE\x07\x03\x02\x02\xED" +
    "\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF" +
    "\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2" +
    "\xFB\x05\x06\x04\x02\xF3\xF5\x07\x03\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5" +
    "\xF6\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7" +
    "\xF8\x03\x02\x02\x02\xF8\xFA\x05\x06\x04\x02\xF9\xF4\x03\x02\x02\x02\xFA" +
    "\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
    "\u0101\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0100\x07\x03\x02\x02" +
    "\xFF\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02" +
    "\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\x05\x03\x02\x02\x02\u0103\u0101" +
    "\x03\x02\x02\x02\u0104\u0107\x07I\x02\x02\u0105\u0106\x07t\x02\x02\u0106" +
    "\u0108\x07q\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02" +
    "\x02\u0108\u010A\x03\x02\x02\x02\u0109\u0104\x03\x02\x02\x02\u0109\u010A" +
    "\x03\x02\x02\x02\u010A\u0123\x03\x02\x02\x02\u010B\u0124\x05\b\x05\x02" +
    "\u010C\u0124\x05\n\x06\x02\u010D\u0124\x05\f\x07\x02\u010E\u0124\x05\x0E" +
    "\b\x02\u010F\u0124\x05\x10\t\x02\u0110\u0124\x05\x18\r\x02\u0111\u0124" +
    "\x05\x1C\x0F\x02\u0112\u0124\x05,\x17\x02\u0113\u0124\x05.\x18\x02\u0114" +
    "\u0124\x050\x19\x02\u0115\u0124\x05:\x1E\x02\u0116\u0124\x05<\x1F\x02" +
    "\u0117\u0124\x05> \x02\u0118\u0124\x05@!\x02\u0119\u0124\x05L\'\x02\u011A" +
    "\u0124\x05R*\x02\u011B\u0124\x05V,\x02\u011C\u0124\x05\x16\f\x02\u011D" +
    "\u0124\x05\x12\n\x02\u011E\u0124\x05\x14\v\x02\u011F\u0124\x05X-\x02\u0120" +
    "\u0124\x05n8\x02\u0121\u0124\x05r:\x02\u0122\u0124\x05v<\x02\u0123\u010B" +
    "\x03\x02\x02\x02\u0123\u010C\x03\x02\x02\x02\u0123\u010D\x03\x02\x02\x02" +
    "\u0123\u010E\x03\x02\x02\x02\u0123\u010F\x03\x02\x02\x02\u0123\u0110\x03" +
    "\x02\x02\x02\u0123\u0111\x03\x02\x02\x02\u0123\u0112\x03\x02\x02\x02\u0123" +
    "\u0113\x03\x02\x02\x02\u0123\u0114\x03\x02\x02\x02\u0123\u0115\x03\x02" +
    "\x02\x02\u0123\u0116\x03\x02\x02\x02\u0123\u0117\x03\x02\x02\x02\u0123" +
    "\u0118\x03\x02\x02\x02\u0123\u0119\x03\x02\x02\x02\u0123\u011A\x03\x02" +
    "\x02\x02\u0123\u011B\x03\x02\x02\x02\u0123\u011C\x03\x02\x02\x02\u0123" +
    "\u011D\x03\x02\x02\x02\u0123\u011E\x03\x02\x02\x02\u0123\u011F\x03\x02" +
    "\x02\x02\u0123\u0120\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123" +
    "\u0122\x03\x02\x02\x02\u0124\x07\x03\x02\x02\x02\u0125\u0126\x07 \x02" +
    "\x02\u0126\u012A\x07\x86\x02\x02\u0127\u0128\x05\xB8]\x02\u0128\u0129" +
    "\x07\x04\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0127\x03\x02\x02\x02" +
    "\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u0143\x05" +
    "\xBA^\x02\u012D\u0137\x07{\x02\x02\u012E\u012F\x07\x8A\x02\x02\u012F\u0138" +
    "\x05\xBA^\x02\u0130\u0132\x070\x02\x02\u0131\u0130\x03\x02\x02\x02\u0131" +
    "\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x05\xBE" +
    "`\x02\u0134\u0135\x07\x8A\x02\x02\u0135\u0136\x05\xBE`\x02\u0136\u0138" +
    "\x03\x02\x02\x02\u0137\u012E\x03\x02\x02\x02\u0137\u0131\x03\x02\x02\x02" +
    "\u0138\u0144\x03\x02\x02\x02\u0139\u013B\x07\x1D\x02\x02\u013A\u013C\x07" +
    "0\x02\x02\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C" +
    "\u013D\x03\x02\x02\x02\u013D\u0144\x05\x1E\x10\x02\u013E\u0140\x07A\x02" +
    "\x02\u013F\u0141\x070\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141" +
    "\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x05\xBE`\x02" +
    "\u0143\u012D\x03\x02\x02\x02\u0143\u0139\x03\x02\x02\x02\u0143\u013E\x03" +
    "\x02\x02\x02\u0144\t\x03\x02\x02\x02\u0145\u014D\x07!\x02\x02\u0146\u014E" +
    "\x05\xB8]\x02\u0147\u0148\x05\xB8]\x02\u0148\u0149\x07\x04\x02\x02\u0149" +
    "\u014B\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u014B\x03\x02" +
    "\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x05\xBC_\x02\u014D\u0146" +
    "\x03\x02\x02\x02\u014D\u014A\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02" +
    "\u014E\v\x03\x02\x02\x02\u014F\u0151\x07%\x02\x02\u0150\u0152\x079\x02" +
    "\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153" +
    "\x03\x02\x02\x02\u0153\u0154\x05B\"\x02\u0154\u0155\x07#\x02\x02\u0155" +
    "\u0156\x05\xB8]\x02\u0156\r\x03\x02\x02\x02\u0157\u0159\x07(\x02\x02\u0158" +
    "\u015A\t\x02\x02\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02" +
    "\x02\u015A\u015F\x03\x02\x02\x02\u015B\u015D\x07\x8B\x02\x02\u015C\u015E" +
    "\x05\xD2j\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02" +
    "\u015E\u0160\x03\x02\x02\x02\u015F\u015B\x03\x02\x02\x02\u015F\u0160\x03" +
    "\x02\x02\x02\u0160\x0F\x03\x02\x02\x02\u0161\u0163\t\x03\x02\x02\u0162" +
    "\u0164\x07\x8B\x02\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02" +
    "\x02\x02\u0164\x11\x03\x02\x02\x02\u0165\u0167\x07\x80\x02\x02\u0166\u0168" +
    "\x07\x8B\x02\x02\u0167\u0166\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
    "\u0168\u016E\x03\x02\x02\x02\u0169\u016B\x07\x8A\x02\x02\u016A\u016C\x07" +
    "\x83\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
    "\u016D\x03\x02\x02\x02\u016D\u016F\x05\xCEh\x02\u016E\u0169\x03\x02\x02" +
    "\x02\u016E\u016F\x03\x02\x02\x02\u016F\x13\x03\x02\x02\x02\u0170\u0171" +
    "\x07\x83\x02\x02\u0171\u0172\x05\xCEh\x02\u0172\x15\x03\x02\x02\x02\u0173" +
    "\u0175\x07z\x02\x02\u0174\u0176\x07\x83\x02\x02\u0175\u0174\x03\x02\x02" +
    "\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178" +
    "\x05\xCEh\x02\u0178\x17\x03\x02\x02\x02\u0179\u017B\x074\x02\x02\u017A" +
    "\u017C\x07\x8E\x02\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02" +
    "\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u0181\x07V\x02\x02\u017E\u017F" +
    "\x07R\x02\x02\u017F\u0180\x07h\x02\x02\u0180\u0182\x07H\x02\x02\u0181" +
    "\u017E\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0186\x03\x02" +
    "\x02\x02\u0183\u0184\x05\xB8]\x02\u0184\u0185\x07\x04\x02\x02\u0185\u0187" +
    "\x03\x02\x02\x02\u0186\u0183\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
    "\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x05\xC4c\x02\u0189\u018A\x07" +
    "m\x02\x02\u018A\u018B\x05\xBA^\x02\u018B\u018C\x07\x05\x02\x02\u018C\u0191" +
    "\x05\x1A\x0E\x02\u018D\u018E\x07\x07\x02\x02\u018E\u0190\x05\x1A\x0E\x02" +
    "\u018F\u018D\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03" +
    "\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02\x02\x02\u0193" +
    "\u0191\x03\x02\x02\x02\u0194\u0197\x07\x06\x02\x02\u0195\u0196\x07\x96" +
    "\x02\x02\u0196\u0198\x05B\"\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198" +
    "\x03\x02\x02\x02\u0198\x19\x03\x02\x02\x02\u0199\u019C\x05\xBE`\x02\u019A" +
    "\u019C\x05B\"\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019A\x03\x02\x02" +
    "\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019E\x07/\x02\x02\u019E\u01A0" +
    "\x05\xC0a\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
    "\u01A0\u01A2\x03\x02\x02\x02\u01A1\u01A3\x05\x90I\x02\u01A2\u01A1\x03" +
    "\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\x1B\x03\x02\x02\x02\u01A4" +
    "\u01A6\x074\x02\x02\u01A5\u01A7\t\x04\x02\x02\u01A6\u01A5\x03\x02\x02" +
    "\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AC" +
    "\x07\x86\x02\x02\u01A9\u01AA\x07R\x02\x02\u01AA\u01AB\x07h\x02\x02\u01AB" +
    "\u01AD\x07H\x02\x02\u01AC\u01A9\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02" +
    "\x02\u01AD\u01B1\x03\x02\x02\x02\u01AE\u01AF\x05\xB8]\x02\u01AF\u01B0" +
    "\x07\x04\x02\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01AE\x03\x02\x02\x02" +
    "\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01CB\x05" +
    "\xBA^\x02\u01B4\u01B5\x07\x05\x02\x02\u01B5\u01BA\x05\x1E\x10\x02\u01B6" +
    "\u01B7\x07\x07\x02\x02\u01B7\u01B9\x05\x1E\x10\x02\u01B8\u01B6\x03\x02" +
    "\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BA" +
    "\u01B8\x03\x02\x02\x02\u01BB\u01C1\x03\x02\x02\x02\u01BC\u01BA\x03\x02" +
    "\x02\x02\u01BD\u01BE\x07\x07\x02\x02\u01BE\u01C0\x05&\x14\x02\u01BF\u01BD" +
    "\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02" +
    "\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01C1\x03" +
    "\x02\x02\x02\u01C4\u01C7\x07\x06\x02\x02\u01C5\u01C6\x07\x98\x02\x02\u01C6" +
    "\u01C8\x07\xBB\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02" +
    "\x02\x02\u01C8\u01CC\x03\x02\x02\x02\u01C9\u01CA\x07#\x02\x02\u01CA\u01CC" +
    "\x05X-\x02\u01CB\u01B4\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
    "\x1D\x03\x02\x02\x02\u01CD\u01CF\x05\xBE`\x02\u01CE\u01D0\x05 \x11\x02" +
    "\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D4\x03" +
    "\x02\x02\x02\u01D1\u01D3\x05\"\x12\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3" +
    "\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02" +
    "\x02\x02\u01D5\x1F\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D9" +
    "\x05\xB4[\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02" +
    "\u01DA\u01DB\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01E6\x03" +
    "\x02\x02\x02\u01DC\u01DD\x07\x05\x02\x02\u01DD\u01DE\x05$\x13\x02\u01DE" +
    "\u01DF\x07\x06\x02\x02\u01DF\u01E7\x03\x02\x02\x02\u01E0\u01E1\x07\x05" +
    "\x02\x02\u01E1\u01E2\x05$\x13\x02\u01E2\u01E3\x07\x07\x02\x02\u01E3\u01E4" +
    "\x05$\x13\x02\u01E4\u01E5\x07\x06\x02\x02\u01E5\u01E7\x03\x02\x02\x02" +
    "\u01E6\u01DC\x03\x02\x02\x02\u01E6\u01E0\x03\x02\x02\x02\u01E6\u01E7\x03" +
    "\x02\x02\x02\u01E7!\x03\x02\x02\x02\u01E8\u01E9\x073\x02\x02\u01E9\u01EB" +
    "\x05\xB4[\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02" +
    "\u01EB\u021D\x03\x02\x02\x02\u01EC\u01ED\x07s\x02\x02\u01ED\u01EF\x07" +
    "a\x02\x02\u01EE\u01F0\x05\x90I\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0" +
    "\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01F3\x05*\x16\x02" +
    "\u01F2\u01F1\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03" +
    "\x02\x02\x02\u01F4\u01F6\x07&\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5" +
    "\u01F6\x03\x02\x02\x02\u01F6\u021E\x03\x02\x02\x02\u01F7\u01F9\x07h\x02" +
    "\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA" +
    "\x03\x02\x02\x02\u01FA\u01FD\x07j\x02\x02\u01FB\u01FD\x07\x8E\x02\x02" +
    "\u01FC\u01F8\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD\u01FF\x03" +
    "\x02\x02\x02\u01FE\u0200\x05*\x16\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF" +
    "\u0200\x03\x02\x02\x02\u0200\u021E\x03\x02\x02\x02\u0201\u0202\x07.\x02" +
    "\x02\u0202\u0203\x07\x05\x02\x02\u0203\u0204\x05B\"\x02\u0204\u0205\x07" +
    "\x06\x02\x02\u0205\u021E\x03\x02\x02\x02\u0206\u020D\x07:\x02\x02\u0207" +
    "\u020E\x05$\x13\x02\u0208\u020E\x05F$\x02\u0209\u020A\x07\x05\x02\x02" +
    "\u020A\u020B\x05B\"\x02\u020B\u020C\x07\x06\x02\x02\u020C\u020E\x03\x02" +
    "\x02\x02\u020D\u0207\x03\x02\x02\x02\u020D\u0208\x03\x02\x02\x02\u020D" +
    "\u0209\x03\x02\x02\x02\u020E\u021E\x03\x02\x02\x02\u020F\u0210\x07/\x02" +
    "\x02\u0210\u021E\x05\xC0a\x02\u0211\u021E\x05(\x15\x02\u0212\u0213\x07" +
    "\xAB\x02\x02\u0213\u0215\x07\xAC\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214" +
    "\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x07#\x02" +
    "\x02\u0217\u0218\x07\x05\x02\x02\u0218\u0219\x05B\"\x02\u0219\u021B\x07" +
    "\x06\x02\x02\u021A\u021C\t\x05\x02\x02\u021B\u021A\x03\x02\x02\x02\u021B" +
    "\u021C\x03\x02\x02\x02\u021C\u021E\x03\x02\x02\x02\u021D\u01EC\x03\x02" +
    "\x02\x02\u021D\u01FC\x03\x02\x02\x02\u021D\u0201\x03\x02\x02\x02\u021D" +
    "\u0206\x03\x02\x02\x02\u021D\u020F\x03\x02\x02\x02\u021D\u0211\x03\x02" +
    "\x02\x02\u021D\u0214\x03\x02\x02\x02\u021E#\x03\x02\x02\x02\u021F\u0221" +
    "\t\x06\x02\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02" +
    "\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07\xBC\x02\x02\u0223%\x03\x02" +
    "\x02\x02\u0224\u0225\x073\x02\x02\u0225\u0227\x05\xB4[\x02\u0226\u0224" +
    "\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u024D\x03\x02\x02\x02" +
    "\u0228\u0229\x07s\x02\x02\u0229\u022C\x07a\x02\x02\u022A\u022C\x07\x8E" +
    "\x02\x02\u022B\u0228\x03\x02\x02\x02\u022B\u022A\x03\x02\x02\x02\u022C" +
    "\u022D\x03\x02\x02\x02\u022D\u022E\x07\x05\x02\x02\u022E\u0233\x05\x1A" +
    "\x0E\x02\u022F\u0230\x07\x07\x02\x02\u0230\u0232\x05\x1A\x0E\x02\u0231" +
    "\u022F\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02" +
    "\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235" +
    "\u0233\x03\x02\x02\x02\u0236\u0238\x07\x06\x02\x02\u0237\u0239\x05*\x16" +
    "\x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u024E" +
    "\x03\x02\x02\x02\u023A\u023B\x07.\x02\x02\u023B\u023C\x07\x05\x02\x02" +
    "\u023C\u023D\x05B\"\x02\u023D\u023E\x07\x06\x02\x02\u023E\u024E\x03\x02" +
    "\x02\x02\u023F\u0240\x07L\x02\x02\u0240\u0241\x07a\x02\x02\u0241\u0242" +
    "\x07\x05\x02\x02\u0242\u0247\x05\xBE`\x02\u0243\u0244\x07\x07\x02\x02" +
    "\u0244\u0246\x05\xBE`\x02\u0245\u0243\x03\x02\x02\x02\u0246\u0249\x03" +
    "\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248" +
    "\u024A\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A\u024B\x07\x06" +
    "\x02\x02\u024B\u024C\x05(\x15\x02\u024C\u024E\x03\x02\x02\x02\u024D\u022B" +
    "\x03\x02\x02\x02\u024D\u023A\x03\x02\x02\x02\u024D\u023F\x03\x02\x02\x02" +
    "\u024E\'\x03\x02\x02\x02\u024F\u0250\x07w\x02\x02\u0250\u025C\x05\xC2" +
    "b\x02\u0251\u0252\x07\x05\x02\x02\u0252\u0257\x05\xBE`\x02\u0253\u0254" +
    "\x07\x07\x02\x02\u0254\u0256\x05\xBE`\x02\u0255\u0253\x03\x02\x02\x02" +
    "\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03" +
    "\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A" +
    "\u025B\x07\x06\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u0251\x03\x02" +
    "\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u026C\x03\x02\x02\x02\u025E" +
    "\u025F\x07m\x02\x02\u025F\u0266\t\x07\x02\x02\u0260\u0261\x07\x85\x02" +
    "\x02\u0261\u0267\t\b\x02\x02\u0262\u0267\x07+\x02\x02\u0263\u0267\x07" +
    "}\x02\x02\u0264\u0265\x07g\x02\x02\u0265\u0267\x07\x1C\x02\x02\u0266\u0260" +
    "\x03\x02\x02\x02\u0266\u0262\x03\x02\x02\x02\u0266\u0263\x03\x02\x02\x02" +
    "\u0266\u0264\x03\x02\x02\x02\u0267\u026B\x03\x02\x02\x02\u0268\u0269\x07" +
    "e\x02\x02\u0269\u026B\x05\xB4[\x02\u026A\u025E\x03\x02\x02\x02\u026A\u0268" +
    "\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02" +
    "\u026C\u026D\x03\x02\x02\x02\u026D\u0277\x03\x02\x02\x02\u026E\u026C\x03" +
    "\x02\x02\x02\u026F\u0271\x07h\x02\x02\u0270\u026F\x03\x02\x02\x02\u0270" +
    "\u0271\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0275\x07;\x02" +
    "\x02\u0273\u0274\x07X\x02\x02\u0274\u0276\t\t\x02\x02\u0275\u0273\x03" +
    "\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277" +
    "\u0270\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278)\x03\x02\x02" +
    "\x02\u0279\u027A\x07m\x02\x02\u027A\u027B\x072\x02\x02\u027B\u027C\t\n" +
    "\x02\x02\u027C+\x03\x02\x02\x02\u027D\u027F\x074\x02\x02\u027E\u0280\t" +
    "\x04\x02\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280" +
    "\u0281\x03\x02\x02\x02\u0281\u0285\x07\x8C\x02\x02\u0282\u0283\x07R\x02" +
    "\x02\u0283\u0284\x07h\x02\x02\u0284\u0286\x07H\x02\x02\u0285\u0282\x03" +
    "\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u028A\x03\x02\x02\x02\u0287" +
    "\u0288\x05\xB8]\x02\u0288\u0289\x07\x04\x02\x02\u0289\u028B\x03\x02\x02" +
    "\x02\u028A\u0287\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028C" +
    "\x03\x02\x02\x02\u028C\u0291\x05\xC6d\x02\u028D\u0292\x07\'\x02\x02\u028E" +
    "\u0292\x07\x1E\x02\x02\u028F\u0290\x07[\x02\x02\u0290\u0292\x07k\x02\x02" +
    "\u0291\u028D\x03\x02\x02\x02\u0291\u028E\x03\x02\x02\x02\u0291\u028F\x03" +
    "\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u02A1\x03\x02\x02\x02\u0293" +
    "\u02A2\x07=\x02\x02\u0294\u02A2\x07Z\x02\x02\u0295\u029F\x07\x8F\x02\x02" +
    "\u0296\u0297\x07k\x02\x02\u0297\u029C\x05\xBE`\x02\u0298\u0299\x07\x07" +
    "\x02\x02\u0299\u029B\x05\xBE`\x02\u029A\u0298\x03\x02\x02\x02\u029B\u029E" +
    "\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02" +
    "\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u0296\x03" +
    "\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1" +
    "\u0293\x03\x02\x02\x02\u02A1\u0294\x03\x02\x02\x02\u02A1\u0295\x03\x02" +
    "\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x07m\x02\x02\u02A4\u02A8" +
    "\x05\xBA^\x02\u02A5\u02A6\x07K\x02\x02\u02A6\u02A7\x07B\x02\x02\u02A7" +
    "\u02A9\x07\x81\x02\x02\u02A8\u02A5\x03\x02\x02\x02\u02A8\u02A9\x03\x02" +
    "\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02AB\x07\x95\x02\x02\u02AB" +
    "\u02AD\x05B\"\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02" +
    "\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B7\x07(\x02\x02\u02AF\u02B4" +
    "\x05n8\x02\u02B0\u02B4\x05L\'\x02\u02B1\u02B4\x05:\x1E\x02\u02B2\u02B4" +
    "\x05X-\x02\u02B3\u02AF\x03\x02\x02\x02\u02B3\u02B0\x03\x02\x02\x02\u02B3" +
    "\u02B1\x03\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02" +
    "\x02\x02\u02B5\u02B6\x07\x03\x02\x02\u02B6\u02B8\x03\x02\x02\x02\u02B7" +
    "\u02B3\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02B7\x03\x02" +
    "\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB" +
    "\u02BC\x07D\x02\x02\u02BC-\x03\x02\x02\x02\u02BD\u02BF\x074\x02\x02\u02BE" +
    "\u02C0\t\x04\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02" +
    "\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C5\x07\x93\x02\x02\u02C2\u02C3" +
    "\x07R\x02\x02\u02C3\u02C4\x07h\x02\x02\u02C4\u02C6\x07H\x02\x02\u02C5" +
    "\u02C2\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02CA\x03\x02" +
    "\x02\x02\u02C7\u02C8\x05\xB8]\x02\u02C8\u02C9\x07\x04\x02\x02\u02C9\u02CB" +
    "\x03\x02\x02\x02\u02CA\u02C7\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02" +
    "\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02D8\x05\xC8e\x02\u02CD\u02CE\x07" +
    "\x05\x02\x02\u02CE\u02D3\x05\xBE`\x02\u02CF\u02D0\x07\x07\x02\x02\u02D0" +
    "\u02D2\x05\xBE`\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02" +
    "\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6" +
    "\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D7\x07\x06\x02\x02" +
    "\u02D7\u02D9\x03\x02\x02\x02\u02D8\u02CD\x03\x02\x02\x02\u02D8\u02D9\x03" +
    "\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x07#\x02\x02\u02DB" +
    "\u02DC\x05X-\x02\u02DC/\x03\x02\x02\x02\u02DD\u02DE\x074\x02\x02\u02DE" +
    "\u02DF\x07\x94\x02\x02\u02DF\u02E3\x07\x86\x02\x02\u02E0\u02E1\x07R\x02" +
    "\x02\u02E1\u02E2\x07h\x02\x02\u02E2\u02E4\x07H\x02\x02\u02E3\u02E0\x03" +
    "\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E8\x03\x02\x02\x02\u02E5" +
    "\u02E6\x05\xB8]\x02\u02E6\u02E7\x07\x04\x02\x02\u02E7\u02E9\x03\x02\x02" +
    "\x02\u02E8\u02E5\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EA" +
    "\x03\x02\x02\x02\u02EA\u02EB\x05\xBA^\x02\u02EB\u02EC\x07\x90\x02\x02" +
    "\u02EC\u02F8\x05\xCAf\x02\u02ED\u02EE\x07\x05\x02\x02\u02EE\u02F3\x05" +
    "\xAEX\x02\u02EF\u02F0\x07\x07\x02\x02\u02F0\u02F2\x05\xAEX\x02\u02F1\u02EF" +
    "\x03\x02\x02\x02\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02" +
    "\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F3\x03" +
    "\x02\x02\x02\u02F6\u02F7\x07\x06\x02\x02\u02F7\u02F9\x03\x02\x02\x02\u02F8" +
    "\u02ED\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F91\x03\x02\x02" +
    "\x02\u02FA\u02FC\x07\x97\x02\x02\u02FB\u02FD\x07v\x02\x02\u02FC\u02FB" +
    "\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02" +
    "\u02FE\u02FF\x054\x1B\x02\u02FF\u0300\x07#\x02\x02\u0300\u0301\x07\x05" +
    "\x02\x02\u0301\u0302\x05X-\x02\u0302\u030C\x07\x06\x02\x02\u0303\u0304" +
    "\x07\x07\x02\x02\u0304\u0305\x054\x1B\x02\u0305\u0306\x07#\x02\x02\u0306" +
    "\u0307\x07\x05\x02\x02\u0307\u0308\x05X-\x02\u0308\u0309\x07\x06\x02\x02" +
    "\u0309\u030B\x03\x02\x02\x02\u030A\u0303\x03\x02\x02\x02\u030B\u030E\x03" +
    "\x02\x02\x02\u030C\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D" +
    "3\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030F\u031B\x05\xBA^\x02" +
    "\u0310\u0311\x07\x05\x02\x02\u0311\u0316\x05\xBE`\x02\u0312\u0313\x07" +
    "\x07\x02\x02\u0313\u0315\x05\xBE`\x02\u0314\u0312\x03\x02\x02\x02\u0315" +
    "\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02" +
    "\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319" +
    "\u031A\x07\x06\x02\x02\u031A\u031C\x03\x02\x02\x02\u031B\u0310\x03\x02" +
    "\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C5\x03\x02\x02\x02\u031D\u031E" +
    "\x054\x1B\x02\u031E\u031F\x07#\x02\x02\u031F\u0320\x07\x05\x02\x02\u0320" +
    "\u0321\x05\xA6T\x02\u0321\u0323\x07\x8D\x02\x02\u0322\u0324\x07\x1F\x02" +
    "\x02\u0323\u0322\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0325" +
    "\x03\x02\x02\x02\u0325\u0326\x05\xA8U\x02\u0326\u0327\x07\x06\x02\x02" +
    "\u03277\x03\x02\x02\x02\u0328\u0334\x05\xBA^\x02\u0329\u032A\x07\x05\x02" +
    "\x02\u032A\u032F\x05\xBE`\x02\u032B\u032C\x07\x07\x02\x02\u032C\u032E" +
    "\x05\xBE`\x02\u032D\u032B\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02" +
    "\u032F\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0332\x03" +
    "\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0333\x07\x06\x02\x02\u0333" +
    "\u0335\x03\x02\x02\x02\u0334\u0329\x03\x02\x02\x02\u0334\u0335\x03\x02" +
    "\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0337\x07#\x02\x02\u0337\u0338" +
    "\x07\x05\x02\x02\u0338\u0339\x05X-\x02\u0339\u033A\x07\x06\x02\x02\u033A";
SQLiteParser._serializedATNSegment2 = "9\x03\x02\x02\x02\u033B\u033D\x052\x1A\x02\u033C\u033B\x03\x02\x02\x02" +
    "\u033C\u033D\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u033F\x07" +
    "=\x02\x02\u033F\u0340\x07M\x02\x02\u0340\u0343\x05t;\x02\u0341\u0342\x07" +
    "\x96\x02\x02\u0342\u0344\x05B\"\x02\u0343\u0341\x03\x02\x02\x02\u0343" +
    "\u0344\x03\x02\x02\x02\u0344\u0346\x03\x02\x02\x02\u0345\u0347\x05N(\x02" +
    "\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347;\x03\x02" +
    "\x02\x02\u0348\u034A\x052\x1A\x02\u0349\u0348\x03\x02\x02\x02\u0349\u034A" +
    "\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034C\x07=\x02\x02" +
    "\u034C\u034D\x07M\x02\x02\u034D\u0350\x05t;\x02\u034E\u034F\x07\x96\x02" +
    "\x02\u034F\u0351\x05B\"\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03" +
    "\x02\x02\x02\u0351\u0353\x03\x02\x02\x02\u0352\u0354\x05N(\x02\u0353\u0352" +
    "\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0359\x03\x02\x02\x02" +
    "\u0355\u0357\x05\x8AF\x02\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03" +
    "\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035A\x05\x8CG\x02\u0359" +
    "\u0356\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A=\x03\x02\x02" +
    "\x02\u035B\u035D\x07?\x02\x02\u035C\u035E\x079\x02\x02\u035D\u035C\x03" +
    "\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F" +
    "\u0360\x05\xB8]\x02\u0360?\x03\x02\x02\x02\u0361\u0362\x07A\x02\x02\u0362" +
    "\u0365\t\v\x02\x02\u0363\u0364\x07R\x02\x02\u0364\u0366\x07H\x02\x02\u0365" +
    "\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u036A\x03\x02" +
    "\x02\x02\u0367\u0368\x05\xB8]\x02\u0368\u0369\x07\x04\x02\x02\u0369\u036B" +
    "\x03\x02\x02\x02\u036A\u0367\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02" +
    "\u036B\u036C\x03\x02\x02\x02\u036C\u036D\x05\xE2r\x02\u036DA\x03\x02\x02" +
    "\x02\u036E\u036F\b\"\x01\x02\u036F\u03C7\x05F$\x02\u0370\u03C7\x07\xBD" +
    "\x02\x02\u0371\u0372\x05\xB8]\x02\u0372\u0373\x07\x04\x02\x02\u0373\u0375" +
    "\x03\x02\x02\x02\u0374\u0371\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02" +
    "\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x05\xBA^\x02\u0377\u0378\x07" +
    "\x04\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379\u0374\x03\x02\x02\x02\u0379" +
    "\u037A\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u03C7\x05\xBE" +
    "`\x02\u037C\u037D\x05\xAAV\x02\u037D\u037E\x05B\"\x17\u037E\u03C7\x03" +
    "\x02\x02\x02\u037F\u0380\x05\xB6\\\x02\u0380\u038D\x07\x05\x02\x02\u0381" +
    "\u0383\x07@\x02\x02\u0382\u0381\x03\x02\x02\x02\u0382\u0383\x03\x02\x02" +
    "\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0389\x05B\"\x02\u0385\u0386\x07" +
    "\x07\x02\x02\u0386\u0388\x05B\"\x02\u0387\u0385\x03\x02\x02\x02\u0388" +
    "\u038B\x03\x02\x02\x02\u0389\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02" +
    "\x02\x02\u038A\u038E\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038C" +
    "\u038E\x07\t\x02\x02\u038D\u0382\x03\x02\x02\x02\u038D\u038C\x03\x02\x02" +
    "\x02\u038D\u038E\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0391" +
    "\x07\x06\x02\x02\u0390\u0392\x05x=\x02\u0391\u0390\x03\x02\x02\x02\u0391" +
    "\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02\x02\x02\u0393\u0395\x05|?\x02" +
    "\u0394\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u03C7\x03" +
    "\x02\x02\x02\u0396\u0397\x07\x05\x02\x02\u0397\u039C\x05B\"\x02\u0398" +
    "\u0399\x07\x07\x02\x02\u0399\u039B\x05B\"\x02\u039A\u0398\x03\x02\x02" +
    "\x02\u039B\u039E\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039C\u039D" +
    "\x03\x02\x02\x02\u039D\u039F\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02" +
    "\u039F\u03A0\x07\x06\x02\x02\u03A0\u03C7\x03\x02\x02\x02\u03A1\u03A2\x07" +
    "-\x02\x02\u03A2\u03A3\x07\x05\x02\x02\u03A3\u03A4\x05B\"\x02\u03A4\u03A5" +
    "\x07#\x02\x02\u03A5\u03A6\x05 \x11\x02\u03A6\u03A7\x07\x06\x02\x02\u03A7" +
    "\u03C7\x03\x02\x02\x02\u03A8\u03AA\x07h\x02\x02\u03A9\u03A8\x03\x02\x02" +
    "\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD" +
    "\x07H\x02\x02\u03AC\u03A9\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02" +
    "\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x07\x05\x02\x02\u03AF\u03B0\x05" +
    "X-\x02\u03B0\u03B1\x07\x06\x02\x02\u03B1\u03C7\x03\x02\x02\x02\u03B2\u03B4" +
    "\x07,\x02\x02\u03B3\u03B5\x05B\"\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4" +
    "\u03B5\x03\x02\x02\x02\u03B5\u03BB\x03\x02\x02\x02\u03B6\u03B7\x07\x95" +
    "\x02\x02\u03B7\u03B8\x05B\"\x02\u03B8\u03B9\x07\x89\x02\x02\u03B9\u03BA" +
    "\x05B\"\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03B6\x03\x02\x02\x02\u03BC" +
    "\u03BD\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02" +
    "\x02\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF\u03C0\x07C\x02\x02\u03C0\u03C2" +
    "\x05B\"\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2" +
    "\u03C3\x03\x02\x02\x02\u03C3\u03C4\x07D\x02\x02\u03C4\u03C7\x03\x02\x02" +
    "\x02\u03C5\u03C7\x05D#\x02\u03C6\u036E\x03\x02\x02\x02\u03C6\u0370\x03" +
    "\x02\x02\x02\u03C6\u0379\x03\x02\x02\x02\u03C6\u037C\x03\x02\x02\x02\u03C6" +
    "\u037F\x03\x02\x02\x02\u03C6\u0396\x03\x02\x02\x02\u03C6\u03A1\x03\x02" +
    "\x02\x02\u03C6\u03AC\x03\x02\x02\x02\u03C6\u03B2\x03\x02\x02\x02\u03C6" +
    "\u03C5\x03\x02\x02\x02\u03C7\u0445\x03\x02\x02\x02\u03C8\u03C9\f\x16\x02" +
    "\x02\u03C9\u03CA\x07\r\x02\x02\u03CA\u0444\x05B\"\x17\u03CB\u03CC\f\x15" +
    "\x02\x02\u03CC\u03CD\t\f\x02\x02\u03CD\u0444\x05B\"\x16\u03CE\u03CF\f" +
    "\x14\x02\x02\u03CF\u03D0\t\x06\x02\x02\u03D0\u0444\x05B\"\x15\u03D1\u03D2" +
    "\f\x13\x02\x02\u03D2\u03D3\t\r\x02\x02\u03D3\u0444\x05B\"\x14\u03D4\u03D5" +
    "\f\x12\x02\x02\u03D5\u03D6\t\x0E\x02\x02\u03D6\u0444\x05B\"\x13\u03D7" +
    "\u03EA\f\x11\x02\x02\u03D8\u03EB\x07\b\x02\x02\u03D9\u03EB\x07\x18\x02" +
    "\x02\u03DA\u03EB\x07\x19\x02\x02\u03DB\u03EB\x07\x1A\x02\x02\u03DC\u03EB" +
    "\x07^\x02\x02\u03DD\u03DE\x07^\x02\x02\u03DE\u03EB\x07h\x02\x02\u03DF" +
    "\u03E1\x07^\x02\x02\u03E0\u03E2\x07h\x02\x02\u03E1\u03E0\x03\x02\x02\x02" +
    "\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E4\x07" +
    "@\x02\x02\u03E4\u03EB\x07M\x02\x02\u03E5\u03EB\x07U\x02\x02\u03E6\u03EB" +
    "\x07c\x02\x02\u03E7\u03EB\x07O\x02\x02\u03E8\u03EB\x07e\x02\x02\u03E9" +
    "\u03EB\x07x\x02\x02\u03EA\u03D8\x03\x02\x02\x02\u03EA\u03D9\x03\x02\x02" +
    "\x02\u03EA\u03DA\x03\x02\x02\x02\u03EA\u03DB\x03\x02\x02\x02\u03EA\u03DC" +
    "\x03\x02\x02\x02\u03EA\u03DD\x03\x02\x02\x02\u03EA\u03DF\x03\x02\x02\x02" +
    "\u03EA\u03E5\x03\x02\x02\x02\u03EA\u03E6\x03\x02\x02\x02\u03EA\u03E7\x03" +
    "\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EB" +
    "\u03EC\x03\x02\x02\x02\u03EC\u0444\x05B\"\x12\u03ED\u03EE\f\x10\x02\x02" +
    "\u03EE\u03EF\x07\"\x02\x02\u03EF\u0444\x05B\"\x11\u03F0\u03F1\f\x0F\x02" +
    "\x02\u03F1\u03F2\x07n\x02\x02\u03F2\u0444\x05B\"\x10\u03F3\u03F4\f\b\x02" +
    "\x02\u03F4\u03F6\x07^\x02\x02\u03F5\u03F7\x07h\x02\x02\u03F6\u03F5\x03" +
    "\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8" +
    "\u0444\x05B\"\t\u03F9\u03FB\f\x07\x02\x02\u03FA\u03FC\x07h\x02\x02\u03FB" +
    "\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FD\x03\x02" +
    "\x02\x02\u03FD\u03FE\x07)\x02\x02\u03FE\u03FF\x05B\"\x02\u03FF\u0400\x07" +
    "\"\x02\x02\u0400\u0401\x05B\"\b\u0401\u0444\x03\x02\x02\x02\u0402\u0403" +
    "\f\v\x02\x02\u0403\u0404\x07/\x02\x02\u0404\u0444\x05\xC0a\x02\u0405\u0407" +
    "\f\n\x02\x02\u0406\u0408\x07h\x02\x02\u0407\u0406\x03\x02\x02\x02\u0407" +
    "\u0408\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040A\t\x0F\x02" +
    "\x02\u040A\u040D\x05B\"\x02\u040B\u040C\x07E\x02\x02\u040C\u040E\x05B" +
    "\"\x02\u040D\u040B\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u0444" +
    "\x03\x02\x02\x02\u040F\u0414\f\t\x02\x02\u0410\u0415\x07_\x02\x02\u0411" +
    "\u0415\x07i\x02\x02\u0412\u0413\x07h\x02\x02\u0413\u0415\x07j\x02\x02" +
    "\u0414\u0410\x03\x02\x02\x02\u0414\u0411\x03\x02\x02\x02\u0414\u0412\x03" +
    "\x02\x02\x02\u0415\u0444\x03\x02\x02\x02\u0416\u0418\f\x06\x02\x02\u0417" +
    "\u0419\x07h\x02\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419\x03\x02\x02" +
    "\x02\u0419\u041A\x03\x02\x02\x02\u041A\u0441\x07U\x02\x02\u041B\u0425" +
    "\x07\x05\x02\x02\u041C\u0426\x05X-\x02\u041D\u0422\x05B\"\x02\u041E\u041F" +
    "\x07\x07\x02\x02\u041F\u0421\x05B\"\x02\u0420\u041E\x03\x02\x02\x02\u0421" +
    "\u0424\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02" +
    "\x02\x02\u0423\u0426\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425" +
    "\u041C\x03\x02\x02\x02\u0425\u041D\x03\x02\x02\x02\u0425\u0426\x03\x02" +
    "\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0442\x07\x06\x02\x02\u0428" +
    "\u0429\x05\xB8]\x02\u0429\u042A\x07\x04\x02\x02\u042A\u042C\x03\x02\x02" +
    "\x02\u042B\u0428\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042D" +
    "\x03\x02\x02\x02\u042D\u0442\x05\xBA^\x02\u042E\u042F\x05\xB8]\x02\u042F" +
    "\u0430\x07\x04\x02\x02\u0430\u0432\x03\x02\x02\x02\u0431\u042E\x03\x02" +
    "\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433" +
    "\u0434\x05\xE0q\x02\u0434\u043D\x07\x05\x02\x02\u0435\u043A\x05B\"\x02" +
    "\u0436\u0437\x07\x07\x02\x02\u0437\u0439\x05B\"\x02\u0438\u0436\x03\x02" +
    "\x02\x02\u0439\u043C\x03\x02\x02\x02\u043A\u0438\x03\x02\x02\x02\u043A" +
    "\u043B\x03\x02\x02\x02\u043B\u043E\x03\x02\x02\x02\u043C\u043A\x03\x02" +
    "\x02\x02\u043D\u0435\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E" +
    "\u043F\x03\x02\x02\x02\u043F\u0440\x07\x06\x02\x02\u0440\u0442\x03\x02" +
    "\x02\x02\u0441\u041B\x03\x02\x02\x02\u0441\u042B\x03\x02\x02\x02\u0441" +
    "\u0431\x03\x02\x02\x02\u0442\u0444\x03\x02\x02\x02\u0443\u03C8\x03\x02" +
    "\x02\x02\u0443\u03CB\x03\x02\x02\x02\u0443\u03CE\x03\x02\x02\x02\u0443" +
    "\u03D1\x03\x02\x02\x02\u0443\u03D4\x03\x02\x02\x02\u0443\u03D7\x03\x02" +
    "\x02\x02\u0443\u03ED\x03\x02\x02\x02\u0443\u03F0\x03\x02\x02\x02\u0443" +
    "\u03F3\x03\x02\x02\x02\u0443\u03F9\x03\x02\x02\x02\u0443\u0402\x03\x02" +
    "\x02\x02\u0443\u0405\x03\x02\x02\x02\u0443\u040F\x03\x02\x02\x02\u0443" +
    "\u0416\x03\x02\x02\x02\u0444\u0447\x03\x02\x02\x02\u0445\u0443\x03\x02" +
    "\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446C\x03\x02\x02\x02\u0447\u0445" +
    "\x03\x02\x02\x02\u0448\u0449\x07u\x02\x02\u0449\u044E\x07\x05\x02\x02" +
    "\u044A\u044F\x07S\x02\x02\u044B\u044C\t\x10\x02\x02\u044C\u044D\x07\x07" +
    "\x02\x02\u044D\u044F\x05\xACW\x02\u044E\u044A\x03\x02\x02\x02\u044E\u044B" +
    "\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0451\x07\x06\x02\x02" +
    "\u0451E\x03\x02\x02\x02\u0452\u0453\t\x11\x02\x02\u0453G\x03\x02\x02\x02" +
    "\u0454\u0455\x07\x05\x02\x02\u0455\u045A\x05B\"\x02\u0456\u0457\x07\x07" +
    "\x02\x02\u0457\u0459\x05B\"\x02\u0458\u0456\x03\x02\x02\x02\u0459\u045C" +
    "\x03\x02\x02\x02\u045A\u0458\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02" +
    "\u045B\u045D\x03\x02\x02\x02\u045C\u045A\x03\x02\x02\x02\u045D\u045E\x07" +
    "\x06\x02\x02\u045EI\x03\x02\x02\x02\u045F\u0460\x07\x92\x02\x02\u0460" +
    "\u0465\x05H%\x02\u0461\u0462\x07\x07\x02\x02\u0462\u0464\x05H%\x02\u0463" +
    "\u0461\x03\x02\x02\x02\u0464\u0467\x03\x02\x02\x02\u0465\u0463\x03\x02" +
    "\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466K\x03\x02\x02\x02\u0467\u0465" +
    "\x03\x02\x02\x02\u0468\u046A\x052\x1A\x02\u0469\u0468\x03\x02\x02\x02" +
    "\u0469\u046A\x03\x02\x02\x02\u046A\u0470\x03\x02\x02\x02\u046B\u0471\x07" +
    "Z\x02\x02\u046C\u0471\x07|\x02\x02\u046D\u046E\x07Z\x02\x02\u046E\u046F" +
    "\x07n\x02\x02\u046F\u0471\t\n\x02\x02\u0470\u046B\x03\x02\x02\x02\u0470" +
    "\u046C\x03\x02\x02\x02\u0470\u046D\x03\x02\x02\x02\u0471\u0472\x03\x02" +
    "\x02\x02\u0472\u0476\x07]\x02\x02\u0473\u0474\x05\xB8]\x02\u0474\u0475" +
    "\x07\x04\x02\x02\u0475\u0477\x03\x02\x02\x02\u0476\u0473\x03\x02\x02\x02" +
    "\u0476\u0477\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u047B\x05" +
    "\xBA^\x02\u0479\u047A\x07#\x02\x02\u047A\u047C\x05\xD0i\x02\u047B\u0479" +
    "\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u0488\x03\x02\x02\x02" +
    "\u047D\u047E\x07\x05\x02\x02\u047E\u0483\x05\xBE`\x02\u047F\u0480\x07" +
    "\x07\x02\x02\u0480\u0482\x05\xBE`\x02\u0481\u047F\x03\x02\x02\x02\u0482" +
    "\u0485\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02" +
    "\x02\x02\u0484\u0486\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0486" +
    "\u0487\x07\x06\x02\x02\u0487\u0489\x03\x02\x02\x02\u0488\u047D\x03\x02" +
    "\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u0493\x03\x02\x02\x02\u048A" +
    "\u048D\x05J&\x02\u048B\u048D\x05X-\x02\u048C\u048A\x03\x02\x02\x02\u048C" +
    "\u048B\x03\x02\x02\x02\u048D\u048F\x03\x02\x02\x02\u048E\u0490\x05P)\x02" +
    "\u048F\u048E\x03\x02\x02\x02\u048F\u0490\x03\x02\x02\x02\u0490\u0494\x03" +
    "\x02\x02\x02\u0491\u0492\x07:\x02\x02\u0492\u0494\x07\x92\x02\x02\u0493" +
    "\u048C\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02\u0494\u0496\x03\x02" +
    "\x02\x02\u0495\u0497\x05N(\x02\u0496\u0495\x03\x02\x02\x02\u0496\u0497" +
    "\x03\x02\x02\x02\u0497M\x03\x02\x02\x02\u0498\u0499\x07~\x02\x02\u0499" +
    "\u049E\x05f4\x02\u049A\u049B\x07\x07\x02\x02\u049B\u049D\x05f4\x02\u049C" +
    "\u049A\x03\x02\x02\x02\u049D\u04A0\x03\x02\x02\x02\u049E\u049C\x03\x02" +
    "\x02\x02\u049E\u049F\x03\x02\x02\x02\u049FO\x03\x02\x02\x02\u04A0\u049E" +
    "\x03\x02\x02\x02\u04A1\u04A2\x07m\x02\x02\u04A2\u04B1\x072\x02\x02\u04A3" +
    "\u04A4\x07\x05\x02\x02\u04A4\u04A9\x05\x1A\x0E\x02\u04A5\u04A6\x07\x07" +
    "\x02\x02\u04A6\u04A8\x05\x1A\x0E\x02\u04A7\u04A5\x03\x02\x02\x02\u04A8" +
    "\u04AB\x03\x02\x02\x02\u04A9\u04A7\x03\x02\x02\x02\u04A9\u04AA\x03\x02" +
    "\x02\x02\u04AA\u04AC\x03\x02\x02\x02\u04AB\u04A9\x03\x02\x02\x02\u04AC" +
    "\u04AF\x07\x06\x02\x02\u04AD\u04AE\x07\x96\x02\x02\u04AE\u04B0\x05B\"" +
    "\x02\u04AF\u04AD\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B2" +
    "\x03\x02\x02\x02\u04B1\u04A3\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02" +
    "\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04CE\x07\xB9\x02\x02\u04B4\u04CF\x07" +
    "\xBA\x02\x02\u04B5\u04B6\x07\x8F\x02\x02\u04B6\u04B9\x07\x85\x02\x02\u04B7" +
    "\u04BA\x05\xBE`\x02\u04B8\u04BA\x05p9\x02\u04B9\u04B7\x03\x02\x02\x02" +
    "\u04B9\u04B8\x03\x02\x02\x02\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04BC\x07" +
    "\b\x02\x02\u04BC\u04C7\x05B\"\x02\u04BD\u04C0\x07\x07\x02\x02\u04BE\u04C1" +
    "\x05\xBE`\x02\u04BF\u04C1\x05p9\x02\u04C0\u04BE\x03\x02\x02\x02\u04C0" +
    "\u04BF\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C3\x07\b\x02" +
    "\x02\u04C3\u04C4\x05B\"\x02\u04C4\u04C6\x03\x02\x02\x02\u04C5\u04BD\x03" +
    "\x02\x02\x02\u04C6\u04C9\x03\x02\x02\x02\u04C7\u04C5\x03\x02\x02\x02\u04C7" +
    "\u04C8\x03\x02\x02\x02\u04C8\u04CC\x03\x02\x02\x02\u04C9\u04C7\x03\x02" +
    "\x02\x02\u04CA\u04CB\x07\x96\x02\x02\u04CB\u04CD\x05B\"\x02\u04CC\u04CA" +
    "\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04CF\x03\x02\x02\x02" +
    "\u04CE\u04B4\x03\x02\x02\x02\u04CE\u04B5\x03\x02\x02\x02\u04CFQ\x03\x02" +
    "\x02\x02\u04D0\u04D4\x07r\x02\x02\u04D1\u04D2\x05\xB8]\x02\u04D2\u04D3" +
    "\x07\x04\x02\x02\u04D3\u04D5\x03\x02\x02\x02\u04D4\u04D1\x03\x02\x02\x02" +
    "\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04DD\x05" +
    "\xCCg\x02\u04D7\u04D8\x07\b\x02\x02\u04D8\u04DE\x05T+\x02\u04D9\u04DA" +
    "\x07\x05\x02\x02\u04DA\u04DB\x05T+\x02\u04DB\u04DC\x07\x06\x02\x02\u04DC" +
    "\u04DE\x03\x02\x02\x02\u04DD\u04D7\x03\x02\x02\x02\u04DD\u04D9\x03\x02" +
    "\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DES\x03\x02\x02\x02\u04DF\u04E3" +
    "\x05$\x13\x02\u04E0\u04E3\x05\xB4[\x02\u04E1\u04E3\x07\xBE\x02\x02\u04E2" +
    "\u04DF\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E1\x03\x02" +
    "\x02\x02\u04E3U\x03\x02\x02\x02\u04E4\u04EF\x07y\x02\x02\u04E5\u04F0\x05" +
    "\xC0a\x02\u04E6\u04E7\x05\xB8]\x02\u04E7\u04E8\x07\x04\x02\x02\u04E8\u04EA" +
    "\x03\x02\x02\x02\u04E9\u04E6\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02" +
    "\u04EA\u04ED\x03\x02\x02\x02\u04EB\u04EE\x05\xBA^\x02\u04EC\u04EE\x05" +
    "\xC4c\x02\u04ED\u04EB\x03\x02\x02\x02\u04ED\u04EC\x03\x02\x02\x02\u04EE" +
    "\u04F0\x03\x02\x02\x02\u04EF\u04E5\x03\x02\x02\x02\u04EF\u04E9\x03\x02" +
    "\x02\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0W\x03\x02\x02\x02\u04F1\u04F3" +
    "\x05\x88E\x02\u04F2\u04F1\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02" +
    "\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04FA\x05\\/\x02\u04F5\u04F6\x05l7" +
    "\x02\u04F6\u04F7\x05\\/\x02\u04F7\u04F9\x03\x02\x02\x02\u04F8\u04F5\x03" +
    "\x02\x02\x02\u04F9\u04FC\x03\x02\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA" +
    "\u04FB\x03\x02\x02\x02\u04FB\u04FE\x03\x02\x02\x02\u04FC\u04FA\x03\x02" +
    "\x02\x02\u04FD\u04FF\x05\x8AF\x02\u04FE\u04FD\x03\x02\x02\x02\u04FE\u04FF" +
    "\x03\x02\x02\x02\u04FF\u0501\x03\x02\x02\x02\u0500\u0502\x05\x8CG\x02" +
    "\u0501\u0500\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502Y\x03\x02" +
    "\x02\x02\u0503\u050B\x05d3\x02\u0504\u0505\x05h5\x02\u0505\u0507\x05d" +
    "3\x02\u0506\u0508\x05j6\x02\u0507\u0506\x03\x02\x02\x02\u0507\u0508\x03" +
    "\x02\x02\x02\u0508\u050A\x03\x02\x02\x02\u0509\u0504\x03\x02\x02\x02\u050A" +
    "\u050D\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02" +
    "\x02\x02\u050C[\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050E\u0510" +
    "\x07\x84\x02\x02\u050F\u0511\t\x12\x02\x02\u0510\u050F\x03\x02\x02\x02" +
    "\u0510\u0511\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02\u0512\u0517\x05" +
    "f4\x02\u0513\u0514\x07\x07\x02\x02\u0514\u0516\x05f4\x02\u0515\u0513\x03" +
    "\x02\x02\x02\u0516\u0519\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0517" +
    "\u0518\x03\x02\x02\x02\u0518\u0526\x03\x02\x02\x02\u0519\u0517\x03\x02" +
    "\x02\x02\u051A\u0524\x07M\x02\x02\u051B\u0520\x05d3\x02\u051C\u051D\x07" +
    "\x07\x02\x02\u051D\u051F\x05d3\x02\u051E\u051C\x03\x02\x02\x02\u051F\u0522" +
    "\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02" +
    "\u0521\u0525\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02\u0523\u0525\x05" +
    "Z.\x02\u0524\u051B\x03\x02\x02\x02\u0524\u0523\x03\x02\x02\x02\u0525\u0527" +
    "\x03\x02\x02\x02\u0526\u051A\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02" +
    "\u0527\u052A\x03\x02\x02\x02\u0528\u0529\x07\x96\x02\x02\u0529\u052B\x05" +
    "B\"\x02\u052A\u0528\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B" +
    "\u053A\x03\x02\x02\x02\u052C\u052D\x07P\x02\x02\u052D\u052E\x07*\x02\x02" +
    "\u052E\u0533\x05B\"\x02\u052F\u0530\x07\x07\x02\x02\u0530\u0532\x05B\"" +
    "\x02\u0531\u052F\x03\x02\x02\x02\u0532\u0535\x03\x02\x02\x02\u0533\u0531" +
    "\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0538\x03\x02\x02\x02" +
    "\u0535\u0533\x03\x02\x02\x02\u0536\u0537\x07Q\x02\x02\u0537\u0539\x05" +
    "B\"\x02\u0538\u0536\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539" +
    "\u053B\x03\x02\x02\x02\u053A\u052C\x03\x02\x02\x02\u053A\u053B\x03\x02" +
    "\x02\x02\u053B\u054A\x03\x02\x02\x02\u053C\u053D\x07\xB0\x02\x02\u053D" +
    "\u053E\x05\xD4k\x02\u053E\u053F\x07#\x02\x02\u053F\u0547\x05z>\x02\u0540" +
    "\u0541\x07\x07\x02\x02\u0541\u0542\x05\xD4k\x02\u0542\u0543\x07#\x02\x02" +
    "\u0543\u0544\x05z>\x02\u0544\u0546\x03\x02\x02\x02\u0545\u0540\x03\x02" +
    "\x02\x02\u0546\u0549\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0547" +
    "\u0548\x03\x02\x02\x02\u0548\u054B\x03\x02\x02\x02\u0549\u0547\x03\x02" +
    "\x02\x02\u054A\u053C\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B" +
    "\u054E\x03\x02\x02\x02\u054C\u054E\x05J&\x02\u054D\u050E\x03\x02\x02\x02" +
    "\u054D\u054C\x03\x02\x02\x02\u054E]\x03\x02\x02\x02\u054F\u0550\x05X-" +
    "\x02\u0550_\x03\x02\x02\x02\u0551\u0553\x05\x88E\x02\u0552\u0551\x03\x02" +
    "\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554" +
    "\u0556\x05\\/\x02\u0555\u0557\x05\x8AF\x02\u0556\u0555\x03\x02\x02\x02" +
    "\u0556\u0557\x03\x02\x02\x02\u0557\u0559\x03\x02\x02\x02\u0558\u055A\x05" +
    "\x8CG\x02\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02\x02\u055A" +
    "a\x03\x02\x02\x02\u055B\u055D\x05\x88E\x02\u055C\u055B\x03\x02\x02\x02" +
    "\u055C\u055D\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u0568\x05" +
    "\\/\x02\u055F\u0561\x07\x8D\x02\x02\u0560\u0562\x07\x1F\x02\x02\u0561" +
    "\u0560\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562\u0566\x03\x02" +
    "\x02\x02\u0563\u0566\x07\\\x02\x02\u0564\u0566\x07F\x02\x02\u0565\u055F" +
    "\x03\x02\x02\x02\u0565\u0563\x03\x02\x02\x02\u0565\u0564\x03\x02\x02\x02" +
    "\u0566\u0567\x03\x02\x02\x02\u0567\u0569\x05\\/\x02\u0568\u0565\x03\x02" +
    "\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056A" +
    "\u056B\x03\x02\x02\x02\u056B\u056D\x03\x02\x02\x02\u056C\u056E\x05\x8A" +
    "F\x02\u056D\u056C\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E\u0570" +
    "\x03\x02\x02\x02\u056F\u0571\x05\x8CG\x02\u0570\u056F\x03\x02\x02\x02" +
    "\u0570\u0571\x03\x02\x02\x02\u0571c\x03\x02\x02\x02\u0572\u0573\x05\xB8" +
    "]\x02\u0573\u0574\x07\x04\x02\x02\u0574\u0576\x03\x02\x02\x02\u0575\u0572" +
    "\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576\u0577\x03\x02\x02\x02" +
    "\u0577\u057C\x05\xBA^\x02\u0578\u057A\x07#\x02\x02\u0579\u0578\x03\x02" +
    "\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B" +
    "\u057D\x05\xD0i\x02\u057C\u0579\x03\x02\x02\x02\u057C\u057D\x03\x02\x02" +
    "\x02\u057D\u0583\x03\x02\x02\x02\u057E\u057F\x07W\x02\x02\u057F\u0580" +
    "\x07*\x02\x02\u0580\u0584\x05\xC4c\x02\u0581\u0582\x07h\x02\x02\u0582" +
    "\u0584\x07W\x02\x02\u0583\u057E\x03\x02\x02\x02\u0583\u0581\x03\x02\x02" +
    "\x02\u0583\u0584\x03\x02\x02\x02\u0584\u05B3\x03\x02\x02\x02\u0585\u0586" +
    "\x05\xB8]\x02\u0586\u0587\x07\x04\x02\x02\u0587\u0589\x03\x02\x02\x02" +
    "\u0588\u0585\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u058A\x03" +
    "\x02\x02\x02\u058A\u058B\x05\xE0q\x02\u058B\u058C\x07\x05\x02\x02\u058C" +
    "\u0591\x05B\"\x02\u058D\u058E\x07\x07\x02\x02\u058E\u0590\x05B\"\x02\u058F" +
    "\u058D\x03\x02\x02\x02\u0590\u0593\x03\x02\x02\x02\u0591\u058F\x03\x02" +
    "\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0594\x03\x02\x02\x02\u0593" +
    "\u0591\x03\x02\x02\x02\u0594\u0599\x07\x06\x02\x02\u0595\u0597\x07#\x02" +
    "\x02\u0596\u0595\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u0598" +
    "\x03\x02\x02\x02\u0598\u059A\x05\xD0i\x02\u0599\u0596\x03\x02\x02\x02" +
    "\u0599\u059A\x03\x02\x02\x02\u059A\u05B3\x03\x02\x02\x02\u059B\u05A5\x07" +
    "\x05\x02\x02\u059C\u05A1\x05d3\x02\u059D\u059E\x07\x07\x02\x02\u059E\u05A0" +
    "\x05d3\x02\u059F\u059D\x03\x02\x02\x02\u05A0\u05A3\x03\x02\x02\x02\u05A1" +
    "\u059F\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05A6\x03\x02" +
    "\x02\x02\u05A3\u05A1\x03\x02\x02\x02\u05A4\u05A6\x05Z.\x02\u05A5\u059C" +
    "\x03\x02\x02\x02\u05A5\u05A4\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02" +
    "\u05A7\u05A8\x07\x06\x02\x02\u05A8\u05B3\x03\x02\x02\x02\u05A9\u05AA\x07" +
    "\x05\x02\x02\u05AA\u05AB\x05X-\x02\u05AB\u05B0\x07\x06\x02\x02\u05AC\u05AE" +
    "\x07#\x02\x02\u05AD\u05AC\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02" +
    "\u05AE\u05AF\x03\x02\x02\x02\u05AF\u05B1\x05\xD0i\x02\u05B0\u05AD\x03" +
    "\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B3\x03\x02\x02\x02\u05B2" +
    "\u0575\x03\x02\x02\x02\u05B2\u0588\x03\x02\x02\x02\u05B2\u059B\x03\x02" +
    "\x02\x02\u05B2\u05A9\x03\x02\x02\x02\u05B3e\x03\x02\x02\x02\u05B4\u05C1" +
    "\x07\t\x02\x02\u05B5\u05B6\x05\xBA^\x02\u05B6\u05B7\x07\x04\x02\x02\u05B7" +
    "\u05B8\x07\t\x02\x02\u05B8\u05C1\x03\x02\x02\x02\u05B9\u05BE\x05B\"\x02" +
    "\u05BA\u05BC\x07#\x02\x02\u05BB\u05BA\x03\x02\x02\x02\u05BB\u05BC\x03" +
    "\x02\x02\x02\u05BC\u05BD\x03\x02\x02\x02\u05BD\u05BF\x05\xB0Y\x02\u05BE" +
    "\u05BB\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C1\x03\x02" +
    "\x02\x02\u05C0\u05B4\x03\x02\x02\x02\u05C0\u05B5\x03\x02\x02\x02\u05C0" +
    "\u05B9\x03\x02\x02\x02\u05C1g\x03\x02\x02\x02\u05C2\u05D0\x07\x07\x02" +
    "\x02\u05C3\u05C5\x07f\x02\x02\u05C4\u05C3\x03\x02\x02\x02\u05C4\u05C5" +
    "\x03\x02\x02\x02\u05C5\u05CC\x03\x02\x02\x02\u05C6\u05C8\t\x13\x02\x02" +
    "\u05C7\u05C9\x07p\x02\x02\u05C8\u05C7\x03\x02\x02\x02\u05C8\u05C9\x03" +
    "\x02\x02\x02\u05C9\u05CD\x03\x02\x02\x02\u05CA\u05CD\x07Y\x02\x02\u05CB" +
    "\u05CD\x075\x02\x02\u05CC\u05C6\x03\x02\x02\x02\u05CC\u05CA\x03\x02\x02" +
    "\x02\u05CC\u05CB\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CE" +
    "\x03\x02\x02\x02\u05CE\u05D0\x07`\x02\x02\u05CF\u05C2\x03\x02\x02\x02" +
    "\u05CF\u05C4\x03\x02\x02\x02\u05D0i\x03\x02\x02\x02\u05D1\u05D2\x07m\x02" +
    "\x02\u05D2\u05E0\x05B\"\x02\u05D3\u05D4\x07\x90\x02\x02\u05D4\u05D5\x07" +
    "\x05\x02\x02\u05D5\u05DA\x05\xBE`\x02\u05D6\u05D7\x07\x07\x02\x02\u05D7" +
    "\u05D9\x05\xBE`\x02\u05D8\u05D6\x03\x02\x02\x02\u05D9\u05DC\x03";
SQLiteParser._serializedATNSegment3 = "\x02\x02\x02\u05DA\u05D8\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB" +
    "\u05DD\x03\x02\x02\x02\u05DC\u05DA\x03\x02\x02\x02\u05DD\u05DE\x07\x06" +
    "\x02\x02\u05DE\u05E0\x03\x02\x02\x02\u05DF\u05D1\x03\x02\x02\x02\u05DF" +
    "\u05D3\x03\x02\x02\x02\u05E0k\x03\x02\x02\x02\u05E1\u05E3\x07\x8D\x02" +
    "\x02\u05E2\u05E4\x07\x1F\x02\x02\u05E3\u05E2\x03\x02\x02\x02\u05E3\u05E4" +
    "\x03\x02\x02\x02\u05E4\u05E8\x03\x02\x02\x02\u05E5\u05E8\x07\\\x02\x02" +
    "\u05E6\u05E8\x07F\x02\x02\u05E7\u05E1\x03\x02\x02\x02\u05E7\u05E5\x03" +
    "\x02\x02\x02\u05E7\u05E6\x03\x02\x02\x02\u05E8m\x03\x02\x02\x02\u05E9" +
    "\u05EB\x052\x1A\x02\u05EA\u05E9\x03\x02\x02\x02\u05EA\u05EB\x03\x02\x02" +
    "\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\u05EF\x07\x8F\x02\x02\u05ED\u05EE" +
    "\x07n\x02\x02\u05EE\u05F0\t\n\x02\x02\u05EF\u05ED\x03\x02\x02\x02\u05EF" +
    "\u05F0\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05F2\x05t;\x02" +
    "\u05F2\u05F5\x07\x85\x02\x02\u05F3\u05F6\x05\xBE`\x02\u05F4\u05F6\x05" +
    "p9\x02\u05F5\u05F3\x03\x02\x02\x02\u05F5\u05F4\x03\x02\x02\x02\u05F6\u05F7" +
    "\x03\x02\x02\x02\u05F7\u05F8\x07\b\x02\x02\u05F8\u0603\x05B\"\x02\u05F9" +
    "\u05FC\x07\x07\x02\x02\u05FA\u05FD\x05\xBE`\x02\u05FB\u05FD\x05p9\x02" +
    "\u05FC\u05FA\x03\x02\x02\x02\u05FC\u05FB\x03\x02\x02\x02\u05FD\u05FE\x03" +
    "\x02\x02\x02\u05FE\u05FF\x07\b\x02\x02\u05FF\u0600\x05B\"\x02\u0600\u0602" +
    "\x03\x02\x02\x02\u0601\u05F9\x03\x02\x02\x02\u0602\u0605\x03\x02\x02\x02" +
    "\u0603\u0601\x03\x02\x02\x02\u0603\u0604\x03\x02\x02\x02\u0604\u0612\x03" +
    "\x02\x02\x02\u0605\u0603\x03\x02\x02\x02\u0606\u0610\x07M\x02\x02\u0607" +
    "\u060C\x05d3\x02\u0608\u0609\x07\x07\x02\x02\u0609\u060B\x05d3\x02\u060A" +
    "\u0608\x03\x02\x02\x02\u060B\u060E\x03\x02\x02\x02\u060C\u060A\x03\x02" +
    "\x02\x02\u060C\u060D\x03\x02\x02\x02\u060D\u0611\x03\x02\x02\x02\u060E" +
    "\u060C\x03\x02\x02\x02\u060F\u0611\x05Z.\x02\u0610\u0607\x03\x02\x02\x02" +
    "\u0610\u060F\x03\x02\x02\x02\u0611\u0613\x03\x02\x02\x02\u0612\u0606\x03" +
    "\x02\x02\x02\u0612\u0613\x03\x02\x02\x02\u0613\u0616\x03\x02\x02\x02\u0614" +
    "\u0615\x07\x96\x02\x02\u0615\u0617\x05B\"\x02\u0616\u0614\x03\x02\x02" +
    "\x02\u0616\u0617\x03\x02\x02\x02\u0617\u0619\x03\x02\x02\x02\u0618\u061A" +
    "\x05N(\x02\u0619\u0618\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A" +
    "o\x03\x02\x02\x02\u061B\u061C\x07\x05\x02\x02\u061C\u0621\x05\xBE`\x02" +
    "\u061D\u061E\x07\x07\x02\x02\u061E\u0620\x05\xBE`\x02\u061F\u061D\x03" +
    "\x02\x02\x02\u0620\u0623\x03\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0621" +
    "\u0622\x03\x02\x02\x02\u0622\u0624\x03\x02\x02\x02\u0623\u0621\x03\x02" +
    "\x02\x02\u0624\u0625\x07\x06\x02\x02\u0625q\x03\x02\x02\x02\u0626\u0628" +
    "\x052\x1A\x02\u0627\u0626\x03\x02\x02\x02\u0627\u0628\x03\x02\x02\x02" +
    "\u0628\u0629\x03\x02\x02\x02\u0629\u062C\x07\x8F\x02\x02\u062A\u062B\x07" +
    "n\x02\x02\u062B\u062D\t\n\x02\x02\u062C\u062A\x03\x02\x02\x02\u062C\u062D" +
    "\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\u062F\x05t;\x02\u062F" +
    "\u0632\x07\x85\x02\x02\u0630\u0633\x05\xBE`\x02\u0631\u0633\x05p9\x02" +
    "\u0632\u0630\x03\x02\x02\x02\u0632\u0631\x03\x02\x02\x02\u0633\u0634\x03" +
    "\x02\x02\x02\u0634\u0635\x07\b\x02\x02\u0635\u0640\x05B\"\x02\u0636\u0639" +
    "\x07\x07\x02\x02\u0637\u063A\x05\xBE`\x02\u0638\u063A\x05p9\x02\u0639" +
    "\u0637\x03\x02\x02\x02\u0639\u0638\x03\x02\x02\x02\u063A\u063B\x03\x02" +
    "\x02\x02\u063B\u063C\x07\b\x02\x02\u063C\u063D\x05B\"\x02\u063D\u063F" +
    "\x03\x02\x02\x02\u063E\u0636\x03\x02\x02\x02\u063F\u0642\x03\x02\x02\x02" +
    "\u0640\u063E\x03\x02\x02\x02\u0640\u0641\x03\x02\x02\x02\u0641\u0645\x03" +
    "\x02\x02\x02\u0642\u0640\x03\x02\x02\x02\u0643\u0644\x07\x96\x02\x02\u0644" +
    "\u0646\x05B\"\x02\u0645\u0643\x03\x02\x02\x02\u0645\u0646\x03\x02\x02" +
    "\x02\u0646\u0648\x03\x02\x02\x02\u0647\u0649\x05N(\x02\u0648\u0647\x03" +
    "\x02\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\u064E\x03\x02\x02\x02\u064A" +
    "\u064C\x05\x8AF\x02\u064B\u064A\x03\x02\x02\x02\u064B\u064C\x03\x02\x02" +
    "\x02\u064C\u064D\x03\x02\x02\x02\u064D\u064F\x05\x8CG\x02\u064E\u064B" +
    "\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064Fs\x03\x02\x02\x02\u0650" +
    "\u0651\x05\xB8]\x02\u0651\u0652\x07\x04\x02\x02\u0652\u0654\x03\x02\x02" +
    "\x02\u0653\u0650\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654\u0655" +
    "\x03\x02\x02\x02\u0655\u0658\x05\xBA^\x02\u0656\u0657\x07#\x02\x02\u0657" +
    "\u0659\x05\xD6l\x02\u0658\u0656\x03\x02\x02\x02\u0658\u0659\x03\x02\x02" +
    "\x02\u0659\u065F\x03\x02\x02\x02\u065A\u065B\x07W\x02\x02\u065B\u065C" +
    "\x07*\x02\x02\u065C\u0660\x05\xC4c\x02\u065D\u065E\x07h\x02\x02\u065E" +
    "\u0660\x07W\x02\x02\u065F\u065A\x03\x02\x02\x02\u065F\u065D\x03\x02\x02" +
    "\x02\u065F\u0660\x03\x02\x02\x02\u0660u\x03\x02\x02\x02\u0661\u0663\x07" +
    "\x91\x02\x02\u0662\u0664\x05\xB8]\x02\u0663\u0662\x03\x02\x02\x02\u0663" +
    "\u0664\x03\x02\x02\x02\u0664\u0667\x03\x02\x02\x02\u0665\u0666\x07]\x02" +
    "\x02\u0666\u0668\x05\xD8m\x02\u0667\u0665\x03\x02\x02\x02\u0667\u0668" +
    "\x03\x02\x02\x02\u0668w\x03\x02\x02\x02\u0669\u066A\x07\xB4\x02\x02\u066A" +
    "\u066B\x07\x05\x02\x02\u066B\u066C\x07\x96\x02\x02\u066C\u066D\x05B\"" +
    "\x02\u066D\u066E\x07\x06\x02\x02\u066Ey\x03\x02\x02\x02\u066F\u0671\x07" +
    "\x05\x02\x02\u0670\u0672\x05\xDAn\x02\u0671\u0670\x03\x02\x02\x02\u0671" +
    "\u0672\x03\x02\x02\x02\u0672\u067D\x03\x02\x02\x02\u0673\u0674\x07\x9B" +
    "\x02\x02\u0674\u0675\x07*\x02\x02\u0675\u067A\x05B\"\x02\u0676\u0677\x07" +
    "\x07\x02\x02\u0677\u0679\x05B\"\x02\u0678\u0676\x03\x02\x02\x02\u0679" +
    "\u067C\x03\x02\x02\x02\u067A\u0678\x03\x02\x02\x02\u067A\u067B\x03\x02" +
    "\x02\x02\u067B\u067E\x03\x02\x02\x02\u067C\u067A\x03\x02\x02\x02\u067D" +
    "\u0673\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\u067F\x03\x02" +
    "\x02\x02\u067F\u0680\x07o\x02\x02\u0680\u0681\x07*\x02\x02\u0681\u0686" +
    "\x05\x8EH\x02\u0682\u0683\x07\x07\x02\x02\u0683\u0685\x05\x8EH\x02\u0684" +
    "\u0682\x03\x02\x02\x02\u0685\u0688\x03\x02\x02\x02\u0686\u0684\x03\x02" +
    "\x02\x02\u0686\u0687\x03\x02\x02\x02\u0687\u068A\x03\x02\x02\x02\u0688" +
    "\u0686\x03\x02\x02\x02\u0689\u068B\x05~@\x02\u068A\u0689\x03\x02\x02\x02" +
    "\u068A\u068B\x03\x02\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C\u068D\x07" +
    "\x06\x02\x02\u068D{\x03\x02\x02\x02\u068E\u06B0\x07\x9A\x02\x02\u068F" +
    "\u06B1\x05\xD4k\x02\u0690\u0692\x07\x05\x02\x02\u0691\u0693\x05\xDAn\x02" +
    "\u0692\u0691\x03\x02\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\u069E\x03" +
    "\x02\x02\x02\u0694\u0695\x07\x9B\x02\x02\u0695\u0696\x07*\x02\x02\u0696" +
    "\u069B\x05B\"\x02\u0697\u0698\x07\x07\x02\x02\u0698\u069A\x05B\"\x02\u0699" +
    "\u0697\x03\x02\x02\x02\u069A\u069D\x03\x02\x02\x02\u069B\u0699\x03\x02" +
    "\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\u069F\x03\x02\x02\x02\u069D" +
    "\u069B\x03\x02\x02\x02\u069E\u0694\x03\x02\x02\x02\u069E\u069F\x03\x02" +
    "\x02\x02\u069F\u06AA\x03\x02\x02\x02\u06A0\u06A1\x07o\x02\x02\u06A1\u06A2" +
    "\x07*\x02\x02\u06A2\u06A7\x05\x8EH\x02\u06A3\u06A4\x07\x07\x02\x02\u06A4" +
    "\u06A6\x05\x8EH\x02\u06A5\u06A3\x03\x02\x02\x02\u06A6\u06A9\x03\x02\x02" +
    "\x02\u06A7\u06A5\x03\x02\x02\x02\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06AB" +
    "\x03\x02\x02\x02\u06A9\u06A7\x03\x02\x02\x02\u06AA\u06A0\x03\x02\x02\x02" +
    "\u06AA\u06AB\x03\x02\x02\x02\u06AB\u06AD\x03\x02\x02\x02\u06AC\u06AE\x05" +
    "~@\x02\u06AD\u06AC\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE\u06AF" +
    "\x03\x02\x02\x02\u06AF\u06B1\x07\x06\x02\x02\u06B0\u068F\x03\x02\x02\x02" +
    "\u06B0\u0690\x03\x02\x02\x02\u06B1}\x03\x02\x02\x02\u06B2\u06BC\x05\x80" +
    "A\x02\u06B3\u06BA\x07\xB6\x02\x02\u06B4\u06B5\x07g\x02\x02\u06B5\u06BB" +
    "\x07\xB8\x02\x02\u06B6\u06B7\x07\x9F\x02\x02\u06B7\u06BB\x07\x81\x02\x02" +
    "\u06B8\u06BB\x07P\x02\x02\u06B9\u06BB\x07\xB7\x02\x02\u06BA\u06B4\x03" +
    "\x02\x02\x02\u06BA\u06B6\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA" +
    "\u06B9\x03\x02\x02\x02\u06BB\u06BD\x03\x02\x02\x02\u06BC\u06B3\x03\x02" +
    "\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD\x7F\x03\x02\x02\x02\u06BE\u06C5" +
    "\t\x14\x02\x02\u06BF\u06C6\x05\x96L\x02\u06C0\u06C1\x07)\x02\x02\u06C1" +
    "\u06C2\x05\x92J\x02\u06C2\u06C3\x07\"\x02\x02\u06C3\u06C4\x05\x94K\x02" +
    "\u06C4\u06C6\x03\x02\x02\x02\u06C5\u06BF\x03\x02\x02\x02\u06C5\u06C0\x03" +
    "\x02\x02\x02\u06C6\x81\x03\x02\x02\x02\u06C7\u06C8\x05\xDCo\x02\u06C8" +
    "\u06D2\x07\x05\x02\x02\u06C9\u06CE\x05B\"\x02\u06CA\u06CB\x07\x07\x02" +
    "\x02\u06CB\u06CD\x05B\"\x02\u06CC\u06CA\x03\x02\x02\x02\u06CD\u06D0\x03" +
    "\x02\x02\x02\u06CE\u06CC\x03\x02\x02\x02\u06CE\u06CF\x03\x02\x02\x02\u06CF" +
    "\u06D3\x03\x02\x02\x02\u06D0\u06CE\x03\x02\x02\x02\u06D1\u06D3\x07\t\x02" +
    "\x02\u06D2\u06C9\x03\x02\x02\x02\u06D2\u06D1\x03\x02\x02\x02\u06D3\u06D4" +
    "\x03\x02\x02\x02\u06D4\u06D5\x07\x06\x02\x02\u06D5\x83\x03\x02\x02\x02" +
    "\u06D6\u06D7\x05\xDEp\x02\u06D7\u06E4\x07\x05\x02\x02\u06D8\u06DA\x07" +
    "@\x02\x02\u06D9\u06D8\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA" +
    "\u06DB\x03\x02\x02\x02\u06DB\u06E0\x05B\"\x02\u06DC\u06DD\x07\x07\x02" +
    "\x02\u06DD\u06DF\x05B\"\x02\u06DE\u06DC\x03\x02\x02\x02\u06DF\u06E2\x03" +
    "\x02\x02\x02\u06E0\u06DE\x03\x02\x02\x02\u06E0\u06E1\x03\x02\x02\x02\u06E1" +
    "\u06E5\x03\x02\x02\x02\u06E2\u06E0\x03\x02\x02\x02\u06E3\u06E5\x07\t\x02" +
    "\x02\u06E4\u06D9\x03\x02\x02\x02\u06E4\u06E3\x03\x02\x02\x02\u06E4\u06E5" +
    "\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E8\x07\x06\x02\x02" +
    "\u06E7\u06E9\x05x=\x02\u06E8\u06E7\x03\x02\x02\x02\u06E8\u06E9\x03\x02" +
    "\x02\x02\u06E9\x85\x03\x02\x02\x02\u06EA\u06EB\x05\x98M\x02\u06EB\u06F5" +
    "\x07\x05\x02\x02\u06EC\u06F1\x05B\"\x02\u06ED\u06EE\x07\x07\x02\x02\u06EE" +
    "\u06F0\x05B\"\x02\u06EF\u06ED\x03\x02\x02\x02\u06F0\u06F3\x03\x02\x02" +
    "\x02\u06F1\u06EF\x03\x02\x02\x02\u06F1\u06F2\x03\x02\x02\x02\u06F2\u06F6" +
    "\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F4\u06F6\x07\t\x02\x02" +
    "\u06F5\u06EC\x03\x02\x02\x02\u06F5\u06F4\x03\x02\x02\x02\u06F5\u06F6\x03" +
    "\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7\u06F9\x07\x06\x02\x02\u06F8" +
    "\u06FA\x05x=\x02\u06F9\u06F8\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02\x02" +
    "\u06FA\u06FB\x03\x02\x02\x02\u06FB\u06FE\x07\x9A\x02\x02\u06FC\u06FF\x05" +
    "z>\x02\u06FD\u06FF\x05\xD4k\x02\u06FE\u06FC\x03\x02\x02\x02\u06FE\u06FD" +
    "\x03\x02\x02\x02\u06FF\x87\x03\x02\x02\x02\u0700\u0702\x07\x97\x02\x02" +
    "\u0701\u0703\x07v\x02\x02\u0702\u0701\x03\x02\x02\x02\u0702\u0703\x03" +
    "\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u0709\x058\x1D\x02\u0705" +
    "\u0706\x07\x07\x02\x02\u0706\u0708\x058\x1D\x02\u0707\u0705\x03\x02\x02" +
    "\x02\u0708\u070B\x03\x02\x02\x02\u0709\u0707\x03\x02\x02\x02\u0709\u070A" +
    "\x03\x02\x02\x02\u070A\x89\x03\x02\x02\x02\u070B\u0709\x03\x02\x02\x02" +
    "\u070C\u070D\x07o\x02\x02\u070D\u070E\x07*\x02\x02\u070E\u0713\x05\x8E" +
    "H\x02\u070F\u0710\x07\x07\x02\x02\u0710\u0712\x05\x8EH\x02\u0711\u070F" +
    "\x03\x02\x02\x02\u0712\u0715\x03\x02\x02\x02\u0713\u0711\x03\x02\x02\x02" +
    "\u0713\u0714\x03\x02\x02\x02\u0714\x8B\x03\x02\x02\x02\u0715\u0713\x03" +
    "\x02\x02\x02\u0716\u0717\x07d\x02\x02\u0717\u071A\x05B\"\x02\u0718\u0719" +
    "\t\x15\x02\x02\u0719\u071B\x05B\"\x02\u071A\u0718\x03\x02\x02\x02\u071A" +
    "\u071B\x03\x02\x02\x02\u071B\x8D\x03\x02\x02\x02\u071C\u071F\x05B\"\x02" +
    "\u071D\u071E\x07/\x02\x02\u071E\u0720\x05\xC0a\x02\u071F\u071D\x03\x02" +
    "\x02\x02\u071F\u0720\x03\x02\x02\x02\u0720\u0722\x03\x02\x02\x02\u0721" +
    "\u0723\x05\x90I\x02\u0722\u0721\x03\x02\x02\x02\u0722\u0723\x03\x02\x02" +
    "\x02\u0723\u0726\x03\x02\x02\x02\u0724\u0725\x07\xB1\x02\x02\u0725\u0727" +
    "\t\x16\x02\x02\u0726\u0724\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02" +
    "\u0727\x8F\x03\x02\x02\x02\u0728\u0729\t\x17\x02\x02\u0729\x91\x03\x02" +
    "\x02\x02\u072A\u072B\x05B\"\x02\u072B\u072C\x07\x9D\x02\x02\u072C\u0735" +
    "\x03\x02\x02\x02\u072D\u072E\x05B\"\x02\u072E\u072F\x07\xA0\x02\x02\u072F" +
    "\u0735\x03\x02\x02\x02\u0730\u0731\x07\x9F\x02\x02\u0731\u0735\x07\x81" +
    "\x02\x02\u0732\u0733\x07\x9E\x02\x02\u0733\u0735\x07\x9D\x02\x02\u0734" +
    "\u072A\x03\x02\x02\x02\u0734\u072D\x03\x02\x02\x02\u0734\u0730\x03\x02" +
    "\x02\x02\u0734\u0732\x03\x02\x02\x02\u0735\x93\x03\x02\x02\x02\u0736\u0737" +
    "\x05B\"\x02\u0737\u0738\x07\x9D\x02\x02\u0738\u0741\x03\x02\x02\x02\u0739" +
    "\u073A\x05B\"\x02\u073A\u073B\x07\xA0\x02\x02\u073B\u0741\x03\x02\x02" +
    "\x02\u073C\u073D\x07\x9F\x02\x02\u073D\u0741\x07\x81\x02\x02\u073E\u073F" +
    "\x07\x9E\x02\x02\u073F\u0741\x07\xA0\x02\x02\u0740\u0736\x03\x02\x02\x02" +
    "\u0740\u0739\x03\x02\x02\x02\u0740\u073C\x03\x02\x02\x02\u0740\u073E\x03" +
    "\x02\x02\x02\u0741\x95\x03\x02\x02\x02\u0742\u0743\x05B\"\x02\u0743\u0744" +
    "\x07\x9D\x02\x02\u0744\u074A\x03\x02\x02\x02\u0745\u0746\x07\x9E\x02\x02" +
    "\u0746\u074A\x07\x9D\x02\x02\u0747\u0748\x07\x9F\x02\x02\u0748\u074A\x07" +
    "\x81\x02\x02\u0749\u0742\x03\x02\x02\x02\u0749\u0745\x03\x02\x02\x02\u0749" +
    "\u0747\x03\x02\x02\x02\u074A\x97\x03\x02\x02\x02\u074B\u074C\t\x18\x02" +
    "\x02\u074C\u074D\x07\x05\x02\x02\u074D\u074E\x05B\"\x02\u074E\u074F\x07" +
    "\x06\x02\x02\u074F\u0750\x07\x9A\x02\x02\u0750\u0752\x07\x05\x02\x02\u0751" +
    "\u0753\x05\x9EP\x02\u0752\u0751\x03\x02\x02\x02\u0752\u0753\x03\x02\x02" +
    "\x02\u0753\u0754\x03\x02\x02\x02\u0754\u0756\x05\xA2R\x02\u0755\u0757" +
    "\x05\x80A\x02\u0756\u0755\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02" +
    "\u0757\u0758\x03\x02\x02\x02\u0758\u0759\x07\x06\x02\x02\u0759\u07A1\x03" +
    "\x02\x02\x02\u075A\u075B\t\x19\x02\x02\u075B\u075C\x07\x05\x02\x02\u075C" +
    "\u075D\x07\x06\x02\x02\u075D\u075E\x07\x9A\x02\x02\u075E\u0760\x07\x05" +
    "\x02\x02\u075F\u0761\x05\x9EP\x02\u0760\u075F\x03\x02\x02\x02\u0760\u0761" +
    "\x03\x02\x02\x02\u0761\u0763\x03\x02\x02\x02\u0762\u0764\x05\xA0Q\x02" +
    "\u0763\u0762\x03\x02\x02\x02\u0763\u0764\x03\x02\x02\x02\u0764\u0765\x03" +
    "\x02\x02\x02\u0765\u07A1\x07\x06\x02\x02\u0766\u0767\t\x1A\x02\x02\u0767" +
    "\u0768\x07\x05\x02\x02\u0768\u0769\x07\x06\x02\x02\u0769\u076A\x07\x9A" +
    "\x02\x02\u076A\u076C\x07\x05\x02\x02\u076B\u076D\x05\x9EP\x02\u076C\u076B" +
    "\x03\x02\x02\x02\u076C\u076D\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02" +
    "\u076E\u076F\x05\xA2R\x02\u076F\u0770\x07\x06\x02\x02\u0770\u07A1\x03" +
    "\x02\x02\x02\u0771\u0772\t\x1B\x02\x02\u0772\u0773\x07\x05\x02\x02\u0773" +
    "\u0775\x05B\"\x02\u0774\u0776\x05\x9AN\x02\u0775\u0774\x03\x02\x02\x02" +
    "\u0775\u0776\x03\x02\x02\x02\u0776\u0778\x03\x02\x02\x02\u0777\u0779\x05" +
    "\x9CO\x02\u0778\u0777\x03\x02\x02\x02\u0778\u0779\x03\x02\x02\x02\u0779" +
    "\u077A\x03\x02\x02\x02\u077A\u077B\x07\x06\x02\x02\u077B\u077C\x07\x9A" +
    "\x02\x02\u077C\u077E\x07\x05\x02\x02\u077D\u077F\x05\x9EP\x02\u077E\u077D" +
    "\x03\x02\x02\x02\u077E\u077F\x03\x02\x02\x02\u077F\u0780\x03\x02\x02\x02" +
    "\u0780\u0781\x05\xA2R\x02\u0781\u0782\x07\x06\x02\x02\u0782\u07A1\x03" +
    "\x02\x02\x02\u0783\u0784\x07\xA6\x02\x02\u0784\u0785\x07\x05\x02\x02\u0785" +
    "\u0786\x05B\"\x02\u0786\u0787\x07\x07\x02\x02\u0787\u0788\x05$\x13\x02" +
    "\u0788\u0789\x07\x06\x02\x02\u0789\u078A\x07\x9A\x02\x02\u078A\u078C\x07" +
    "\x05\x02\x02\u078B\u078D\x05\x9EP\x02\u078C\u078B\x03\x02\x02\x02\u078C" +
    "\u078D\x03\x02\x02\x02\u078D\u078E\x03\x02\x02\x02\u078E\u0790\x05\xA2" +
    "R\x02\u078F\u0791\x05\x80A\x02\u0790\u078F\x03\x02\x02\x02\u0790\u0791" +
    "\x03\x02\x02\x02\u0791\u0792\x03\x02\x02\x02\u0792\u0793\x07\x06\x02\x02" +
    "\u0793\u07A1\x03\x02\x02\x02\u0794\u0795\x07\xA7\x02\x02\u0795\u0796\x07" +
    "\x05\x02\x02\u0796\u0797\x05B\"\x02\u0797\u0798\x07\x06\x02\x02\u0798" +
    "\u0799\x07\x9A\x02\x02\u0799\u079B\x07\x05\x02\x02\u079A\u079C\x05\x9E" +
    "P\x02\u079B\u079A\x03\x02\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C\u079D" +
    "\x03\x02\x02\x02\u079D\u079E\x05\xA2R\x02\u079E\u079F\x07\x06\x02\x02" +
    "\u079F\u07A1\x03\x02\x02\x02\u07A0\u074B\x03\x02\x02\x02\u07A0\u075A\x03" +
    "\x02\x02\x02\u07A0\u0766\x03\x02\x02\x02\u07A0\u0771\x03\x02\x02\x02\u07A0" +
    "\u0783\x03\x02\x02\x02\u07A0\u0794\x03\x02\x02\x02\u07A1\x99\x03\x02\x02" +
    "\x02\u07A2\u07A3\x07\x07\x02\x02\u07A3\u07A4\x05$\x13\x02\u07A4\x9B\x03" +
    "\x02\x02\x02\u07A5\u07A6\x07\x07\x02\x02\u07A6\u07A7\x05$\x13\x02\u07A7" +
    "\x9D\x03\x02\x02\x02\u07A8\u07A9\x07\x9B\x02\x02\u07A9\u07AB\x07*\x02" +
    "\x02\u07AA\u07AC\x05B\"\x02\u07AB\u07AA\x03\x02\x02\x02\u07AC\u07AD\x03" +
    "\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02\x02\u07AE" +
    "\x9F\x03\x02\x02\x02\u07AF\u07B0\x07o\x02\x02\u07B0\u07B2\x07*\x02\x02" +
    "\u07B1\u07B3\x05B\"\x02\u07B2\u07B1\x03\x02\x02\x02\u07B3\u07B4\x03\x02" +
    "\x02\x02\u07B4\u07B2\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5" +
    "\xA1\x03\x02\x02\x02\u07B6\u07B7\x07o\x02\x02\u07B7\u07B8\x07*\x02\x02" +
    "\u07B8\u07B9\x05\xA4S\x02\u07B9\xA3\x03\x02\x02\x02\u07BA\u07BC\x05B\"" +
    "\x02\u07BB\u07BD\x05\x90I\x02\u07BC\u07BB\x03\x02\x02\x02\u07BC\u07BD" +
    "\x03\x02\x02\x02\u07BD\u07C5\x03\x02\x02\x02\u07BE\u07BF\x07\x07\x02\x02" +
    "\u07BF\u07C1\x05B\"\x02\u07C0\u07C2\x05\x90I\x02\u07C1\u07C0\x03\x02\x02" +
    "\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2\u07C4\x03\x02\x02\x02\u07C3\u07BE" +
    "\x03\x02\x02\x02\u07C4\u07C7\x03\x02\x02\x02\u07C5\u07C3\x03\x02\x02\x02" +
    "\u07C5\u07C6\x03\x02\x02\x02\u07C6\xA5\x03\x02\x02\x02\u07C7\u07C5\x03" +
    "\x02\x02\x02\u07C8\u07C9\x05X-\x02\u07C9\xA7\x03\x02\x02\x02\u07CA\u07CB" +
    "\x05X-\x02\u07CB\xA9\x03\x02\x02\x02\u07CC\u07CD\t\x1C\x02\x02\u07CD\xAB" +
    "\x03\x02\x02\x02\u07CE\u07CF\x07\xBE\x02\x02\u07CF\xAD\x03\x02\x02\x02" +
    "\u07D0\u07D3\x05B\"\x02\u07D1\u07D3\x05\x1E\x10\x02\u07D2\u07D0\x03\x02" +
    "\x02\x02\u07D2\u07D1\x03\x02\x02\x02\u07D3\xAF\x03\x02\x02\x02\u07D4\u07D5" +
    "\t\x1D\x02\x02\u07D5\xB1\x03\x02\x02\x02\u07D6\u07D7\t\x1E\x02\x02\u07D7" +
    "\xB3\x03\x02\x02\x02\u07D8\u07D9\x05\xE2r\x02\u07D9\xB5\x03\x02\x02\x02" +
    "\u07DA\u07DB\x05\xE2r\x02\u07DB\xB7\x03\x02\x02\x02\u07DC\u07DD\x05\xE2" +
    "r\x02\u07DD\xB9\x03\x02\x02\x02\u07DE\u07DF\x05\xE2r\x02\u07DF\xBB\x03" +
    "\x02\x02\x02\u07E0\u07E1\x05\xE2r\x02\u07E1\xBD\x03\x02\x02\x02\u07E2" +
    "\u07E3\x05\xE2r\x02\u07E3\xBF\x03\x02\x02\x02\u07E4\u07E5\x05\xE2r\x02" +
    "\u07E5\xC1\x03\x02\x02\x02\u07E6\u07E7\x05\xE2r\x02\u07E7\xC3\x03\x02" +
    "\x02\x02\u07E8\u07E9\x05\xE2r\x02\u07E9\xC5\x03\x02\x02\x02\u07EA\u07EB" +
    "\x05\xE2r\x02\u07EB\xC7\x03\x02\x02\x02\u07EC\u07ED\x05\xE2r\x02\u07ED" +
    "\xC9\x03\x02\x02\x02\u07EE\u07EF\x05\xE2r\x02\u07EF\xCB\x03\x02\x02\x02" +
    "\u07F0\u07F1\x05\xE2r\x02\u07F1\xCD\x03\x02\x02\x02\u07F2\u07F3\x05\xE2" +
    "r\x02\u07F3\xCF\x03\x02\x02\x02\u07F4\u07F5\x05\xE2r\x02\u07F5\xD1\x03" +
    "\x02\x02\x02\u07F6\u07F7\x05\xE2r\x02\u07F7\xD3\x03\x02\x02\x02\u07F8" +
    "\u07F9\x05\xE2r\x02\u07F9\xD5\x03\x02\x02\x02\u07FA\u07FB\x05\xE2r\x02" +
    "\u07FB\xD7\x03\x02\x02\x02\u07FC\u07FD\x05\xE2r\x02\u07FD\xD9\x03\x02" +
    "\x02\x02\u07FE\u07FF\x05\xE2r\x02\u07FF\xDB\x03\x02\x02\x02\u0800\u0801" +
    "\x05\xE2r\x02\u0801\xDD\x03\x02\x02\x02\u0802\u0803\x05\xE2r\x02\u0803" +
    "\xDF\x03\x02\x02\x02\u0804\u0805\x05\xE2r\x02\u0805\xE1\x03\x02\x02\x02" +
    "\u0806\u080E\x07\xBB\x02\x02\u0807\u080E\x05\xB2Z\x02\u0808\u080E\x07" +
    "\xBE\x02\x02\u0809\u080A\x07\x05\x02\x02\u080A\u080B\x05\xE2r\x02\u080B" +
    "\u080C\x07\x06\x02\x02\u080C\u080E\x03\x02\x02\x02\u080D\u0806\x03\x02" +
    "\x02\x02\u080D\u0807\x03\x02\x02\x02\u080D\u0808\x03\x02\x02\x02\u080D" +
    "\u0809\x03\x02\x02\x02\u080E\xE3\x03\x02\x02\x02\u012B\xE7\xEF\xF6\xFB" +
    "\u0101\u0107\u0109\u0123\u012A\u0131\u0137\u013B\u0140\u0143\u014A\u014D" +
    "\u0151\u0159\u015D\u015F\u0163\u0167\u016B\u016E\u0175\u017B\u0181\u0186" +
    "\u0191\u0197\u019B\u019F\u01A2\u01A6\u01AC\u01B1\u01BA\u01C1\u01C7\u01CB" +
    "\u01CF\u01D4\u01DA\u01E6\u01EA\u01EF\u01F2\u01F5\u01F8\u01FC\u01FF\u020D" +
    "\u0214\u021B\u021D\u0220\u0226\u022B\u0233\u0238\u0247\u024D\u0257\u025C" +
    "\u0266\u026A\u026C\u0270\u0275\u0277\u027F\u0285\u028A\u0291\u029C\u029F" +
    "\u02A1\u02A8\u02AC\u02B3\u02B9\u02BF\u02C5\u02CA\u02D3\u02D8\u02E3\u02E8" +
    "\u02F3\u02F8\u02FC\u030C\u0316\u031B\u0323\u032F\u0334\u033C\u0343\u0346" +
    "\u0349\u0350\u0353\u0356\u0359\u035D\u0365\u036A\u0374\u0379\u0382\u0389" +
    "\u038D\u0391\u0394\u039C\u03A9\u03AC\u03B4\u03BD\u03C1\u03C6\u03E1\u03EA" +
    "\u03F6\u03FB\u0407\u040D\u0414\u0418\u0422\u0425\u042B\u0431\u043A\u043D" +
    "\u0441\u0443\u0445\u044E\u045A\u0465\u0469\u0470\u0476\u047B\u0483\u0488" +
    "\u048C\u048F\u0493\u0496\u049E\u04A9\u04AF\u04B1\u04B9\u04C0\u04C7\u04CC" +
    "\u04CE\u04D4\u04DD\u04E2\u04E9\u04ED\u04EF\u04F2\u04FA\u04FE\u0501\u0507" +
    "\u050B\u0510\u0517\u0520\u0524\u0526\u052A\u0533\u0538\u053A\u0547\u054A" +
    "\u054D\u0552\u0556\u0559\u055C\u0561\u0565\u056A\u056D\u0570\u0575\u0579" +
    "\u057C\u0583\u0588\u0591\u0596\u0599\u05A1\u05A5\u05AD\u05B0\u05B2\u05BB" +
    "\u05BE\u05C0\u05C4\u05C8\u05CC\u05CF\u05DA\u05DF\u05E3\u05E7\u05EA\u05EF" +
    "\u05F5\u05FC\u0603\u060C\u0610\u0612\u0616\u0619\u0621\u0627\u062C\u0632" +
    "\u0639\u0640\u0645\u0648\u064B\u064E\u0653\u0658\u065F\u0663\u0667\u0671" +
    "\u067A\u067D\u0686\u068A\u0692\u069B\u069E\u06A7\u06AA\u06AD\u06B0\u06BA" +
    "\u06BC\u06C5\u06CE\u06D2\u06D9\u06E0\u06E4\u06E8\u06F1\u06F5\u06F9\u06FE" +
    "\u0702\u0709\u0713\u071A\u071F\u0722\u0726\u0734\u0740\u0749\u0752\u0756" +
    "\u0760\u0763\u076C\u0775\u0778\u077E\u078C\u0790\u079B\u07A0\u07AD\u07B4" +
    "\u07BC\u07C1\u07C5\u07D2\u080D";
SQLiteParser._serializedATN = Utils.join([
    SQLiteParser._serializedATNSegment0,
    SQLiteParser._serializedATNSegment1,
    SQLiteParser._serializedATNSegment2,
    SQLiteParser._serializedATNSegment3,
], "");
class ParseContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(SQLiteParser.EOF, 0); }
    sql_stmt_list(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmt_listContext);
        }
        else {
            return this.getRuleContext(i, Sql_stmt_listContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_parse; }
    // @Override
    enterRule(listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    }
}
exports.ParseContext = ParseContext;
class Sql_stmt_listContext extends ParserRuleContext_1.ParserRuleContext {
    sql_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmtContext);
        }
        else {
            return this.getRuleContext(i, Sql_stmtContext);
        }
    }
    SCOL(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.SCOL);
        }
        else {
            return this.getToken(SQLiteParser.SCOL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_sql_stmt_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterSql_stmt_list) {
            listener.enterSql_stmt_list(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSql_stmt_list) {
            listener.exitSql_stmt_list(this);
        }
    }
}
exports.Sql_stmt_listContext = Sql_stmt_listContext;
class Sql_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    alter_table_stmt() {
        return this.tryGetRuleContext(0, Alter_table_stmtContext);
    }
    analyze_stmt() {
        return this.tryGetRuleContext(0, Analyze_stmtContext);
    }
    attach_stmt() {
        return this.tryGetRuleContext(0, Attach_stmtContext);
    }
    begin_stmt() {
        return this.tryGetRuleContext(0, Begin_stmtContext);
    }
    commit_stmt() {
        return this.tryGetRuleContext(0, Commit_stmtContext);
    }
    create_index_stmt() {
        return this.tryGetRuleContext(0, Create_index_stmtContext);
    }
    create_table_stmt() {
        return this.tryGetRuleContext(0, Create_table_stmtContext);
    }
    create_trigger_stmt() {
        return this.tryGetRuleContext(0, Create_trigger_stmtContext);
    }
    create_view_stmt() {
        return this.tryGetRuleContext(0, Create_view_stmtContext);
    }
    create_virtual_table_stmt() {
        return this.tryGetRuleContext(0, Create_virtual_table_stmtContext);
    }
    delete_stmt() {
        return this.tryGetRuleContext(0, Delete_stmtContext);
    }
    delete_stmt_limited() {
        return this.tryGetRuleContext(0, Delete_stmt_limitedContext);
    }
    detach_stmt() {
        return this.tryGetRuleContext(0, Detach_stmtContext);
    }
    drop_stmt() {
        return this.tryGetRuleContext(0, Drop_stmtContext);
    }
    insert_stmt() {
        return this.tryGetRuleContext(0, Insert_stmtContext);
    }
    pragma_stmt() {
        return this.tryGetRuleContext(0, Pragma_stmtContext);
    }
    reindex_stmt() {
        return this.tryGetRuleContext(0, Reindex_stmtContext);
    }
    release_stmt() {
        return this.tryGetRuleContext(0, Release_stmtContext);
    }
    rollback_stmt() {
        return this.tryGetRuleContext(0, Rollback_stmtContext);
    }
    savepoint_stmt() {
        return this.tryGetRuleContext(0, Savepoint_stmtContext);
    }
    select_stmt() {
        return this.tryGetRuleContext(0, Select_stmtContext);
    }
    update_stmt() {
        return this.tryGetRuleContext(0, Update_stmtContext);
    }
    update_stmt_limited() {
        return this.tryGetRuleContext(0, Update_stmt_limitedContext);
    }
    vacuum_stmt() {
        return this.tryGetRuleContext(0, Vacuum_stmtContext);
    }
    EXPLAIN() { return this.tryGetToken(SQLiteParser.EXPLAIN, 0); }
    QUERY() { return this.tryGetToken(SQLiteParser.QUERY, 0); }
    PLAN() { return this.tryGetToken(SQLiteParser.PLAN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_sql_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterSql_stmt) {
            listener.enterSql_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSql_stmt) {
            listener.exitSql_stmt(this);
        }
    }
}
exports.Sql_stmtContext = Sql_stmtContext;
class Alter_table_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    ALTER() { return this.getToken(SQLiteParser.ALTER, 0); }
    TABLE() { return this.getToken(SQLiteParser.TABLE, 0); }
    table_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_nameContext);
        }
        else {
            return this.getRuleContext(i, Table_nameContext);
        }
    }
    RENAME() { return this.tryGetToken(SQLiteParser.RENAME, 0); }
    ADD() { return this.tryGetToken(SQLiteParser.ADD, 0); }
    column_def() {
        return this.tryGetRuleContext(0, Column_defContext);
    }
    DROP() { return this.tryGetToken(SQLiteParser.DROP, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    TO() { return this.tryGetToken(SQLiteParser.TO, 0); }
    COLUMN() { return this.tryGetToken(SQLiteParser.COLUMN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_alter_table_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlter_table_stmt) {
            listener.enterAlter_table_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlter_table_stmt) {
            listener.exitAlter_table_stmt(this);
        }
    }
}
exports.Alter_table_stmtContext = Alter_table_stmtContext;
class Analyze_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    ANALYZE() { return this.getToken(SQLiteParser.ANALYZE, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    table_or_index_name() {
        return this.tryGetRuleContext(0, Table_or_index_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_analyze_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnalyze_stmt) {
            listener.enterAnalyze_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnalyze_stmt) {
            listener.exitAnalyze_stmt(this);
        }
    }
}
exports.Analyze_stmtContext = Analyze_stmtContext;
class Attach_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    ATTACH() { return this.getToken(SQLiteParser.ATTACH, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    AS() { return this.getToken(SQLiteParser.AS, 0); }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DATABASE() { return this.tryGetToken(SQLiteParser.DATABASE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_attach_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterAttach_stmt) {
            listener.enterAttach_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAttach_stmt) {
            listener.exitAttach_stmt(this);
        }
    }
}
exports.Attach_stmtContext = Attach_stmtContext;
class Begin_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    BEGIN() { return this.getToken(SQLiteParser.BEGIN, 0); }
    TRANSACTION() { return this.tryGetToken(SQLiteParser.TRANSACTION, 0); }
    DEFERRED() { return this.tryGetToken(SQLiteParser.DEFERRED, 0); }
    IMMEDIATE() { return this.tryGetToken(SQLiteParser.IMMEDIATE, 0); }
    EXCLUSIVE() { return this.tryGetToken(SQLiteParser.EXCLUSIVE, 0); }
    transaction_name() {
        return this.tryGetRuleContext(0, Transaction_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_begin_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterBegin_stmt) {
            listener.enterBegin_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBegin_stmt) {
            listener.exitBegin_stmt(this);
        }
    }
}
exports.Begin_stmtContext = Begin_stmtContext;
class Commit_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    COMMIT() { return this.tryGetToken(SQLiteParser.COMMIT, 0); }
    END() { return this.tryGetToken(SQLiteParser.END, 0); }
    TRANSACTION() { return this.tryGetToken(SQLiteParser.TRANSACTION, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_commit_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCommit_stmt) {
            listener.enterCommit_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCommit_stmt) {
            listener.exitCommit_stmt(this);
        }
    }
}
exports.Commit_stmtContext = Commit_stmtContext;
class Rollback_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    ROLLBACK() { return this.getToken(SQLiteParser.ROLLBACK, 0); }
    TRANSACTION() { return this.tryGetToken(SQLiteParser.TRANSACTION, 0); }
    TO() { return this.tryGetToken(SQLiteParser.TO, 0); }
    savepoint_name() {
        return this.tryGetRuleContext(0, Savepoint_nameContext);
    }
    SAVEPOINT() { return this.tryGetToken(SQLiteParser.SAVEPOINT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_rollback_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterRollback_stmt) {
            listener.enterRollback_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRollback_stmt) {
            listener.exitRollback_stmt(this);
        }
    }
}
exports.Rollback_stmtContext = Rollback_stmtContext;
class Savepoint_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    SAVEPOINT() { return this.getToken(SQLiteParser.SAVEPOINT, 0); }
    savepoint_name() {
        return this.getRuleContext(0, Savepoint_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_savepoint_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterSavepoint_stmt) {
            listener.enterSavepoint_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSavepoint_stmt) {
            listener.exitSavepoint_stmt(this);
        }
    }
}
exports.Savepoint_stmtContext = Savepoint_stmtContext;
class Release_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    RELEASE() { return this.getToken(SQLiteParser.RELEASE, 0); }
    savepoint_name() {
        return this.getRuleContext(0, Savepoint_nameContext);
    }
    SAVEPOINT() { return this.tryGetToken(SQLiteParser.SAVEPOINT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_release_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelease_stmt) {
            listener.enterRelease_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelease_stmt) {
            listener.exitRelease_stmt(this);
        }
    }
}
exports.Release_stmtContext = Release_stmtContext;
class Create_index_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE() { return this.getToken(SQLiteParser.CREATE, 0); }
    INDEX() { return this.getToken(SQLiteParser.INDEX, 0); }
    index_name() {
        return this.getRuleContext(0, Index_nameContext);
    }
    ON() { return this.getToken(SQLiteParser.ON, 0); }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    indexed_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        else {
            return this.getRuleContext(i, Indexed_columnContext);
        }
    }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    UNIQUE() { return this.tryGetToken(SQLiteParser.UNIQUE, 0); }
    IF() { return this.tryGetToken(SQLiteParser.IF, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    WHERE() { return this.tryGetToken(SQLiteParser.WHERE, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_create_index_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreate_index_stmt) {
            listener.enterCreate_index_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreate_index_stmt) {
            listener.exitCreate_index_stmt(this);
        }
    }
}
exports.Create_index_stmtContext = Create_index_stmtContext;
class Indexed_columnContext extends ParserRuleContext_1.ParserRuleContext {
    column_name() {
        return this.tryGetRuleContext(0, Column_nameContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    COLLATE() { return this.tryGetToken(SQLiteParser.COLLATE, 0); }
    collation_name() {
        return this.tryGetRuleContext(0, Collation_nameContext);
    }
    asc_desc() {
        return this.tryGetRuleContext(0, Asc_descContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_indexed_column; }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexed_column) {
            listener.enterIndexed_column(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexed_column) {
            listener.exitIndexed_column(this);
        }
    }
}
exports.Indexed_columnContext = Indexed_columnContext;
class Create_table_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE() { return this.getToken(SQLiteParser.CREATE, 0); }
    TABLE() { return this.getToken(SQLiteParser.TABLE, 0); }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    column_def(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_defContext);
        }
        else {
            return this.getRuleContext(i, Column_defContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    select_stmt() {
        return this.tryGetRuleContext(0, Select_stmtContext);
    }
    IF() { return this.tryGetToken(SQLiteParser.IF, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    TEMP() { return this.tryGetToken(SQLiteParser.TEMP, 0); }
    TEMPORARY() { return this.tryGetToken(SQLiteParser.TEMPORARY, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    table_constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_constraintContext);
        }
        else {
            return this.getRuleContext(i, Table_constraintContext);
        }
    }
    WITHOUT() { return this.tryGetToken(SQLiteParser.WITHOUT, 0); }
    IDENTIFIER() { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_create_table_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreate_table_stmt) {
            listener.enterCreate_table_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreate_table_stmt) {
            listener.exitCreate_table_stmt(this);
        }
    }
}
exports.Create_table_stmtContext = Create_table_stmtContext;
class Column_defContext extends ParserRuleContext_1.ParserRuleContext {
    column_name() {
        return this.getRuleContext(0, Column_nameContext);
    }
    type_name() {
        return this.tryGetRuleContext(0, Type_nameContext);
    }
    column_constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_constraintContext);
        }
        else {
            return this.getRuleContext(i, Column_constraintContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_column_def; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumn_def) {
            listener.enterColumn_def(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumn_def) {
            listener.exitColumn_def(this);
        }
    }
}
exports.Column_defContext = Column_defContext;
class Type_nameContext extends ParserRuleContext_1.ParserRuleContext {
    name(i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    signed_number(i) {
        if (i === undefined) {
            return this.getRuleContexts(Signed_numberContext);
        }
        else {
            return this.getRuleContext(i, Signed_numberContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    COMMA() { return this.tryGetToken(SQLiteParser.COMMA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_type_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_name) {
            listener.enterType_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_name) {
            listener.exitType_name(this);
        }
    }
}
exports.Type_nameContext = Type_nameContext;
class Column_constraintContext extends ParserRuleContext_1.ParserRuleContext {
    CHECK() { return this.tryGetToken(SQLiteParser.CHECK, 0); }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    DEFAULT() { return this.tryGetToken(SQLiteParser.DEFAULT, 0); }
    COLLATE() { return this.tryGetToken(SQLiteParser.COLLATE, 0); }
    collation_name() {
        return this.tryGetRuleContext(0, Collation_nameContext);
    }
    foreign_key_clause() {
        return this.tryGetRuleContext(0, Foreign_key_clauseContext);
    }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    CONSTRAINT() { return this.tryGetToken(SQLiteParser.CONSTRAINT, 0); }
    name() {
        return this.tryGetRuleContext(0, NameContext);
    }
    PRIMARY() { return this.tryGetToken(SQLiteParser.PRIMARY, 0); }
    KEY() { return this.tryGetToken(SQLiteParser.KEY, 0); }
    NULL() { return this.tryGetToken(SQLiteParser.NULL, 0); }
    UNIQUE() { return this.tryGetToken(SQLiteParser.UNIQUE, 0); }
    signed_number() {
        return this.tryGetRuleContext(0, Signed_numberContext);
    }
    literal_value() {
        return this.tryGetRuleContext(0, Literal_valueContext);
    }
    conflict_clause() {
        return this.tryGetRuleContext(0, Conflict_clauseContext);
    }
    GENERATED() { return this.tryGetToken(SQLiteParser.GENERATED, 0); }
    ALWAYS() { return this.tryGetToken(SQLiteParser.ALWAYS, 0); }
    STORED() { return this.tryGetToken(SQLiteParser.STORED, 0); }
    VIRTUAL() { return this.tryGetToken(SQLiteParser.VIRTUAL, 0); }
    asc_desc() {
        return this.tryGetRuleContext(0, Asc_descContext);
    }
    AUTOINCREMENT() { return this.tryGetToken(SQLiteParser.AUTOINCREMENT, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_column_constraint; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumn_constraint) {
            listener.enterColumn_constraint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumn_constraint) {
            listener.exitColumn_constraint(this);
        }
    }
}
exports.Column_constraintContext = Column_constraintContext;
class Signed_numberContext extends ParserRuleContext_1.ParserRuleContext {
    NUMERIC_LITERAL() { return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0); }
    PLUS() { return this.tryGetToken(SQLiteParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(SQLiteParser.MINUS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_signed_number; }
    // @Override
    enterRule(listener) {
        if (listener.enterSigned_number) {
            listener.enterSigned_number(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSigned_number) {
            listener.exitSigned_number(this);
        }
    }
}
exports.Signed_numberContext = Signed_numberContext;
class Table_constraintContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    indexed_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        else {
            return this.getRuleContext(i, Indexed_columnContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    CHECK() { return this.tryGetToken(SQLiteParser.CHECK, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    FOREIGN() { return this.tryGetToken(SQLiteParser.FOREIGN, 0); }
    KEY() { return this.tryGetToken(SQLiteParser.KEY, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    foreign_key_clause() {
        return this.tryGetRuleContext(0, Foreign_key_clauseContext);
    }
    CONSTRAINT() { return this.tryGetToken(SQLiteParser.CONSTRAINT, 0); }
    name() {
        return this.tryGetRuleContext(0, NameContext);
    }
    PRIMARY() { return this.tryGetToken(SQLiteParser.PRIMARY, 0); }
    UNIQUE() { return this.tryGetToken(SQLiteParser.UNIQUE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    conflict_clause() {
        return this.tryGetRuleContext(0, Conflict_clauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_table_constraint; }
    // @Override
    enterRule(listener) {
        if (listener.enterTable_constraint) {
            listener.enterTable_constraint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTable_constraint) {
            listener.exitTable_constraint(this);
        }
    }
}
exports.Table_constraintContext = Table_constraintContext;
class Foreign_key_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    REFERENCES() { return this.getToken(SQLiteParser.REFERENCES, 0); }
    foreign_table() {
        return this.getRuleContext(0, Foreign_tableContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    ON(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ON);
        }
        else {
            return this.getToken(SQLiteParser.ON, i);
        }
    }
    MATCH(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.MATCH);
        }
        else {
            return this.getToken(SQLiteParser.MATCH, i);
        }
    }
    name(i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    }
    DEFERRABLE() { return this.tryGetToken(SQLiteParser.DEFERRABLE, 0); }
    DELETE(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DELETE);
        }
        else {
            return this.getToken(SQLiteParser.DELETE, i);
        }
    }
    UPDATE(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.UPDATE);
        }
        else {
            return this.getToken(SQLiteParser.UPDATE, i);
        }
    }
    SET(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.SET);
        }
        else {
            return this.getToken(SQLiteParser.SET, i);
        }
    }
    CASCADE(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CASCADE);
        }
        else {
            return this.getToken(SQLiteParser.CASCADE, i);
        }
    }
    RESTRICT(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.RESTRICT);
        }
        else {
            return this.getToken(SQLiteParser.RESTRICT, i);
        }
    }
    NO(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.NO);
        }
        else {
            return this.getToken(SQLiteParser.NO, i);
        }
    }
    ACTION(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ACTION);
        }
        else {
            return this.getToken(SQLiteParser.ACTION, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    NULL(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.NULL);
        }
        else {
            return this.getToken(SQLiteParser.NULL, i);
        }
    }
    DEFAULT(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DEFAULT);
        }
        else {
            return this.getToken(SQLiteParser.DEFAULT, i);
        }
    }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    INITIALLY() { return this.tryGetToken(SQLiteParser.INITIALLY, 0); }
    DEFERRED() { return this.tryGetToken(SQLiteParser.DEFERRED, 0); }
    IMMEDIATE() { return this.tryGetToken(SQLiteParser.IMMEDIATE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_foreign_key_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterForeign_key_clause) {
            listener.enterForeign_key_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForeign_key_clause) {
            listener.exitForeign_key_clause(this);
        }
    }
}
exports.Foreign_key_clauseContext = Foreign_key_clauseContext;
class Conflict_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    ON() { return this.getToken(SQLiteParser.ON, 0); }
    CONFLICT() { return this.getToken(SQLiteParser.CONFLICT, 0); }
    ROLLBACK() { return this.tryGetToken(SQLiteParser.ROLLBACK, 0); }
    ABORT() { return this.tryGetToken(SQLiteParser.ABORT, 0); }
    FAIL() { return this.tryGetToken(SQLiteParser.FAIL, 0); }
    IGNORE() { return this.tryGetToken(SQLiteParser.IGNORE, 0); }
    REPLACE() { return this.tryGetToken(SQLiteParser.REPLACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_conflict_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterConflict_clause) {
            listener.enterConflict_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConflict_clause) {
            listener.exitConflict_clause(this);
        }
    }
}
exports.Conflict_clauseContext = Conflict_clauseContext;
class Create_trigger_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE() { return this.getToken(SQLiteParser.CREATE, 0); }
    TRIGGER() { return this.getToken(SQLiteParser.TRIGGER, 0); }
    trigger_name() {
        return this.getRuleContext(0, Trigger_nameContext);
    }
    ON() { return this.getToken(SQLiteParser.ON, 0); }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    BEGIN() { return this.getToken(SQLiteParser.BEGIN, 0); }
    END() { return this.getToken(SQLiteParser.END, 0); }
    DELETE() { return this.tryGetToken(SQLiteParser.DELETE, 0); }
    INSERT() { return this.tryGetToken(SQLiteParser.INSERT, 0); }
    UPDATE() { return this.tryGetToken(SQLiteParser.UPDATE, 0); }
    IF() { return this.tryGetToken(SQLiteParser.IF, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    BEFORE() { return this.tryGetToken(SQLiteParser.BEFORE, 0); }
    AFTER() { return this.tryGetToken(SQLiteParser.AFTER, 0); }
    INSTEAD() { return this.tryGetToken(SQLiteParser.INSTEAD, 0); }
    OF(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OF);
        }
        else {
            return this.getToken(SQLiteParser.OF, i);
        }
    }
    FOR() { return this.tryGetToken(SQLiteParser.FOR, 0); }
    EACH() { return this.tryGetToken(SQLiteParser.EACH, 0); }
    ROW() { return this.tryGetToken(SQLiteParser.ROW, 0); }
    WHEN() { return this.tryGetToken(SQLiteParser.WHEN, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    SCOL(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.SCOL);
        }
        else {
            return this.getToken(SQLiteParser.SCOL, i);
        }
    }
    TEMP() { return this.tryGetToken(SQLiteParser.TEMP, 0); }
    TEMPORARY() { return this.tryGetToken(SQLiteParser.TEMPORARY, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    update_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Update_stmtContext);
        }
        else {
            return this.getRuleContext(i, Update_stmtContext);
        }
    }
    insert_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Insert_stmtContext);
        }
        else {
            return this.getRuleContext(i, Insert_stmtContext);
        }
    }
    delete_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Delete_stmtContext);
        }
        else {
            return this.getRuleContext(i, Delete_stmtContext);
        }
    }
    select_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }
        else {
            return this.getRuleContext(i, Select_stmtContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_create_trigger_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreate_trigger_stmt) {
            listener.enterCreate_trigger_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreate_trigger_stmt) {
            listener.exitCreate_trigger_stmt(this);
        }
    }
}
exports.Create_trigger_stmtContext = Create_trigger_stmtContext;
class Create_view_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE() { return this.getToken(SQLiteParser.CREATE, 0); }
    VIEW() { return this.getToken(SQLiteParser.VIEW, 0); }
    view_name() {
        return this.getRuleContext(0, View_nameContext);
    }
    AS() { return this.getToken(SQLiteParser.AS, 0); }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    IF() { return this.tryGetToken(SQLiteParser.IF, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    TEMP() { return this.tryGetToken(SQLiteParser.TEMP, 0); }
    TEMPORARY() { return this.tryGetToken(SQLiteParser.TEMPORARY, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_create_view_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreate_view_stmt) {
            listener.enterCreate_view_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreate_view_stmt) {
            listener.exitCreate_view_stmt(this);
        }
    }
}
exports.Create_view_stmtContext = Create_view_stmtContext;
class Create_virtual_table_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE() { return this.getToken(SQLiteParser.CREATE, 0); }
    VIRTUAL() { return this.getToken(SQLiteParser.VIRTUAL, 0); }
    TABLE() { return this.getToken(SQLiteParser.TABLE, 0); }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    USING() { return this.getToken(SQLiteParser.USING, 0); }
    module_name() {
        return this.getRuleContext(0, Module_nameContext);
    }
    IF() { return this.tryGetToken(SQLiteParser.IF, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    module_argument(i) {
        if (i === undefined) {
            return this.getRuleContexts(Module_argumentContext);
        }
        else {
            return this.getRuleContext(i, Module_argumentContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_create_virtual_table_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreate_virtual_table_stmt) {
            listener.enterCreate_virtual_table_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreate_virtual_table_stmt) {
            listener.exitCreate_virtual_table_stmt(this);
        }
    }
}
exports.Create_virtual_table_stmtContext = Create_virtual_table_stmtContext;
class With_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    WITH() { return this.getToken(SQLiteParser.WITH, 0); }
    cte_table_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Cte_table_nameContext);
        }
        else {
            return this.getRuleContext(i, Cte_table_nameContext);
        }
    }
    AS(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.AS);
        }
        else {
            return this.getToken(SQLiteParser.AS, i);
        }
    }
    OPEN_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    }
    select_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }
        else {
            return this.getRuleContext(i, Select_stmtContext);
        }
    }
    CLOSE_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    }
    RECURSIVE() { return this.tryGetToken(SQLiteParser.RECURSIVE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_with_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterWith_clause) {
            listener.enterWith_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWith_clause) {
            listener.exitWith_clause(this);
        }
    }
}
exports.With_clauseContext = With_clauseContext;
class Cte_table_nameContext extends ParserRuleContext_1.ParserRuleContext {
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_cte_table_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterCte_table_name) {
            listener.enterCte_table_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCte_table_name) {
            listener.exitCte_table_name(this);
        }
    }
}
exports.Cte_table_nameContext = Cte_table_nameContext;
class Recursive_cteContext extends ParserRuleContext_1.ParserRuleContext {
    cte_table_name() {
        return this.getRuleContext(0, Cte_table_nameContext);
    }
    AS() { return this.getToken(SQLiteParser.AS, 0); }
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    initial_select() {
        return this.getRuleContext(0, Initial_selectContext);
    }
    UNION() { return this.getToken(SQLiteParser.UNION, 0); }
    recursive_select() {
        return this.getRuleContext(0, Recursive_selectContext);
    }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    ALL() { return this.tryGetToken(SQLiteParser.ALL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_recursive_cte; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecursive_cte) {
            listener.enterRecursive_cte(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecursive_cte) {
            listener.exitRecursive_cte(this);
        }
    }
}
exports.Recursive_cteContext = Recursive_cteContext;
class Common_table_expressionContext extends ParserRuleContext_1.ParserRuleContext {
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    AS() { return this.getToken(SQLiteParser.AS, 0); }
    OPEN_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    CLOSE_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_common_table_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterCommon_table_expression) {
            listener.enterCommon_table_expression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCommon_table_expression) {
            listener.exitCommon_table_expression(this);
        }
    }
}
exports.Common_table_expressionContext = Common_table_expressionContext;
class Delete_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    DELETE() { return this.getToken(SQLiteParser.DELETE, 0); }
    FROM() { return this.getToken(SQLiteParser.FROM, 0); }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    with_clause() {
        return this.tryGetRuleContext(0, With_clauseContext);
    }
    WHERE() { return this.tryGetToken(SQLiteParser.WHERE, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    returning_clause() {
        return this.tryGetRuleContext(0, Returning_clauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_delete_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterDelete_stmt) {
            listener.enterDelete_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDelete_stmt) {
            listener.exitDelete_stmt(this);
        }
    }
}
exports.Delete_stmtContext = Delete_stmtContext;
class Delete_stmt_limitedContext extends ParserRuleContext_1.ParserRuleContext {
    DELETE() { return this.getToken(SQLiteParser.DELETE, 0); }
    FROM() { return this.getToken(SQLiteParser.FROM, 0); }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    with_clause() {
        return this.tryGetRuleContext(0, With_clauseContext);
    }
    WHERE() { return this.tryGetToken(SQLiteParser.WHERE, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    returning_clause() {
        return this.tryGetRuleContext(0, Returning_clauseContext);
    }
    limit_stmt() {
        return this.tryGetRuleContext(0, Limit_stmtContext);
    }
    order_by_stmt() {
        return this.tryGetRuleContext(0, Order_by_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_delete_stmt_limited; }
    // @Override
    enterRule(listener) {
        if (listener.enterDelete_stmt_limited) {
            listener.enterDelete_stmt_limited(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDelete_stmt_limited) {
            listener.exitDelete_stmt_limited(this);
        }
    }
}
exports.Delete_stmt_limitedContext = Delete_stmt_limitedContext;
class Detach_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    DETACH() { return this.getToken(SQLiteParser.DETACH, 0); }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DATABASE() { return this.tryGetToken(SQLiteParser.DATABASE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_detach_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterDetach_stmt) {
            listener.enterDetach_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDetach_stmt) {
            listener.exitDetach_stmt(this);
        }
    }
}
exports.Detach_stmtContext = Detach_stmtContext;
class Drop_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    DROP() { return this.getToken(SQLiteParser.DROP, 0); }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    INDEX() { return this.tryGetToken(SQLiteParser.INDEX, 0); }
    TABLE() { return this.tryGetToken(SQLiteParser.TABLE, 0); }
    TRIGGER() { return this.tryGetToken(SQLiteParser.TRIGGER, 0); }
    VIEW() { return this.tryGetToken(SQLiteParser.VIEW, 0); }
    IF() { return this.tryGetToken(SQLiteParser.IF, 0); }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_drop_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterDrop_stmt) {
            listener.enterDrop_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDrop_stmt) {
            listener.exitDrop_stmt(this);
        }
    }
}
exports.Drop_stmtContext = Drop_stmtContext;
class ExprContext extends ParserRuleContext_1.ParserRuleContext {
    literal_value() {
        return this.tryGetRuleContext(0, Literal_valueContext);
    }
    BIND_PARAMETER() { return this.tryGetToken(SQLiteParser.BIND_PARAMETER, 0); }
    column_name() {
        return this.tryGetRuleContext(0, Column_nameContext);
    }
    table_name() {
        return this.tryGetRuleContext(0, Table_nameContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DOT);
        }
        else {
            return this.getToken(SQLiteParser.DOT, i);
        }
    }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    unary_operator() {
        return this.tryGetRuleContext(0, Unary_operatorContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    PIPE2() { return this.tryGetToken(SQLiteParser.PIPE2, 0); }
    STAR() { return this.tryGetToken(SQLiteParser.STAR, 0); }
    DIV() { return this.tryGetToken(SQLiteParser.DIV, 0); }
    MOD() { return this.tryGetToken(SQLiteParser.MOD, 0); }
    PLUS() { return this.tryGetToken(SQLiteParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(SQLiteParser.MINUS, 0); }
    LT2() { return this.tryGetToken(SQLiteParser.LT2, 0); }
    GT2() { return this.tryGetToken(SQLiteParser.GT2, 0); }
    AMP() { return this.tryGetToken(SQLiteParser.AMP, 0); }
    PIPE() { return this.tryGetToken(SQLiteParser.PIPE, 0); }
    LT() { return this.tryGetToken(SQLiteParser.LT, 0); }
    LT_EQ() { return this.tryGetToken(SQLiteParser.LT_EQ, 0); }
    GT() { return this.tryGetToken(SQLiteParser.GT, 0); }
    GT_EQ() { return this.tryGetToken(SQLiteParser.GT_EQ, 0); }
    ASSIGN() { return this.tryGetToken(SQLiteParser.ASSIGN, 0); }
    EQ() { return this.tryGetToken(SQLiteParser.EQ, 0); }
    NOT_EQ1() { return this.tryGetToken(SQLiteParser.NOT_EQ1, 0); }
    NOT_EQ2() { return this.tryGetToken(SQLiteParser.NOT_EQ2, 0); }
    IS() { return this.tryGetToken(SQLiteParser.IS, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    DISTINCT() { return this.tryGetToken(SQLiteParser.DISTINCT, 0); }
    FROM() { return this.tryGetToken(SQLiteParser.FROM, 0); }
    IN() { return this.tryGetToken(SQLiteParser.IN, 0); }
    LIKE() { return this.tryGetToken(SQLiteParser.LIKE, 0); }
    GLOB() { return this.tryGetToken(SQLiteParser.GLOB, 0); }
    MATCH() { return this.tryGetToken(SQLiteParser.MATCH, 0); }
    REGEXP() { return this.tryGetToken(SQLiteParser.REGEXP, 0); }
    AND() { return this.tryGetToken(SQLiteParser.AND, 0); }
    OR() { return this.tryGetToken(SQLiteParser.OR, 0); }
    function_name() {
        return this.tryGetRuleContext(0, Function_nameContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    filter_clause() {
        return this.tryGetRuleContext(0, Filter_clauseContext);
    }
    over_clause() {
        return this.tryGetRuleContext(0, Over_clauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    CAST() { return this.tryGetToken(SQLiteParser.CAST, 0); }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    type_name() {
        return this.tryGetRuleContext(0, Type_nameContext);
    }
    COLLATE() { return this.tryGetToken(SQLiteParser.COLLATE, 0); }
    collation_name() {
        return this.tryGetRuleContext(0, Collation_nameContext);
    }
    ESCAPE() { return this.tryGetToken(SQLiteParser.ESCAPE, 0); }
    ISNULL() { return this.tryGetToken(SQLiteParser.ISNULL, 0); }
    NOTNULL() { return this.tryGetToken(SQLiteParser.NOTNULL, 0); }
    NULL() { return this.tryGetToken(SQLiteParser.NULL, 0); }
    BETWEEN() { return this.tryGetToken(SQLiteParser.BETWEEN, 0); }
    table_function_name() {
        return this.tryGetRuleContext(0, Table_function_nameContext);
    }
    select_stmt() {
        return this.tryGetRuleContext(0, Select_stmtContext);
    }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    CASE() { return this.tryGetToken(SQLiteParser.CASE, 0); }
    END() { return this.tryGetToken(SQLiteParser.END, 0); }
    WHEN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.WHEN);
        }
        else {
            return this.getToken(SQLiteParser.WHEN, i);
        }
    }
    THEN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.THEN);
        }
        else {
            return this.getToken(SQLiteParser.THEN, i);
        }
    }
    ELSE() { return this.tryGetToken(SQLiteParser.ELSE, 0); }
    raise_function() {
        return this.tryGetRuleContext(0, Raise_functionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_expr; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    }
}
exports.ExprContext = ExprContext;
class Raise_functionContext extends ParserRuleContext_1.ParserRuleContext {
    RAISE() { return this.getToken(SQLiteParser.RAISE, 0); }
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    IGNORE() { return this.tryGetToken(SQLiteParser.IGNORE, 0); }
    COMMA() { return this.tryGetToken(SQLiteParser.COMMA, 0); }
    error_message() {
        return this.tryGetRuleContext(0, Error_messageContext);
    }
    ROLLBACK() { return this.tryGetToken(SQLiteParser.ROLLBACK, 0); }
    ABORT() { return this.tryGetToken(SQLiteParser.ABORT, 0); }
    FAIL() { return this.tryGetToken(SQLiteParser.FAIL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_raise_function; }
    // @Override
    enterRule(listener) {
        if (listener.enterRaise_function) {
            listener.enterRaise_function(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRaise_function) {
            listener.exitRaise_function(this);
        }
    }
}
exports.Raise_functionContext = Raise_functionContext;
class Literal_valueContext extends ParserRuleContext_1.ParserRuleContext {
    NUMERIC_LITERAL() { return this.tryGetToken(SQLiteParser.NUMERIC_LITERAL, 0); }
    STRING_LITERAL() { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
    BLOB_LITERAL() { return this.tryGetToken(SQLiteParser.BLOB_LITERAL, 0); }
    NULL() { return this.tryGetToken(SQLiteParser.NULL, 0); }
    TRUE() { return this.tryGetToken(SQLiteParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(SQLiteParser.FALSE, 0); }
    CURRENT_TIME() { return this.tryGetToken(SQLiteParser.CURRENT_TIME, 0); }
    CURRENT_DATE() { return this.tryGetToken(SQLiteParser.CURRENT_DATE, 0); }
    CURRENT_TIMESTAMP() { return this.tryGetToken(SQLiteParser.CURRENT_TIMESTAMP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_literal_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteral_value) {
            listener.enterLiteral_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteral_value) {
            listener.exitLiteral_value(this);
        }
    }
}
exports.Literal_valueContext = Literal_valueContext;
class Value_rowContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_value_row; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue_row) {
            listener.enterValue_row(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue_row) {
            listener.exitValue_row(this);
        }
    }
}
exports.Value_rowContext = Value_rowContext;
class Values_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    VALUES() { return this.getToken(SQLiteParser.VALUES, 0); }
    value_row(i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_rowContext);
        }
        else {
            return this.getRuleContext(i, Value_rowContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_values_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterValues_clause) {
            listener.enterValues_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValues_clause) {
            listener.exitValues_clause(this);
        }
    }
}
exports.Values_clauseContext = Values_clauseContext;
class Insert_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    INTO() { return this.getToken(SQLiteParser.INTO, 0); }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    INSERT() { return this.tryGetToken(SQLiteParser.INSERT, 0); }
    REPLACE() { return this.tryGetToken(SQLiteParser.REPLACE, 0); }
    OR() { return this.tryGetToken(SQLiteParser.OR, 0); }
    DEFAULT() { return this.tryGetToken(SQLiteParser.DEFAULT, 0); }
    VALUES() { return this.tryGetToken(SQLiteParser.VALUES, 0); }
    with_clause() {
        return this.tryGetRuleContext(0, With_clauseContext);
    }
    ROLLBACK() { return this.tryGetToken(SQLiteParser.ROLLBACK, 0); }
    ABORT() { return this.tryGetToken(SQLiteParser.ABORT, 0); }
    FAIL() { return this.tryGetToken(SQLiteParser.FAIL, 0); }
    IGNORE() { return this.tryGetToken(SQLiteParser.IGNORE, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    table_alias() {
        return this.tryGetRuleContext(0, Table_aliasContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    returning_clause() {
        return this.tryGetRuleContext(0, Returning_clauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    values_clause() {
        return this.tryGetRuleContext(0, Values_clauseContext);
    }
    select_stmt() {
        return this.tryGetRuleContext(0, Select_stmtContext);
    }
    upsert_clause() {
        return this.tryGetRuleContext(0, Upsert_clauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_insert_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterInsert_stmt) {
            listener.enterInsert_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInsert_stmt) {
            listener.exitInsert_stmt(this);
        }
    }
}
exports.Insert_stmtContext = Insert_stmtContext;
class Returning_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    RETURNING() { return this.getToken(SQLiteParser.RETURNING, 0); }
    result_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        else {
            return this.getRuleContext(i, Result_columnContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_returning_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterReturning_clause) {
            listener.enterReturning_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturning_clause) {
            listener.exitReturning_clause(this);
        }
    }
}
exports.Returning_clauseContext = Returning_clauseContext;
class Upsert_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    ON() { return this.getToken(SQLiteParser.ON, 0); }
    CONFLICT() { return this.getToken(SQLiteParser.CONFLICT, 0); }
    DO() { return this.getToken(SQLiteParser.DO, 0); }
    NOTHING() { return this.tryGetToken(SQLiteParser.NOTHING, 0); }
    UPDATE() { return this.tryGetToken(SQLiteParser.UPDATE, 0); }
    SET() { return this.tryGetToken(SQLiteParser.SET, 0); }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    indexed_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        else {
            return this.getRuleContext(i, Indexed_columnContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    ASSIGN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    WHERE(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.WHERE);
        }
        else {
            return this.getToken(SQLiteParser.WHERE, i);
        }
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    column_name_list(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }
        else {
            return this.getRuleContext(i, Column_name_listContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_upsert_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpsert_clause) {
            listener.enterUpsert_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpsert_clause) {
            listener.exitUpsert_clause(this);
        }
    }
}
exports.Upsert_clauseContext = Upsert_clauseContext;
class Pragma_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    PRAGMA() { return this.getToken(SQLiteParser.PRAGMA, 0); }
    pragma_name() {
        return this.getRuleContext(0, Pragma_nameContext);
    }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    ASSIGN() { return this.tryGetToken(SQLiteParser.ASSIGN, 0); }
    pragma_value() {
        return this.tryGetRuleContext(0, Pragma_valueContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_pragma_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterPragma_stmt) {
            listener.enterPragma_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPragma_stmt) {
            listener.exitPragma_stmt(this);
        }
    }
}
exports.Pragma_stmtContext = Pragma_stmtContext;
class Pragma_valueContext extends ParserRuleContext_1.ParserRuleContext {
    signed_number() {
        return this.tryGetRuleContext(0, Signed_numberContext);
    }
    name() {
        return this.tryGetRuleContext(0, NameContext);
    }
    STRING_LITERAL() { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_pragma_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterPragma_value) {
            listener.enterPragma_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPragma_value) {
            listener.exitPragma_value(this);
        }
    }
}
exports.Pragma_valueContext = Pragma_valueContext;
class Reindex_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    REINDEX() { return this.getToken(SQLiteParser.REINDEX, 0); }
    collation_name() {
        return this.tryGetRuleContext(0, Collation_nameContext);
    }
    table_name() {
        return this.tryGetRuleContext(0, Table_nameContext);
    }
    index_name() {
        return this.tryGetRuleContext(0, Index_nameContext);
    }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_reindex_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterReindex_stmt) {
            listener.enterReindex_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReindex_stmt) {
            listener.exitReindex_stmt(this);
        }
    }
}
exports.Reindex_stmtContext = Reindex_stmtContext;
class Select_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    select_core(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }
        else {
            return this.getRuleContext(i, Select_coreContext);
        }
    }
    common_table_stmt() {
        return this.tryGetRuleContext(0, Common_table_stmtContext);
    }
    compound_operator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Compound_operatorContext);
        }
        else {
            return this.getRuleContext(i, Compound_operatorContext);
        }
    }
    order_by_stmt() {
        return this.tryGetRuleContext(0, Order_by_stmtContext);
    }
    limit_stmt() {
        return this.tryGetRuleContext(0, Limit_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_select_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterSelect_stmt) {
            listener.enterSelect_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSelect_stmt) {
            listener.exitSelect_stmt(this);
        }
    }
}
exports.Select_stmtContext = Select_stmtContext;
class Join_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    }
    join_operator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_operatorContext);
        }
        else {
            return this.getRuleContext(i, Join_operatorContext);
        }
    }
    join_constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_constraintContext);
        }
        else {
            return this.getRuleContext(i, Join_constraintContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_join_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterJoin_clause) {
            listener.enterJoin_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJoin_clause) {
            listener.exitJoin_clause(this);
        }
    }
}
exports.Join_clauseContext = Join_clauseContext;
class Select_coreContext extends ParserRuleContext_1.ParserRuleContext {
    SELECT() { return this.tryGetToken(SQLiteParser.SELECT, 0); }
    result_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        else {
            return this.getRuleContext(i, Result_columnContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    FROM() { return this.tryGetToken(SQLiteParser.FROM, 0); }
    WHERE() { return this.tryGetToken(SQLiteParser.WHERE, 0); }
    GROUP() { return this.tryGetToken(SQLiteParser.GROUP, 0); }
    BY() { return this.tryGetToken(SQLiteParser.BY, 0); }
    WINDOW() { return this.tryGetToken(SQLiteParser.WINDOW, 0); }
    window_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Window_nameContext);
        }
        else {
            return this.getRuleContext(i, Window_nameContext);
        }
    }
    AS(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.AS);
        }
        else {
            return this.getToken(SQLiteParser.AS, i);
        }
    }
    window_defn(i) {
        if (i === undefined) {
            return this.getRuleContexts(Window_defnContext);
        }
        else {
            return this.getRuleContext(i, Window_defnContext);
        }
    }
    DISTINCT() { return this.tryGetToken(SQLiteParser.DISTINCT, 0); }
    ALL() { return this.tryGetToken(SQLiteParser.ALL, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    }
    join_clause() {
        return this.tryGetRuleContext(0, Join_clauseContext);
    }
    HAVING() { return this.tryGetToken(SQLiteParser.HAVING, 0); }
    values_clause() {
        return this.tryGetRuleContext(0, Values_clauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._groupByExpr = [];
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_select_core; }
    // @Override
    enterRule(listener) {
        if (listener.enterSelect_core) {
            listener.enterSelect_core(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSelect_core) {
            listener.exitSelect_core(this);
        }
    }
}
exports.Select_coreContext = Select_coreContext;
class Factored_select_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_factored_select_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterFactored_select_stmt) {
            listener.enterFactored_select_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFactored_select_stmt) {
            listener.exitFactored_select_stmt(this);
        }
    }
}
exports.Factored_select_stmtContext = Factored_select_stmtContext;
class Simple_select_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    select_core() {
        return this.getRuleContext(0, Select_coreContext);
    }
    common_table_stmt() {
        return this.tryGetRuleContext(0, Common_table_stmtContext);
    }
    order_by_stmt() {
        return this.tryGetRuleContext(0, Order_by_stmtContext);
    }
    limit_stmt() {
        return this.tryGetRuleContext(0, Limit_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_simple_select_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimple_select_stmt) {
            listener.enterSimple_select_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimple_select_stmt) {
            listener.exitSimple_select_stmt(this);
        }
    }
}
exports.Simple_select_stmtContext = Simple_select_stmtContext;
class Compound_select_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    select_core(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }
        else {
            return this.getRuleContext(i, Select_coreContext);
        }
    }
    common_table_stmt() {
        return this.tryGetRuleContext(0, Common_table_stmtContext);
    }
    order_by_stmt() {
        return this.tryGetRuleContext(0, Order_by_stmtContext);
    }
    limit_stmt() {
        return this.tryGetRuleContext(0, Limit_stmtContext);
    }
    UNION(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.UNION);
        }
        else {
            return this.getToken(SQLiteParser.UNION, i);
        }
    }
    INTERSECT(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.INTERSECT);
        }
        else {
            return this.getToken(SQLiteParser.INTERSECT, i);
        }
    }
    EXCEPT(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.EXCEPT);
        }
        else {
            return this.getToken(SQLiteParser.EXCEPT, i);
        }
    }
    ALL(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ALL);
        }
        else {
            return this.getToken(SQLiteParser.ALL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_compound_select_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompound_select_stmt) {
            listener.enterCompound_select_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompound_select_stmt) {
            listener.exitCompound_select_stmt(this);
        }
    }
}
exports.Compound_select_stmtContext = Compound_select_stmtContext;
class Table_or_subqueryContext extends ParserRuleContext_1.ParserRuleContext {
    table_name() {
        return this.tryGetRuleContext(0, Table_nameContext);
    }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    table_alias() {
        return this.tryGetRuleContext(0, Table_aliasContext);
    }
    INDEXED() { return this.tryGetToken(SQLiteParser.INDEXED, 0); }
    BY() { return this.tryGetToken(SQLiteParser.BY, 0); }
    index_name() {
        return this.tryGetRuleContext(0, Index_nameContext);
    }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    table_function_name() {
        return this.tryGetRuleContext(0, Table_function_nameContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    }
    join_clause() {
        return this.tryGetRuleContext(0, Join_clauseContext);
    }
    select_stmt() {
        return this.tryGetRuleContext(0, Select_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_table_or_subquery; }
    // @Override
    enterRule(listener) {
        if (listener.enterTable_or_subquery) {
            listener.enterTable_or_subquery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTable_or_subquery) {
            listener.exitTable_or_subquery(this);
        }
    }
}
exports.Table_or_subqueryContext = Table_or_subqueryContext;
class Result_columnContext extends ParserRuleContext_1.ParserRuleContext {
    STAR() { return this.tryGetToken(SQLiteParser.STAR, 0); }
    table_name() {
        return this.tryGetRuleContext(0, Table_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    column_alias() {
        return this.tryGetRuleContext(0, Column_aliasContext);
    }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_result_column; }
    // @Override
    enterRule(listener) {
        if (listener.enterResult_column) {
            listener.enterResult_column(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResult_column) {
            listener.exitResult_column(this);
        }
    }
}
exports.Result_columnContext = Result_columnContext;
class Join_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    COMMA() { return this.tryGetToken(SQLiteParser.COMMA, 0); }
    JOIN() { return this.tryGetToken(SQLiteParser.JOIN, 0); }
    NATURAL() { return this.tryGetToken(SQLiteParser.NATURAL, 0); }
    INNER() { return this.tryGetToken(SQLiteParser.INNER, 0); }
    CROSS() { return this.tryGetToken(SQLiteParser.CROSS, 0); }
    LEFT() { return this.tryGetToken(SQLiteParser.LEFT, 0); }
    RIGHT() { return this.tryGetToken(SQLiteParser.RIGHT, 0); }
    FULL() { return this.tryGetToken(SQLiteParser.FULL, 0); }
    OUTER() { return this.tryGetToken(SQLiteParser.OUTER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_join_operator; }
    // @Override
    enterRule(listener) {
        if (listener.enterJoin_operator) {
            listener.enterJoin_operator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJoin_operator) {
            listener.exitJoin_operator(this);
        }
    }
}
exports.Join_operatorContext = Join_operatorContext;
class Join_constraintContext extends ParserRuleContext_1.ParserRuleContext {
    ON() { return this.tryGetToken(SQLiteParser.ON, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    USING() { return this.tryGetToken(SQLiteParser.USING, 0); }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_join_constraint; }
    // @Override
    enterRule(listener) {
        if (listener.enterJoin_constraint) {
            listener.enterJoin_constraint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJoin_constraint) {
            listener.exitJoin_constraint(this);
        }
    }
}
exports.Join_constraintContext = Join_constraintContext;
class Compound_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    UNION() { return this.tryGetToken(SQLiteParser.UNION, 0); }
    ALL() { return this.tryGetToken(SQLiteParser.ALL, 0); }
    INTERSECT() { return this.tryGetToken(SQLiteParser.INTERSECT, 0); }
    EXCEPT() { return this.tryGetToken(SQLiteParser.EXCEPT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_compound_operator; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompound_operator) {
            listener.enterCompound_operator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompound_operator) {
            listener.exitCompound_operator(this);
        }
    }
}
exports.Compound_operatorContext = Compound_operatorContext;
class Update_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    UPDATE() { return this.getToken(SQLiteParser.UPDATE, 0); }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    SET() { return this.getToken(SQLiteParser.SET, 0); }
    ASSIGN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    column_name_list(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }
        else {
            return this.getRuleContext(i, Column_name_listContext);
        }
    }
    with_clause() {
        return this.tryGetRuleContext(0, With_clauseContext);
    }
    OR() { return this.tryGetToken(SQLiteParser.OR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    FROM() { return this.tryGetToken(SQLiteParser.FROM, 0); }
    WHERE() { return this.tryGetToken(SQLiteParser.WHERE, 0); }
    returning_clause() {
        return this.tryGetRuleContext(0, Returning_clauseContext);
    }
    ROLLBACK() { return this.tryGetToken(SQLiteParser.ROLLBACK, 0); }
    ABORT() { return this.tryGetToken(SQLiteParser.ABORT, 0); }
    REPLACE() { return this.tryGetToken(SQLiteParser.REPLACE, 0); }
    FAIL() { return this.tryGetToken(SQLiteParser.FAIL, 0); }
    IGNORE() { return this.tryGetToken(SQLiteParser.IGNORE, 0); }
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        else {
            return this.getRuleContext(i, Table_or_subqueryContext);
        }
    }
    join_clause() {
        return this.tryGetRuleContext(0, Join_clauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_update_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpdate_stmt) {
            listener.enterUpdate_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpdate_stmt) {
            listener.exitUpdate_stmt(this);
        }
    }
}
exports.Update_stmtContext = Update_stmtContext;
class Column_name_listContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_column_name_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumn_name_list) {
            listener.enterColumn_name_list(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumn_name_list) {
            listener.exitColumn_name_list(this);
        }
    }
}
exports.Column_name_listContext = Column_name_listContext;
class Update_stmt_limitedContext extends ParserRuleContext_1.ParserRuleContext {
    UPDATE() { return this.getToken(SQLiteParser.UPDATE, 0); }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    SET() { return this.getToken(SQLiteParser.SET, 0); }
    ASSIGN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        else {
            return this.getRuleContext(i, Column_nameContext);
        }
    }
    column_name_list(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }
        else {
            return this.getRuleContext(i, Column_name_listContext);
        }
    }
    with_clause() {
        return this.tryGetRuleContext(0, With_clauseContext);
    }
    OR() { return this.tryGetToken(SQLiteParser.OR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    WHERE() { return this.tryGetToken(SQLiteParser.WHERE, 0); }
    returning_clause() {
        return this.tryGetRuleContext(0, Returning_clauseContext);
    }
    limit_stmt() {
        return this.tryGetRuleContext(0, Limit_stmtContext);
    }
    ROLLBACK() { return this.tryGetToken(SQLiteParser.ROLLBACK, 0); }
    ABORT() { return this.tryGetToken(SQLiteParser.ABORT, 0); }
    REPLACE() { return this.tryGetToken(SQLiteParser.REPLACE, 0); }
    FAIL() { return this.tryGetToken(SQLiteParser.FAIL, 0); }
    IGNORE() { return this.tryGetToken(SQLiteParser.IGNORE, 0); }
    order_by_stmt() {
        return this.tryGetRuleContext(0, Order_by_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_update_stmt_limited; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpdate_stmt_limited) {
            listener.enterUpdate_stmt_limited(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpdate_stmt_limited) {
            listener.exitUpdate_stmt_limited(this);
        }
    }
}
exports.Update_stmt_limitedContext = Update_stmt_limitedContext;
class Qualified_table_nameContext extends ParserRuleContext_1.ParserRuleContext {
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    DOT() { return this.tryGetToken(SQLiteParser.DOT, 0); }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    alias() {
        return this.tryGetRuleContext(0, AliasContext);
    }
    INDEXED() { return this.tryGetToken(SQLiteParser.INDEXED, 0); }
    BY() { return this.tryGetToken(SQLiteParser.BY, 0); }
    index_name() {
        return this.tryGetRuleContext(0, Index_nameContext);
    }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_qualified_table_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualified_table_name) {
            listener.enterQualified_table_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualified_table_name) {
            listener.exitQualified_table_name(this);
        }
    }
}
exports.Qualified_table_nameContext = Qualified_table_nameContext;
class Vacuum_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    VACUUM() { return this.getToken(SQLiteParser.VACUUM, 0); }
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    INTO() { return this.tryGetToken(SQLiteParser.INTO, 0); }
    filename() {
        return this.tryGetRuleContext(0, FilenameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_vacuum_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterVacuum_stmt) {
            listener.enterVacuum_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVacuum_stmt) {
            listener.exitVacuum_stmt(this);
        }
    }
}
exports.Vacuum_stmtContext = Vacuum_stmtContext;
class Filter_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    FILTER() { return this.getToken(SQLiteParser.FILTER, 0); }
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    WHERE() { return this.getToken(SQLiteParser.WHERE, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_filter_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterFilter_clause) {
            listener.enterFilter_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFilter_clause) {
            listener.exitFilter_clause(this);
        }
    }
}
exports.Filter_clauseContext = Filter_clauseContext;
class Window_defnContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    ORDER() { return this.tryGetToken(SQLiteParser.ORDER, 0); }
    BY(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.BY);
        }
        else {
            return this.getToken(SQLiteParser.BY, i);
        }
    }
    ordering_term(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    }
    base_window_name() {
        return this.tryGetRuleContext(0, Base_window_nameContext);
    }
    PARTITION() { return this.tryGetToken(SQLiteParser.PARTITION, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    frame_spec() {
        return this.tryGetRuleContext(0, Frame_specContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_window_defn; }
    // @Override
    enterRule(listener) {
        if (listener.enterWindow_defn) {
            listener.enterWindow_defn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWindow_defn) {
            listener.exitWindow_defn(this);
        }
    }
}
exports.Window_defnContext = Window_defnContext;
class Over_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    OVER() { return this.getToken(SQLiteParser.OVER, 0); }
    window_name() {
        return this.tryGetRuleContext(0, Window_nameContext);
    }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    base_window_name() {
        return this.tryGetRuleContext(0, Base_window_nameContext);
    }
    PARTITION() { return this.tryGetToken(SQLiteParser.PARTITION, 0); }
    BY(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.BY);
        }
        else {
            return this.getToken(SQLiteParser.BY, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    ORDER() { return this.tryGetToken(SQLiteParser.ORDER, 0); }
    ordering_term(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    }
    frame_spec() {
        return this.tryGetRuleContext(0, Frame_specContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_over_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterOver_clause) {
            listener.enterOver_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOver_clause) {
            listener.exitOver_clause(this);
        }
    }
}
exports.Over_clauseContext = Over_clauseContext;
class Frame_specContext extends ParserRuleContext_1.ParserRuleContext {
    frame_clause() {
        return this.getRuleContext(0, Frame_clauseContext);
    }
    EXCLUDE() { return this.tryGetToken(SQLiteParser.EXCLUDE, 0); }
    NO() { return this.tryGetToken(SQLiteParser.NO, 0); }
    OTHERS() { return this.tryGetToken(SQLiteParser.OTHERS, 0); }
    CURRENT() { return this.tryGetToken(SQLiteParser.CURRENT, 0); }
    ROW() { return this.tryGetToken(SQLiteParser.ROW, 0); }
    GROUP() { return this.tryGetToken(SQLiteParser.GROUP, 0); }
    TIES() { return this.tryGetToken(SQLiteParser.TIES, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_frame_spec; }
    // @Override
    enterRule(listener) {
        if (listener.enterFrame_spec) {
            listener.enterFrame_spec(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFrame_spec) {
            listener.exitFrame_spec(this);
        }
    }
}
exports.Frame_specContext = Frame_specContext;
class Frame_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    RANGE() { return this.tryGetToken(SQLiteParser.RANGE, 0); }
    ROWS() { return this.tryGetToken(SQLiteParser.ROWS, 0); }
    GROUPS() { return this.tryGetToken(SQLiteParser.GROUPS, 0); }
    frame_single() {
        return this.tryGetRuleContext(0, Frame_singleContext);
    }
    BETWEEN() { return this.tryGetToken(SQLiteParser.BETWEEN, 0); }
    frame_left() {
        return this.tryGetRuleContext(0, Frame_leftContext);
    }
    AND() { return this.tryGetToken(SQLiteParser.AND, 0); }
    frame_right() {
        return this.tryGetRuleContext(0, Frame_rightContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_frame_clause; }
    // @Override
    enterRule(listener) {
        if (listener.enterFrame_clause) {
            listener.enterFrame_clause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFrame_clause) {
            listener.exitFrame_clause(this);
        }
    }
}
exports.Frame_clauseContext = Frame_clauseContext;
class Simple_function_invocationContext extends ParserRuleContext_1.ParserRuleContext {
    simple_func() {
        return this.getRuleContext(0, Simple_funcContext);
    }
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    STAR() { return this.tryGetToken(SQLiteParser.STAR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_simple_function_invocation; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimple_function_invocation) {
            listener.enterSimple_function_invocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimple_function_invocation) {
            listener.exitSimple_function_invocation(this);
        }
    }
}
exports.Simple_function_invocationContext = Simple_function_invocationContext;
class Aggregate_function_invocationContext extends ParserRuleContext_1.ParserRuleContext {
    aggregate_func() {
        return this.getRuleContext(0, Aggregate_funcContext);
    }
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    STAR() { return this.tryGetToken(SQLiteParser.STAR, 0); }
    filter_clause() {
        return this.tryGetRuleContext(0, Filter_clauseContext);
    }
    DISTINCT() { return this.tryGetToken(SQLiteParser.DISTINCT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_aggregate_function_invocation; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_function_invocation) {
            listener.enterAggregate_function_invocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_function_invocation) {
            listener.exitAggregate_function_invocation(this);
        }
    }
}
exports.Aggregate_function_invocationContext = Aggregate_function_invocationContext;
class Window_function_invocationContext extends ParserRuleContext_1.ParserRuleContext {
    window_function() {
        return this.getRuleContext(0, Window_functionContext);
    }
    OPEN_PAR() { return this.getToken(SQLiteParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(SQLiteParser.CLOSE_PAR, 0); }
    OVER() { return this.getToken(SQLiteParser.OVER, 0); }
    window_defn() {
        return this.tryGetRuleContext(0, Window_defnContext);
    }
    window_name() {
        return this.tryGetRuleContext(0, Window_nameContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    STAR() { return this.tryGetToken(SQLiteParser.STAR, 0); }
    filter_clause() {
        return this.tryGetRuleContext(0, Filter_clauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_window_function_invocation; }
    // @Override
    enterRule(listener) {
        if (listener.enterWindow_function_invocation) {
            listener.enterWindow_function_invocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWindow_function_invocation) {
            listener.exitWindow_function_invocation(this);
        }
    }
}
exports.Window_function_invocationContext = Window_function_invocationContext;
class Common_table_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    WITH() { return this.getToken(SQLiteParser.WITH, 0); }
    common_table_expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }
        else {
            return this.getRuleContext(i, Common_table_expressionContext);
        }
    }
    RECURSIVE() { return this.tryGetToken(SQLiteParser.RECURSIVE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_common_table_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterCommon_table_stmt) {
            listener.enterCommon_table_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCommon_table_stmt) {
            listener.exitCommon_table_stmt(this);
        }
    }
}
exports.Common_table_stmtContext = Common_table_stmtContext;
class Order_by_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    ORDER() { return this.getToken(SQLiteParser.ORDER, 0); }
    BY() { return this.getToken(SQLiteParser.BY, 0); }
    ordering_term(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        else {
            return this.getRuleContext(i, Ordering_termContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_order_by_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterOrder_by_stmt) {
            listener.enterOrder_by_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrder_by_stmt) {
            listener.exitOrder_by_stmt(this);
        }
    }
}
exports.Order_by_stmtContext = Order_by_stmtContext;
class Limit_stmtContext extends ParserRuleContext_1.ParserRuleContext {
    LIMIT() { return this.getToken(SQLiteParser.LIMIT, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    OFFSET() { return this.tryGetToken(SQLiteParser.OFFSET, 0); }
    COMMA() { return this.tryGetToken(SQLiteParser.COMMA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_limit_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterLimit_stmt) {
            listener.enterLimit_stmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLimit_stmt) {
            listener.exitLimit_stmt(this);
        }
    }
}
exports.Limit_stmtContext = Limit_stmtContext;
class Ordering_termContext extends ParserRuleContext_1.ParserRuleContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    COLLATE() { return this.tryGetToken(SQLiteParser.COLLATE, 0); }
    collation_name() {
        return this.tryGetRuleContext(0, Collation_nameContext);
    }
    asc_desc() {
        return this.tryGetRuleContext(0, Asc_descContext);
    }
    NULLS() { return this.tryGetToken(SQLiteParser.NULLS, 0); }
    FIRST() { return this.tryGetToken(SQLiteParser.FIRST, 0); }
    LAST() { return this.tryGetToken(SQLiteParser.LAST, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_ordering_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterOrdering_term) {
            listener.enterOrdering_term(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrdering_term) {
            listener.exitOrdering_term(this);
        }
    }
}
exports.Ordering_termContext = Ordering_termContext;
class Asc_descContext extends ParserRuleContext_1.ParserRuleContext {
    ASC() { return this.tryGetToken(SQLiteParser.ASC, 0); }
    DESC() { return this.tryGetToken(SQLiteParser.DESC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_asc_desc; }
    // @Override
    enterRule(listener) {
        if (listener.enterAsc_desc) {
            listener.enterAsc_desc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAsc_desc) {
            listener.exitAsc_desc(this);
        }
    }
}
exports.Asc_descContext = Asc_descContext;
class Frame_leftContext extends ParserRuleContext_1.ParserRuleContext {
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    PRECEDING() { return this.tryGetToken(SQLiteParser.PRECEDING, 0); }
    FOLLOWING() { return this.tryGetToken(SQLiteParser.FOLLOWING, 0); }
    CURRENT() { return this.tryGetToken(SQLiteParser.CURRENT, 0); }
    ROW() { return this.tryGetToken(SQLiteParser.ROW, 0); }
    UNBOUNDED() { return this.tryGetToken(SQLiteParser.UNBOUNDED, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_frame_left; }
    // @Override
    enterRule(listener) {
        if (listener.enterFrame_left) {
            listener.enterFrame_left(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFrame_left) {
            listener.exitFrame_left(this);
        }
    }
}
exports.Frame_leftContext = Frame_leftContext;
class Frame_rightContext extends ParserRuleContext_1.ParserRuleContext {
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    PRECEDING() { return this.tryGetToken(SQLiteParser.PRECEDING, 0); }
    FOLLOWING() { return this.tryGetToken(SQLiteParser.FOLLOWING, 0); }
    CURRENT() { return this.tryGetToken(SQLiteParser.CURRENT, 0); }
    ROW() { return this.tryGetToken(SQLiteParser.ROW, 0); }
    UNBOUNDED() { return this.tryGetToken(SQLiteParser.UNBOUNDED, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_frame_right; }
    // @Override
    enterRule(listener) {
        if (listener.enterFrame_right) {
            listener.enterFrame_right(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFrame_right) {
            listener.exitFrame_right(this);
        }
    }
}
exports.Frame_rightContext = Frame_rightContext;
class Frame_singleContext extends ParserRuleContext_1.ParserRuleContext {
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    PRECEDING() { return this.tryGetToken(SQLiteParser.PRECEDING, 0); }
    UNBOUNDED() { return this.tryGetToken(SQLiteParser.UNBOUNDED, 0); }
    CURRENT() { return this.tryGetToken(SQLiteParser.CURRENT, 0); }
    ROW() { return this.tryGetToken(SQLiteParser.ROW, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_frame_single; }
    // @Override
    enterRule(listener) {
        if (listener.enterFrame_single) {
            listener.enterFrame_single(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFrame_single) {
            listener.exitFrame_single(this);
        }
    }
}
exports.Frame_singleContext = Frame_singleContext;
class Window_functionContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    CLOSE_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    }
    OVER() { return this.getToken(SQLiteParser.OVER, 0); }
    order_by_expr_asc_desc() {
        return this.tryGetRuleContext(0, Order_by_expr_asc_descContext);
    }
    FIRST_VALUE() { return this.tryGetToken(SQLiteParser.FIRST_VALUE, 0); }
    LAST_VALUE() { return this.tryGetToken(SQLiteParser.LAST_VALUE, 0); }
    partition_by() {
        return this.tryGetRuleContext(0, Partition_byContext);
    }
    frame_clause() {
        return this.tryGetRuleContext(0, Frame_clauseContext);
    }
    CUME_DIST() { return this.tryGetToken(SQLiteParser.CUME_DIST, 0); }
    PERCENT_RANK() { return this.tryGetToken(SQLiteParser.PERCENT_RANK, 0); }
    order_by_expr() {
        return this.tryGetRuleContext(0, Order_by_exprContext);
    }
    DENSE_RANK() { return this.tryGetToken(SQLiteParser.DENSE_RANK, 0); }
    RANK() { return this.tryGetToken(SQLiteParser.RANK, 0); }
    ROW_NUMBER() { return this.tryGetToken(SQLiteParser.ROW_NUMBER, 0); }
    LAG() { return this.tryGetToken(SQLiteParser.LAG, 0); }
    LEAD() { return this.tryGetToken(SQLiteParser.LEAD, 0); }
    offset() {
        return this.tryGetRuleContext(0, OffsetContext);
    }
    default_value() {
        return this.tryGetRuleContext(0, Default_valueContext);
    }
    NTH_VALUE() { return this.tryGetToken(SQLiteParser.NTH_VALUE, 0); }
    COMMA() { return this.tryGetToken(SQLiteParser.COMMA, 0); }
    signed_number() {
        return this.tryGetRuleContext(0, Signed_numberContext);
    }
    NTILE() { return this.tryGetToken(SQLiteParser.NTILE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_window_function; }
    // @Override
    enterRule(listener) {
        if (listener.enterWindow_function) {
            listener.enterWindow_function(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWindow_function) {
            listener.exitWindow_function(this);
        }
    }
}
exports.Window_functionContext = Window_functionContext;
class OffsetContext extends ParserRuleContext_1.ParserRuleContext {
    COMMA() { return this.getToken(SQLiteParser.COMMA, 0); }
    signed_number() {
        return this.getRuleContext(0, Signed_numberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_offset; }
    // @Override
    enterRule(listener) {
        if (listener.enterOffset) {
            listener.enterOffset(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOffset) {
            listener.exitOffset(this);
        }
    }
}
exports.OffsetContext = OffsetContext;
class Default_valueContext extends ParserRuleContext_1.ParserRuleContext {
    COMMA() { return this.getToken(SQLiteParser.COMMA, 0); }
    signed_number() {
        return this.getRuleContext(0, Signed_numberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_default_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterDefault_value) {
            listener.enterDefault_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefault_value) {
            listener.exitDefault_value(this);
        }
    }
}
exports.Default_valueContext = Default_valueContext;
class Partition_byContext extends ParserRuleContext_1.ParserRuleContext {
    PARTITION() { return this.getToken(SQLiteParser.PARTITION, 0); }
    BY() { return this.getToken(SQLiteParser.BY, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_partition_by; }
    // @Override
    enterRule(listener) {
        if (listener.enterPartition_by) {
            listener.enterPartition_by(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPartition_by) {
            listener.exitPartition_by(this);
        }
    }
}
exports.Partition_byContext = Partition_byContext;
class Order_by_exprContext extends ParserRuleContext_1.ParserRuleContext {
    ORDER() { return this.getToken(SQLiteParser.ORDER, 0); }
    BY() { return this.getToken(SQLiteParser.BY, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_order_by_expr; }
    // @Override
    enterRule(listener) {
        if (listener.enterOrder_by_expr) {
            listener.enterOrder_by_expr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrder_by_expr) {
            listener.exitOrder_by_expr(this);
        }
    }
}
exports.Order_by_exprContext = Order_by_exprContext;
class Order_by_expr_asc_descContext extends ParserRuleContext_1.ParserRuleContext {
    ORDER() { return this.getToken(SQLiteParser.ORDER, 0); }
    BY() { return this.getToken(SQLiteParser.BY, 0); }
    expr_asc_desc() {
        return this.getRuleContext(0, Expr_asc_descContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_order_by_expr_asc_desc; }
    // @Override
    enterRule(listener) {
        if (listener.enterOrder_by_expr_asc_desc) {
            listener.enterOrder_by_expr_asc_desc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrder_by_expr_asc_desc) {
            listener.exitOrder_by_expr_asc_desc(this);
        }
    }
}
exports.Order_by_expr_asc_descContext = Order_by_expr_asc_descContext;
class Expr_asc_descContext extends ParserRuleContext_1.ParserRuleContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    asc_desc(i) {
        if (i === undefined) {
            return this.getRuleContexts(Asc_descContext);
        }
        else {
            return this.getRuleContext(i, Asc_descContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_expr_asc_desc; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpr_asc_desc) {
            listener.enterExpr_asc_desc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpr_asc_desc) {
            listener.exitExpr_asc_desc(this);
        }
    }
}
exports.Expr_asc_descContext = Expr_asc_descContext;
class Initial_selectContext extends ParserRuleContext_1.ParserRuleContext {
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_initial_select; }
    // @Override
    enterRule(listener) {
        if (listener.enterInitial_select) {
            listener.enterInitial_select(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInitial_select) {
            listener.exitInitial_select(this);
        }
    }
}
exports.Initial_selectContext = Initial_selectContext;
class Recursive_selectContext extends ParserRuleContext_1.ParserRuleContext {
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_recursive_select; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecursive_select) {
            listener.enterRecursive_select(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecursive_select) {
            listener.exitRecursive_select(this);
        }
    }
}
exports.Recursive_selectContext = Recursive_selectContext;
class Unary_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    MINUS() { return this.tryGetToken(SQLiteParser.MINUS, 0); }
    PLUS() { return this.tryGetToken(SQLiteParser.PLUS, 0); }
    TILDE() { return this.tryGetToken(SQLiteParser.TILDE, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_unary_operator; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnary_operator) {
            listener.enterUnary_operator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnary_operator) {
            listener.exitUnary_operator(this);
        }
    }
}
exports.Unary_operatorContext = Unary_operatorContext;
class Error_messageContext extends ParserRuleContext_1.ParserRuleContext {
    STRING_LITERAL() { return this.getToken(SQLiteParser.STRING_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_error_message; }
    // @Override
    enterRule(listener) {
        if (listener.enterError_message) {
            listener.enterError_message(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitError_message) {
            listener.exitError_message(this);
        }
    }
}
exports.Error_messageContext = Error_messageContext;
class Module_argumentContext extends ParserRuleContext_1.ParserRuleContext {
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    column_def() {
        return this.tryGetRuleContext(0, Column_defContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_module_argument; }
    // @Override
    enterRule(listener) {
        if (listener.enterModule_argument) {
            listener.enterModule_argument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModule_argument) {
            listener.exitModule_argument(this);
        }
    }
}
exports.Module_argumentContext = Module_argumentContext;
class Column_aliasContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); }
    STRING_LITERAL() { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_column_alias; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumn_alias) {
            listener.enterColumn_alias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumn_alias) {
            listener.exitColumn_alias(this);
        }
    }
}
exports.Column_aliasContext = Column_aliasContext;
class KeywordContext extends ParserRuleContext_1.ParserRuleContext {
    ABORT() { return this.tryGetToken(SQLiteParser.ABORT, 0); }
    ACTION() { return this.tryGetToken(SQLiteParser.ACTION, 0); }
    ADD() { return this.tryGetToken(SQLiteParser.ADD, 0); }
    AFTER() { return this.tryGetToken(SQLiteParser.AFTER, 0); }
    ALL() { return this.tryGetToken(SQLiteParser.ALL, 0); }
    ALTER() { return this.tryGetToken(SQLiteParser.ALTER, 0); }
    ANALYZE() { return this.tryGetToken(SQLiteParser.ANALYZE, 0); }
    AND() { return this.tryGetToken(SQLiteParser.AND, 0); }
    AS() { return this.tryGetToken(SQLiteParser.AS, 0); }
    ASC() { return this.tryGetToken(SQLiteParser.ASC, 0); }
    ATTACH() { return this.tryGetToken(SQLiteParser.ATTACH, 0); }
    AUTOINCREMENT() { return this.tryGetToken(SQLiteParser.AUTOINCREMENT, 0); }
    BEFORE() { return this.tryGetToken(SQLiteParser.BEFORE, 0); }
    BEGIN() { return this.tryGetToken(SQLiteParser.BEGIN, 0); }
    BETWEEN() { return this.tryGetToken(SQLiteParser.BETWEEN, 0); }
    BY() { return this.tryGetToken(SQLiteParser.BY, 0); }
    CASCADE() { return this.tryGetToken(SQLiteParser.CASCADE, 0); }
    CASE() { return this.tryGetToken(SQLiteParser.CASE, 0); }
    CAST() { return this.tryGetToken(SQLiteParser.CAST, 0); }
    CHECK() { return this.tryGetToken(SQLiteParser.CHECK, 0); }
    COLLATE() { return this.tryGetToken(SQLiteParser.COLLATE, 0); }
    COLUMN() { return this.tryGetToken(SQLiteParser.COLUMN, 0); }
    COMMIT() { return this.tryGetToken(SQLiteParser.COMMIT, 0); }
    CONFLICT() { return this.tryGetToken(SQLiteParser.CONFLICT, 0); }
    CONSTRAINT() { return this.tryGetToken(SQLiteParser.CONSTRAINT, 0); }
    CREATE() { return this.tryGetToken(SQLiteParser.CREATE, 0); }
    CROSS() { return this.tryGetToken(SQLiteParser.CROSS, 0); }
    CURRENT_DATE() { return this.tryGetToken(SQLiteParser.CURRENT_DATE, 0); }
    CURRENT_TIME() { return this.tryGetToken(SQLiteParser.CURRENT_TIME, 0); }
    CURRENT_TIMESTAMP() { return this.tryGetToken(SQLiteParser.CURRENT_TIMESTAMP, 0); }
    DATABASE() { return this.tryGetToken(SQLiteParser.DATABASE, 0); }
    DEFAULT() { return this.tryGetToken(SQLiteParser.DEFAULT, 0); }
    DEFERRABLE() { return this.tryGetToken(SQLiteParser.DEFERRABLE, 0); }
    DEFERRED() { return this.tryGetToken(SQLiteParser.DEFERRED, 0); }
    DELETE() { return this.tryGetToken(SQLiteParser.DELETE, 0); }
    DESC() { return this.tryGetToken(SQLiteParser.DESC, 0); }
    DETACH() { return this.tryGetToken(SQLiteParser.DETACH, 0); }
    DISTINCT() { return this.tryGetToken(SQLiteParser.DISTINCT, 0); }
    DROP() { return this.tryGetToken(SQLiteParser.DROP, 0); }
    EACH() { return this.tryGetToken(SQLiteParser.EACH, 0); }
    ELSE() { return this.tryGetToken(SQLiteParser.ELSE, 0); }
    END() { return this.tryGetToken(SQLiteParser.END, 0); }
    ESCAPE() { return this.tryGetToken(SQLiteParser.ESCAPE, 0); }
    EXCEPT() { return this.tryGetToken(SQLiteParser.EXCEPT, 0); }
    EXCLUSIVE() { return this.tryGetToken(SQLiteParser.EXCLUSIVE, 0); }
    EXISTS() { return this.tryGetToken(SQLiteParser.EXISTS, 0); }
    EXPLAIN() { return this.tryGetToken(SQLiteParser.EXPLAIN, 0); }
    FAIL() { return this.tryGetToken(SQLiteParser.FAIL, 0); }
    FOR() { return this.tryGetToken(SQLiteParser.FOR, 0); }
    FOREIGN() { return this.tryGetToken(SQLiteParser.FOREIGN, 0); }
    FROM() { return this.tryGetToken(SQLiteParser.FROM, 0); }
    FULL() { return this.tryGetToken(SQLiteParser.FULL, 0); }
    GLOB() { return this.tryGetToken(SQLiteParser.GLOB, 0); }
    GROUP() { return this.tryGetToken(SQLiteParser.GROUP, 0); }
    HAVING() { return this.tryGetToken(SQLiteParser.HAVING, 0); }
    IF() { return this.tryGetToken(SQLiteParser.IF, 0); }
    IGNORE() { return this.tryGetToken(SQLiteParser.IGNORE, 0); }
    IMMEDIATE() { return this.tryGetToken(SQLiteParser.IMMEDIATE, 0); }
    IN() { return this.tryGetToken(SQLiteParser.IN, 0); }
    INDEX() { return this.tryGetToken(SQLiteParser.INDEX, 0); }
    INDEXED() { return this.tryGetToken(SQLiteParser.INDEXED, 0); }
    INITIALLY() { return this.tryGetToken(SQLiteParser.INITIALLY, 0); }
    INNER() { return this.tryGetToken(SQLiteParser.INNER, 0); }
    INSERT() { return this.tryGetToken(SQLiteParser.INSERT, 0); }
    INSTEAD() { return this.tryGetToken(SQLiteParser.INSTEAD, 0); }
    INTERSECT() { return this.tryGetToken(SQLiteParser.INTERSECT, 0); }
    INTO() { return this.tryGetToken(SQLiteParser.INTO, 0); }
    IS() { return this.tryGetToken(SQLiteParser.IS, 0); }
    ISNULL() { return this.tryGetToken(SQLiteParser.ISNULL, 0); }
    JOIN() { return this.tryGetToken(SQLiteParser.JOIN, 0); }
    KEY() { return this.tryGetToken(SQLiteParser.KEY, 0); }
    LEFT() { return this.tryGetToken(SQLiteParser.LEFT, 0); }
    LIKE() { return this.tryGetToken(SQLiteParser.LIKE, 0); }
    LIMIT() { return this.tryGetToken(SQLiteParser.LIMIT, 0); }
    MATCH() { return this.tryGetToken(SQLiteParser.MATCH, 0); }
    NATURAL() { return this.tryGetToken(SQLiteParser.NATURAL, 0); }
    NO() { return this.tryGetToken(SQLiteParser.NO, 0); }
    NOT() { return this.tryGetToken(SQLiteParser.NOT, 0); }
    NOTNULL() { return this.tryGetToken(SQLiteParser.NOTNULL, 0); }
    NULL() { return this.tryGetToken(SQLiteParser.NULL, 0); }
    OF() { return this.tryGetToken(SQLiteParser.OF, 0); }
    OFFSET() { return this.tryGetToken(SQLiteParser.OFFSET, 0); }
    ON() { return this.tryGetToken(SQLiteParser.ON, 0); }
    OR() { return this.tryGetToken(SQLiteParser.OR, 0); }
    ORDER() { return this.tryGetToken(SQLiteParser.ORDER, 0); }
    OUTER() { return this.tryGetToken(SQLiteParser.OUTER, 0); }
    PLAN() { return this.tryGetToken(SQLiteParser.PLAN, 0); }
    PRAGMA() { return this.tryGetToken(SQLiteParser.PRAGMA, 0); }
    PRIMARY() { return this.tryGetToken(SQLiteParser.PRIMARY, 0); }
    QUERY() { return this.tryGetToken(SQLiteParser.QUERY, 0); }
    RAISE() { return this.tryGetToken(SQLiteParser.RAISE, 0); }
    RECURSIVE() { return this.tryGetToken(SQLiteParser.RECURSIVE, 0); }
    REFERENCES() { return this.tryGetToken(SQLiteParser.REFERENCES, 0); }
    REGEXP() { return this.tryGetToken(SQLiteParser.REGEXP, 0); }
    REINDEX() { return this.tryGetToken(SQLiteParser.REINDEX, 0); }
    RELEASE() { return this.tryGetToken(SQLiteParser.RELEASE, 0); }
    RENAME() { return this.tryGetToken(SQLiteParser.RENAME, 0); }
    REPLACE() { return this.tryGetToken(SQLiteParser.REPLACE, 0); }
    RESTRICT() { return this.tryGetToken(SQLiteParser.RESTRICT, 0); }
    RETURNING() { return this.tryGetToken(SQLiteParser.RETURNING, 0); }
    RIGHT() { return this.tryGetToken(SQLiteParser.RIGHT, 0); }
    ROLLBACK() { return this.tryGetToken(SQLiteParser.ROLLBACK, 0); }
    ROW() { return this.tryGetToken(SQLiteParser.ROW, 0); }
    ROWS() { return this.tryGetToken(SQLiteParser.ROWS, 0); }
    SAVEPOINT() { return this.tryGetToken(SQLiteParser.SAVEPOINT, 0); }
    SELECT() { return this.tryGetToken(SQLiteParser.SELECT, 0); }
    SET() { return this.tryGetToken(SQLiteParser.SET, 0); }
    TABLE() { return this.tryGetToken(SQLiteParser.TABLE, 0); }
    TEMP() { return this.tryGetToken(SQLiteParser.TEMP, 0); }
    TEMPORARY() { return this.tryGetToken(SQLiteParser.TEMPORARY, 0); }
    THEN() { return this.tryGetToken(SQLiteParser.THEN, 0); }
    TO() { return this.tryGetToken(SQLiteParser.TO, 0); }
    TRANSACTION() { return this.tryGetToken(SQLiteParser.TRANSACTION, 0); }
    TRIGGER() { return this.tryGetToken(SQLiteParser.TRIGGER, 0); }
    UNION() { return this.tryGetToken(SQLiteParser.UNION, 0); }
    UNIQUE() { return this.tryGetToken(SQLiteParser.UNIQUE, 0); }
    UPDATE() { return this.tryGetToken(SQLiteParser.UPDATE, 0); }
    USING() { return this.tryGetToken(SQLiteParser.USING, 0); }
    VACUUM() { return this.tryGetToken(SQLiteParser.VACUUM, 0); }
    VALUES() { return this.tryGetToken(SQLiteParser.VALUES, 0); }
    VIEW() { return this.tryGetToken(SQLiteParser.VIEW, 0); }
    VIRTUAL() { return this.tryGetToken(SQLiteParser.VIRTUAL, 0); }
    WHEN() { return this.tryGetToken(SQLiteParser.WHEN, 0); }
    WHERE() { return this.tryGetToken(SQLiteParser.WHERE, 0); }
    WITH() { return this.tryGetToken(SQLiteParser.WITH, 0); }
    WITHOUT() { return this.tryGetToken(SQLiteParser.WITHOUT, 0); }
    FIRST_VALUE() { return this.tryGetToken(SQLiteParser.FIRST_VALUE, 0); }
    OVER() { return this.tryGetToken(SQLiteParser.OVER, 0); }
    PARTITION() { return this.tryGetToken(SQLiteParser.PARTITION, 0); }
    RANGE() { return this.tryGetToken(SQLiteParser.RANGE, 0); }
    PRECEDING() { return this.tryGetToken(SQLiteParser.PRECEDING, 0); }
    UNBOUNDED() { return this.tryGetToken(SQLiteParser.UNBOUNDED, 0); }
    CURRENT() { return this.tryGetToken(SQLiteParser.CURRENT, 0); }
    FOLLOWING() { return this.tryGetToken(SQLiteParser.FOLLOWING, 0); }
    CUME_DIST() { return this.tryGetToken(SQLiteParser.CUME_DIST, 0); }
    DENSE_RANK() { return this.tryGetToken(SQLiteParser.DENSE_RANK, 0); }
    LAG() { return this.tryGetToken(SQLiteParser.LAG, 0); }
    LAST_VALUE() { return this.tryGetToken(SQLiteParser.LAST_VALUE, 0); }
    LEAD() { return this.tryGetToken(SQLiteParser.LEAD, 0); }
    NTH_VALUE() { return this.tryGetToken(SQLiteParser.NTH_VALUE, 0); }
    NTILE() { return this.tryGetToken(SQLiteParser.NTILE, 0); }
    PERCENT_RANK() { return this.tryGetToken(SQLiteParser.PERCENT_RANK, 0); }
    RANK() { return this.tryGetToken(SQLiteParser.RANK, 0); }
    ROW_NUMBER() { return this.tryGetToken(SQLiteParser.ROW_NUMBER, 0); }
    GENERATED() { return this.tryGetToken(SQLiteParser.GENERATED, 0); }
    ALWAYS() { return this.tryGetToken(SQLiteParser.ALWAYS, 0); }
    STORED() { return this.tryGetToken(SQLiteParser.STORED, 0); }
    TRUE() { return this.tryGetToken(SQLiteParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(SQLiteParser.FALSE, 0); }
    WINDOW() { return this.tryGetToken(SQLiteParser.WINDOW, 0); }
    NULLS() { return this.tryGetToken(SQLiteParser.NULLS, 0); }
    FIRST() { return this.tryGetToken(SQLiteParser.FIRST, 0); }
    LAST() { return this.tryGetToken(SQLiteParser.LAST, 0); }
    FILTER() { return this.tryGetToken(SQLiteParser.FILTER, 0); }
    GROUPS() { return this.tryGetToken(SQLiteParser.GROUPS, 0); }
    EXCLUDE() { return this.tryGetToken(SQLiteParser.EXCLUDE, 0); }
    TIES() { return this.tryGetToken(SQLiteParser.TIES, 0); }
    OTHERS() { return this.tryGetToken(SQLiteParser.OTHERS, 0); }
    DO() { return this.tryGetToken(SQLiteParser.DO, 0); }
    NOTHING() { return this.tryGetToken(SQLiteParser.NOTHING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_keyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    }
}
exports.KeywordContext = KeywordContext;
class NameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    }
}
exports.NameContext = NameContext;
class Function_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_function_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction_name) {
            listener.enterFunction_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction_name) {
            listener.exitFunction_name(this);
        }
    }
}
exports.Function_nameContext = Function_nameContext;
class Schema_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_schema_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema_name) {
            listener.enterSchema_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema_name) {
            listener.exitSchema_name(this);
        }
    }
}
exports.Schema_nameContext = Schema_nameContext;
class Table_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_table_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterTable_name) {
            listener.enterTable_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTable_name) {
            listener.exitTable_name(this);
        }
    }
}
exports.Table_nameContext = Table_nameContext;
class Table_or_index_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_table_or_index_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterTable_or_index_name) {
            listener.enterTable_or_index_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTable_or_index_name) {
            listener.exitTable_or_index_name(this);
        }
    }
}
exports.Table_or_index_nameContext = Table_or_index_nameContext;
class Column_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_column_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumn_name) {
            listener.enterColumn_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumn_name) {
            listener.exitColumn_name(this);
        }
    }
}
exports.Column_nameContext = Column_nameContext;
class Collation_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_collation_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterCollation_name) {
            listener.enterCollation_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCollation_name) {
            listener.exitCollation_name(this);
        }
    }
}
exports.Collation_nameContext = Collation_nameContext;
class Foreign_tableContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_foreign_table; }
    // @Override
    enterRule(listener) {
        if (listener.enterForeign_table) {
            listener.enterForeign_table(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForeign_table) {
            listener.exitForeign_table(this);
        }
    }
}
exports.Foreign_tableContext = Foreign_tableContext;
class Index_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_index_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterIndex_name) {
            listener.enterIndex_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndex_name) {
            listener.exitIndex_name(this);
        }
    }
}
exports.Index_nameContext = Index_nameContext;
class Trigger_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_trigger_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterTrigger_name) {
            listener.enterTrigger_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrigger_name) {
            listener.exitTrigger_name(this);
        }
    }
}
exports.Trigger_nameContext = Trigger_nameContext;
class View_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_view_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterView_name) {
            listener.enterView_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitView_name) {
            listener.exitView_name(this);
        }
    }
}
exports.View_nameContext = View_nameContext;
class Module_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_module_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterModule_name) {
            listener.enterModule_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModule_name) {
            listener.exitModule_name(this);
        }
    }
}
exports.Module_nameContext = Module_nameContext;
class Pragma_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_pragma_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterPragma_name) {
            listener.enterPragma_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPragma_name) {
            listener.exitPragma_name(this);
        }
    }
}
exports.Pragma_nameContext = Pragma_nameContext;
class Savepoint_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_savepoint_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterSavepoint_name) {
            listener.enterSavepoint_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSavepoint_name) {
            listener.exitSavepoint_name(this);
        }
    }
}
exports.Savepoint_nameContext = Savepoint_nameContext;
class Table_aliasContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_table_alias; }
    // @Override
    enterRule(listener) {
        if (listener.enterTable_alias) {
            listener.enterTable_alias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTable_alias) {
            listener.exitTable_alias(this);
        }
    }
}
exports.Table_aliasContext = Table_aliasContext;
class Transaction_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_transaction_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterTransaction_name) {
            listener.enterTransaction_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTransaction_name) {
            listener.exitTransaction_name(this);
        }
    }
}
exports.Transaction_nameContext = Transaction_nameContext;
class Window_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_window_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterWindow_name) {
            listener.enterWindow_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWindow_name) {
            listener.exitWindow_name(this);
        }
    }
}
exports.Window_nameContext = Window_nameContext;
class AliasContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_alias; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    }
}
exports.AliasContext = AliasContext;
class FilenameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_filename; }
    // @Override
    enterRule(listener) {
        if (listener.enterFilename) {
            listener.enterFilename(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFilename) {
            listener.exitFilename(this);
        }
    }
}
exports.FilenameContext = FilenameContext;
class Base_window_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_base_window_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterBase_window_name) {
            listener.enterBase_window_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBase_window_name) {
            listener.exitBase_window_name(this);
        }
    }
}
exports.Base_window_nameContext = Base_window_nameContext;
class Simple_funcContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_simple_func; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimple_func) {
            listener.enterSimple_func(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimple_func) {
            listener.exitSimple_func(this);
        }
    }
}
exports.Simple_funcContext = Simple_funcContext;
class Aggregate_funcContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_aggregate_func; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_func) {
            listener.enterAggregate_func(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_func) {
            listener.exitAggregate_func(this);
        }
    }
}
exports.Aggregate_funcContext = Aggregate_funcContext;
class Table_function_nameContext extends ParserRuleContext_1.ParserRuleContext {
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_table_function_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterTable_function_name) {
            listener.enterTable_function_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTable_function_name) {
            listener.exitTable_function_name(this);
        }
    }
}
exports.Table_function_nameContext = Table_function_nameContext;
class Any_nameContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(SQLiteParser.IDENTIFIER, 0); }
    keyword() {
        return this.tryGetRuleContext(0, KeywordContext);
    }
    STRING_LITERAL() { return this.tryGetToken(SQLiteParser.STRING_LITERAL, 0); }
    OPEN_PAR() { return this.tryGetToken(SQLiteParser.OPEN_PAR, 0); }
    any_name() {
        return this.tryGetRuleContext(0, Any_nameContext);
    }
    CLOSE_PAR() { return this.tryGetToken(SQLiteParser.CLOSE_PAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SQLiteParser.RULE_any_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterAny_name) {
            listener.enterAny_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAny_name) {
            listener.exitAny_name(this);
        }
    }
}
exports.Any_nameContext = Any_nameContext;
//# sourceMappingURL=SQLiteParser.js.map