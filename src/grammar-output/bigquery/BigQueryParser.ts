// Generated from src/grammars/bigquery/BigQueryParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BigQueryParserListener } from "./BigQueryParserListener";

export class BigQueryParser extends Parser {
	public static readonly QUOTE = 1;
	public static readonly DQOUTE = 2;
	public static readonly SQUARE_BRACKET_ID = 3;
	public static readonly BK_QUOTE = 4;
	public static readonly EQUAL = 5;
	public static readonly NOT_EQUAL = 6;
	public static readonly GREATER = 7;
	public static readonly LESS = 8;
	public static readonly LESS_LESS = 9;
	public static readonly GREATER_GREATER = 10;
	public static readonly LEQ = 11;
	public static readonly GEQ = 12;
	public static readonly EXCLAMATION = 13;
	public static readonly PLUS_ASSIGN = 14;
	public static readonly MINUS_ASSIGN = 15;
	public static readonly MULT_ASSIGN = 16;
	public static readonly DIV_ASSIGN = 17;
	public static readonly MOD_ASSIGN = 18;
	public static readonly AND_ASSIGN = 19;
	public static readonly XOR_ASSIGN = 20;
	public static readonly OR_ASSIGN = 21;
	public static readonly DOUBLE_BAR = 22;
	public static readonly DOT = 23;
	public static readonly UNDERLINE = 24;
	public static readonly SHARP = 25;
	public static readonly DOLLAR = 26;
	public static readonly LR_BRACKET = 27;
	public static readonly RR_BRACKET = 28;
	public static readonly LEFT_BRACKET = 29;
	public static readonly RIGHT_BRACKET = 30;
	public static readonly COMMA = 31;
	public static readonly SEMI = 32;
	public static readonly COLON = 33;
	public static readonly STAR = 34;
	public static readonly DIVIDE = 35;
	public static readonly MODULE = 36;
	public static readonly PLUS = 37;
	public static readonly MINUS = 38;
	public static readonly BIT_NOT = 39;
	public static readonly BIT_OR = 40;
	public static readonly BIT_AND = 41;
	public static readonly BIT_XOR = 42;
	public static readonly ALL = 43;
	public static readonly AND = 44;
	public static readonly ANY = 45;
	public static readonly ARRAY = 46;
	public static readonly AS = 47;
	public static readonly ASC = 48;
	public static readonly ASSERT_ROWS_MODIFIED = 49;
	public static readonly AT = 50;
	public static readonly BETWEEN = 51;
	public static readonly BY = 52;
	public static readonly CASE = 53;
	public static readonly CAST = 54;
	public static readonly COLLATE = 55;
	public static readonly CONTAINS = 56;
	public static readonly CREATE = 57;
	public static readonly CROSS = 58;
	public static readonly CUBE = 59;
	public static readonly CURRENT = 60;
	public static readonly DEFAULT = 61;
	public static readonly DEFINE = 62;
	public static readonly DESC = 63;
	public static readonly DISTINCT = 64;
	public static readonly ELSE = 65;
	public static readonly END = 66;
	public static readonly ENUM = 67;
	public static readonly ESCAPE = 68;
	public static readonly EXCEPT = 69;
	public static readonly EXCLUDE = 70;
	public static readonly EXISTS = 71;
	public static readonly EXTRACT = 72;
	public static readonly FALSE = 73;
	public static readonly FETCH = 74;
	public static readonly FOLLOWING = 75;
	public static readonly FOR = 76;
	public static readonly FROM = 77;
	public static readonly FULL = 78;
	public static readonly GROUP = 79;
	public static readonly GROUPING = 80;
	public static readonly GROUPS = 81;
	public static readonly HASH = 82;
	public static readonly HAVING = 83;
	public static readonly IF = 84;
	public static readonly IGNORE = 85;
	public static readonly IN = 86;
	public static readonly INNER = 87;
	public static readonly INTERSECT = 88;
	public static readonly INTERVAL = 89;
	public static readonly INTO = 90;
	public static readonly INT = 91;
	public static readonly FLOAT = 92;
	public static readonly DIGITS = 93;
	public static readonly IS = 94;
	public static readonly JOIN = 95;
	public static readonly LATERAL = 96;
	public static readonly LEFT = 97;
	public static readonly LIKE = 98;
	public static readonly LIMIT = 99;
	public static readonly LOOKUP = 100;
	public static readonly MERGE = 101;
	public static readonly NATURAL = 102;
	public static readonly NEW = 103;
	public static readonly NO = 104;
	public static readonly NOT = 105;
	public static readonly S_NULL = 106;
	public static readonly NULLS = 107;
	public static readonly OF = 108;
	public static readonly OFFSET = 109;
	public static readonly ON = 110;
	public static readonly OR = 111;
	public static readonly ORDER = 112;
	public static readonly ORDINAL = 113;
	public static readonly OUTER = 114;
	public static readonly OVER = 115;
	public static readonly PARTITION = 116;
	public static readonly PRECEDING = 117;
	public static readonly PROTO = 118;
	public static readonly RANGE = 119;
	public static readonly RECURSIVE = 120;
	public static readonly REPLACE = 121;
	public static readonly RESPECT = 122;
	public static readonly RIGHT = 123;
	public static readonly ROLLUP = 124;
	public static readonly ROWS = 125;
	public static readonly SAFE_OFFSET = 126;
	public static readonly SAFE_ORDINAL = 127;
	public static readonly SELECT = 128;
	public static readonly SET = 129;
	public static readonly SOME = 130;
	public static readonly SSTRUCT = 131;
	public static readonly SYSTEM = 132;
	public static readonly TABLESAMPLE = 133;
	public static readonly THEN = 134;
	public static readonly TIME = 135;
	public static readonly TO = 136;
	public static readonly TREAT = 137;
	public static readonly TRUE = 138;
	public static readonly UNBOUNDED = 139;
	public static readonly UNION = 140;
	public static readonly UNNEST = 141;
	public static readonly USING = 142;
	public static readonly WHEN = 143;
	public static readonly WHERE = 144;
	public static readonly WINDOW = 145;
	public static readonly WITH = 146;
	public static readonly WITHIN = 147;
	public static readonly WS = 148;
	public static readonly CMT = 149;
	public static readonly M_CMT = 150;
	public static readonly QUOTED_STRING = 151;
	public static readonly TRIPLE_QUOTED_STRING = 152;
	public static readonly RAW_STRING = 153;
	public static readonly BYTE_STRING = 154;
	public static readonly RAW_BYTE_STRING = 155;
	public static readonly ID = 156;
	public static readonly RB = 157;
	public static readonly RULE_sql = 0;
	public static readonly RULE_query_statement = 1;
	public static readonly RULE_query_expr = 2;
	public static readonly RULE_select_statement = 3;
	public static readonly RULE_from_statement = 4;
	public static readonly RULE_from_item = 5;
	public static readonly RULE_where_statement = 6;
	public static readonly RULE_group_statement = 7;
	public static readonly RULE_having_statement = 8;
	public static readonly RULE_window_statement = 9;
	public static readonly RULE_order_clause = 10;
	public static readonly RULE_limit_clause = 11;
	public static readonly RULE_unary_operator = 12;
	public static readonly RULE_expr = 13;
	public static readonly RULE_cast_expr = 14;
	public static readonly RULE_column_expr = 15;
	public static readonly RULE_except_statement = 16;
	public static readonly RULE_replace_statement = 17;
	public static readonly RULE_join_type = 18;
	public static readonly RULE_on_clause = 19;
	public static readonly RULE_set_op = 20;
	public static readonly RULE_using_clause = 21;
	public static readonly RULE_field_path = 22;
	public static readonly RULE_sstruct = 23;
	public static readonly RULE_array_expr = 24;
	public static readonly RULE_array_path = 25;
	public static readonly RULE_bool_expression = 26;
	public static readonly RULE_window_name = 27;
	public static readonly RULE_window_definition = 28;
	public static readonly RULE_count = 29;
	public static readonly RULE_skip_rows = 30;
	public static readonly RULE_with_statement = 31;
	public static readonly RULE_name = 32;
	public static readonly RULE_alias_name = 33;
	public static readonly RULE_array_name = 34;
	public static readonly RULE_column_name = 35;
	public static readonly RULE_cte_name = 36;
	public static readonly RULE_dataset_name = 37;
	public static readonly RULE_datatype_name = 38;
	public static readonly RULE_function_name = 39;
	public static readonly RULE_join_name = 40;
	public static readonly RULE_member_name = 41;
	public static readonly RULE_project_name = 42;
	public static readonly RULE_struct_name = 43;
	public static readonly RULE_table_name = 44;
	public static readonly RULE_pure_project_name = 45;
	public static readonly RULE_pure_dataset_name = 46;
	public static readonly RULE_pure_table_name = 47;
	public static readonly RULE_table_expr = 48;
	public static readonly RULE_number = 49;
	public static readonly RULE_integer_type = 50;
	public static readonly RULE_float_type = 51;
	public static readonly RULE_string = 52;
	public static readonly RULE_quoted_string = 53;
	public static readonly RULE_triple_quoted_string = 54;
	public static readonly RULE_raw_string = 55;
	public static readonly RULE_byte_string = 56;
	public static readonly RULE_raw_byte_string = 57;
	public static readonly RULE_special_string = 58;
	public static readonly RULE_keyword = 59;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sql", "query_statement", "query_expr", "select_statement", "from_statement", 
		"from_item", "where_statement", "group_statement", "having_statement", 
		"window_statement", "order_clause", "limit_clause", "unary_operator", 
		"expr", "cast_expr", "column_expr", "except_statement", "replace_statement", 
		"join_type", "on_clause", "set_op", "using_clause", "field_path", "sstruct", 
		"array_expr", "array_path", "bool_expression", "window_name", "window_definition", 
		"count", "skip_rows", "with_statement", "name", "alias_name", "array_name", 
		"column_name", "cte_name", "dataset_name", "datatype_name", "function_name", 
		"join_name", "member_name", "project_name", "struct_name", "table_name", 
		"pure_project_name", "pure_dataset_name", "pure_table_name", "table_expr", 
		"number", "integer_type", "float_type", "string", "quoted_string", "triple_quoted_string", 
		"raw_string", "byte_string", "raw_byte_string", "special_string", "keyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'''", "'\"'", undefined, "'`'", "'='", undefined, "'>'", "'<'", 
		"'<<'", "'>>'", "'<='", "'>='", "'!'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "'&='", "'^='", "'|='", "'||'", "'.'", "'_'", "'#'", "'$'", "'('", 
		"')'", "'['", "']'", "','", "';'", "':'", "'*'", "'/'", "'%'", "'+'", 
		"'-'", "'~'", "'|'", "'&'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "QUOTE", "DQOUTE", "SQUARE_BRACKET_ID", "BK_QUOTE", "EQUAL", 
		"NOT_EQUAL", "GREATER", "LESS", "LESS_LESS", "GREATER_GREATER", "LEQ", 
		"GEQ", "EXCLAMATION", "PLUS_ASSIGN", "MINUS_ASSIGN", "MULT_ASSIGN", "DIV_ASSIGN", 
		"MOD_ASSIGN", "AND_ASSIGN", "XOR_ASSIGN", "OR_ASSIGN", "DOUBLE_BAR", "DOT", 
		"UNDERLINE", "SHARP", "DOLLAR", "LR_BRACKET", "RR_BRACKET", "LEFT_BRACKET", 
		"RIGHT_BRACKET", "COMMA", "SEMI", "COLON", "STAR", "DIVIDE", "MODULE", 
		"PLUS", "MINUS", "BIT_NOT", "BIT_OR", "BIT_AND", "BIT_XOR", "ALL", "AND", 
		"ANY", "ARRAY", "AS", "ASC", "ASSERT_ROWS_MODIFIED", "AT", "BETWEEN", 
		"BY", "CASE", "CAST", "COLLATE", "CONTAINS", "CREATE", "CROSS", "CUBE", 
		"CURRENT", "DEFAULT", "DEFINE", "DESC", "DISTINCT", "ELSE", "END", "ENUM", 
		"ESCAPE", "EXCEPT", "EXCLUDE", "EXISTS", "EXTRACT", "FALSE", "FETCH", 
		"FOLLOWING", "FOR", "FROM", "FULL", "GROUP", "GROUPING", "GROUPS", "HASH", 
		"HAVING", "IF", "IGNORE", "IN", "INNER", "INTERSECT", "INTERVAL", "INTO", 
		"INT", "FLOAT", "DIGITS", "IS", "JOIN", "LATERAL", "LEFT", "LIKE", "LIMIT", 
		"LOOKUP", "MERGE", "NATURAL", "NEW", "NO", "NOT", "S_NULL", "NULLS", "OF", 
		"OFFSET", "ON", "OR", "ORDER", "ORDINAL", "OUTER", "OVER", "PARTITION", 
		"PRECEDING", "PROTO", "RANGE", "RECURSIVE", "REPLACE", "RESPECT", "RIGHT", 
		"ROLLUP", "ROWS", "SAFE_OFFSET", "SAFE_ORDINAL", "SELECT", "SET", "SOME", 
		"SSTRUCT", "SYSTEM", "TABLESAMPLE", "THEN", "TIME", "TO", "TREAT", "TRUE", 
		"UNBOUNDED", "UNION", "UNNEST", "USING", "WHEN", "WHERE", "WINDOW", "WITH", 
		"WITHIN", "WS", "CMT", "M_CMT", "QUOTED_STRING", "TRIPLE_QUOTED_STRING", 
		"RAW_STRING", "BYTE_STRING", "RAW_BYTE_STRING", "ID", "RB",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BigQueryParser._LITERAL_NAMES, BigQueryParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BigQueryParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BigQueryParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return BigQueryParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BigQueryParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BigQueryParser._ATN, this);
	}
	// @RuleVersion(0)
	public sql(): SqlContext {
		let _localctx: SqlContext = new SqlContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BigQueryParser.RULE_sql);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.query_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query_statement(): Query_statementContext {
		let _localctx: Query_statementContext = new Query_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BigQueryParser.RULE_query_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BigQueryParser.WITH) {
				{
				this.state = 122;
				this.with_statement();
				}
			}

			this.state = 125;
			this.query_expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public query_expr(): Query_exprContext;
	public query_expr(_p: number): Query_exprContext;
	// @RuleVersion(0)
	public query_expr(_p?: number): Query_exprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Query_exprContext = new Query_exprContext(this._ctx, _parentState);
		let _prevctx: Query_exprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, BigQueryParser.RULE_query_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BigQueryParser.SELECT:
				{
				this.state = 128;
				this.select_statement();
				this.state = 130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 129;
					this.order_clause();
					}
					break;
				}
				this.state = 133;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.limit_clause();
					}
					break;
				}
				}
				break;
			case BigQueryParser.LR_BRACKET:
				{
				this.state = 135;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 136;
				this.query_expr(0);
				this.state = 137;
				this.match(BigQueryParser.RR_BRACKET);
				this.state = 139;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 138;
					this.order_clause();
					}
					break;
				}
				this.state = 142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 141;
					this.limit_clause();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Query_exprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_query_expr);
					this.state = 146;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 147;
					this.set_op();
					this.state = 148;
					this.query_expr(0);
					this.state = 150;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 149;
						this.order_clause();
						}
						break;
					}
					this.state = 153;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 152;
						this.limit_clause();
						}
						break;
					}
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select_statement(): Select_statementContext {
		let _localctx: Select_statementContext = new Select_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BigQueryParser.RULE_select_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(BigQueryParser.SELECT);
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 161;
				_la = this._input.LA(1);
				if (!(_la === BigQueryParser.ALL || _la === BigQueryParser.DISTINCT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				{
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.BK_QUOTE || _la === BigQueryParser.LR_BRACKET || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (BigQueryParser.MINUS - 38)) | (1 << (BigQueryParser.BIT_NOT - 38)) | (1 << (BigQueryParser.ALL - 38)) | (1 << (BigQueryParser.AND - 38)) | (1 << (BigQueryParser.ANY - 38)) | (1 << (BigQueryParser.ARRAY - 38)) | (1 << (BigQueryParser.AS - 38)) | (1 << (BigQueryParser.ASC - 38)) | (1 << (BigQueryParser.ASSERT_ROWS_MODIFIED - 38)) | (1 << (BigQueryParser.AT - 38)) | (1 << (BigQueryParser.BETWEEN - 38)) | (1 << (BigQueryParser.BY - 38)) | (1 << (BigQueryParser.CASE - 38)) | (1 << (BigQueryParser.CAST - 38)) | (1 << (BigQueryParser.COLLATE - 38)) | (1 << (BigQueryParser.CONTAINS - 38)) | (1 << (BigQueryParser.CREATE - 38)) | (1 << (BigQueryParser.CROSS - 38)) | (1 << (BigQueryParser.CUBE - 38)) | (1 << (BigQueryParser.CURRENT - 38)) | (1 << (BigQueryParser.DEFAULT - 38)) | (1 << (BigQueryParser.DEFINE - 38)) | (1 << (BigQueryParser.DESC - 38)) | (1 << (BigQueryParser.DISTINCT - 38)) | (1 << (BigQueryParser.ELSE - 38)) | (1 << (BigQueryParser.END - 38)) | (1 << (BigQueryParser.ENUM - 38)) | (1 << (BigQueryParser.ESCAPE - 38)) | (1 << (BigQueryParser.EXCEPT - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (BigQueryParser.EXCLUDE - 70)) | (1 << (BigQueryParser.EXISTS - 70)) | (1 << (BigQueryParser.EXTRACT - 70)) | (1 << (BigQueryParser.FALSE - 70)) | (1 << (BigQueryParser.FETCH - 70)) | (1 << (BigQueryParser.FOLLOWING - 70)) | (1 << (BigQueryParser.FOR - 70)) | (1 << (BigQueryParser.FROM - 70)) | (1 << (BigQueryParser.FULL - 70)) | (1 << (BigQueryParser.GROUP - 70)) | (1 << (BigQueryParser.GROUPING - 70)) | (1 << (BigQueryParser.GROUPS - 70)) | (1 << (BigQueryParser.HASH - 70)) | (1 << (BigQueryParser.HAVING - 70)) | (1 << (BigQueryParser.IF - 70)) | (1 << (BigQueryParser.IGNORE - 70)) | (1 << (BigQueryParser.IN - 70)) | (1 << (BigQueryParser.INNER - 70)) | (1 << (BigQueryParser.INTERSECT - 70)) | (1 << (BigQueryParser.INTERVAL - 70)) | (1 << (BigQueryParser.INTO - 70)) | (1 << (BigQueryParser.INT - 70)) | (1 << (BigQueryParser.FLOAT - 70)) | (1 << (BigQueryParser.IS - 70)) | (1 << (BigQueryParser.JOIN - 70)) | (1 << (BigQueryParser.LATERAL - 70)) | (1 << (BigQueryParser.LEFT - 70)) | (1 << (BigQueryParser.LIKE - 70)) | (1 << (BigQueryParser.LIMIT - 70)) | (1 << (BigQueryParser.LOOKUP - 70)) | (1 << (BigQueryParser.MERGE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BigQueryParser.NATURAL - 102)) | (1 << (BigQueryParser.NEW - 102)) | (1 << (BigQueryParser.NO - 102)) | (1 << (BigQueryParser.NOT - 102)) | (1 << (BigQueryParser.S_NULL - 102)) | (1 << (BigQueryParser.NULLS - 102)) | (1 << (BigQueryParser.OF - 102)) | (1 << (BigQueryParser.OFFSET - 102)) | (1 << (BigQueryParser.ON - 102)) | (1 << (BigQueryParser.OR - 102)) | (1 << (BigQueryParser.ORDER - 102)) | (1 << (BigQueryParser.ORDINAL - 102)) | (1 << (BigQueryParser.OUTER - 102)) | (1 << (BigQueryParser.OVER - 102)) | (1 << (BigQueryParser.PARTITION - 102)) | (1 << (BigQueryParser.PRECEDING - 102)) | (1 << (BigQueryParser.PROTO - 102)) | (1 << (BigQueryParser.RANGE - 102)) | (1 << (BigQueryParser.RECURSIVE - 102)) | (1 << (BigQueryParser.REPLACE - 102)) | (1 << (BigQueryParser.RESPECT - 102)) | (1 << (BigQueryParser.RIGHT - 102)) | (1 << (BigQueryParser.ROLLUP - 102)) | (1 << (BigQueryParser.ROWS - 102)) | (1 << (BigQueryParser.SAFE_OFFSET - 102)) | (1 << (BigQueryParser.SAFE_ORDINAL - 102)) | (1 << (BigQueryParser.SELECT - 102)) | (1 << (BigQueryParser.SET - 102)) | (1 << (BigQueryParser.SOME - 102)) | (1 << (BigQueryParser.SSTRUCT - 102)) | (1 << (BigQueryParser.SYSTEM - 102)) | (1 << (BigQueryParser.TABLESAMPLE - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BigQueryParser.THEN - 134)) | (1 << (BigQueryParser.TIME - 134)) | (1 << (BigQueryParser.TO - 134)) | (1 << (BigQueryParser.TREAT - 134)) | (1 << (BigQueryParser.TRUE - 134)) | (1 << (BigQueryParser.UNBOUNDED - 134)) | (1 << (BigQueryParser.UNION - 134)) | (1 << (BigQueryParser.UNNEST - 134)) | (1 << (BigQueryParser.USING - 134)) | (1 << (BigQueryParser.WHEN - 134)) | (1 << (BigQueryParser.WHERE - 134)) | (1 << (BigQueryParser.WINDOW - 134)) | (1 << (BigQueryParser.WITH - 134)) | (1 << (BigQueryParser.WITHIN - 134)) | (1 << (BigQueryParser.QUOTED_STRING - 134)) | (1 << (BigQueryParser.TRIPLE_QUOTED_STRING - 134)) | (1 << (BigQueryParser.RAW_STRING - 134)) | (1 << (BigQueryParser.BYTE_STRING - 134)) | (1 << (BigQueryParser.RAW_BYTE_STRING - 134)) | (1 << (BigQueryParser.ID - 134)))) !== 0)) {
					{
					this.state = 164;
					this.expr(0);
					}
				}

				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.DOT) {
					{
					this.state = 167;
					this.match(BigQueryParser.DOT);
					}
				}

				this.state = 170;
				this.match(BigQueryParser.STAR);
				this.state = 172;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 171;
					this.except_statement();
					}
					break;
				}
				this.state = 175;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 174;
					this.replace_statement();
					}
					break;
				}
				}
				}
				break;

			case 2:
				{
				this.state = 177;
				this.expr(0);
				this.state = 182;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BigQueryParser.AS) {
						{
						this.state = 178;
						this.match(BigQueryParser.AS);
						}
					}

					this.state = 181;
					this.alias_name();
					}
					break;
				}
				}
				break;
			}
			this.state = 208;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 186;
					this.match(BigQueryParser.COMMA);
					this.state = 204;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						{
						this.state = 188;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BigQueryParser.BK_QUOTE || _la === BigQueryParser.LR_BRACKET || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (BigQueryParser.MINUS - 38)) | (1 << (BigQueryParser.BIT_NOT - 38)) | (1 << (BigQueryParser.ALL - 38)) | (1 << (BigQueryParser.AND - 38)) | (1 << (BigQueryParser.ANY - 38)) | (1 << (BigQueryParser.ARRAY - 38)) | (1 << (BigQueryParser.AS - 38)) | (1 << (BigQueryParser.ASC - 38)) | (1 << (BigQueryParser.ASSERT_ROWS_MODIFIED - 38)) | (1 << (BigQueryParser.AT - 38)) | (1 << (BigQueryParser.BETWEEN - 38)) | (1 << (BigQueryParser.BY - 38)) | (1 << (BigQueryParser.CASE - 38)) | (1 << (BigQueryParser.CAST - 38)) | (1 << (BigQueryParser.COLLATE - 38)) | (1 << (BigQueryParser.CONTAINS - 38)) | (1 << (BigQueryParser.CREATE - 38)) | (1 << (BigQueryParser.CROSS - 38)) | (1 << (BigQueryParser.CUBE - 38)) | (1 << (BigQueryParser.CURRENT - 38)) | (1 << (BigQueryParser.DEFAULT - 38)) | (1 << (BigQueryParser.DEFINE - 38)) | (1 << (BigQueryParser.DESC - 38)) | (1 << (BigQueryParser.DISTINCT - 38)) | (1 << (BigQueryParser.ELSE - 38)) | (1 << (BigQueryParser.END - 38)) | (1 << (BigQueryParser.ENUM - 38)) | (1 << (BigQueryParser.ESCAPE - 38)) | (1 << (BigQueryParser.EXCEPT - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (BigQueryParser.EXCLUDE - 70)) | (1 << (BigQueryParser.EXISTS - 70)) | (1 << (BigQueryParser.EXTRACT - 70)) | (1 << (BigQueryParser.FALSE - 70)) | (1 << (BigQueryParser.FETCH - 70)) | (1 << (BigQueryParser.FOLLOWING - 70)) | (1 << (BigQueryParser.FOR - 70)) | (1 << (BigQueryParser.FROM - 70)) | (1 << (BigQueryParser.FULL - 70)) | (1 << (BigQueryParser.GROUP - 70)) | (1 << (BigQueryParser.GROUPING - 70)) | (1 << (BigQueryParser.GROUPS - 70)) | (1 << (BigQueryParser.HASH - 70)) | (1 << (BigQueryParser.HAVING - 70)) | (1 << (BigQueryParser.IF - 70)) | (1 << (BigQueryParser.IGNORE - 70)) | (1 << (BigQueryParser.IN - 70)) | (1 << (BigQueryParser.INNER - 70)) | (1 << (BigQueryParser.INTERSECT - 70)) | (1 << (BigQueryParser.INTERVAL - 70)) | (1 << (BigQueryParser.INTO - 70)) | (1 << (BigQueryParser.INT - 70)) | (1 << (BigQueryParser.FLOAT - 70)) | (1 << (BigQueryParser.IS - 70)) | (1 << (BigQueryParser.JOIN - 70)) | (1 << (BigQueryParser.LATERAL - 70)) | (1 << (BigQueryParser.LEFT - 70)) | (1 << (BigQueryParser.LIKE - 70)) | (1 << (BigQueryParser.LIMIT - 70)) | (1 << (BigQueryParser.LOOKUP - 70)) | (1 << (BigQueryParser.MERGE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BigQueryParser.NATURAL - 102)) | (1 << (BigQueryParser.NEW - 102)) | (1 << (BigQueryParser.NO - 102)) | (1 << (BigQueryParser.NOT - 102)) | (1 << (BigQueryParser.S_NULL - 102)) | (1 << (BigQueryParser.NULLS - 102)) | (1 << (BigQueryParser.OF - 102)) | (1 << (BigQueryParser.OFFSET - 102)) | (1 << (BigQueryParser.ON - 102)) | (1 << (BigQueryParser.OR - 102)) | (1 << (BigQueryParser.ORDER - 102)) | (1 << (BigQueryParser.ORDINAL - 102)) | (1 << (BigQueryParser.OUTER - 102)) | (1 << (BigQueryParser.OVER - 102)) | (1 << (BigQueryParser.PARTITION - 102)) | (1 << (BigQueryParser.PRECEDING - 102)) | (1 << (BigQueryParser.PROTO - 102)) | (1 << (BigQueryParser.RANGE - 102)) | (1 << (BigQueryParser.RECURSIVE - 102)) | (1 << (BigQueryParser.REPLACE - 102)) | (1 << (BigQueryParser.RESPECT - 102)) | (1 << (BigQueryParser.RIGHT - 102)) | (1 << (BigQueryParser.ROLLUP - 102)) | (1 << (BigQueryParser.ROWS - 102)) | (1 << (BigQueryParser.SAFE_OFFSET - 102)) | (1 << (BigQueryParser.SAFE_ORDINAL - 102)) | (1 << (BigQueryParser.SELECT - 102)) | (1 << (BigQueryParser.SET - 102)) | (1 << (BigQueryParser.SOME - 102)) | (1 << (BigQueryParser.SSTRUCT - 102)) | (1 << (BigQueryParser.SYSTEM - 102)) | (1 << (BigQueryParser.TABLESAMPLE - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BigQueryParser.THEN - 134)) | (1 << (BigQueryParser.TIME - 134)) | (1 << (BigQueryParser.TO - 134)) | (1 << (BigQueryParser.TREAT - 134)) | (1 << (BigQueryParser.TRUE - 134)) | (1 << (BigQueryParser.UNBOUNDED - 134)) | (1 << (BigQueryParser.UNION - 134)) | (1 << (BigQueryParser.UNNEST - 134)) | (1 << (BigQueryParser.USING - 134)) | (1 << (BigQueryParser.WHEN - 134)) | (1 << (BigQueryParser.WHERE - 134)) | (1 << (BigQueryParser.WINDOW - 134)) | (1 << (BigQueryParser.WITH - 134)) | (1 << (BigQueryParser.WITHIN - 134)) | (1 << (BigQueryParser.QUOTED_STRING - 134)) | (1 << (BigQueryParser.TRIPLE_QUOTED_STRING - 134)) | (1 << (BigQueryParser.RAW_STRING - 134)) | (1 << (BigQueryParser.BYTE_STRING - 134)) | (1 << (BigQueryParser.RAW_BYTE_STRING - 134)) | (1 << (BigQueryParser.ID - 134)))) !== 0)) {
							{
							this.state = 187;
							this.expr(0);
							}
						}

						this.state = 190;
						this.match(BigQueryParser.STAR);
						this.state = 192;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
						case 1:
							{
							this.state = 191;
							this.except_statement();
							}
							break;
						}
						this.state = 195;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
						case 1:
							{
							this.state = 194;
							this.replace_statement();
							}
							break;
						}
						}
						}
						break;

					case 2:
						{
						this.state = 197;
						this.expr(0);
						this.state = 202;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
						case 1:
							{
							this.state = 199;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === BigQueryParser.AS) {
								{
								this.state = 198;
								this.match(BigQueryParser.AS);
								}
							}

							this.state = 201;
							this.alias_name();
							}
							break;
						}
						}
						break;
					}
					}
					}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 211;
				this.from_statement();
				}
				break;
			}
			this.state = 215;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 214;
				this.where_statement();
				}
				break;
			}
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 217;
				this.group_statement();
				}
				break;
			}
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.having_statement();
				}
				break;
			}
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 223;
				this.window_statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public from_statement(): From_statementContext {
		let _localctx: From_statementContext = new From_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BigQueryParser.RULE_from_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(BigQueryParser.FROM);
			this.state = 227;
			this.from_item(0);
			this.state = 232;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 228;
					this.match(BigQueryParser.COMMA);
					this.state = 229;
					this.from_item(0);
					}
					}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public from_item(): From_itemContext;
	public from_item(_p: number): From_itemContext;
	// @RuleVersion(0)
	public from_item(_p?: number): From_itemContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: From_itemContext = new From_itemContext(this._ctx, _parentState);
		let _prevctx: From_itemContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, BigQueryParser.RULE_from_item, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 236;
				this.table_expr();
				this.state = 241;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BigQueryParser.AS) {
						{
						this.state = 237;
						this.match(BigQueryParser.AS);
						}
					}

					this.state = 240;
					this.alias_name();
					}
					break;
				}
				this.state = 249;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 243;
					this.match(BigQueryParser.FOR);
					this.state = 244;
					this.match(BigQueryParser.SYSTEM);
					this.state = 245;
					this.match(BigQueryParser.TIME);
					this.state = 246;
					this.match(BigQueryParser.AS);
					this.state = 247;
					this.match(BigQueryParser.OF);
					this.state = 248;
					this.string();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 251;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 252;
				this.query_statement();
				this.state = 253;
				this.match(BigQueryParser.RR_BRACKET);
				this.state = 258;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BigQueryParser.AS) {
						{
						this.state = 254;
						this.match(BigQueryParser.AS);
						}
					}

					this.state = 257;
					this.alias_name();
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 260;
				this.match(BigQueryParser.UNNEST);
				this.state = 261;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 262;
				this.array_expr();
				this.state = 263;
				this.match(BigQueryParser.RR_BRACKET);
				this.state = 268;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BigQueryParser.AS) {
						{
						this.state = 264;
						this.match(BigQueryParser.AS);
						}
					}

					this.state = 267;
					this.alias_name();
					}
					break;
				}
				this.state = 276;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 270;
					this.match(BigQueryParser.WITH);
					this.state = 271;
					this.match(BigQueryParser.OFFSET);
					{
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BigQueryParser.AS) {
						{
						this.state = 272;
						this.match(BigQueryParser.AS);
						}
					}

					this.state = 275;
					this.alias_name();
					}
					}
					break;
				}
				}
				break;

			case 4:
				{
				this.state = 278;
				this.cte_name();
				this.state = 283;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BigQueryParser.AS) {
						{
						this.state = 279;
						this.match(BigQueryParser.AS);
						}
					}

					this.state = 282;
					this.alias_name();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new From_itemContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_from_item);
					this.state = 287;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (BigQueryParser.CROSS - 58)) | (1 << (BigQueryParser.FULL - 58)) | (1 << (BigQueryParser.INNER - 58)))) !== 0) || _la === BigQueryParser.LEFT || _la === BigQueryParser.RIGHT) {
						{
						this.state = 288;
						this.join_type();
						}
					}

					this.state = 291;
					this.match(BigQueryParser.JOIN);
					this.state = 292;
					this.from_item(0);
					this.state = 295;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case BigQueryParser.ON:
						{
						this.state = 293;
						this.on_clause();
						}
						break;
					case BigQueryParser.USING:
						{
						this.state = 294;
						this.using_clause();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public where_statement(): Where_statementContext {
		let _localctx: Where_statementContext = new Where_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BigQueryParser.RULE_where_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.match(BigQueryParser.WHERE);
			this.state = 303;
			this.bool_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group_statement(): Group_statementContext {
		let _localctx: Group_statementContext = new Group_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BigQueryParser.RULE_group_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(BigQueryParser.GROUP);
			this.state = 306;
			this.match(BigQueryParser.BY);
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				{
				this.state = 307;
				this.expr(0);
				this.state = 312;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 308;
						this.match(BigQueryParser.COMMA);
						this.state = 309;
						this.expr(0);
						}
						}
					}
					this.state = 314;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				}
				}
				}
				break;

			case 2:
				{
				this.state = 315;
				this.match(BigQueryParser.ROLLUP);
				this.state = 316;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 317;
				this.expr(0);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BigQueryParser.COMMA) {
					{
					{
					this.state = 318;
					this.match(BigQueryParser.COMMA);
					this.state = 319;
					this.expr(0);
					}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 325;
				this.match(BigQueryParser.RR_BRACKET);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public having_statement(): Having_statementContext {
		let _localctx: Having_statementContext = new Having_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BigQueryParser.RULE_having_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(BigQueryParser.HAVING);
			this.state = 330;
			this.bool_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public window_statement(): Window_statementContext {
		let _localctx: Window_statementContext = new Window_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BigQueryParser.RULE_window_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(BigQueryParser.WINDOW);
			this.state = 333;
			this.window_name();
			this.state = 334;
			this.match(BigQueryParser.AS);
			this.state = 335;
			this.match(BigQueryParser.LR_BRACKET);
			this.state = 336;
			this.window_definition();
			this.state = 337;
			this.match(BigQueryParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public order_clause(): Order_clauseContext {
		let _localctx: Order_clauseContext = new Order_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BigQueryParser.RULE_order_clause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(BigQueryParser.ORDER);
			this.state = 340;
			this.match(BigQueryParser.BY);
			this.state = 341;
			this.expr(0);
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 342;
				_la = this._input.LA(1);
				if (!(_la === BigQueryParser.ASC || _la === BigQueryParser.DESC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 352;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 345;
					this.match(BigQueryParser.COMMA);
					this.state = 346;
					this.expr(0);
					this.state = 348;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						this.state = 347;
						_la = this._input.LA(1);
						if (!(_la === BigQueryParser.ASC || _la === BigQueryParser.DESC)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					}
					}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limit_clause(): Limit_clauseContext {
		let _localctx: Limit_clauseContext = new Limit_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, BigQueryParser.RULE_limit_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(BigQueryParser.LIMIT);
			this.state = 356;
			this.count();
			this.state = 359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 357;
				this.match(BigQueryParser.OFFSET);
				this.state = 358;
				this.skip_rows();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, BigQueryParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			_la = this._input.LA(1);
			if (!(_la === BigQueryParser.MINUS || _la === BigQueryParser.BIT_NOT || _la === BigQueryParser.NOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, BigQueryParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 364;
				this.number();
				}
				break;

			case 2:
				{
				this.state = 365;
				this.string();
				}
				break;

			case 3:
				{
				this.state = 366;
				this.array_name();
				this.state = 367;
				this.match(BigQueryParser.LEFT_BRACKET);
				this.state = 368;
				_la = this._input.LA(1);
				if (!(((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (BigQueryParser.OFFSET - 109)) | (1 << (BigQueryParser.ORDINAL - 109)) | (1 << (BigQueryParser.SAFE_OFFSET - 109)) | (1 << (BigQueryParser.SAFE_ORDINAL - 109)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 369;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 370;
				this.expr(0);
				this.state = 371;
				this.match(BigQueryParser.RR_BRACKET);
				this.state = 372;
				this.match(BigQueryParser.RIGHT_BRACKET);
				}
				break;

			case 4:
				{
				this.state = 374;
				this.unary_operator();
				this.state = 375;
				this.expr(19);
				}
				break;

			case 5:
				{
				this.state = 377;
				this.match(BigQueryParser.IS);
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.NOT) {
					{
					this.state = 378;
					this.match(BigQueryParser.NOT);
					}
				}

				this.state = 381;
				this.match(BigQueryParser.TRUE);
				}
				break;

			case 6:
				{
				this.state = 382;
				this.match(BigQueryParser.IS);
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.NOT) {
					{
					this.state = 383;
					this.match(BigQueryParser.NOT);
					}
				}

				this.state = 386;
				this.match(BigQueryParser.FALSE);
				}
				break;

			case 7:
				{
				this.state = 387;
				this.function_name();
				this.state = 388;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 398;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case BigQueryParser.BK_QUOTE:
				case BigQueryParser.LR_BRACKET:
				case BigQueryParser.MINUS:
				case BigQueryParser.BIT_NOT:
				case BigQueryParser.ALL:
				case BigQueryParser.AND:
				case BigQueryParser.ANY:
				case BigQueryParser.ARRAY:
				case BigQueryParser.AS:
				case BigQueryParser.ASC:
				case BigQueryParser.ASSERT_ROWS_MODIFIED:
				case BigQueryParser.AT:
				case BigQueryParser.BETWEEN:
				case BigQueryParser.BY:
				case BigQueryParser.CASE:
				case BigQueryParser.CAST:
				case BigQueryParser.COLLATE:
				case BigQueryParser.CONTAINS:
				case BigQueryParser.CREATE:
				case BigQueryParser.CROSS:
				case BigQueryParser.CUBE:
				case BigQueryParser.CURRENT:
				case BigQueryParser.DEFAULT:
				case BigQueryParser.DEFINE:
				case BigQueryParser.DESC:
				case BigQueryParser.DISTINCT:
				case BigQueryParser.ELSE:
				case BigQueryParser.END:
				case BigQueryParser.ENUM:
				case BigQueryParser.ESCAPE:
				case BigQueryParser.EXCEPT:
				case BigQueryParser.EXCLUDE:
				case BigQueryParser.EXISTS:
				case BigQueryParser.EXTRACT:
				case BigQueryParser.FALSE:
				case BigQueryParser.FETCH:
				case BigQueryParser.FOLLOWING:
				case BigQueryParser.FOR:
				case BigQueryParser.FROM:
				case BigQueryParser.FULL:
				case BigQueryParser.GROUP:
				case BigQueryParser.GROUPING:
				case BigQueryParser.GROUPS:
				case BigQueryParser.HASH:
				case BigQueryParser.HAVING:
				case BigQueryParser.IF:
				case BigQueryParser.IGNORE:
				case BigQueryParser.IN:
				case BigQueryParser.INNER:
				case BigQueryParser.INTERSECT:
				case BigQueryParser.INTERVAL:
				case BigQueryParser.INTO:
				case BigQueryParser.INT:
				case BigQueryParser.FLOAT:
				case BigQueryParser.IS:
				case BigQueryParser.JOIN:
				case BigQueryParser.LATERAL:
				case BigQueryParser.LEFT:
				case BigQueryParser.LIKE:
				case BigQueryParser.LIMIT:
				case BigQueryParser.LOOKUP:
				case BigQueryParser.MERGE:
				case BigQueryParser.NATURAL:
				case BigQueryParser.NEW:
				case BigQueryParser.NO:
				case BigQueryParser.NOT:
				case BigQueryParser.S_NULL:
				case BigQueryParser.NULLS:
				case BigQueryParser.OF:
				case BigQueryParser.OFFSET:
				case BigQueryParser.ON:
				case BigQueryParser.OR:
				case BigQueryParser.ORDER:
				case BigQueryParser.ORDINAL:
				case BigQueryParser.OUTER:
				case BigQueryParser.OVER:
				case BigQueryParser.PARTITION:
				case BigQueryParser.PRECEDING:
				case BigQueryParser.PROTO:
				case BigQueryParser.RANGE:
				case BigQueryParser.RECURSIVE:
				case BigQueryParser.REPLACE:
				case BigQueryParser.RESPECT:
				case BigQueryParser.RIGHT:
				case BigQueryParser.ROLLUP:
				case BigQueryParser.ROWS:
				case BigQueryParser.SAFE_OFFSET:
				case BigQueryParser.SAFE_ORDINAL:
				case BigQueryParser.SELECT:
				case BigQueryParser.SET:
				case BigQueryParser.SOME:
				case BigQueryParser.SSTRUCT:
				case BigQueryParser.SYSTEM:
				case BigQueryParser.TABLESAMPLE:
				case BigQueryParser.THEN:
				case BigQueryParser.TIME:
				case BigQueryParser.TO:
				case BigQueryParser.TREAT:
				case BigQueryParser.TRUE:
				case BigQueryParser.UNBOUNDED:
				case BigQueryParser.UNION:
				case BigQueryParser.UNNEST:
				case BigQueryParser.USING:
				case BigQueryParser.WHEN:
				case BigQueryParser.WHERE:
				case BigQueryParser.WINDOW:
				case BigQueryParser.WITH:
				case BigQueryParser.WITHIN:
				case BigQueryParser.QUOTED_STRING:
				case BigQueryParser.TRIPLE_QUOTED_STRING:
				case BigQueryParser.RAW_STRING:
				case BigQueryParser.BYTE_STRING:
				case BigQueryParser.RAW_BYTE_STRING:
				case BigQueryParser.ID:
					{
					{
					this.state = 389;
					this.expr(0);
					this.state = 394;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === BigQueryParser.COMMA) {
						{
						{
						this.state = 390;
						this.match(BigQueryParser.COMMA);
						this.state = 391;
						this.expr(0);
						}
						}
						this.state = 396;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				case BigQueryParser.STAR:
					{
					this.state = 397;
					this.match(BigQueryParser.STAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 400;
				this.match(BigQueryParser.RR_BRACKET);
				}
				break;

			case 8:
				{
				this.state = 402;
				this.cast_expr();
				}
				break;

			case 9:
				{
				this.state = 403;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 404;
				this.expr(0);
				this.state = 405;
				this.match(BigQueryParser.RR_BRACKET);
				}
				break;

			case 10:
				{
				this.state = 407;
				this.column_expr();
				}
				break;

			case 11:
				{
				this.state = 408;
				this.keyword();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 489;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 487;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 411;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 412;
						_la = this._input.LA(1);
						if (!(_la === BigQueryParser.STAR || _la === BigQueryParser.DIVIDE)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 413;
						this.expr(19);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 414;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 415;
						_la = this._input.LA(1);
						if (!(_la === BigQueryParser.PLUS || _la === BigQueryParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 416;
						this.expr(18);
						}
						break;

					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 417;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 418;
						_la = this._input.LA(1);
						if (!(_la === BigQueryParser.LESS_LESS || _la === BigQueryParser.GREATER_GREATER)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 419;
						this.expr(17);
						}
						break;

					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 420;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 421;
						this.match(BigQueryParser.BIT_AND);
						this.state = 422;
						this.expr(16);
						}
						break;

					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 423;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 424;
						this.match(BigQueryParser.BIT_XOR);
						this.state = 425;
						this.expr(15);
						}
						break;

					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 426;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 427;
						this.match(BigQueryParser.BIT_OR);
						this.state = 428;
						this.expr(14);
						}
						break;

					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 429;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 448;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
						case 1:
							{
							this.state = 430;
							this.match(BigQueryParser.EQUAL);
							}
							break;

						case 2:
							{
							this.state = 431;
							this.match(BigQueryParser.LESS);
							}
							break;

						case 3:
							{
							this.state = 432;
							this.match(BigQueryParser.GREATER);
							}
							break;

						case 4:
							{
							this.state = 433;
							this.match(BigQueryParser.LEQ);
							}
							break;

						case 5:
							{
							this.state = 434;
							this.match(BigQueryParser.GEQ);
							}
							break;

						case 6:
							{
							this.state = 435;
							this.match(BigQueryParser.NOT_EQUAL);
							}
							break;

						case 7:
							{
							this.state = 437;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === BigQueryParser.NOT) {
								{
								this.state = 436;
								this.match(BigQueryParser.NOT);
								}
							}

							this.state = 439;
							this.match(BigQueryParser.LIKE);
							}
							break;

						case 8:
							{
							this.state = 441;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === BigQueryParser.NOT) {
								{
								this.state = 440;
								this.match(BigQueryParser.NOT);
								}
							}

							this.state = 443;
							this.match(BigQueryParser.BETWEEN);
							this.state = 444;
							this.expr(0);
							this.state = 445;
							this.match(BigQueryParser.AND);
							this.state = 446;
							this.expr(0);
							}
							break;
						}
						this.state = 450;
						this.expr(13);
						}
						break;

					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 451;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 452;
						this.match(BigQueryParser.AND);
						this.state = 453;
						this.expr(8);
						}
						break;

					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 454;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 455;
						this.match(BigQueryParser.OR);
						this.state = 456;
						this.expr(7);
						}
						break;

					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 457;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 458;
						this.match(BigQueryParser.IS);
						this.state = 460;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BigQueryParser.NOT) {
							{
							this.state = 459;
							this.match(BigQueryParser.NOT);
							}
						}

						this.state = 462;
						this.match(BigQueryParser.S_NULL);
						}
						break;

					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, BigQueryParser.RULE_expr);
						this.state = 463;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 465;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BigQueryParser.NOT) {
							{
							this.state = 464;
							this.match(BigQueryParser.NOT);
							}
						}

						this.state = 467;
						this.match(BigQueryParser.IN);
						this.state = 485;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
						case 1:
							{
							{
							this.state = 468;
							this.match(BigQueryParser.LR_BRACKET);
							this.state = 469;
							this.expr(0);
							this.state = 474;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === BigQueryParser.COMMA) {
								{
								{
								this.state = 470;
								this.match(BigQueryParser.COMMA);
								this.state = 471;
								this.expr(0);
								}
								}
								this.state = 476;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 477;
							this.match(BigQueryParser.RR_BRACKET);
							}
							}
							break;

						case 2:
							{
							this.state = 479;
							this.query_statement();
							}
							break;

						case 3:
							{
							this.state = 480;
							this.match(BigQueryParser.UNNEST);
							this.state = 481;
							this.match(BigQueryParser.LR_BRACKET);
							this.state = 482;
							this.array_expr();
							this.state = 483;
							this.match(BigQueryParser.RR_BRACKET);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cast_expr(): Cast_exprContext {
		let _localctx: Cast_exprContext = new Cast_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, BigQueryParser.RULE_cast_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(BigQueryParser.CAST);
			this.state = 493;
			this.match(BigQueryParser.LR_BRACKET);
			this.state = 494;
			this.expr(0);
			this.state = 495;
			this.match(BigQueryParser.AS);
			this.state = 496;
			this.datatype_name();
			this.state = 497;
			this.match(BigQueryParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_expr(): Column_exprContext {
		let _localctx: Column_exprContext = new Column_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, BigQueryParser.RULE_column_expr);
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 499;
				this.match(BigQueryParser.BK_QUOTE);
				this.state = 500;
				this.column_expr();
				this.state = 501;
				this.match(BigQueryParser.BK_QUOTE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 516;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 511;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
					case 1:
						{
						this.state = 506;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
						case 1:
							{
							this.state = 503;
							this.project_name();
							this.state = 504;
							this.match(BigQueryParser.DOT);
							}
							break;
						}
						this.state = 508;
						this.dataset_name();
						this.state = 509;
						this.match(BigQueryParser.DOT);
						}
						break;
					}
					this.state = 513;
					this.table_name();
					this.state = 514;
					this.match(BigQueryParser.DOT);
					}
					break;
				}
				this.state = 518;
				this.column_name();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public except_statement(): Except_statementContext {
		let _localctx: Except_statementContext = new Except_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, BigQueryParser.RULE_except_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(BigQueryParser.EXCEPT);
			this.state = 522;
			this.match(BigQueryParser.LR_BRACKET);
			this.state = 523;
			this.column_name();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BigQueryParser.COMMA) {
				{
				{
				this.state = 524;
				this.match(BigQueryParser.COMMA);
				this.state = 525;
				this.column_name();
				}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 531;
			this.match(BigQueryParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public replace_statement(): Replace_statementContext {
		let _localctx: Replace_statementContext = new Replace_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, BigQueryParser.RULE_replace_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.match(BigQueryParser.REPLACE);
			this.state = 534;
			this.match(BigQueryParser.LR_BRACKET);
			this.state = 535;
			this.expr(0);
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BigQueryParser.BK_QUOTE || _la === BigQueryParser.AS || _la === BigQueryParser.ID) {
				{
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.AS) {
					{
					this.state = 536;
					this.match(BigQueryParser.AS);
					}
				}

				this.state = 539;
				this.alias_name();
				}
			}

			{
			this.state = 542;
			this.match(BigQueryParser.COMMA);
			this.state = 543;
			this.expr(0);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BigQueryParser.BK_QUOTE || _la === BigQueryParser.AS || _la === BigQueryParser.ID) {
				{
				{
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.AS) {
					{
					this.state = 544;
					this.match(BigQueryParser.AS);
					}
				}

				this.state = 547;
				this.alias_name();
				}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 553;
			this.match(BigQueryParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public join_type(): Join_typeContext {
		let _localctx: Join_typeContext = new Join_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, BigQueryParser.RULE_join_type);
		let _la: number;
		try {
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BigQueryParser.INNER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 555;
				this.match(BigQueryParser.INNER);
				}
				break;
			case BigQueryParser.CROSS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 556;
				this.match(BigQueryParser.CROSS);
				}
				break;
			case BigQueryParser.FULL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 557;
				this.match(BigQueryParser.FULL);
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.OUTER) {
					{
					this.state = 558;
					this.match(BigQueryParser.OUTER);
					}
				}

				}
				break;
			case BigQueryParser.LEFT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 561;
				this.match(BigQueryParser.LEFT);
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.OUTER) {
					{
					this.state = 562;
					this.match(BigQueryParser.OUTER);
					}
				}

				}
				break;
			case BigQueryParser.RIGHT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 565;
				this.match(BigQueryParser.RIGHT);
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.OUTER) {
					{
					this.state = 566;
					this.match(BigQueryParser.OUTER);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public on_clause(): On_clauseContext {
		let _localctx: On_clauseContext = new On_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, BigQueryParser.RULE_on_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.match(BigQueryParser.ON);
			this.state = 572;
			this.bool_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set_op(): Set_opContext {
		let _localctx: Set_opContext = new Set_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, BigQueryParser.RULE_set_op);
		let _la: number;
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BigQueryParser.UNION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 574;
				this.match(BigQueryParser.UNION);
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BigQueryParser.ALL || _la === BigQueryParser.DISTINCT) {
					{
					this.state = 575;
					_la = this._input.LA(1);
					if (!(_la === BigQueryParser.ALL || _la === BigQueryParser.DISTINCT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			case BigQueryParser.INTERSECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 578;
				this.match(BigQueryParser.INTERSECT);
				this.state = 579;
				this.match(BigQueryParser.DISTINCT);
				}
				break;
			case BigQueryParser.EXCEPT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 580;
				this.match(BigQueryParser.EXCEPT);
				this.state = 581;
				this.match(BigQueryParser.DISTINCT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public using_clause(): Using_clauseContext {
		let _localctx: Using_clauseContext = new Using_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, BigQueryParser.RULE_using_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(BigQueryParser.USING);
			this.state = 585;
			this.match(BigQueryParser.LR_BRACKET);
			this.state = 586;
			this.join_name();
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BigQueryParser.COMMA) {
				{
				{
				this.state = 587;
				this.match(BigQueryParser.COMMA);
				this.state = 588;
				this.join_name();
				}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 594;
			this.match(BigQueryParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_path(): Field_pathContext {
		let _localctx: Field_pathContext = new Field_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, BigQueryParser.RULE_field_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sstruct(): SstructContext {
		let _localctx: SstructContext = new SstructContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, BigQueryParser.RULE_sstruct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(BigQueryParser.SSTRUCT);
			this.state = 599;
			this.match(BigQueryParser.LESS);
			this.state = 600;
			this.datatype_name();
			this.state = 601;
			this.match(BigQueryParser.GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_expr(): Array_exprContext {
		let _localctx: Array_exprContext = new Array_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, BigQueryParser.RULE_array_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.match(BigQueryParser.ARRAY);
			this.state = 604;
			this.match(BigQueryParser.LESS);
			this.state = 605;
			this.datatype_name();
			this.state = 606;
			this.match(BigQueryParser.GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_path(): Array_pathContext {
		let _localctx: Array_pathContext = new Array_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, BigQueryParser.RULE_array_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_expression(): Bool_expressionContext {
		let _localctx: Bool_expressionContext = new Bool_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, BigQueryParser.RULE_bool_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public window_name(): Window_nameContext {
		let _localctx: Window_nameContext = new Window_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, BigQueryParser.RULE_window_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public window_definition(): Window_definitionContext {
		let _localctx: Window_definitionContext = new Window_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, BigQueryParser.RULE_window_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public count(): CountContext {
		let _localctx: CountContext = new CountContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, BigQueryParser.RULE_count);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skip_rows(): Skip_rowsContext {
		let _localctx: Skip_rowsContext = new Skip_rowsContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, BigQueryParser.RULE_skip_rows);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_statement(): With_statementContext {
		let _localctx: With_statementContext = new With_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, BigQueryParser.RULE_with_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.match(BigQueryParser.WITH);
			this.state = 621;
			this.cte_name();
			this.state = 622;
			this.match(BigQueryParser.AS);
			this.state = 623;
			this.match(BigQueryParser.LR_BRACKET);
			this.state = 624;
			this.query_expr(0);
			this.state = 625;
			this.match(BigQueryParser.RR_BRACKET);
			this.state = 635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BigQueryParser.COMMA) {
				{
				{
				this.state = 626;
				this.match(BigQueryParser.COMMA);
				this.state = 627;
				this.cte_name();
				this.state = 628;
				this.match(BigQueryParser.AS);
				this.state = 629;
				this.match(BigQueryParser.LR_BRACKET);
				this.state = 630;
				this.query_expr(0);
				this.state = 631;
				this.match(BigQueryParser.RR_BRACKET);
				}
				}
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, BigQueryParser.RULE_name);
		try {
			this.state = 642;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BigQueryParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 638;
				this.match(BigQueryParser.ID);
				}
				break;
			case BigQueryParser.BK_QUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 639;
				this.match(BigQueryParser.BK_QUOTE);
				this.state = 640;
				this.match(BigQueryParser.ID);
				this.state = 641;
				this.match(BigQueryParser.BK_QUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alias_name(): Alias_nameContext {
		let _localctx: Alias_nameContext = new Alias_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, BigQueryParser.RULE_alias_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_name(): Array_nameContext {
		let _localctx: Array_nameContext = new Array_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, BigQueryParser.RULE_array_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_name(): Column_nameContext {
		let _localctx: Column_nameContext = new Column_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, BigQueryParser.RULE_column_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cte_name(): Cte_nameContext {
		let _localctx: Cte_nameContext = new Cte_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, BigQueryParser.RULE_cte_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataset_name(): Dataset_nameContext {
		let _localctx: Dataset_nameContext = new Dataset_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, BigQueryParser.RULE_dataset_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datatype_name(): Datatype_nameContext {
		let _localctx: Datatype_nameContext = new Datatype_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, BigQueryParser.RULE_datatype_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, BigQueryParser.RULE_function_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public join_name(): Join_nameContext {
		let _localctx: Join_nameContext = new Join_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, BigQueryParser.RULE_join_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_name(): Member_nameContext {
		let _localctx: Member_nameContext = new Member_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, BigQueryParser.RULE_member_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public project_name(): Project_nameContext {
		let _localctx: Project_nameContext = new Project_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, BigQueryParser.RULE_project_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_name(): Struct_nameContext {
		let _localctx: Struct_nameContext = new Struct_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, BigQueryParser.RULE_struct_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_name(): Table_nameContext {
		let _localctx: Table_nameContext = new Table_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, BigQueryParser.RULE_table_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pure_project_name(): Pure_project_nameContext {
		let _localctx: Pure_project_nameContext = new Pure_project_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, BigQueryParser.RULE_pure_project_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.match(BigQueryParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pure_dataset_name(): Pure_dataset_nameContext {
		let _localctx: Pure_dataset_nameContext = new Pure_dataset_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, BigQueryParser.RULE_pure_dataset_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.match(BigQueryParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pure_table_name(): Pure_table_nameContext {
		let _localctx: Pure_table_nameContext = new Pure_table_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, BigQueryParser.RULE_pure_table_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.match(BigQueryParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_expr(): Table_exprContext {
		let _localctx: Table_exprContext = new Table_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, BigQueryParser.RULE_table_expr);
		try {
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 682;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 677;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
					case 1:
						{
						this.state = 674;
						this.project_name();
						this.state = 675;
						this.match(BigQueryParser.DOT);
						}
						break;
					}
					this.state = 679;
					this.dataset_name();
					this.state = 680;
					this.match(BigQueryParser.DOT);
					}
					break;
				}
				this.state = 684;
				this.table_name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
				this.match(BigQueryParser.BK_QUOTE);
				{
				this.state = 694;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 689;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
					case 1:
						{
						this.state = 686;
						this.pure_project_name();
						this.state = 687;
						this.match(BigQueryParser.DOT);
						}
						break;
					}
					this.state = 691;
					this.pure_dataset_name();
					this.state = 692;
					this.match(BigQueryParser.DOT);
					}
					break;
				}
				this.state = 696;
				this.pure_table_name();
				}
				this.state = 698;
				this.match(BigQueryParser.BK_QUOTE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, BigQueryParser.RULE_number);
		try {
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BigQueryParser.INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				this.integer_type();
				}
				break;
			case BigQueryParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 703;
				this.float_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer_type(): Integer_typeContext {
		let _localctx: Integer_typeContext = new Integer_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, BigQueryParser.RULE_integer_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(BigQueryParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public float_type(): Float_typeContext {
		let _localctx: Float_typeContext = new Float_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, BigQueryParser.RULE_float_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(BigQueryParser.FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, BigQueryParser.RULE_string);
		try {
			this.state = 716;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BigQueryParser.QUOTED_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 710;
				this.quoted_string();
				}
				break;
			case BigQueryParser.TRIPLE_QUOTED_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 711;
				this.triple_quoted_string();
				}
				break;
			case BigQueryParser.RAW_STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 712;
				this.raw_string();
				}
				break;
			case BigQueryParser.BYTE_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 713;
				this.byte_string();
				}
				break;
			case BigQueryParser.RAW_BYTE_STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 714;
				this.raw_byte_string();
				}
				break;
			case BigQueryParser.BK_QUOTE:
			case BigQueryParser.ID:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 715;
				this.special_string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quoted_string(): Quoted_stringContext {
		let _localctx: Quoted_stringContext = new Quoted_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, BigQueryParser.RULE_quoted_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(BigQueryParser.QUOTED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triple_quoted_string(): Triple_quoted_stringContext {
		let _localctx: Triple_quoted_stringContext = new Triple_quoted_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, BigQueryParser.RULE_triple_quoted_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.match(BigQueryParser.TRIPLE_QUOTED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_string(): Raw_stringContext {
		let _localctx: Raw_stringContext = new Raw_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, BigQueryParser.RULE_raw_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.match(BigQueryParser.RAW_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public byte_string(): Byte_stringContext {
		let _localctx: Byte_stringContext = new Byte_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, BigQueryParser.RULE_byte_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(BigQueryParser.BYTE_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_byte_string(): Raw_byte_stringContext {
		let _localctx: Raw_byte_stringContext = new Raw_byte_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, BigQueryParser.RULE_raw_byte_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.match(BigQueryParser.RAW_BYTE_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public special_string(): Special_stringContext {
		let _localctx: Special_stringContext = new Special_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, BigQueryParser.RULE_special_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.datatype_name();
			this.state = 729;
			this.match(BigQueryParser.QUOTED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, BigQueryParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			_la = this._input.LA(1);
			if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (BigQueryParser.ALL - 43)) | (1 << (BigQueryParser.AND - 43)) | (1 << (BigQueryParser.ANY - 43)) | (1 << (BigQueryParser.ARRAY - 43)) | (1 << (BigQueryParser.AS - 43)) | (1 << (BigQueryParser.ASC - 43)) | (1 << (BigQueryParser.ASSERT_ROWS_MODIFIED - 43)) | (1 << (BigQueryParser.AT - 43)) | (1 << (BigQueryParser.BETWEEN - 43)) | (1 << (BigQueryParser.BY - 43)) | (1 << (BigQueryParser.CASE - 43)) | (1 << (BigQueryParser.CAST - 43)) | (1 << (BigQueryParser.COLLATE - 43)) | (1 << (BigQueryParser.CONTAINS - 43)) | (1 << (BigQueryParser.CREATE - 43)) | (1 << (BigQueryParser.CROSS - 43)) | (1 << (BigQueryParser.CUBE - 43)) | (1 << (BigQueryParser.CURRENT - 43)) | (1 << (BigQueryParser.DEFAULT - 43)) | (1 << (BigQueryParser.DEFINE - 43)) | (1 << (BigQueryParser.DESC - 43)) | (1 << (BigQueryParser.DISTINCT - 43)) | (1 << (BigQueryParser.ELSE - 43)) | (1 << (BigQueryParser.END - 43)) | (1 << (BigQueryParser.ENUM - 43)) | (1 << (BigQueryParser.ESCAPE - 43)) | (1 << (BigQueryParser.EXCEPT - 43)) | (1 << (BigQueryParser.EXCLUDE - 43)) | (1 << (BigQueryParser.EXISTS - 43)) | (1 << (BigQueryParser.EXTRACT - 43)) | (1 << (BigQueryParser.FALSE - 43)) | (1 << (BigQueryParser.FETCH - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (BigQueryParser.FOLLOWING - 75)) | (1 << (BigQueryParser.FOR - 75)) | (1 << (BigQueryParser.FROM - 75)) | (1 << (BigQueryParser.FULL - 75)) | (1 << (BigQueryParser.GROUP - 75)) | (1 << (BigQueryParser.GROUPING - 75)) | (1 << (BigQueryParser.GROUPS - 75)) | (1 << (BigQueryParser.HASH - 75)) | (1 << (BigQueryParser.HAVING - 75)) | (1 << (BigQueryParser.IF - 75)) | (1 << (BigQueryParser.IGNORE - 75)) | (1 << (BigQueryParser.IN - 75)) | (1 << (BigQueryParser.INNER - 75)) | (1 << (BigQueryParser.INTERSECT - 75)) | (1 << (BigQueryParser.INTERVAL - 75)) | (1 << (BigQueryParser.INTO - 75)) | (1 << (BigQueryParser.IS - 75)) | (1 << (BigQueryParser.JOIN - 75)) | (1 << (BigQueryParser.LATERAL - 75)) | (1 << (BigQueryParser.LEFT - 75)) | (1 << (BigQueryParser.LIKE - 75)) | (1 << (BigQueryParser.LIMIT - 75)) | (1 << (BigQueryParser.LOOKUP - 75)) | (1 << (BigQueryParser.MERGE - 75)) | (1 << (BigQueryParser.NATURAL - 75)) | (1 << (BigQueryParser.NEW - 75)) | (1 << (BigQueryParser.NO - 75)) | (1 << (BigQueryParser.NOT - 75)) | (1 << (BigQueryParser.S_NULL - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (BigQueryParser.NULLS - 107)) | (1 << (BigQueryParser.OF - 107)) | (1 << (BigQueryParser.OFFSET - 107)) | (1 << (BigQueryParser.ON - 107)) | (1 << (BigQueryParser.OR - 107)) | (1 << (BigQueryParser.ORDER - 107)) | (1 << (BigQueryParser.ORDINAL - 107)) | (1 << (BigQueryParser.OUTER - 107)) | (1 << (BigQueryParser.OVER - 107)) | (1 << (BigQueryParser.PARTITION - 107)) | (1 << (BigQueryParser.PRECEDING - 107)) | (1 << (BigQueryParser.PROTO - 107)) | (1 << (BigQueryParser.RANGE - 107)) | (1 << (BigQueryParser.RECURSIVE - 107)) | (1 << (BigQueryParser.REPLACE - 107)) | (1 << (BigQueryParser.RESPECT - 107)) | (1 << (BigQueryParser.RIGHT - 107)) | (1 << (BigQueryParser.ROLLUP - 107)) | (1 << (BigQueryParser.ROWS - 107)) | (1 << (BigQueryParser.SAFE_OFFSET - 107)) | (1 << (BigQueryParser.SAFE_ORDINAL - 107)) | (1 << (BigQueryParser.SELECT - 107)) | (1 << (BigQueryParser.SET - 107)) | (1 << (BigQueryParser.SOME - 107)) | (1 << (BigQueryParser.SSTRUCT - 107)) | (1 << (BigQueryParser.SYSTEM - 107)) | (1 << (BigQueryParser.TABLESAMPLE - 107)) | (1 << (BigQueryParser.THEN - 107)) | (1 << (BigQueryParser.TIME - 107)) | (1 << (BigQueryParser.TO - 107)) | (1 << (BigQueryParser.TREAT - 107)) | (1 << (BigQueryParser.TRUE - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (BigQueryParser.UNBOUNDED - 139)) | (1 << (BigQueryParser.UNION - 139)) | (1 << (BigQueryParser.UNNEST - 139)) | (1 << (BigQueryParser.USING - 139)) | (1 << (BigQueryParser.WHEN - 139)) | (1 << (BigQueryParser.WHERE - 139)) | (1 << (BigQueryParser.WINDOW - 139)) | (1 << (BigQueryParser.WITH - 139)) | (1 << (BigQueryParser.WITHIN - 139)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.query_expr_sempred(_localctx as Query_exprContext, predIndex);

		case 5:
			return this.from_item_sempred(_localctx as From_itemContext, predIndex);

		case 13:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private query_expr_sempred(_localctx: Query_exprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private from_item_sempred(_localctx: From_itemContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
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
			return this.precpred(this._ctx, 12);

		case 9:
			return this.precpred(this._ctx, 7);

		case 10:
			return this.precpred(this._ctx, 6);

		case 11:
			return this.precpred(this._ctx, 11);

		case 12:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9F\u02E0\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x03\x02\x03\x02\x03\x03\x05\x03~\n\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x05\x04\x85\n\x04\x03\x04\x05\x04\x88\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\x8E\n\x04\x03\x04\x05\x04\x91\n\x04\x05\x04\x93" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x99\n\x04\x03\x04\x05\x04" +
		"\x9C\n\x04\x07\x04\x9E\n\x04\f\x04\x0E\x04\xA1\v\x04\x03\x05\x03\x05\x05" +
		"\x05\xA5\n\x05\x03\x05\x05\x05\xA8\n\x05\x03\x05\x05\x05\xAB\n\x05\x03" +
		"\x05\x03\x05\x05\x05\xAF\n\x05\x03\x05\x05\x05\xB2\n\x05\x03\x05\x03\x05" +
		"\x05\x05\xB6\n\x05\x03\x05\x05\x05\xB9\n\x05\x05\x05\xBB\n\x05\x03\x05" +
		"\x03\x05\x05\x05\xBF\n\x05\x03\x05\x03\x05\x05\x05\xC3\n\x05\x03\x05\x05" +
		"\x05\xC6\n\x05\x03\x05\x03\x05\x05\x05\xCA\n\x05\x03\x05\x05\x05\xCD\n" +
		"\x05\x05\x05\xCF\n\x05\x07\x05\xD1\n\x05\f\x05\x0E\x05\xD4\v\x05\x03\x05" +
		"\x05\x05\xD7\n\x05\x03\x05\x05\x05\xDA\n\x05\x03\x05\x05\x05\xDD\n\x05" +
		"\x03\x05\x05\x05\xE0\n\x05\x03\x05\x05\x05\xE3\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x07\x06\xE9\n\x06\f\x06\x0E\x06\xEC\v\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xF1\n\x07\x03\x07\x05\x07\xF4\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\xFC\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u0102\n\x07\x03\x07\x05\x07\u0105\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\u010C\n\x07\x03\x07\x05\x07\u010F\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\u0114\n\x07\x03\x07\x05\x07\u0117\n\x07" +
		"\x03\x07\x03\x07\x05\x07\u011B\n\x07\x03\x07\x05\x07\u011E\n\x07\x05\x07" +
		"\u0120\n\x07\x03\x07\x03\x07\x05\x07\u0124\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u012A\n\x07\x07\x07\u012C\n\x07\f\x07\x0E\x07\u012F\v" +
		"\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0139\n\t\f" +
		"\t\x0E\t\u013C\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0143\n\t\f\t\x0E" +
		"\t\u0146\v\t\x03\t\x03\t\x05\t\u014A\n\t\x03\n\x03\n\x03\n\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\f\u015A\n\f" +
		"\x03\f\x03\f\x03\f\x05\f\u015F\n\f\x07\f\u0161\n\f\f\f\x0E\f\u0164\v\f" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u016A\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u017E\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0183\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\u018B\n\x0F\f\x0F\x0E\x0F\u018E\v\x0F\x03\x0F\x05\x0F" +
		"\u0191\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u019C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01B8\n\x0F\x03\x0F\x03\x0F\x05\x0F\u01BC" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01C3\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u01CF\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01D4\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01DB\n\x0F\f\x0F\x0E\x0F" +
		"\u01DE\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u01E8\n\x0F\x07\x0F\u01EA\n\x0F\f\x0F\x0E\x0F\u01ED\v\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01FD\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u0202\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0207" +
		"\n\x11\x03\x11\x05\x11\u020A\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\u0211\n\x12\f\x12\x0E\x12\u0214\v\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u021C\n\x13\x03\x13\x05\x13\u021F" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0224\n\x13\x03\x13\x07\x13\u0227" +
		"\n\x13\f\x13\x0E\x13\u022A\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u0232\n\x14\x03\x14\x03\x14\x05\x14\u0236\n\x14\x03\x14" +
		"\x03\x14\x05\x14\u023A\n\x14\x05\x14\u023C\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x05\x16\u0243\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0249\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0250" +
		"\n\x17\f\x17\x0E\x17\u0253\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x07!\u027C\n!\f!\x0E!\u027F\v!\x03\"\x03\"\x03\"\x03\"\x05" +
		"\"\u0285\n\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(" +
		"\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03" +
		"/\x03/\x030\x030\x031\x031\x032\x032\x032\x052\u02A8\n2\x032\x032\x03" +
		"2\x052\u02AD\n2\x032\x032\x032\x032\x032\x052\u02B4\n2\x032\x032\x032" +
		"\x052\u02B9\n2\x032\x032\x032\x032\x052\u02BF\n2\x033\x033\x053\u02C3" +
		"\n3\x034\x034\x035\x035\x036\x036\x036\x036\x036\x036\x056\u02CF\n6\x03" +
		"7\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03<\x03=\x03" +
		"=\x03=\x02\x02\x05\x06\f\x1C>\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02\x02\n\x04\x02--BB\x04\x0222AA\x04\x02()kk\x05\x02ooss" +
		"\x80\x81\x03\x02$%\x03\x02\'(\x03\x02\v\f\x04\x02-\\`\x95\x02\u0321\x02" +
		"z\x03\x02\x02\x02\x04}\x03\x02\x02\x02\x06\x92\x03\x02\x02\x02\b\xA2\x03" +
		"\x02\x02\x02\n\xE4\x03\x02\x02\x02\f\u011F\x03\x02\x02\x02\x0E\u0130\x03" +
		"\x02\x02\x02\x10\u0133\x03\x02\x02\x02\x12\u014B\x03\x02\x02\x02\x14\u014E" +
		"\x03\x02\x02\x02\x16\u0155\x03\x02\x02\x02\x18\u0165\x03\x02\x02\x02\x1A" +
		"\u016B\x03\x02\x02\x02\x1C\u019B\x03\x02\x02\x02\x1E\u01EE\x03\x02\x02" +
		"\x02 \u0209\x03\x02\x02\x02\"\u020B\x03\x02\x02\x02$\u0217\x03\x02\x02" +
		"\x02&\u023B\x03\x02\x02\x02(\u023D\x03\x02\x02\x02*\u0248\x03\x02\x02" +
		"\x02,\u024A\x03\x02\x02\x02.\u0256\x03\x02\x02\x020\u0258\x03\x02\x02" +
		"\x022\u025D\x03\x02\x02\x024\u0262\x03\x02\x02\x026\u0264\x03\x02\x02" +
		"\x028\u0266\x03\x02\x02\x02:\u0268\x03\x02\x02\x02<\u026A\x03\x02\x02" +
		"\x02>\u026C\x03\x02\x02\x02@\u026E\x03\x02\x02\x02B\u0284\x03\x02\x02" +
		"\x02D\u0286\x03\x02\x02\x02F\u0288\x03\x02\x02\x02H\u028A\x03\x02\x02" +
		"\x02J\u028C\x03\x02\x02\x02L\u028E\x03\x02\x02\x02N\u0290\x03\x02\x02" +
		"\x02P\u0292\x03\x02\x02\x02R\u0294\x03\x02\x02\x02T\u0296\x03\x02\x02" +
		"\x02V\u0298\x03\x02\x02\x02X\u029A\x03\x02\x02\x02Z\u029C\x03\x02\x02" +
		"\x02\\\u029E\x03\x02\x02\x02^\u02A0\x03\x02\x02\x02`\u02A2\x03\x02\x02" +
		"\x02b\u02BE\x03\x02\x02\x02d\u02C2\x03\x02\x02\x02f\u02C4\x03\x02\x02" +
		"\x02h\u02C6\x03\x02\x02\x02j\u02CE\x03\x02\x02\x02l\u02D0\x03\x02\x02" +
		"\x02n\u02D2\x03\x02\x02\x02p\u02D4\x03\x02\x02\x02r\u02D6\x03\x02\x02" +
		"\x02t\u02D8\x03\x02\x02\x02v\u02DA\x03\x02\x02\x02x\u02DD\x03\x02\x02" +
		"\x02z{\x05\x04\x03\x02{\x03\x03\x02\x02\x02|~\x05@!\x02}|\x03\x02\x02" +
		"\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x05\x06\x04\x02\x80" +
		"\x05\x03\x02\x02\x02\x81\x82\b\x04\x01\x02\x82\x84\x05\b\x05\x02\x83\x85" +
		"\x05\x16\f\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87" +
		"\x03\x02\x02\x02\x86\x88\x05\x18\r\x02\x87\x86\x03\x02\x02\x02\x87\x88" +
		"\x03\x02\x02\x02\x88\x93\x03\x02\x02\x02\x89\x8A\x07\x1D\x02\x02\x8A\x8B" +
		"\x05\x06\x04\x02\x8B\x8D\x07\x1E\x02\x02\x8C\x8E\x05\x16\f\x02\x8D\x8C" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x91" +
		"\x05\x18\r\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93" +
		"\x03\x02\x02\x02\x92\x81\x03\x02\x02\x02\x92\x89\x03\x02\x02\x02\x93\x9F" +
		"\x03\x02\x02\x02\x94\x95\f\x03\x02\x02\x95\x96\x05*\x16\x02\x96\x98\x05" +
		"\x06\x04\x02\x97\x99\x05\x16\f\x02\x98\x97\x03\x02\x02\x02\x98\x99\x03" +
		"\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x9C\x05\x18\r\x02\x9B\x9A\x03" +
		"\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x94\x03" +
		"\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03" +
		"\x02\x02\x02\xA0\x07\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA4\x07" +
		"\x82\x02\x02\xA3\xA5\t\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03" +
		"\x02\x02\x02\xA5\xBA\x03\x02\x02\x02\xA6\xA8\x05\x1C\x0F\x02\xA7\xA6\x03" +
		"\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xAB\x07" +
		"\x19\x02\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xAE\x07$\x02\x02\xAD\xAF\x05\"\x12\x02\xAE\xAD\x03\x02" +
		"\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xB2\x05$" +
		"\x13\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xBB\x03\x02" +
		"\x02\x02\xB3\xB8\x05\x1C\x0F\x02\xB4\xB6\x071\x02\x02\xB5\xB4\x03\x02" +
		"\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x05D" +
		"#\x02\xB8\xB5\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02" +
		"\x02\x02\xBA\xA7\x03\x02\x02\x02\xBA\xB3\x03\x02\x02\x02\xBB\xD2\x03\x02" +
		"\x02\x02\xBC\xCE\x07!\x02\x02\xBD\xBF\x05\x1C\x0F\x02\xBE\xBD\x03\x02" +
		"\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x07$" +
		"\x02\x02\xC1\xC3\x05\"\x12\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC6\x05$\x13\x02\xC5\xC4\x03\x02" +
		"\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xCF\x03\x02\x02\x02\xC7\xCC\x05\x1C" +
		"\x0F\x02\xC8\xCA\x071\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02" +
		"\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x05D#\x02\xCC\xC9\x03\x02\x02" +
		"\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xBE\x03\x02\x02" +
		"\x02\xCE\xC7\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xBC\x03\x02\x02" +
		"\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02" +
		"\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD7\x05\n\x06" +
		"\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03\x02\x02" +
		"\x02\xD8\xDA\x05\x0E\b\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02" +
		"\x02\xDA\xDC\x03\x02\x02\x02\xDB\xDD\x05\x10\t\x02\xDC\xDB\x03\x02\x02" +
		"\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xE0\x05\x12\n" +
		"\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02\x02" +
		"\x02\xE1\xE3\x05\x14\v\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02" +
		"\x02\xE3\t\x03\x02\x02\x02\xE4\xE5\x07O\x02\x02\xE5\xEA\x05\f\x07\x02" +
		"\xE6\xE7\x07!\x02\x02\xE7\xE9\x05\f\x07\x02\xE8\xE6\x03\x02\x02\x02\xE9" +
		"\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB" +
		"\v\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\b\x07\x01\x02\xEE\xF3" +
		"\x05b2\x02\xEF\xF1\x071\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02" +
		"\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x05D#\x02\xF3\xF0\x03\x02\x02" +
		"\x02\xF3\xF4\x03\x02\x02\x02\xF4\xFB\x03\x02\x02\x02\xF5\xF6\x07N\x02" +
		"\x02\xF6\xF7\x07\x86\x02\x02\xF7\xF8\x07\x89\x02\x02\xF8\xF9\x071\x02" +
		"\x02\xF9\xFA\x07n\x02\x02\xFA\xFC\x05j6\x02\xFB\xF5\x03\x02\x02\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC\u0120\x03\x02\x02\x02\xFD\xFE\x07\x1D\x02\x02" +
		"\xFE\xFF\x05\x04\x03\x02\xFF\u0104\x07\x1E\x02\x02\u0100\u0102\x071\x02" +
		"\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103" +
		"\x03\x02\x02\x02\u0103\u0105\x05D#\x02\u0104\u0101\x03\x02\x02\x02\u0104" +
		"\u0105\x03\x02\x02\x02\u0105\u0120\x03\x02\x02\x02\u0106\u0107\x07\x8F" +
		"\x02\x02\u0107\u0108\x07\x1D\x02\x02\u0108\u0109\x052\x1A\x02\u0109\u010E" +
		"\x07\x1E\x02\x02\u010A\u010C\x071\x02\x02\u010B\u010A\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010F\x05" +
		"D#\x02\u010E\u010B\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0116" +
		"\x03\x02\x02\x02\u0110\u0111\x07\x94\x02\x02\u0111\u0113\x07o\x02\x02" +
		"\u0112\u0114\x071\x02\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03" +
		"\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117\x05D#\x02\u0116\u0110" +
		"\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0120\x03\x02\x02\x02" +
		"\u0118\u011D\x05J&\x02\u0119\u011B\x071\x02\x02\u011A\u0119\x03\x02\x02" +
		"\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011E" +
		"\x05D#\x02\u011D\u011A\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
		"\u0120\x03\x02\x02\x02\u011F\xED\x03\x02\x02\x02\u011F\xFD\x03\x02\x02" +
		"\x02\u011F\u0106\x03\x02\x02\x02\u011F\u0118\x03\x02\x02\x02\u0120\u012D" +
		"\x03\x02\x02\x02\u0121\u0123\f\x06\x02\x02\u0122\u0124\x05&\x14\x02\u0123" +
		"\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0125\x03\x02" +
		"\x02\x02\u0125\u0126\x07a\x02\x02\u0126\u0129\x05\f\x07\x02\u0127\u012A" +
		"\x05(\x15\x02\u0128\u012A\x05,\x17\x02\u0129\u0127\x03\x02\x02\x02\u0129" +
		"\u0128\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0121\x03\x02" +
		"\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D" +
		"\u012E\x03\x02\x02\x02\u012E\r\x03\x02\x02\x02\u012F\u012D\x03\x02\x02" +
		"\x02\u0130\u0131\x07\x92\x02\x02\u0131\u0132\x056\x1C\x02\u0132\x0F\x03" +
		"\x02\x02\x02\u0133\u0134\x07Q\x02\x02\u0134\u0149\x076\x02\x02\u0135\u013A" +
		"\x05\x1C\x0F\x02\u0136\u0137\x07!\x02\x02\u0137\u0139\x05\x1C\x0F\x02" +
		"\u0138\u0136\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03" +
		"\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u014A\x03\x02\x02\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u013E\x07~\x02\x02\u013E\u013F\x07\x1D\x02" +
		"\x02\u013F\u0144\x05\x1C\x0F\x02\u0140\u0141\x07!\x02\x02\u0141\u0143" +
		"\x05\x1C\x0F\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02" +
		"\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x03" +
		"\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u0148\x07\x1E\x02\x02\u0148" +
		"\u014A\x03\x02\x02\x02\u0149\u0135\x03\x02\x02\x02\u0149\u013D\x03\x02" +
		"\x02\x02\u014A\x11\x03\x02\x02\x02\u014B\u014C\x07U\x02\x02\u014C\u014D" +
		"\x056\x1C\x02\u014D\x13\x03\x02\x02\x02\u014E\u014F\x07\x93\x02\x02\u014F" +
		"\u0150\x058\x1D\x02\u0150\u0151\x071\x02\x02\u0151\u0152\x07\x1D\x02\x02" +
		"\u0152\u0153\x05:\x1E\x02\u0153\u0154\x07\x1E\x02\x02\u0154\x15\x03\x02" +
		"\x02\x02\u0155\u0156\x07r\x02\x02\u0156\u0157\x076\x02\x02\u0157\u0159" +
		"\x05\x1C\x0F\x02\u0158\u015A\t\x03\x02\x02\u0159\u0158\x03\x02\x02\x02" +
		"\u0159\u015A\x03\x02\x02\x02\u015A\u0162\x03\x02\x02\x02\u015B\u015C\x07" +
		"!\x02\x02\u015C\u015E\x05\x1C\x0F\x02\u015D\u015F\t\x03\x02\x02\u015E" +
		"\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0161\x03\x02" +
		"\x02\x02\u0160\u015B\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162" +
		"\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\x17\x03\x02\x02" +
		"\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0166\x07e\x02\x02\u0166\u0169" +
		"\x05<\x1F\x02\u0167\u0168\x07o\x02\x02\u0168\u016A\x05> \x02\u0169\u0167" +
		"\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\x19\x03\x02\x02\x02" +
		"\u016B\u016C\t\x04\x02\x02\u016C\x1B\x03\x02\x02\x02\u016D\u016E\b\x0F" +
		"\x01\x02\u016E\u019C\x05d3\x02\u016F\u019C\x05j6\x02\u0170\u0171\x05F" +
		"$\x02\u0171\u0172\x07\x1F\x02\x02\u0172\u0173\t\x05\x02\x02\u0173\u0174" +
		"\x07\x1D\x02\x02\u0174\u0175\x05\x1C\x0F\x02\u0175\u0176\x07\x1E\x02\x02" +
		"\u0176\u0177\x07 \x02\x02\u0177\u019C\x03\x02\x02\x02\u0178\u0179\x05" +
		"\x1A\x0E\x02\u0179\u017A\x05\x1C\x0F\x15\u017A\u019C\x03\x02\x02\x02\u017B" +
		"\u017D\x07`\x02\x02\u017C\u017E\x07k\x02\x02\u017D\u017C\x03\x02\x02\x02" +
		"\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u019C\x07" +
		"\x8C\x02\x02\u0180\u0182\x07`\x02\x02\u0181\u0183\x07k\x02\x02\u0182\u0181" +
		"\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02" +
		"\u0184\u019C\x07K\x02\x02\u0185\u0186\x05P)\x02\u0186\u0190\x07\x1D\x02" +
		"\x02\u0187\u018C\x05\x1C\x0F\x02\u0188\u0189\x07!\x02\x02\u0189\u018B" +
		"\x05\x1C\x0F\x02\u018A\u0188\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02" +
		"\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u0191\x03" +
		"\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0191\x07$\x02\x02\u0190" +
		"\u0187\x03\x02\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02" +
		"\x02\x02\u0192\u0193\x07\x1E\x02\x02\u0193\u019C\x03\x02\x02\x02\u0194" +
		"\u019C\x05\x1E\x10\x02\u0195\u0196\x07\x1D\x02\x02\u0196\u0197\x05\x1C" +
		"\x0F\x02\u0197\u0198\x07\x1E\x02\x02\u0198\u019C\x03\x02\x02\x02\u0199" +
		"\u019C\x05 \x11\x02\u019A\u019C\x05x=\x02\u019B\u016D\x03\x02\x02\x02" +
		"\u019B\u016F\x03\x02\x02\x02\u019B\u0170\x03\x02\x02\x02\u019B\u0178\x03" +
		"\x02\x02\x02\u019B\u017B\x03\x02\x02\x02\u019B\u0180\x03\x02\x02\x02\u019B" +
		"\u0185\x03\x02\x02\x02\u019B\u0194\x03\x02\x02\x02\u019B\u0195\x03\x02" +
		"\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C" +
		"\u01EB\x03\x02\x02\x02\u019D\u019E\f\x14\x02\x02\u019E\u019F\t\x06\x02" +
		"\x02\u019F\u01EA\x05\x1C\x0F\x15\u01A0\u01A1\f\x13\x02\x02\u01A1\u01A2" +
		"\t\x07\x02\x02\u01A2\u01EA\x05\x1C\x0F\x14\u01A3\u01A4\f\x12\x02\x02\u01A4" +
		"\u01A5\t\b\x02\x02\u01A5\u01EA\x05\x1C\x0F\x13\u01A6\u01A7\f\x11\x02\x02" +
		"\u01A7\u01A8\x07+\x02\x02\u01A8\u01EA\x05\x1C\x0F\x12\u01A9\u01AA\f\x10" +
		"\x02\x02\u01AA\u01AB\x07,\x02\x02\u01AB\u01EA\x05\x1C\x0F\x11\u01AC\u01AD" +
		"\f\x0F\x02\x02\u01AD\u01AE\x07*\x02\x02\u01AE\u01EA\x05\x1C\x0F\x10\u01AF" +
		"\u01C2\f\x0E\x02\x02\u01B0\u01C3\x07\x07\x02\x02\u01B1\u01C3\x07\n\x02" +
		"\x02\u01B2\u01C3\x07\t\x02\x02\u01B3\u01C3\x07\r\x02\x02\u01B4\u01C3\x07" +
		"\x0E\x02\x02\u01B5\u01C3\x07\b\x02\x02\u01B6\u01B8\x07k\x02\x02\u01B7" +
		"\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x03\x02" +
		"\x02\x02\u01B9\u01C3\x07d\x02\x02\u01BA\u01BC\x07k\x02\x02\u01BB\u01BA" +
		"\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02" +
		"\u01BD\u01BE\x075\x02\x02\u01BE\u01BF\x05\x1C\x0F\x02\u01BF\u01C0\x07" +
		".\x02\x02\u01C0\u01C1\x05\x1C\x0F\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2" +
		"\u01B0\x03\x02\x02\x02\u01C2\u01B1\x03\x02\x02\x02\u01C2\u01B2\x03\x02" +
		"\x02\x02\u01C2\u01B3\x03\x02\x02\x02\u01C2\u01B4\x03\x02\x02\x02\u01C2" +
		"\u01B5\x03\x02\x02\x02\u01C2\u01B7\x03\x02\x02\x02\u01C2\u01BB\x03\x02" +
		"\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01EA\x05\x1C\x0F\x0F\u01C5" +
		"\u01C6\f\t\x02\x02\u01C6\u01C7\x07.\x02\x02\u01C7\u01EA\x05\x1C\x0F\n" +
		"\u01C8\u01C9\f\b\x02\x02\u01C9\u01CA\x07q\x02\x02\u01CA\u01EA\x05\x1C" +
		"\x0F\t\u01CB\u01CC\f\r\x02\x02\u01CC\u01CE\x07`\x02\x02\u01CD\u01CF\x07" +
		"k\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01EA\x07l\x02\x02\u01D1\u01D3\f\n\x02\x02" +
		"\u01D2\u01D4\x07k\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01E7\x07X\x02\x02\u01D6" +
		"\u01D7\x07\x1D\x02\x02\u01D7\u01DC\x05\x1C\x0F\x02\u01D8\u01D9\x07!\x02" +
		"\x02\u01D9\u01DB\x05\x1C\x0F\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE" +
		"\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02" +
		"\u01DD\u01DF\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E0\x07" +
		"\x1E\x02\x02\u01E0\u01E8\x03\x02\x02\x02\u01E1\u01E8\x05\x04\x03\x02\u01E2" +
		"\u01E3\x07\x8F\x02\x02\u01E3\u01E4\x07\x1D\x02\x02\u01E4\u01E5\x052\x1A" +
		"\x02\u01E5\u01E6\x07\x1E\x02\x02\u01E6\u01E8\x03\x02\x02\x02\u01E7\u01D6" +
		"\x03\x02\x02\x02\u01E7\u01E1\x03\x02\x02\x02\u01E7\u01E2\x03\x02\x02\x02" +
		"\u01E8\u01EA\x03\x02\x02\x02\u01E9\u019D\x03\x02\x02\x02\u01E9\u01A0\x03" +
		"\x02\x02\x02\u01E9\u01A3\x03\x02\x02\x02\u01E9\u01A6\x03\x02\x02\x02\u01E9" +
		"\u01A9\x03\x02\x02\x02\u01E9\u01AC\x03\x02\x02\x02\u01E9\u01AF\x03\x02" +
		"\x02\x02\u01E9\u01C5\x03\x02\x02\x02\u01E9\u01C8\x03\x02\x02\x02\u01E9" +
		"\u01CB\x03\x02\x02\x02\u01E9\u01D1\x03\x02\x02\x02\u01EA\u01ED\x03\x02" +
		"\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC" +
		"\x1D\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01EF\x078\x02" +
		"\x02\u01EF\u01F0\x07\x1D\x02\x02\u01F0\u01F1\x05\x1C\x0F\x02\u01F1\u01F2" +
		"\x071\x02\x02\u01F2\u01F3\x05N(\x02\u01F3\u01F4\x07\x1E\x02\x02\u01F4" +
		"\x1F\x03\x02\x02\x02\u01F5\u01F6\x07\x06\x02\x02\u01F6\u01F7\x05 \x11" +
		"\x02\u01F7\u01F8\x07\x06\x02\x02\u01F8\u020A\x03\x02\x02\x02\u01F9\u01FA" +
		"\x05V,\x02\u01FA\u01FB\x07\x19\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC" +
		"\u01F9\x03\x02\x02\x02\u01FC";
	private static readonly _serializedATNSegment1: string =
		"\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x05L\'" +
		"\x02\u01FF\u0200\x07\x19\x02\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01FC" +
		"\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
		"\u0203\u0204\x05Z.\x02\u0204\u0205\x07\x19\x02\x02\u0205\u0207\x03\x02" +
		"\x02\x02\u0206\u0201\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207" +
		"\u0208\x03\x02\x02\x02\u0208\u020A\x05H%\x02\u0209\u01F5\x03\x02\x02\x02" +
		"\u0209\u0206\x03\x02\x02\x02\u020A!\x03\x02\x02\x02\u020B\u020C\x07G\x02" +
		"\x02\u020C\u020D\x07\x1D\x02\x02\u020D\u0212\x05H%\x02\u020E\u020F\x07" +
		"!\x02\x02\u020F\u0211\x05H%\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214" +
		"\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
		"\u0213\u0215\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216\x07" +
		"\x1E\x02\x02\u0216#\x03\x02\x02\x02\u0217\u0218\x07{\x02\x02\u0218\u0219" +
		"\x07\x1D\x02\x02\u0219\u021E\x05\x1C\x0F\x02\u021A\u021C\x071\x02\x02" +
		"\u021B\u021A\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03" +
		"\x02\x02\x02\u021D\u021F\x05D#\x02\u021E\u021B\x03\x02\x02\x02\u021E\u021F" +
		"\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x07!\x02\x02" +
		"\u0221\u0228\x05\x1C\x0F\x02\u0222\u0224\x071\x02\x02\u0223\u0222\x03" +
		"\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225" +
		"\u0227\x05D#\x02\u0226\u0223\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02" +
		"\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022B\x03" +
		"\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022C\x07\x1E\x02\x02\u022C" +
		"%\x03\x02\x02\x02\u022D\u023C\x07Y\x02\x02\u022E\u023C\x07<\x02\x02\u022F" +
		"\u0231\x07P\x02\x02\u0230\u0232\x07t\x02\x02\u0231\u0230\x03\x02\x02\x02" +
		"\u0231\u0232\x03\x02\x02\x02\u0232\u023C\x03\x02\x02\x02\u0233\u0235\x07" +
		"c\x02\x02\u0234\u0236\x07t\x02\x02\u0235\u0234\x03\x02\x02\x02\u0235\u0236" +
		"\x03\x02\x02\x02\u0236\u023C\x03\x02\x02\x02\u0237\u0239\x07}\x02\x02" +
		"\u0238\u023A\x07t\x02\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A\x03" +
		"\x02\x02\x02\u023A\u023C\x03\x02\x02\x02\u023B\u022D\x03\x02\x02\x02\u023B" +
		"\u022E\x03\x02\x02\x02\u023B\u022F\x03\x02\x02\x02\u023B\u0233\x03\x02" +
		"\x02\x02\u023B\u0237\x03\x02\x02\x02\u023C\'\x03\x02\x02\x02\u023D\u023E" +
		"\x07p\x02\x02\u023E\u023F\x056\x1C\x02\u023F)\x03\x02\x02\x02\u0240\u0242" +
		"\x07\x8E\x02\x02\u0241\u0243\t\x02\x02\x02\u0242\u0241\x03\x02\x02\x02" +
		"\u0242\u0243\x03\x02\x02\x02\u0243\u0249\x03\x02\x02\x02\u0244\u0245\x07" +
		"Z\x02\x02\u0245\u0249\x07B\x02\x02\u0246\u0247\x07G\x02\x02\u0247\u0249" +
		"\x07B\x02\x02\u0248\u0240\x03\x02\x02\x02\u0248\u0244\x03\x02\x02\x02" +
		"\u0248\u0246\x03\x02\x02\x02\u0249+\x03\x02\x02\x02\u024A\u024B\x07\x90" +
		"\x02\x02\u024B\u024C\x07\x1D\x02\x02\u024C\u0251\x05R*\x02\u024D\u024E" +
		"\x07!\x02\x02\u024E\u0250\x05R*\x02\u024F\u024D\x03\x02\x02\x02\u0250" +
		"\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02" +
		"\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0254" +
		"\u0255\x07\x1E\x02\x02\u0255-\x03\x02\x02\x02\u0256\u0257\x03\x02\x02" +
		"\x02\u0257/\x03\x02\x02\x02\u0258\u0259\x07\x85\x02\x02\u0259\u025A\x07" +
		"\n\x02\x02\u025A\u025B\x05N(\x02\u025B\u025C\x07\t\x02\x02\u025C1\x03" +
		"\x02\x02\x02\u025D\u025E\x070\x02\x02\u025E\u025F\x07\n\x02\x02\u025F" +
		"\u0260\x05N(\x02\u0260\u0261\x07\t\x02\x02\u02613\x03\x02\x02\x02\u0262" +
		"\u0263\x03\x02\x02\x02\u02635\x03\x02\x02\x02\u0264\u0265\x05\x1C\x0F" +
		"\x02\u02657\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u02679\x03\x02" +
		"\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269;\x03\x02\x02\x02\u026A\u026B" +
		"\x05d3\x02\u026B=\x03\x02\x02\x02\u026C\u026D\x05d3\x02\u026D?\x03\x02" +
		"\x02\x02\u026E\u026F\x07\x94\x02\x02\u026F\u0270\x05J&\x02\u0270\u0271" +
		"\x071\x02\x02\u0271\u0272\x07\x1D\x02\x02\u0272\u0273\x05\x06\x04\x02" +
		"\u0273\u027D\x07\x1E\x02\x02\u0274\u0275\x07!\x02\x02\u0275\u0276\x05" +
		"J&\x02\u0276\u0277\x071\x02\x02\u0277\u0278\x07\x1D\x02\x02\u0278\u0279" +
		"\x05\x06\x04\x02\u0279\u027A\x07\x1E\x02\x02\u027A\u027C\x03\x02\x02\x02" +
		"\u027B\u0274\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03" +
		"\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027EA\x03\x02\x02\x02\u027F" +
		"\u027D\x03\x02\x02\x02\u0280\u0285\x07\x9E\x02\x02\u0281\u0282\x07\x06" +
		"\x02\x02\u0282\u0283\x07\x9E\x02\x02\u0283\u0285\x07\x06\x02\x02\u0284" +
		"\u0280\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02\u0285C\x03\x02\x02" +
		"\x02\u0286\u0287\x05B\"\x02\u0287E\x03\x02\x02\x02\u0288\u0289\x05B\"" +
		"\x02\u0289G\x03\x02\x02\x02\u028A\u028B\x05B\"\x02\u028BI\x03\x02\x02" +
		"\x02\u028C\u028D\x05B\"\x02\u028DK\x03\x02\x02\x02\u028E\u028F\x05B\"" +
		"\x02\u028FM\x03\x02\x02\x02\u0290\u0291\x05B\"\x02\u0291O\x03\x02\x02" +
		"\x02\u0292\u0293\x05B\"\x02\u0293Q\x03\x02\x02\x02\u0294\u0295\x05B\"" +
		"\x02\u0295S\x03\x02\x02\x02\u0296\u0297\x05B\"\x02\u0297U\x03\x02\x02" +
		"\x02\u0298\u0299\x05B\"\x02\u0299W\x03\x02\x02\x02\u029A\u029B\x05B\"" +
		"\x02\u029BY\x03\x02\x02\x02\u029C\u029D\x05B\"\x02\u029D[\x03\x02\x02" +
		"\x02\u029E\u029F\x07\x9E\x02\x02\u029F]\x03\x02\x02\x02\u02A0\u02A1\x07" +
		"\x9E\x02\x02\u02A1_\x03\x02\x02\x02\u02A2\u02A3\x07\x9E\x02\x02\u02A3" +
		"a\x03\x02\x02\x02\u02A4\u02A5\x05V,\x02\u02A5\u02A6\x07\x19\x02\x02\u02A6" +
		"\u02A8\x03\x02\x02\x02\u02A7\u02A4\x03\x02\x02\x02\u02A7\u02A8\x03\x02" +
		"\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\x05L\'\x02\u02AA\u02AB" +
		"\x07\x19\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02A7\x03\x02\x02\x02" +
		"\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02BF\x05" +
		"Z.\x02\u02AF\u02B8\x07\x06\x02\x02\u02B0\u02B1\x05\\/\x02\u02B1\u02B2" +
		"\x07\x19\x02\x02\u02B2\u02B4\x03\x02\x02\x02\u02B3\u02B0\x03\x02\x02\x02" +
		"\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x05" +
		"^0\x02\u02B6\u02B7\x07\x19\x02\x02\u02B7\u02B9\x03\x02\x02\x02\u02B8\u02B3" +
		"\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02" +
		"\u02BA\u02BB\x05`1\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BD\x07\x06" +
		"\x02\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02AC\x03\x02\x02\x02\u02BE" +
		"\u02AF\x03\x02\x02\x02\u02BFc\x03\x02\x02\x02\u02C0\u02C3\x05f4\x02\u02C1" +
		"\u02C3\x05h5\x02\u02C2\u02C0\x03\x02\x02\x02\u02C2\u02C1\x03\x02\x02\x02" +
		"\u02C3e\x03\x02\x02\x02\u02C4\u02C5\x07]\x02\x02\u02C5g\x03\x02\x02\x02" +
		"\u02C6\u02C7\x07^\x02\x02\u02C7i\x03\x02\x02\x02\u02C8\u02CF\x05l7\x02" +
		"\u02C9\u02CF\x05n8\x02\u02CA\u02CF\x05p9\x02\u02CB\u02CF\x05r:\x02\u02CC" +
		"\u02CF\x05t;\x02\u02CD\u02CF\x05v<\x02\u02CE\u02C8\x03\x02\x02\x02\u02CE" +
		"\u02C9\x03\x02\x02\x02\u02CE\u02CA\x03\x02\x02\x02\u02CE\u02CB\x03\x02" +
		"\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CD\x03\x02\x02\x02\u02CF" +
		"k\x03\x02\x02\x02\u02D0\u02D1\x07\x99\x02\x02\u02D1m\x03\x02\x02\x02\u02D2" +
		"\u02D3\x07\x9A\x02\x02\u02D3o\x03\x02\x02\x02\u02D4\u02D5\x07\x9B\x02" +
		"\x02\u02D5q\x03\x02\x02\x02\u02D6\u02D7\x07\x9C\x02\x02\u02D7s\x03\x02" +
		"\x02\x02\u02D8\u02D9\x07\x9D\x02\x02\u02D9u\x03\x02\x02\x02\u02DA\u02DB" +
		"\x05N(\x02\u02DB\u02DC\x07\x99\x02\x02\u02DCw\x03\x02\x02\x02\u02DD\u02DE" +
		"\t\t\x02\x02\u02DEy\x03\x02\x02\x02]}\x84\x87\x8D\x90\x92\x98\x9B\x9F" +
		"\xA4\xA7\xAA\xAE\xB1\xB5\xB8\xBA\xBE\xC2\xC5\xC9\xCC\xCE\xD2\xD6\xD9\xDC" +
		"\xDF\xE2\xEA\xF0\xF3\xFB\u0101\u0104\u010B\u010E\u0113\u0116\u011A\u011D" +
		"\u011F\u0123\u0129\u012D\u013A\u0144\u0149\u0159\u015E\u0162\u0169\u017D" +
		"\u0182\u018C\u0190\u019B\u01B7\u01BB\u01C2\u01CE\u01D3\u01DC\u01E7\u01E9" +
		"\u01EB\u01FC\u0201\u0206\u0209\u0212\u021B\u021E\u0223\u0228\u0231\u0235" +
		"\u0239\u023B\u0242\u0248\u0251\u027D\u0284\u02A7\u02AC\u02B3\u02B8\u02BE" +
		"\u02C2\u02CE";
	public static readonly _serializedATN: string = Utils.join(
		[
			BigQueryParser._serializedATNSegment0,
			BigQueryParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BigQueryParser.__ATN) {
			BigQueryParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BigQueryParser._serializedATN));
		}

		return BigQueryParser.__ATN;
	}

}

export class SqlContext extends ParserRuleContext {
	public query_statement(): Query_statementContext {
		return this.getRuleContext(0, Query_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_sql; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterSql) {
			listener.enterSql(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitSql) {
			listener.exitSql(this);
		}
	}
}


export class Query_statementContext extends ParserRuleContext {
	public query_expr(): Query_exprContext {
		return this.getRuleContext(0, Query_exprContext);
	}
	public with_statement(): With_statementContext | undefined {
		return this.tryGetRuleContext(0, With_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_query_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterQuery_statement) {
			listener.enterQuery_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitQuery_statement) {
			listener.exitQuery_statement(this);
		}
	}
}


export class Query_exprContext extends ParserRuleContext {
	public select_statement(): Select_statementContext | undefined {
		return this.tryGetRuleContext(0, Select_statementContext);
	}
	public order_clause(): Order_clauseContext | undefined {
		return this.tryGetRuleContext(0, Order_clauseContext);
	}
	public limit_clause(): Limit_clauseContext | undefined {
		return this.tryGetRuleContext(0, Limit_clauseContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LR_BRACKET, 0); }
	public query_expr(): Query_exprContext[];
	public query_expr(i: number): Query_exprContext;
	public query_expr(i?: number): Query_exprContext | Query_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Query_exprContext);
		} else {
			return this.getRuleContext(i, Query_exprContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RR_BRACKET, 0); }
	public set_op(): Set_opContext | undefined {
		return this.tryGetRuleContext(0, Set_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_query_expr; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterQuery_expr) {
			listener.enterQuery_expr(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitQuery_expr) {
			listener.exitQuery_expr(this);
		}
	}
}


export class Select_statementContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(BigQueryParser.SELECT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	public from_statement(): From_statementContext | undefined {
		return this.tryGetRuleContext(0, From_statementContext);
	}
	public where_statement(): Where_statementContext | undefined {
		return this.tryGetRuleContext(0, Where_statementContext);
	}
	public group_statement(): Group_statementContext | undefined {
		return this.tryGetRuleContext(0, Group_statementContext);
	}
	public having_statement(): Having_statementContext | undefined {
		return this.tryGetRuleContext(0, Having_statementContext);
	}
	public window_statement(): Window_statementContext | undefined {
		return this.tryGetRuleContext(0, Window_statementContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ALL, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DISTINCT, 0); }
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.STAR);
		} else {
			return this.getToken(BigQueryParser.STAR, i);
		}
	}
	public alias_name(): Alias_nameContext[];
	public alias_name(i: number): Alias_nameContext;
	public alias_name(i?: number): Alias_nameContext | Alias_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Alias_nameContext);
		} else {
			return this.getRuleContext(i, Alias_nameContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DOT, 0); }
	public except_statement(): Except_statementContext[];
	public except_statement(i: number): Except_statementContext;
	public except_statement(i?: number): Except_statementContext | Except_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_statementContext);
		} else {
			return this.getRuleContext(i, Except_statementContext);
		}
	}
	public replace_statement(): Replace_statementContext[];
	public replace_statement(i: number): Replace_statementContext;
	public replace_statement(i?: number): Replace_statementContext | Replace_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Replace_statementContext);
		} else {
			return this.getRuleContext(i, Replace_statementContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.AS);
		} else {
			return this.getToken(BigQueryParser.AS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_select_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterSelect_statement) {
			listener.enterSelect_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitSelect_statement) {
			listener.exitSelect_statement(this);
		}
	}
}


export class From_statementContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(BigQueryParser.FROM, 0); }
	public from_item(): From_itemContext[];
	public from_item(i: number): From_itemContext;
	public from_item(i?: number): From_itemContext | From_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(From_itemContext);
		} else {
			return this.getRuleContext(i, From_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_from_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterFrom_statement) {
			listener.enterFrom_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitFrom_statement) {
			listener.exitFrom_statement(this);
		}
	}
}


export class From_itemContext extends ParserRuleContext {
	public table_expr(): Table_exprContext | undefined {
		return this.tryGetRuleContext(0, Table_exprContext);
	}
	public alias_name(): Alias_nameContext[];
	public alias_name(i: number): Alias_nameContext;
	public alias_name(i?: number): Alias_nameContext | Alias_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Alias_nameContext);
		} else {
			return this.getRuleContext(i, Alias_nameContext);
		}
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FOR, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SYSTEM, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.TIME, 0); }
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.AS);
		} else {
			return this.getToken(BigQueryParser.AS, i);
		}
	}
	public OF(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OF, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public from_item(): From_itemContext[];
	public from_item(i: number): From_itemContext;
	public from_item(i?: number): From_itemContext | From_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(From_itemContext);
		} else {
			return this.getRuleContext(i, From_itemContext);
		}
	}
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.JOIN, 0); }
	public on_clause(): On_clauseContext | undefined {
		return this.tryGetRuleContext(0, On_clauseContext);
	}
	public using_clause(): Using_clauseContext | undefined {
		return this.tryGetRuleContext(0, Using_clauseContext);
	}
	public join_type(): Join_typeContext | undefined {
		return this.tryGetRuleContext(0, Join_typeContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LR_BRACKET, 0); }
	public query_statement(): Query_statementContext | undefined {
		return this.tryGetRuleContext(0, Query_statementContext);
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RR_BRACKET, 0); }
	public UNNEST(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.UNNEST, 0); }
	public array_expr(): Array_exprContext | undefined {
		return this.tryGetRuleContext(0, Array_exprContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.WITH, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OFFSET, 0); }
	public cte_name(): Cte_nameContext | undefined {
		return this.tryGetRuleContext(0, Cte_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_from_item; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterFrom_item) {
			listener.enterFrom_item(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitFrom_item) {
			listener.exitFrom_item(this);
		}
	}
}


export class Where_statementContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(BigQueryParser.WHERE, 0); }
	public bool_expression(): Bool_expressionContext {
		return this.getRuleContext(0, Bool_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_where_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterWhere_statement) {
			listener.enterWhere_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitWhere_statement) {
			listener.exitWhere_statement(this);
		}
	}
}


export class Group_statementContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(BigQueryParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(BigQueryParser.BY, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ROLLUP, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LR_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_group_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterGroup_statement) {
			listener.enterGroup_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitGroup_statement) {
			listener.exitGroup_statement(this);
		}
	}
}


export class Having_statementContext extends ParserRuleContext {
	public HAVING(): TerminalNode { return this.getToken(BigQueryParser.HAVING, 0); }
	public bool_expression(): Bool_expressionContext {
		return this.getRuleContext(0, Bool_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_having_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterHaving_statement) {
			listener.enterHaving_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitHaving_statement) {
			listener.exitHaving_statement(this);
		}
	}
}


export class Window_statementContext extends ParserRuleContext {
	public WINDOW(): TerminalNode { return this.getToken(BigQueryParser.WINDOW, 0); }
	public window_name(): Window_nameContext {
		return this.getRuleContext(0, Window_nameContext);
	}
	public AS(): TerminalNode { return this.getToken(BigQueryParser.AS, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.LR_BRACKET, 0); }
	public window_definition(): Window_definitionContext {
		return this.getRuleContext(0, Window_definitionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_window_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterWindow_statement) {
			listener.enterWindow_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitWindow_statement) {
			listener.exitWindow_statement(this);
		}
	}
}


export class Order_clauseContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(BigQueryParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(BigQueryParser.BY, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	public ASC(): TerminalNode[];
	public ASC(i: number): TerminalNode;
	public ASC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.ASC);
		} else {
			return this.getToken(BigQueryParser.ASC, i);
		}
	}
	public DESC(): TerminalNode[];
	public DESC(i: number): TerminalNode;
	public DESC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.DESC);
		} else {
			return this.getToken(BigQueryParser.DESC, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_order_clause; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterOrder_clause) {
			listener.enterOrder_clause(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitOrder_clause) {
			listener.exitOrder_clause(this);
		}
	}
}


export class Limit_clauseContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(BigQueryParser.LIMIT, 0); }
	public count(): CountContext {
		return this.getRuleContext(0, CountContext);
	}
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OFFSET, 0); }
	public skip_rows(): Skip_rowsContext | undefined {
		return this.tryGetRuleContext(0, Skip_rowsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_limit_clause; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterLimit_clause) {
			listener.enterLimit_clause(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitLimit_clause) {
			listener.exitLimit_clause(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.MINUS, 0); }
	public BIT_NOT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.BIT_NOT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public array_name(): Array_nameContext | undefined {
		return this.tryGetRuleContext(0, Array_nameContext);
	}
	public LEFT_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LEFT_BRACKET, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LR_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RR_BRACKET, 0); }
	public RIGHT_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RIGHT_BRACKET, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OFFSET, 0); }
	public ORDINAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ORDINAL, 0); }
	public SAFE_OFFSET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SAFE_OFFSET, 0); }
	public SAFE_ORDINAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SAFE_ORDINAL, 0); }
	public unary_operator(): Unary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Unary_operatorContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.STAR, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DIVIDE, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.MINUS, 0); }
	public LESS_LESS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LESS_LESS, 0); }
	public GREATER_GREATER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.GREATER_GREATER, 0); }
	public BIT_AND(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.BIT_AND, 0); }
	public BIT_XOR(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.BIT_XOR, 0); }
	public BIT_OR(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.BIT_OR, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.EQUAL, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LESS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.GREATER, 0); }
	public LEQ(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LEQ, 0); }
	public GEQ(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.GEQ, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NOT_EQUAL, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LIKE, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.AND, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NOT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.IS, 0); }
	public S_NULL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.S_NULL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FALSE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.IN, 0); }
	public query_statement(): Query_statementContext | undefined {
		return this.tryGetRuleContext(0, Query_statementContext);
	}
	public UNNEST(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.UNNEST, 0); }
	public array_expr(): Array_exprContext | undefined {
		return this.tryGetRuleContext(0, Array_exprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OR, 0); }
	public function_name(): Function_nameContext | undefined {
		return this.tryGetRuleContext(0, Function_nameContext);
	}
	public cast_expr(): Cast_exprContext | undefined {
		return this.tryGetRuleContext(0, Cast_exprContext);
	}
	public column_expr(): Column_exprContext | undefined {
		return this.tryGetRuleContext(0, Column_exprContext);
	}
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_expr; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class Cast_exprContext extends ParserRuleContext {
	public CAST(): TerminalNode { return this.getToken(BigQueryParser.CAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.LR_BRACKET, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public AS(): TerminalNode { return this.getToken(BigQueryParser.AS, 0); }
	public datatype_name(): Datatype_nameContext {
		return this.getRuleContext(0, Datatype_nameContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_cast_expr; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterCast_expr) {
			listener.enterCast_expr(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitCast_expr) {
			listener.exitCast_expr(this);
		}
	}
}


export class Column_exprContext extends ParserRuleContext {
	public BK_QUOTE(): TerminalNode[];
	public BK_QUOTE(i: number): TerminalNode;
	public BK_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.BK_QUOTE);
		} else {
			return this.getToken(BigQueryParser.BK_QUOTE, i);
		}
	}
	public column_expr(): Column_exprContext | undefined {
		return this.tryGetRuleContext(0, Column_exprContext);
	}
	public column_name(): Column_nameContext | undefined {
		return this.tryGetRuleContext(0, Column_nameContext);
	}
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.DOT);
		} else {
			return this.getToken(BigQueryParser.DOT, i);
		}
	}
	public dataset_name(): Dataset_nameContext | undefined {
		return this.tryGetRuleContext(0, Dataset_nameContext);
	}
	public project_name(): Project_nameContext | undefined {
		return this.tryGetRuleContext(0, Project_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_column_expr; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterColumn_expr) {
			listener.enterColumn_expr(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitColumn_expr) {
			listener.exitColumn_expr(this);
		}
	}
}


export class Except_statementContext extends ParserRuleContext {
	public EXCEPT(): TerminalNode { return this.getToken(BigQueryParser.EXCEPT, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.LR_BRACKET, 0); }
	public column_name(): Column_nameContext[];
	public column_name(i: number): Column_nameContext;
	public column_name(i?: number): Column_nameContext | Column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_nameContext);
		} else {
			return this.getRuleContext(i, Column_nameContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_except_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterExcept_statement) {
			listener.enterExcept_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitExcept_statement) {
			listener.exitExcept_statement(this);
		}
	}
}


export class Replace_statementContext extends ParserRuleContext {
	public REPLACE(): TerminalNode { return this.getToken(BigQueryParser.REPLACE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.LR_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.COMMA, 0); }
	public alias_name(): Alias_nameContext[];
	public alias_name(i: number): Alias_nameContext;
	public alias_name(i?: number): Alias_nameContext | Alias_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Alias_nameContext);
		} else {
			return this.getRuleContext(i, Alias_nameContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.AS);
		} else {
			return this.getToken(BigQueryParser.AS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_replace_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterReplace_statement) {
			listener.enterReplace_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitReplace_statement) {
			listener.exitReplace_statement(this);
		}
	}
}


export class Join_typeContext extends ParserRuleContext {
	public INNER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.INNER, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CROSS, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FULL, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OUTER, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RIGHT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_join_type; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterJoin_type) {
			listener.enterJoin_type(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitJoin_type) {
			listener.exitJoin_type(this);
		}
	}
}


export class On_clauseContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(BigQueryParser.ON, 0); }
	public bool_expression(): Bool_expressionContext {
		return this.getRuleContext(0, Bool_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_on_clause; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterOn_clause) {
			listener.enterOn_clause(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitOn_clause) {
			listener.exitOn_clause(this);
		}
	}
}


export class Set_opContext extends ParserRuleContext {
	public UNION(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.UNION, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ALL, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DISTINCT, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.INTERSECT, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.EXCEPT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_set_op; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterSet_op) {
			listener.enterSet_op(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitSet_op) {
			listener.exitSet_op(this);
		}
	}
}


export class Using_clauseContext extends ParserRuleContext {
	public USING(): TerminalNode { return this.getToken(BigQueryParser.USING, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.LR_BRACKET, 0); }
	public join_name(): Join_nameContext[];
	public join_name(i: number): Join_nameContext;
	public join_name(i?: number): Join_nameContext | Join_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Join_nameContext);
		} else {
			return this.getRuleContext(i, Join_nameContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(BigQueryParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_using_clause; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterUsing_clause) {
			listener.enterUsing_clause(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitUsing_clause) {
			listener.exitUsing_clause(this);
		}
	}
}


export class Field_pathContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_field_path; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterField_path) {
			listener.enterField_path(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitField_path) {
			listener.exitField_path(this);
		}
	}
}


export class SstructContext extends ParserRuleContext {
	public SSTRUCT(): TerminalNode { return this.getToken(BigQueryParser.SSTRUCT, 0); }
	public LESS(): TerminalNode { return this.getToken(BigQueryParser.LESS, 0); }
	public datatype_name(): Datatype_nameContext {
		return this.getRuleContext(0, Datatype_nameContext);
	}
	public GREATER(): TerminalNode { return this.getToken(BigQueryParser.GREATER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_sstruct; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterSstruct) {
			listener.enterSstruct(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitSstruct) {
			listener.exitSstruct(this);
		}
	}
}


export class Array_exprContext extends ParserRuleContext {
	public ARRAY(): TerminalNode { return this.getToken(BigQueryParser.ARRAY, 0); }
	public LESS(): TerminalNode { return this.getToken(BigQueryParser.LESS, 0); }
	public datatype_name(): Datatype_nameContext {
		return this.getRuleContext(0, Datatype_nameContext);
	}
	public GREATER(): TerminalNode { return this.getToken(BigQueryParser.GREATER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_array_expr; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterArray_expr) {
			listener.enterArray_expr(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitArray_expr) {
			listener.exitArray_expr(this);
		}
	}
}


export class Array_pathContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_array_path; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterArray_path) {
			listener.enterArray_path(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitArray_path) {
			listener.exitArray_path(this);
		}
	}
}


export class Bool_expressionContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_bool_expression; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterBool_expression) {
			listener.enterBool_expression(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitBool_expression) {
			listener.exitBool_expression(this);
		}
	}
}


export class Window_nameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_window_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterWindow_name) {
			listener.enterWindow_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitWindow_name) {
			listener.exitWindow_name(this);
		}
	}
}


export class Window_definitionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_window_definition; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterWindow_definition) {
			listener.enterWindow_definition(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitWindow_definition) {
			listener.exitWindow_definition(this);
		}
	}
}


export class CountContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_count; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterCount) {
			listener.enterCount(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitCount) {
			listener.exitCount(this);
		}
	}
}


export class Skip_rowsContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_skip_rows; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterSkip_rows) {
			listener.enterSkip_rows(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitSkip_rows) {
			listener.exitSkip_rows(this);
		}
	}
}


export class With_statementContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(BigQueryParser.WITH, 0); }
	public cte_name(): Cte_nameContext[];
	public cte_name(i: number): Cte_nameContext;
	public cte_name(i?: number): Cte_nameContext | Cte_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cte_nameContext);
		} else {
			return this.getRuleContext(i, Cte_nameContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.AS);
		} else {
			return this.getToken(BigQueryParser.AS, i);
		}
	}
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.LR_BRACKET);
		} else {
			return this.getToken(BigQueryParser.LR_BRACKET, i);
		}
	}
	public query_expr(): Query_exprContext[];
	public query_expr(i: number): Query_exprContext;
	public query_expr(i?: number): Query_exprContext | Query_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Query_exprContext);
		} else {
			return this.getRuleContext(i, Query_exprContext);
		}
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.RR_BRACKET);
		} else {
			return this.getToken(BigQueryParser.RR_BRACKET, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.COMMA);
		} else {
			return this.getToken(BigQueryParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_with_statement; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterWith_statement) {
			listener.enterWith_statement(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitWith_statement) {
			listener.exitWith_statement(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(BigQueryParser.ID, 0); }
	public BK_QUOTE(): TerminalNode[];
	public BK_QUOTE(i: number): TerminalNode;
	public BK_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.BK_QUOTE);
		} else {
			return this.getToken(BigQueryParser.BK_QUOTE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class Alias_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_alias_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterAlias_name) {
			listener.enterAlias_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitAlias_name) {
			listener.exitAlias_name(this);
		}
	}
}


export class Array_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_array_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterArray_name) {
			listener.enterArray_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitArray_name) {
			listener.exitArray_name(this);
		}
	}
}


export class Column_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_column_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterColumn_name) {
			listener.enterColumn_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitColumn_name) {
			listener.exitColumn_name(this);
		}
	}
}


export class Cte_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_cte_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterCte_name) {
			listener.enterCte_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitCte_name) {
			listener.exitCte_name(this);
		}
	}
}


export class Dataset_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_dataset_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterDataset_name) {
			listener.enterDataset_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitDataset_name) {
			listener.exitDataset_name(this);
		}
	}
}


export class Datatype_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_datatype_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterDatatype_name) {
			listener.enterDatatype_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitDatatype_name) {
			listener.exitDatatype_name(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_function_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterFunction_name) {
			listener.enterFunction_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitFunction_name) {
			listener.exitFunction_name(this);
		}
	}
}


export class Join_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_join_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterJoin_name) {
			listener.enterJoin_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitJoin_name) {
			listener.exitJoin_name(this);
		}
	}
}


export class Member_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_member_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterMember_name) {
			listener.enterMember_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitMember_name) {
			listener.exitMember_name(this);
		}
	}
}


export class Project_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_project_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterProject_name) {
			listener.enterProject_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitProject_name) {
			listener.exitProject_name(this);
		}
	}
}


export class Struct_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_struct_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterStruct_name) {
			listener.enterStruct_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitStruct_name) {
			listener.exitStruct_name(this);
		}
	}
}


export class Table_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_table_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterTable_name) {
			listener.enterTable_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitTable_name) {
			listener.exitTable_name(this);
		}
	}
}


export class Pure_project_nameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(BigQueryParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_pure_project_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterPure_project_name) {
			listener.enterPure_project_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitPure_project_name) {
			listener.exitPure_project_name(this);
		}
	}
}


export class Pure_dataset_nameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(BigQueryParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_pure_dataset_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterPure_dataset_name) {
			listener.enterPure_dataset_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitPure_dataset_name) {
			listener.exitPure_dataset_name(this);
		}
	}
}


export class Pure_table_nameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(BigQueryParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_pure_table_name; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterPure_table_name) {
			listener.enterPure_table_name(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitPure_table_name) {
			listener.exitPure_table_name(this);
		}
	}
}


export class Table_exprContext extends ParserRuleContext {
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	public dataset_name(): Dataset_nameContext | undefined {
		return this.tryGetRuleContext(0, Dataset_nameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.DOT);
		} else {
			return this.getToken(BigQueryParser.DOT, i);
		}
	}
	public project_name(): Project_nameContext | undefined {
		return this.tryGetRuleContext(0, Project_nameContext);
	}
	public BK_QUOTE(): TerminalNode[];
	public BK_QUOTE(i: number): TerminalNode;
	public BK_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BigQueryParser.BK_QUOTE);
		} else {
			return this.getToken(BigQueryParser.BK_QUOTE, i);
		}
	}
	public pure_table_name(): Pure_table_nameContext | undefined {
		return this.tryGetRuleContext(0, Pure_table_nameContext);
	}
	public pure_dataset_name(): Pure_dataset_nameContext | undefined {
		return this.tryGetRuleContext(0, Pure_dataset_nameContext);
	}
	public pure_project_name(): Pure_project_nameContext | undefined {
		return this.tryGetRuleContext(0, Pure_project_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_table_expr; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterTable_expr) {
			listener.enterTable_expr(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitTable_expr) {
			listener.exitTable_expr(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public integer_type(): Integer_typeContext | undefined {
		return this.tryGetRuleContext(0, Integer_typeContext);
	}
	public float_type(): Float_typeContext | undefined {
		return this.tryGetRuleContext(0, Float_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_number; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class Integer_typeContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(BigQueryParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_integer_type; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterInteger_type) {
			listener.enterInteger_type(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitInteger_type) {
			listener.exitInteger_type(this);
		}
	}
}


export class Float_typeContext extends ParserRuleContext {
	public FLOAT(): TerminalNode { return this.getToken(BigQueryParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_float_type; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterFloat_type) {
			listener.enterFloat_type(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitFloat_type) {
			listener.exitFloat_type(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public quoted_string(): Quoted_stringContext | undefined {
		return this.tryGetRuleContext(0, Quoted_stringContext);
	}
	public triple_quoted_string(): Triple_quoted_stringContext | undefined {
		return this.tryGetRuleContext(0, Triple_quoted_stringContext);
	}
	public raw_string(): Raw_stringContext | undefined {
		return this.tryGetRuleContext(0, Raw_stringContext);
	}
	public byte_string(): Byte_stringContext | undefined {
		return this.tryGetRuleContext(0, Byte_stringContext);
	}
	public raw_byte_string(): Raw_byte_stringContext | undefined {
		return this.tryGetRuleContext(0, Raw_byte_stringContext);
	}
	public special_string(): Special_stringContext | undefined {
		return this.tryGetRuleContext(0, Special_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_string; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class Quoted_stringContext extends ParserRuleContext {
	public QUOTED_STRING(): TerminalNode { return this.getToken(BigQueryParser.QUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_quoted_string; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterQuoted_string) {
			listener.enterQuoted_string(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitQuoted_string) {
			listener.exitQuoted_string(this);
		}
	}
}


export class Triple_quoted_stringContext extends ParserRuleContext {
	public TRIPLE_QUOTED_STRING(): TerminalNode { return this.getToken(BigQueryParser.TRIPLE_QUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_triple_quoted_string; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterTriple_quoted_string) {
			listener.enterTriple_quoted_string(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitTriple_quoted_string) {
			listener.exitTriple_quoted_string(this);
		}
	}
}


export class Raw_stringContext extends ParserRuleContext {
	public RAW_STRING(): TerminalNode { return this.getToken(BigQueryParser.RAW_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_raw_string; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterRaw_string) {
			listener.enterRaw_string(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitRaw_string) {
			listener.exitRaw_string(this);
		}
	}
}


export class Byte_stringContext extends ParserRuleContext {
	public BYTE_STRING(): TerminalNode { return this.getToken(BigQueryParser.BYTE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_byte_string; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterByte_string) {
			listener.enterByte_string(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitByte_string) {
			listener.exitByte_string(this);
		}
	}
}


export class Raw_byte_stringContext extends ParserRuleContext {
	public RAW_BYTE_STRING(): TerminalNode { return this.getToken(BigQueryParser.RAW_BYTE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_raw_byte_string; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterRaw_byte_string) {
			listener.enterRaw_byte_string(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitRaw_byte_string) {
			listener.exitRaw_byte_string(this);
		}
	}
}


export class Special_stringContext extends ParserRuleContext {
	public datatype_name(): Datatype_nameContext {
		return this.getRuleContext(0, Datatype_nameContext);
	}
	public QUOTED_STRING(): TerminalNode { return this.getToken(BigQueryParser.QUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_special_string; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterSpecial_string) {
			listener.enterSpecial_string(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitSpecial_string) {
			listener.exitSpecial_string(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ALL, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.AND, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ANY, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ARRAY, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.AS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ASC, 0); }
	public ASSERT_ROWS_MODIFIED(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ASSERT_ROWS_MODIFIED, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.AT, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.BETWEEN, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.BY, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CASE, 0); }
	public CAST(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CAST, 0); }
	public COLLATE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.COLLATE, 0); }
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CONTAINS, 0); }
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CREATE, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CROSS, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CUBE, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.CURRENT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DEFAULT, 0); }
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DEFINE, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DESC, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.DISTINCT, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ELSE, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.END, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ENUM, 0); }
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ESCAPE, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.EXCEPT, 0); }
	public EXCLUDE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.EXCLUDE, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.EXISTS, 0); }
	public EXTRACT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.EXTRACT, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FALSE, 0); }
	public FETCH(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FETCH, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FOLLOWING, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FOR, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FROM, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.FULL, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.GROUP, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.GROUPING, 0); }
	public GROUPS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.GROUPS, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.HASH, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.HAVING, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.IF, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.IGNORE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.IN, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.INNER, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.INTERSECT, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.INTERVAL, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.INTO, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.IS, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.JOIN, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LATERAL, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LEFT, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LIKE, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LIMIT, 0); }
	public LOOKUP(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.LOOKUP, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.MERGE, 0); }
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NATURAL, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NEW, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NO, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NOT, 0); }
	public S_NULL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.S_NULL, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.NULLS, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OF, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OFFSET, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ON, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OR, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ORDER, 0); }
	public ORDINAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ORDINAL, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OUTER, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.OVER, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.PARTITION, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.PRECEDING, 0); }
	public PROTO(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.PROTO, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RANGE, 0); }
	public RECURSIVE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RECURSIVE, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.REPLACE, 0); }
	public RESPECT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RESPECT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.RIGHT, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ROLLUP, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.ROWS, 0); }
	public SAFE_OFFSET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SAFE_OFFSET, 0); }
	public SAFE_ORDINAL(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SAFE_ORDINAL, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SELECT, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SET, 0); }
	public SOME(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SOME, 0); }
	public SSTRUCT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SSTRUCT, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.SYSTEM, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.TABLESAMPLE, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.THEN, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.TIME, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.TO, 0); }
	public TREAT(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.TREAT, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.TRUE, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.UNBOUNDED, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.UNION, 0); }
	public UNNEST(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.UNNEST, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.USING, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.WHEN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.WHERE, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.WINDOW, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.WITH, 0); }
	public WITHIN(): TerminalNode | undefined { return this.tryGetToken(BigQueryParser.WITHIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BigQueryParser.RULE_keyword; }
	// @Override
	public enterRule(listener: BigQueryParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: BigQueryParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
}


