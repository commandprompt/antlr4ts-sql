import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { SQLiteParserListener } from "./SQLiteParserListener";
export declare class SQLiteParser extends Parser {
    static readonly SCOL = 1;
    static readonly DOT = 2;
    static readonly OPEN_PAR = 3;
    static readonly CLOSE_PAR = 4;
    static readonly COMMA = 5;
    static readonly ASSIGN = 6;
    static readonly STAR = 7;
    static readonly PLUS = 8;
    static readonly MINUS = 9;
    static readonly TILDE = 10;
    static readonly PIPE2 = 11;
    static readonly DIV = 12;
    static readonly MOD = 13;
    static readonly LT2 = 14;
    static readonly GT2 = 15;
    static readonly AMP = 16;
    static readonly PIPE = 17;
    static readonly LT = 18;
    static readonly LT_EQ = 19;
    static readonly GT = 20;
    static readonly GT_EQ = 21;
    static readonly EQ = 22;
    static readonly NOT_EQ1 = 23;
    static readonly NOT_EQ2 = 24;
    static readonly ABORT = 25;
    static readonly ACTION = 26;
    static readonly ADD = 27;
    static readonly AFTER = 28;
    static readonly ALL = 29;
    static readonly ALTER = 30;
    static readonly ANALYZE = 31;
    static readonly AND = 32;
    static readonly AS = 33;
    static readonly ASC = 34;
    static readonly ATTACH = 35;
    static readonly AUTOINCREMENT = 36;
    static readonly BEFORE = 37;
    static readonly BEGIN = 38;
    static readonly BETWEEN = 39;
    static readonly BY = 40;
    static readonly CASCADE = 41;
    static readonly CASE = 42;
    static readonly CAST = 43;
    static readonly CHECK = 44;
    static readonly COLLATE = 45;
    static readonly COLUMN = 46;
    static readonly COMMIT = 47;
    static readonly CONFLICT = 48;
    static readonly CONSTRAINT = 49;
    static readonly CREATE = 50;
    static readonly CROSS = 51;
    static readonly CURRENT_DATE = 52;
    static readonly CURRENT_TIME = 53;
    static readonly CURRENT_TIMESTAMP = 54;
    static readonly DATABASE = 55;
    static readonly DEFAULT = 56;
    static readonly DEFERRABLE = 57;
    static readonly DEFERRED = 58;
    static readonly DELETE = 59;
    static readonly DESC = 60;
    static readonly DETACH = 61;
    static readonly DISTINCT = 62;
    static readonly DROP = 63;
    static readonly EACH = 64;
    static readonly ELSE = 65;
    static readonly END = 66;
    static readonly ESCAPE = 67;
    static readonly EXCEPT = 68;
    static readonly EXCLUSIVE = 69;
    static readonly EXISTS = 70;
    static readonly EXPLAIN = 71;
    static readonly FAIL = 72;
    static readonly FOR = 73;
    static readonly FOREIGN = 74;
    static readonly FROM = 75;
    static readonly FULL = 76;
    static readonly GLOB = 77;
    static readonly GROUP = 78;
    static readonly HAVING = 79;
    static readonly IF = 80;
    static readonly IGNORE = 81;
    static readonly IMMEDIATE = 82;
    static readonly IN = 83;
    static readonly INDEX = 84;
    static readonly INDEXED = 85;
    static readonly INITIALLY = 86;
    static readonly INNER = 87;
    static readonly INSERT = 88;
    static readonly INSTEAD = 89;
    static readonly INTERSECT = 90;
    static readonly INTO = 91;
    static readonly IS = 92;
    static readonly ISNULL = 93;
    static readonly JOIN = 94;
    static readonly KEY = 95;
    static readonly LEFT = 96;
    static readonly LIKE = 97;
    static readonly LIMIT = 98;
    static readonly MATCH = 99;
    static readonly NATURAL = 100;
    static readonly NO = 101;
    static readonly NOT = 102;
    static readonly NOTNULL = 103;
    static readonly NULL = 104;
    static readonly OF = 105;
    static readonly OFFSET = 106;
    static readonly ON = 107;
    static readonly OR = 108;
    static readonly ORDER = 109;
    static readonly OUTER = 110;
    static readonly PLAN = 111;
    static readonly PRAGMA = 112;
    static readonly PRIMARY = 113;
    static readonly QUERY = 114;
    static readonly RAISE = 115;
    static readonly RECURSIVE = 116;
    static readonly REFERENCES = 117;
    static readonly REGEXP = 118;
    static readonly REINDEX = 119;
    static readonly RELEASE = 120;
    static readonly RENAME = 121;
    static readonly REPLACE = 122;
    static readonly RESTRICT = 123;
    static readonly RETURNING = 124;
    static readonly RIGHT = 125;
    static readonly ROLLBACK = 126;
    static readonly ROW = 127;
    static readonly ROWS = 128;
    static readonly SAVEPOINT = 129;
    static readonly SELECT = 130;
    static readonly SET = 131;
    static readonly TABLE = 132;
    static readonly TEMP = 133;
    static readonly TEMPORARY = 134;
    static readonly THEN = 135;
    static readonly TO = 136;
    static readonly TRANSACTION = 137;
    static readonly TRIGGER = 138;
    static readonly UNION = 139;
    static readonly UNIQUE = 140;
    static readonly UPDATE = 141;
    static readonly USING = 142;
    static readonly VACUUM = 143;
    static readonly VALUES = 144;
    static readonly VIEW = 145;
    static readonly VIRTUAL = 146;
    static readonly WHEN = 147;
    static readonly WHERE = 148;
    static readonly WITH = 149;
    static readonly WITHOUT = 150;
    static readonly FIRST_VALUE = 151;
    static readonly OVER = 152;
    static readonly PARTITION = 153;
    static readonly RANGE = 154;
    static readonly PRECEDING = 155;
    static readonly UNBOUNDED = 156;
    static readonly CURRENT = 157;
    static readonly FOLLOWING = 158;
    static readonly CUME_DIST = 159;
    static readonly DENSE_RANK = 160;
    static readonly LAG = 161;
    static readonly LAST_VALUE = 162;
    static readonly LEAD = 163;
    static readonly NTH_VALUE = 164;
    static readonly NTILE = 165;
    static readonly PERCENT_RANK = 166;
    static readonly RANK = 167;
    static readonly ROW_NUMBER = 168;
    static readonly GENERATED = 169;
    static readonly ALWAYS = 170;
    static readonly STORED = 171;
    static readonly TRUE = 172;
    static readonly FALSE = 173;
    static readonly WINDOW = 174;
    static readonly NULLS = 175;
    static readonly FIRST = 176;
    static readonly LAST = 177;
    static readonly FILTER = 178;
    static readonly GROUPS = 179;
    static readonly EXCLUDE = 180;
    static readonly TIES = 181;
    static readonly OTHERS = 182;
    static readonly DO = 183;
    static readonly NOTHING = 184;
    static readonly IDENTIFIER = 185;
    static readonly NUMERIC_LITERAL = 186;
    static readonly BIND_PARAMETER = 187;
    static readonly STRING_LITERAL = 188;
    static readonly BLOB_LITERAL = 189;
    static readonly SINGLE_LINE_COMMENT = 190;
    static readonly MULTILINE_COMMENT = 191;
    static readonly SPACES = 192;
    static readonly UNEXPECTED_CHAR = 193;
    static readonly RULE_parse = 0;
    static readonly RULE_sql_stmt_list = 1;
    static readonly RULE_sql_stmt = 2;
    static readonly RULE_alter_table_stmt = 3;
    static readonly RULE_analyze_stmt = 4;
    static readonly RULE_attach_stmt = 5;
    static readonly RULE_begin_stmt = 6;
    static readonly RULE_commit_stmt = 7;
    static readonly RULE_rollback_stmt = 8;
    static readonly RULE_savepoint_stmt = 9;
    static readonly RULE_release_stmt = 10;
    static readonly RULE_create_index_stmt = 11;
    static readonly RULE_indexed_column = 12;
    static readonly RULE_create_table_stmt = 13;
    static readonly RULE_column_def = 14;
    static readonly RULE_type_name = 15;
    static readonly RULE_column_constraint = 16;
    static readonly RULE_signed_number = 17;
    static readonly RULE_table_constraint = 18;
    static readonly RULE_foreign_key_clause = 19;
    static readonly RULE_conflict_clause = 20;
    static readonly RULE_create_trigger_stmt = 21;
    static readonly RULE_create_view_stmt = 22;
    static readonly RULE_create_virtual_table_stmt = 23;
    static readonly RULE_with_clause = 24;
    static readonly RULE_cte_table_name = 25;
    static readonly RULE_recursive_cte = 26;
    static readonly RULE_common_table_expression = 27;
    static readonly RULE_delete_stmt = 28;
    static readonly RULE_delete_stmt_limited = 29;
    static readonly RULE_detach_stmt = 30;
    static readonly RULE_drop_stmt = 31;
    static readonly RULE_expr = 32;
    static readonly RULE_raise_function = 33;
    static readonly RULE_literal_value = 34;
    static readonly RULE_value_row = 35;
    static readonly RULE_values_clause = 36;
    static readonly RULE_insert_stmt = 37;
    static readonly RULE_returning_clause = 38;
    static readonly RULE_upsert_clause = 39;
    static readonly RULE_pragma_stmt = 40;
    static readonly RULE_pragma_value = 41;
    static readonly RULE_reindex_stmt = 42;
    static readonly RULE_select_stmt = 43;
    static readonly RULE_join_clause = 44;
    static readonly RULE_select_core = 45;
    static readonly RULE_factored_select_stmt = 46;
    static readonly RULE_simple_select_stmt = 47;
    static readonly RULE_compound_select_stmt = 48;
    static readonly RULE_table_or_subquery = 49;
    static readonly RULE_result_column = 50;
    static readonly RULE_join_operator = 51;
    static readonly RULE_join_constraint = 52;
    static readonly RULE_compound_operator = 53;
    static readonly RULE_update_stmt = 54;
    static readonly RULE_column_name_list = 55;
    static readonly RULE_update_stmt_limited = 56;
    static readonly RULE_qualified_table_name = 57;
    static readonly RULE_vacuum_stmt = 58;
    static readonly RULE_filter_clause = 59;
    static readonly RULE_window_defn = 60;
    static readonly RULE_over_clause = 61;
    static readonly RULE_frame_spec = 62;
    static readonly RULE_frame_clause = 63;
    static readonly RULE_simple_function_invocation = 64;
    static readonly RULE_aggregate_function_invocation = 65;
    static readonly RULE_window_function_invocation = 66;
    static readonly RULE_common_table_stmt = 67;
    static readonly RULE_order_by_stmt = 68;
    static readonly RULE_limit_stmt = 69;
    static readonly RULE_ordering_term = 70;
    static readonly RULE_asc_desc = 71;
    static readonly RULE_frame_left = 72;
    static readonly RULE_frame_right = 73;
    static readonly RULE_frame_single = 74;
    static readonly RULE_window_function = 75;
    static readonly RULE_offset = 76;
    static readonly RULE_default_value = 77;
    static readonly RULE_partition_by = 78;
    static readonly RULE_order_by_expr = 79;
    static readonly RULE_order_by_expr_asc_desc = 80;
    static readonly RULE_expr_asc_desc = 81;
    static readonly RULE_initial_select = 82;
    static readonly RULE_recursive_select = 83;
    static readonly RULE_unary_operator = 84;
    static readonly RULE_error_message = 85;
    static readonly RULE_module_argument = 86;
    static readonly RULE_column_alias = 87;
    static readonly RULE_keyword = 88;
    static readonly RULE_name = 89;
    static readonly RULE_function_name = 90;
    static readonly RULE_schema_name = 91;
    static readonly RULE_table_name = 92;
    static readonly RULE_table_or_index_name = 93;
    static readonly RULE_column_name = 94;
    static readonly RULE_collation_name = 95;
    static readonly RULE_foreign_table = 96;
    static readonly RULE_index_name = 97;
    static readonly RULE_trigger_name = 98;
    static readonly RULE_view_name = 99;
    static readonly RULE_module_name = 100;
    static readonly RULE_pragma_name = 101;
    static readonly RULE_savepoint_name = 102;
    static readonly RULE_table_alias = 103;
    static readonly RULE_transaction_name = 104;
    static readonly RULE_window_name = 105;
    static readonly RULE_alias = 106;
    static readonly RULE_filename = 107;
    static readonly RULE_base_window_name = 108;
    static readonly RULE_simple_func = 109;
    static readonly RULE_aggregate_func = 110;
    static readonly RULE_table_function_name = 111;
    static readonly RULE_any_name = 112;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    parse(): ParseContext;
    sql_stmt_list(): Sql_stmt_listContext;
    sql_stmt(): Sql_stmtContext;
    alter_table_stmt(): Alter_table_stmtContext;
    analyze_stmt(): Analyze_stmtContext;
    attach_stmt(): Attach_stmtContext;
    begin_stmt(): Begin_stmtContext;
    commit_stmt(): Commit_stmtContext;
    rollback_stmt(): Rollback_stmtContext;
    savepoint_stmt(): Savepoint_stmtContext;
    release_stmt(): Release_stmtContext;
    create_index_stmt(): Create_index_stmtContext;
    indexed_column(): Indexed_columnContext;
    create_table_stmt(): Create_table_stmtContext;
    column_def(): Column_defContext;
    type_name(): Type_nameContext;
    column_constraint(): Column_constraintContext;
    signed_number(): Signed_numberContext;
    table_constraint(): Table_constraintContext;
    foreign_key_clause(): Foreign_key_clauseContext;
    conflict_clause(): Conflict_clauseContext;
    create_trigger_stmt(): Create_trigger_stmtContext;
    create_view_stmt(): Create_view_stmtContext;
    create_virtual_table_stmt(): Create_virtual_table_stmtContext;
    with_clause(): With_clauseContext;
    cte_table_name(): Cte_table_nameContext;
    recursive_cte(): Recursive_cteContext;
    common_table_expression(): Common_table_expressionContext;
    delete_stmt(): Delete_stmtContext;
    delete_stmt_limited(): Delete_stmt_limitedContext;
    detach_stmt(): Detach_stmtContext;
    drop_stmt(): Drop_stmtContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    raise_function(): Raise_functionContext;
    literal_value(): Literal_valueContext;
    value_row(): Value_rowContext;
    values_clause(): Values_clauseContext;
    insert_stmt(): Insert_stmtContext;
    returning_clause(): Returning_clauseContext;
    upsert_clause(): Upsert_clauseContext;
    pragma_stmt(): Pragma_stmtContext;
    pragma_value(): Pragma_valueContext;
    reindex_stmt(): Reindex_stmtContext;
    select_stmt(): Select_stmtContext;
    join_clause(): Join_clauseContext;
    select_core(): Select_coreContext;
    factored_select_stmt(): Factored_select_stmtContext;
    simple_select_stmt(): Simple_select_stmtContext;
    compound_select_stmt(): Compound_select_stmtContext;
    table_or_subquery(): Table_or_subqueryContext;
    result_column(): Result_columnContext;
    join_operator(): Join_operatorContext;
    join_constraint(): Join_constraintContext;
    compound_operator(): Compound_operatorContext;
    update_stmt(): Update_stmtContext;
    column_name_list(): Column_name_listContext;
    update_stmt_limited(): Update_stmt_limitedContext;
    qualified_table_name(): Qualified_table_nameContext;
    vacuum_stmt(): Vacuum_stmtContext;
    filter_clause(): Filter_clauseContext;
    window_defn(): Window_defnContext;
    over_clause(): Over_clauseContext;
    frame_spec(): Frame_specContext;
    frame_clause(): Frame_clauseContext;
    simple_function_invocation(): Simple_function_invocationContext;
    aggregate_function_invocation(): Aggregate_function_invocationContext;
    window_function_invocation(): Window_function_invocationContext;
    common_table_stmt(): Common_table_stmtContext;
    order_by_stmt(): Order_by_stmtContext;
    limit_stmt(): Limit_stmtContext;
    ordering_term(): Ordering_termContext;
    asc_desc(): Asc_descContext;
    frame_left(): Frame_leftContext;
    frame_right(): Frame_rightContext;
    frame_single(): Frame_singleContext;
    window_function(): Window_functionContext;
    offset(): OffsetContext;
    default_value(): Default_valueContext;
    partition_by(): Partition_byContext;
    order_by_expr(): Order_by_exprContext;
    order_by_expr_asc_desc(): Order_by_expr_asc_descContext;
    expr_asc_desc(): Expr_asc_descContext;
    initial_select(): Initial_selectContext;
    recursive_select(): Recursive_selectContext;
    unary_operator(): Unary_operatorContext;
    error_message(): Error_messageContext;
    module_argument(): Module_argumentContext;
    column_alias(): Column_aliasContext;
    keyword(): KeywordContext;
    name(): NameContext;
    function_name(): Function_nameContext;
    schema_name(): Schema_nameContext;
    table_name(): Table_nameContext;
    table_or_index_name(): Table_or_index_nameContext;
    column_name(): Column_nameContext;
    collation_name(): Collation_nameContext;
    foreign_table(): Foreign_tableContext;
    index_name(): Index_nameContext;
    trigger_name(): Trigger_nameContext;
    view_name(): View_nameContext;
    module_name(): Module_nameContext;
    pragma_name(): Pragma_nameContext;
    savepoint_name(): Savepoint_nameContext;
    table_alias(): Table_aliasContext;
    transaction_name(): Transaction_nameContext;
    window_name(): Window_nameContext;
    alias(): AliasContext;
    filename(): FilenameContext;
    base_window_name(): Base_window_nameContext;
    simple_func(): Simple_funcContext;
    aggregate_func(): Aggregate_funcContext;
    table_function_name(): Table_function_nameContext;
    any_name(): Any_nameContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expr_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    private static readonly _serializedATNSegment3;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class ParseContext extends ParserRuleContext {
    EOF(): TerminalNode;
    sql_stmt_list(): Sql_stmt_listContext[];
    sql_stmt_list(i: number): Sql_stmt_listContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Sql_stmt_listContext extends ParserRuleContext {
    sql_stmt(): Sql_stmtContext[];
    sql_stmt(i: number): Sql_stmtContext;
    SCOL(): TerminalNode[];
    SCOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Sql_stmtContext extends ParserRuleContext {
    alter_table_stmt(): Alter_table_stmtContext | undefined;
    analyze_stmt(): Analyze_stmtContext | undefined;
    attach_stmt(): Attach_stmtContext | undefined;
    begin_stmt(): Begin_stmtContext | undefined;
    commit_stmt(): Commit_stmtContext | undefined;
    create_index_stmt(): Create_index_stmtContext | undefined;
    create_table_stmt(): Create_table_stmtContext | undefined;
    create_trigger_stmt(): Create_trigger_stmtContext | undefined;
    create_view_stmt(): Create_view_stmtContext | undefined;
    create_virtual_table_stmt(): Create_virtual_table_stmtContext | undefined;
    delete_stmt(): Delete_stmtContext | undefined;
    delete_stmt_limited(): Delete_stmt_limitedContext | undefined;
    detach_stmt(): Detach_stmtContext | undefined;
    drop_stmt(): Drop_stmtContext | undefined;
    insert_stmt(): Insert_stmtContext | undefined;
    pragma_stmt(): Pragma_stmtContext | undefined;
    reindex_stmt(): Reindex_stmtContext | undefined;
    release_stmt(): Release_stmtContext | undefined;
    rollback_stmt(): Rollback_stmtContext | undefined;
    savepoint_stmt(): Savepoint_stmtContext | undefined;
    select_stmt(): Select_stmtContext | undefined;
    update_stmt(): Update_stmtContext | undefined;
    update_stmt_limited(): Update_stmt_limitedContext | undefined;
    vacuum_stmt(): Vacuum_stmtContext | undefined;
    EXPLAIN(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    PLAN(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Alter_table_stmtContext extends ParserRuleContext {
    _new_table_name: Table_nameContext;
    _old_column_name: Column_nameContext;
    _new_column_name: Column_nameContext;
    ALTER(): TerminalNode;
    TABLE(): TerminalNode;
    table_name(): Table_nameContext[];
    table_name(i: number): Table_nameContext;
    RENAME(): TerminalNode | undefined;
    ADD(): TerminalNode | undefined;
    column_def(): Column_defContext | undefined;
    DROP(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    TO(): TerminalNode | undefined;
    COLUMN(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Analyze_stmtContext extends ParserRuleContext {
    ANALYZE(): TerminalNode;
    schema_name(): Schema_nameContext | undefined;
    table_or_index_name(): Table_or_index_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Attach_stmtContext extends ParserRuleContext {
    ATTACH(): TerminalNode;
    expr(): ExprContext;
    AS(): TerminalNode;
    schema_name(): Schema_nameContext;
    DATABASE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Begin_stmtContext extends ParserRuleContext {
    BEGIN(): TerminalNode;
    TRANSACTION(): TerminalNode | undefined;
    DEFERRED(): TerminalNode | undefined;
    IMMEDIATE(): TerminalNode | undefined;
    EXCLUSIVE(): TerminalNode | undefined;
    transaction_name(): Transaction_nameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Commit_stmtContext extends ParserRuleContext {
    COMMIT(): TerminalNode | undefined;
    END(): TerminalNode | undefined;
    TRANSACTION(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Rollback_stmtContext extends ParserRuleContext {
    ROLLBACK(): TerminalNode;
    TRANSACTION(): TerminalNode | undefined;
    TO(): TerminalNode | undefined;
    savepoint_name(): Savepoint_nameContext | undefined;
    SAVEPOINT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Savepoint_stmtContext extends ParserRuleContext {
    SAVEPOINT(): TerminalNode;
    savepoint_name(): Savepoint_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Release_stmtContext extends ParserRuleContext {
    RELEASE(): TerminalNode;
    savepoint_name(): Savepoint_nameContext;
    SAVEPOINT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Create_index_stmtContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    INDEX(): TerminalNode;
    index_name(): Index_nameContext;
    ON(): TerminalNode;
    table_name(): Table_nameContext;
    OPEN_PAR(): TerminalNode;
    indexed_column(): Indexed_columnContext[];
    indexed_column(i: number): Indexed_columnContext;
    CLOSE_PAR(): TerminalNode;
    UNIQUE(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WHERE(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Indexed_columnContext extends ParserRuleContext {
    column_name(): Column_nameContext | undefined;
    expr(): ExprContext | undefined;
    COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    asc_desc(): Asc_descContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Create_table_stmtContext extends ParserRuleContext {
    _row_ROW_ID: Token;
    CREATE(): TerminalNode;
    TABLE(): TerminalNode;
    table_name(): Table_nameContext;
    OPEN_PAR(): TerminalNode | undefined;
    column_def(): Column_defContext[];
    column_def(i: number): Column_defContext;
    CLOSE_PAR(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    select_stmt(): Select_stmtContext | undefined;
    IF(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    TEMP(): TerminalNode | undefined;
    TEMPORARY(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    table_constraint(): Table_constraintContext[];
    table_constraint(i: number): Table_constraintContext;
    WITHOUT(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Column_defContext extends ParserRuleContext {
    column_name(): Column_nameContext;
    type_name(): Type_nameContext | undefined;
    column_constraint(): Column_constraintContext[];
    column_constraint(i: number): Column_constraintContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Type_nameContext extends ParserRuleContext {
    name(): NameContext[];
    name(i: number): NameContext;
    OPEN_PAR(): TerminalNode | undefined;
    signed_number(): Signed_numberContext[];
    signed_number(i: number): Signed_numberContext;
    CLOSE_PAR(): TerminalNode | undefined;
    COMMA(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Column_constraintContext extends ParserRuleContext {
    CHECK(): TerminalNode | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    CLOSE_PAR(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    foreign_key_clause(): Foreign_key_clauseContext | undefined;
    AS(): TerminalNode | undefined;
    CONSTRAINT(): TerminalNode | undefined;
    name(): NameContext | undefined;
    PRIMARY(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    NULL(): TerminalNode | undefined;
    UNIQUE(): TerminalNode | undefined;
    signed_number(): Signed_numberContext | undefined;
    literal_value(): Literal_valueContext | undefined;
    conflict_clause(): Conflict_clauseContext | undefined;
    GENERATED(): TerminalNode | undefined;
    ALWAYS(): TerminalNode | undefined;
    STORED(): TerminalNode | undefined;
    VIRTUAL(): TerminalNode | undefined;
    asc_desc(): Asc_descContext | undefined;
    AUTOINCREMENT(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Signed_numberContext extends ParserRuleContext {
    NUMERIC_LITERAL(): TerminalNode;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Table_constraintContext extends ParserRuleContext {
    OPEN_PAR(): TerminalNode | undefined;
    indexed_column(): Indexed_columnContext[];
    indexed_column(i: number): Indexed_columnContext;
    CLOSE_PAR(): TerminalNode | undefined;
    CHECK(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    FOREIGN(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    foreign_key_clause(): Foreign_key_clauseContext | undefined;
    CONSTRAINT(): TerminalNode | undefined;
    name(): NameContext | undefined;
    PRIMARY(): TerminalNode | undefined;
    UNIQUE(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    conflict_clause(): Conflict_clauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Foreign_key_clauseContext extends ParserRuleContext {
    REFERENCES(): TerminalNode;
    foreign_table(): Foreign_tableContext;
    OPEN_PAR(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    CLOSE_PAR(): TerminalNode | undefined;
    ON(): TerminalNode[];
    ON(i: number): TerminalNode;
    MATCH(): TerminalNode[];
    MATCH(i: number): TerminalNode;
    name(): NameContext[];
    name(i: number): NameContext;
    DEFERRABLE(): TerminalNode | undefined;
    DELETE(): TerminalNode[];
    DELETE(i: number): TerminalNode;
    UPDATE(): TerminalNode[];
    UPDATE(i: number): TerminalNode;
    SET(): TerminalNode[];
    SET(i: number): TerminalNode;
    CASCADE(): TerminalNode[];
    CASCADE(i: number): TerminalNode;
    RESTRICT(): TerminalNode[];
    RESTRICT(i: number): TerminalNode;
    NO(): TerminalNode[];
    NO(i: number): TerminalNode;
    ACTION(): TerminalNode[];
    ACTION(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    NULL(): TerminalNode[];
    NULL(i: number): TerminalNode;
    DEFAULT(): TerminalNode[];
    DEFAULT(i: number): TerminalNode;
    NOT(): TerminalNode | undefined;
    INITIALLY(): TerminalNode | undefined;
    DEFERRED(): TerminalNode | undefined;
    IMMEDIATE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Conflict_clauseContext extends ParserRuleContext {
    ON(): TerminalNode;
    CONFLICT(): TerminalNode;
    ROLLBACK(): TerminalNode | undefined;
    ABORT(): TerminalNode | undefined;
    FAIL(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Create_trigger_stmtContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    TRIGGER(): TerminalNode;
    trigger_name(): Trigger_nameContext;
    ON(): TerminalNode;
    table_name(): Table_nameContext;
    BEGIN(): TerminalNode;
    END(): TerminalNode;
    DELETE(): TerminalNode | undefined;
    INSERT(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    BEFORE(): TerminalNode | undefined;
    AFTER(): TerminalNode | undefined;
    INSTEAD(): TerminalNode | undefined;
    OF(): TerminalNode[];
    OF(i: number): TerminalNode;
    FOR(): TerminalNode | undefined;
    EACH(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    WHEN(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    SCOL(): TerminalNode[];
    SCOL(i: number): TerminalNode;
    TEMP(): TerminalNode | undefined;
    TEMPORARY(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    update_stmt(): Update_stmtContext[];
    update_stmt(i: number): Update_stmtContext;
    insert_stmt(): Insert_stmtContext[];
    insert_stmt(i: number): Insert_stmtContext;
    delete_stmt(): Delete_stmtContext[];
    delete_stmt(i: number): Delete_stmtContext;
    select_stmt(): Select_stmtContext[];
    select_stmt(i: number): Select_stmtContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Create_view_stmtContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    VIEW(): TerminalNode;
    view_name(): View_nameContext;
    AS(): TerminalNode;
    select_stmt(): Select_stmtContext;
    IF(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    CLOSE_PAR(): TerminalNode | undefined;
    TEMP(): TerminalNode | undefined;
    TEMPORARY(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Create_virtual_table_stmtContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    VIRTUAL(): TerminalNode;
    TABLE(): TerminalNode;
    table_name(): Table_nameContext;
    USING(): TerminalNode;
    module_name(): Module_nameContext;
    IF(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    module_argument(): Module_argumentContext[];
    module_argument(i: number): Module_argumentContext;
    CLOSE_PAR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class With_clauseContext extends ParserRuleContext {
    WITH(): TerminalNode;
    cte_table_name(): Cte_table_nameContext[];
    cte_table_name(i: number): Cte_table_nameContext;
    AS(): TerminalNode[];
    AS(i: number): TerminalNode;
    OPEN_PAR(): TerminalNode[];
    OPEN_PAR(i: number): TerminalNode;
    select_stmt(): Select_stmtContext[];
    select_stmt(i: number): Select_stmtContext;
    CLOSE_PAR(): TerminalNode[];
    CLOSE_PAR(i: number): TerminalNode;
    RECURSIVE(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Cte_table_nameContext extends ParserRuleContext {
    table_name(): Table_nameContext;
    OPEN_PAR(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    CLOSE_PAR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Recursive_cteContext extends ParserRuleContext {
    cte_table_name(): Cte_table_nameContext;
    AS(): TerminalNode;
    OPEN_PAR(): TerminalNode;
    initial_select(): Initial_selectContext;
    UNION(): TerminalNode;
    recursive_select(): Recursive_selectContext;
    CLOSE_PAR(): TerminalNode;
    ALL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Common_table_expressionContext extends ParserRuleContext {
    table_name(): Table_nameContext;
    AS(): TerminalNode;
    OPEN_PAR(): TerminalNode[];
    OPEN_PAR(i: number): TerminalNode;
    select_stmt(): Select_stmtContext;
    CLOSE_PAR(): TerminalNode[];
    CLOSE_PAR(i: number): TerminalNode;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Delete_stmtContext extends ParserRuleContext {
    DELETE(): TerminalNode;
    FROM(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    with_clause(): With_clauseContext | undefined;
    WHERE(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    returning_clause(): Returning_clauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Delete_stmt_limitedContext extends ParserRuleContext {
    DELETE(): TerminalNode;
    FROM(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    with_clause(): With_clauseContext | undefined;
    WHERE(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    returning_clause(): Returning_clauseContext | undefined;
    limit_stmt(): Limit_stmtContext | undefined;
    order_by_stmt(): Order_by_stmtContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Detach_stmtContext extends ParserRuleContext {
    DETACH(): TerminalNode;
    schema_name(): Schema_nameContext;
    DATABASE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Drop_stmtContext extends ParserRuleContext {
    _object: Token;
    DROP(): TerminalNode;
    any_name(): Any_nameContext;
    INDEX(): TerminalNode | undefined;
    TABLE(): TerminalNode | undefined;
    TRIGGER(): TerminalNode | undefined;
    VIEW(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class ExprContext extends ParserRuleContext {
    literal_value(): Literal_valueContext | undefined;
    BIND_PARAMETER(): TerminalNode | undefined;
    column_name(): Column_nameContext | undefined;
    table_name(): Table_nameContext | undefined;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    schema_name(): Schema_nameContext | undefined;
    unary_operator(): Unary_operatorContext | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    PIPE2(): TerminalNode | undefined;
    STAR(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    LT2(): TerminalNode | undefined;
    GT2(): TerminalNode | undefined;
    AMP(): TerminalNode | undefined;
    PIPE(): TerminalNode | undefined;
    LT(): TerminalNode | undefined;
    LT_EQ(): TerminalNode | undefined;
    GT(): TerminalNode | undefined;
    GT_EQ(): TerminalNode | undefined;
    ASSIGN(): TerminalNode | undefined;
    EQ(): TerminalNode | undefined;
    NOT_EQ1(): TerminalNode | undefined;
    NOT_EQ2(): TerminalNode | undefined;
    IS(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    FROM(): TerminalNode | undefined;
    IN(): TerminalNode | undefined;
    LIKE(): TerminalNode | undefined;
    GLOB(): TerminalNode | undefined;
    MATCH(): TerminalNode | undefined;
    REGEXP(): TerminalNode | undefined;
    AND(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    function_name(): Function_nameContext | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    CLOSE_PAR(): TerminalNode | undefined;
    filter_clause(): Filter_clauseContext | undefined;
    over_clause(): Over_clauseContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    CAST(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    type_name(): Type_nameContext | undefined;
    COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    ESCAPE(): TerminalNode | undefined;
    ISNULL(): TerminalNode | undefined;
    NOTNULL(): TerminalNode | undefined;
    NULL(): TerminalNode | undefined;
    BETWEEN(): TerminalNode | undefined;
    table_function_name(): Table_function_nameContext | undefined;
    select_stmt(): Select_stmtContext | undefined;
    EXISTS(): TerminalNode | undefined;
    CASE(): TerminalNode | undefined;
    END(): TerminalNode | undefined;
    WHEN(): TerminalNode[];
    WHEN(i: number): TerminalNode;
    THEN(): TerminalNode[];
    THEN(i: number): TerminalNode;
    ELSE(): TerminalNode | undefined;
    raise_function(): Raise_functionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Raise_functionContext extends ParserRuleContext {
    RAISE(): TerminalNode;
    OPEN_PAR(): TerminalNode;
    CLOSE_PAR(): TerminalNode;
    IGNORE(): TerminalNode | undefined;
    COMMA(): TerminalNode | undefined;
    error_message(): Error_messageContext | undefined;
    ROLLBACK(): TerminalNode | undefined;
    ABORT(): TerminalNode | undefined;
    FAIL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Literal_valueContext extends ParserRuleContext {
    NUMERIC_LITERAL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    BLOB_LITERAL(): TerminalNode | undefined;
    NULL(): TerminalNode | undefined;
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    CURRENT_TIME(): TerminalNode | undefined;
    CURRENT_DATE(): TerminalNode | undefined;
    CURRENT_TIMESTAMP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Value_rowContext extends ParserRuleContext {
    OPEN_PAR(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    CLOSE_PAR(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Values_clauseContext extends ParserRuleContext {
    VALUES(): TerminalNode;
    value_row(): Value_rowContext[];
    value_row(i: number): Value_rowContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Insert_stmtContext extends ParserRuleContext {
    INTO(): TerminalNode;
    table_name(): Table_nameContext;
    INSERT(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    VALUES(): TerminalNode | undefined;
    with_clause(): With_clauseContext | undefined;
    ROLLBACK(): TerminalNode | undefined;
    ABORT(): TerminalNode | undefined;
    FAIL(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    table_alias(): Table_aliasContext | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    CLOSE_PAR(): TerminalNode | undefined;
    returning_clause(): Returning_clauseContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    values_clause(): Values_clauseContext | undefined;
    select_stmt(): Select_stmtContext | undefined;
    upsert_clause(): Upsert_clauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Returning_clauseContext extends ParserRuleContext {
    RETURNING(): TerminalNode;
    result_column(): Result_columnContext[];
    result_column(i: number): Result_columnContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Upsert_clauseContext extends ParserRuleContext {
    ON(): TerminalNode;
    CONFLICT(): TerminalNode;
    DO(): TerminalNode;
    NOTHING(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    indexed_column(): Indexed_columnContext[];
    indexed_column(i: number): Indexed_columnContext;
    CLOSE_PAR(): TerminalNode | undefined;
    ASSIGN(): TerminalNode[];
    ASSIGN(i: number): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WHERE(): TerminalNode[];
    WHERE(i: number): TerminalNode;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    column_name_list(): Column_name_listContext[];
    column_name_list(i: number): Column_name_listContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Pragma_stmtContext extends ParserRuleContext {
    PRAGMA(): TerminalNode;
    pragma_name(): Pragma_nameContext;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    ASSIGN(): TerminalNode | undefined;
    pragma_value(): Pragma_valueContext | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    CLOSE_PAR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Pragma_valueContext extends ParserRuleContext {
    signed_number(): Signed_numberContext | undefined;
    name(): NameContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Reindex_stmtContext extends ParserRuleContext {
    REINDEX(): TerminalNode;
    collation_name(): Collation_nameContext | undefined;
    table_name(): Table_nameContext | undefined;
    index_name(): Index_nameContext | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Select_stmtContext extends ParserRuleContext {
    select_core(): Select_coreContext[];
    select_core(i: number): Select_coreContext;
    common_table_stmt(): Common_table_stmtContext | undefined;
    compound_operator(): Compound_operatorContext[];
    compound_operator(i: number): Compound_operatorContext;
    order_by_stmt(): Order_by_stmtContext | undefined;
    limit_stmt(): Limit_stmtContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Join_clauseContext extends ParserRuleContext {
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_operator(): Join_operatorContext[];
    join_operator(i: number): Join_operatorContext;
    join_constraint(): Join_constraintContext[];
    join_constraint(i: number): Join_constraintContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Select_coreContext extends ParserRuleContext {
    _whereExpr: ExprContext;
    _expr: ExprContext;
    _groupByExpr: ExprContext[];
    _havingExpr: ExprContext;
    SELECT(): TerminalNode | undefined;
    result_column(): Result_columnContext[];
    result_column(i: number): Result_columnContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    FROM(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    GROUP(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    WINDOW(): TerminalNode | undefined;
    window_name(): Window_nameContext[];
    window_name(i: number): Window_nameContext;
    AS(): TerminalNode[];
    AS(i: number): TerminalNode;
    window_defn(): Window_defnContext[];
    window_defn(i: number): Window_defnContext;
    DISTINCT(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_clause(): Join_clauseContext | undefined;
    HAVING(): TerminalNode | undefined;
    values_clause(): Values_clauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Factored_select_stmtContext extends ParserRuleContext {
    select_stmt(): Select_stmtContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Simple_select_stmtContext extends ParserRuleContext {
    select_core(): Select_coreContext;
    common_table_stmt(): Common_table_stmtContext | undefined;
    order_by_stmt(): Order_by_stmtContext | undefined;
    limit_stmt(): Limit_stmtContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Compound_select_stmtContext extends ParserRuleContext {
    select_core(): Select_coreContext[];
    select_core(i: number): Select_coreContext;
    common_table_stmt(): Common_table_stmtContext | undefined;
    order_by_stmt(): Order_by_stmtContext | undefined;
    limit_stmt(): Limit_stmtContext | undefined;
    UNION(): TerminalNode[];
    UNION(i: number): TerminalNode;
    INTERSECT(): TerminalNode[];
    INTERSECT(i: number): TerminalNode;
    EXCEPT(): TerminalNode[];
    EXCEPT(i: number): TerminalNode;
    ALL(): TerminalNode[];
    ALL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Table_or_subqueryContext extends ParserRuleContext {
    table_name(): Table_nameContext | undefined;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    table_alias(): Table_aliasContext | undefined;
    INDEXED(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    index_name(): Index_nameContext | undefined;
    NOT(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    table_function_name(): Table_function_nameContext | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    CLOSE_PAR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_clause(): Join_clauseContext | undefined;
    select_stmt(): Select_stmtContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Result_columnContext extends ParserRuleContext {
    STAR(): TerminalNode | undefined;
    table_name(): Table_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    column_alias(): Column_aliasContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Join_operatorContext extends ParserRuleContext {
    COMMA(): TerminalNode | undefined;
    JOIN(): TerminalNode | undefined;
    NATURAL(): TerminalNode | undefined;
    INNER(): TerminalNode | undefined;
    CROSS(): TerminalNode | undefined;
    LEFT(): TerminalNode | undefined;
    RIGHT(): TerminalNode | undefined;
    FULL(): TerminalNode | undefined;
    OUTER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Join_constraintContext extends ParserRuleContext {
    ON(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    USING(): TerminalNode | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    CLOSE_PAR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Compound_operatorContext extends ParserRuleContext {
    UNION(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    INTERSECT(): TerminalNode | undefined;
    EXCEPT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Update_stmtContext extends ParserRuleContext {
    UPDATE(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    SET(): TerminalNode;
    ASSIGN(): TerminalNode[];
    ASSIGN(i: number): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    column_name_list(): Column_name_listContext[];
    column_name_list(i: number): Column_name_listContext;
    with_clause(): With_clauseContext | undefined;
    OR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    FROM(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    returning_clause(): Returning_clauseContext | undefined;
    ROLLBACK(): TerminalNode | undefined;
    ABORT(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    FAIL(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_clause(): Join_clauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Column_name_listContext extends ParserRuleContext {
    OPEN_PAR(): TerminalNode;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    CLOSE_PAR(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Update_stmt_limitedContext extends ParserRuleContext {
    UPDATE(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    SET(): TerminalNode;
    ASSIGN(): TerminalNode[];
    ASSIGN(i: number): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    column_name_list(): Column_name_listContext[];
    column_name_list(i: number): Column_name_listContext;
    with_clause(): With_clauseContext | undefined;
    OR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WHERE(): TerminalNode | undefined;
    returning_clause(): Returning_clauseContext | undefined;
    limit_stmt(): Limit_stmtContext | undefined;
    ROLLBACK(): TerminalNode | undefined;
    ABORT(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    FAIL(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    order_by_stmt(): Order_by_stmtContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Qualified_table_nameContext extends ParserRuleContext {
    table_name(): Table_nameContext;
    schema_name(): Schema_nameContext | undefined;
    DOT(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    alias(): AliasContext | undefined;
    INDEXED(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    index_name(): Index_nameContext | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Vacuum_stmtContext extends ParserRuleContext {
    VACUUM(): TerminalNode;
    schema_name(): Schema_nameContext | undefined;
    INTO(): TerminalNode | undefined;
    filename(): FilenameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Filter_clauseContext extends ParserRuleContext {
    FILTER(): TerminalNode;
    OPEN_PAR(): TerminalNode;
    WHERE(): TerminalNode;
    expr(): ExprContext;
    CLOSE_PAR(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Window_defnContext extends ParserRuleContext {
    OPEN_PAR(): TerminalNode;
    CLOSE_PAR(): TerminalNode;
    ORDER(): TerminalNode | undefined;
    BY(): TerminalNode[];
    BY(i: number): TerminalNode;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    base_window_name(): Base_window_nameContext | undefined;
    PARTITION(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    frame_spec(): Frame_specContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Over_clauseContext extends ParserRuleContext {
    OVER(): TerminalNode;
    window_name(): Window_nameContext | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    CLOSE_PAR(): TerminalNode | undefined;
    base_window_name(): Base_window_nameContext | undefined;
    PARTITION(): TerminalNode | undefined;
    BY(): TerminalNode[];
    BY(i: number): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    ORDER(): TerminalNode | undefined;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    frame_spec(): Frame_specContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Frame_specContext extends ParserRuleContext {
    frame_clause(): Frame_clauseContext;
    EXCLUDE(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    OTHERS(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    GROUP(): TerminalNode | undefined;
    TIES(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Frame_clauseContext extends ParserRuleContext {
    RANGE(): TerminalNode | undefined;
    ROWS(): TerminalNode | undefined;
    GROUPS(): TerminalNode | undefined;
    frame_single(): Frame_singleContext | undefined;
    BETWEEN(): TerminalNode | undefined;
    frame_left(): Frame_leftContext | undefined;
    AND(): TerminalNode | undefined;
    frame_right(): Frame_rightContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Simple_function_invocationContext extends ParserRuleContext {
    simple_func(): Simple_funcContext;
    OPEN_PAR(): TerminalNode;
    CLOSE_PAR(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    STAR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Aggregate_function_invocationContext extends ParserRuleContext {
    aggregate_func(): Aggregate_funcContext;
    OPEN_PAR(): TerminalNode;
    CLOSE_PAR(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    STAR(): TerminalNode | undefined;
    filter_clause(): Filter_clauseContext | undefined;
    DISTINCT(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Window_function_invocationContext extends ParserRuleContext {
    window_function(): Window_functionContext;
    OPEN_PAR(): TerminalNode;
    CLOSE_PAR(): TerminalNode;
    OVER(): TerminalNode;
    window_defn(): Window_defnContext | undefined;
    window_name(): Window_nameContext | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    STAR(): TerminalNode | undefined;
    filter_clause(): Filter_clauseContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Common_table_stmtContext extends ParserRuleContext {
    WITH(): TerminalNode;
    common_table_expression(): Common_table_expressionContext[];
    common_table_expression(i: number): Common_table_expressionContext;
    RECURSIVE(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Order_by_stmtContext extends ParserRuleContext {
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Limit_stmtContext extends ParserRuleContext {
    LIMIT(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    OFFSET(): TerminalNode | undefined;
    COMMA(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Ordering_termContext extends ParserRuleContext {
    expr(): ExprContext;
    COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    asc_desc(): Asc_descContext | undefined;
    NULLS(): TerminalNode | undefined;
    FIRST(): TerminalNode | undefined;
    LAST(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Asc_descContext extends ParserRuleContext {
    ASC(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Frame_leftContext extends ParserRuleContext {
    expr(): ExprContext | undefined;
    PRECEDING(): TerminalNode | undefined;
    FOLLOWING(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Frame_rightContext extends ParserRuleContext {
    expr(): ExprContext | undefined;
    PRECEDING(): TerminalNode | undefined;
    FOLLOWING(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Frame_singleContext extends ParserRuleContext {
    expr(): ExprContext | undefined;
    PRECEDING(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Window_functionContext extends ParserRuleContext {
    OPEN_PAR(): TerminalNode[];
    OPEN_PAR(i: number): TerminalNode;
    expr(): ExprContext | undefined;
    CLOSE_PAR(): TerminalNode[];
    CLOSE_PAR(i: number): TerminalNode;
    OVER(): TerminalNode;
    order_by_expr_asc_desc(): Order_by_expr_asc_descContext | undefined;
    FIRST_VALUE(): TerminalNode | undefined;
    LAST_VALUE(): TerminalNode | undefined;
    partition_by(): Partition_byContext | undefined;
    frame_clause(): Frame_clauseContext | undefined;
    CUME_DIST(): TerminalNode | undefined;
    PERCENT_RANK(): TerminalNode | undefined;
    order_by_expr(): Order_by_exprContext | undefined;
    DENSE_RANK(): TerminalNode | undefined;
    RANK(): TerminalNode | undefined;
    ROW_NUMBER(): TerminalNode | undefined;
    LAG(): TerminalNode | undefined;
    LEAD(): TerminalNode | undefined;
    offset(): OffsetContext | undefined;
    default_value(): Default_valueContext | undefined;
    NTH_VALUE(): TerminalNode | undefined;
    COMMA(): TerminalNode | undefined;
    signed_number(): Signed_numberContext | undefined;
    NTILE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class OffsetContext extends ParserRuleContext {
    COMMA(): TerminalNode;
    signed_number(): Signed_numberContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Default_valueContext extends ParserRuleContext {
    COMMA(): TerminalNode;
    signed_number(): Signed_numberContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Partition_byContext extends ParserRuleContext {
    PARTITION(): TerminalNode;
    BY(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Order_by_exprContext extends ParserRuleContext {
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Order_by_expr_asc_descContext extends ParserRuleContext {
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    expr_asc_desc(): Expr_asc_descContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Expr_asc_descContext extends ParserRuleContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    asc_desc(): Asc_descContext[];
    asc_desc(i: number): Asc_descContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Initial_selectContext extends ParserRuleContext {
    select_stmt(): Select_stmtContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Recursive_selectContext extends ParserRuleContext {
    select_stmt(): Select_stmtContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Unary_operatorContext extends ParserRuleContext {
    MINUS(): TerminalNode | undefined;
    PLUS(): TerminalNode | undefined;
    TILDE(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Error_messageContext extends ParserRuleContext {
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Module_argumentContext extends ParserRuleContext {
    expr(): ExprContext | undefined;
    column_def(): Column_defContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Column_aliasContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class KeywordContext extends ParserRuleContext {
    ABORT(): TerminalNode | undefined;
    ACTION(): TerminalNode | undefined;
    ADD(): TerminalNode | undefined;
    AFTER(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    ALTER(): TerminalNode | undefined;
    ANALYZE(): TerminalNode | undefined;
    AND(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    ASC(): TerminalNode | undefined;
    ATTACH(): TerminalNode | undefined;
    AUTOINCREMENT(): TerminalNode | undefined;
    BEFORE(): TerminalNode | undefined;
    BEGIN(): TerminalNode | undefined;
    BETWEEN(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    CASCADE(): TerminalNode | undefined;
    CASE(): TerminalNode | undefined;
    CAST(): TerminalNode | undefined;
    CHECK(): TerminalNode | undefined;
    COLLATE(): TerminalNode | undefined;
    COLUMN(): TerminalNode | undefined;
    COMMIT(): TerminalNode | undefined;
    CONFLICT(): TerminalNode | undefined;
    CONSTRAINT(): TerminalNode | undefined;
    CREATE(): TerminalNode | undefined;
    CROSS(): TerminalNode | undefined;
    CURRENT_DATE(): TerminalNode | undefined;
    CURRENT_TIME(): TerminalNode | undefined;
    CURRENT_TIMESTAMP(): TerminalNode | undefined;
    DATABASE(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    DEFERRABLE(): TerminalNode | undefined;
    DEFERRED(): TerminalNode | undefined;
    DELETE(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    DETACH(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    DROP(): TerminalNode | undefined;
    EACH(): TerminalNode | undefined;
    ELSE(): TerminalNode | undefined;
    END(): TerminalNode | undefined;
    ESCAPE(): TerminalNode | undefined;
    EXCEPT(): TerminalNode | undefined;
    EXCLUSIVE(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    EXPLAIN(): TerminalNode | undefined;
    FAIL(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    FOREIGN(): TerminalNode | undefined;
    FROM(): TerminalNode | undefined;
    FULL(): TerminalNode | undefined;
    GLOB(): TerminalNode | undefined;
    GROUP(): TerminalNode | undefined;
    HAVING(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    IMMEDIATE(): TerminalNode | undefined;
    IN(): TerminalNode | undefined;
    INDEX(): TerminalNode | undefined;
    INDEXED(): TerminalNode | undefined;
    INITIALLY(): TerminalNode | undefined;
    INNER(): TerminalNode | undefined;
    INSERT(): TerminalNode | undefined;
    INSTEAD(): TerminalNode | undefined;
    INTERSECT(): TerminalNode | undefined;
    INTO(): TerminalNode | undefined;
    IS(): TerminalNode | undefined;
    ISNULL(): TerminalNode | undefined;
    JOIN(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    LEFT(): TerminalNode | undefined;
    LIKE(): TerminalNode | undefined;
    LIMIT(): TerminalNode | undefined;
    MATCH(): TerminalNode | undefined;
    NATURAL(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    NOTNULL(): TerminalNode | undefined;
    NULL(): TerminalNode | undefined;
    OF(): TerminalNode | undefined;
    OFFSET(): TerminalNode | undefined;
    ON(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    ORDER(): TerminalNode | undefined;
    OUTER(): TerminalNode | undefined;
    PLAN(): TerminalNode | undefined;
    PRAGMA(): TerminalNode | undefined;
    PRIMARY(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    RAISE(): TerminalNode | undefined;
    RECURSIVE(): TerminalNode | undefined;
    REFERENCES(): TerminalNode | undefined;
    REGEXP(): TerminalNode | undefined;
    REINDEX(): TerminalNode | undefined;
    RELEASE(): TerminalNode | undefined;
    RENAME(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    RESTRICT(): TerminalNode | undefined;
    RETURNING(): TerminalNode | undefined;
    RIGHT(): TerminalNode | undefined;
    ROLLBACK(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    ROWS(): TerminalNode | undefined;
    SAVEPOINT(): TerminalNode | undefined;
    SELECT(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    TABLE(): TerminalNode | undefined;
    TEMP(): TerminalNode | undefined;
    TEMPORARY(): TerminalNode | undefined;
    THEN(): TerminalNode | undefined;
    TO(): TerminalNode | undefined;
    TRANSACTION(): TerminalNode | undefined;
    TRIGGER(): TerminalNode | undefined;
    UNION(): TerminalNode | undefined;
    UNIQUE(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    USING(): TerminalNode | undefined;
    VACUUM(): TerminalNode | undefined;
    VALUES(): TerminalNode | undefined;
    VIEW(): TerminalNode | undefined;
    VIRTUAL(): TerminalNode | undefined;
    WHEN(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    WITH(): TerminalNode | undefined;
    WITHOUT(): TerminalNode | undefined;
    FIRST_VALUE(): TerminalNode | undefined;
    OVER(): TerminalNode | undefined;
    PARTITION(): TerminalNode | undefined;
    RANGE(): TerminalNode | undefined;
    PRECEDING(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    FOLLOWING(): TerminalNode | undefined;
    CUME_DIST(): TerminalNode | undefined;
    DENSE_RANK(): TerminalNode | undefined;
    LAG(): TerminalNode | undefined;
    LAST_VALUE(): TerminalNode | undefined;
    LEAD(): TerminalNode | undefined;
    NTH_VALUE(): TerminalNode | undefined;
    NTILE(): TerminalNode | undefined;
    PERCENT_RANK(): TerminalNode | undefined;
    RANK(): TerminalNode | undefined;
    ROW_NUMBER(): TerminalNode | undefined;
    GENERATED(): TerminalNode | undefined;
    ALWAYS(): TerminalNode | undefined;
    STORED(): TerminalNode | undefined;
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    WINDOW(): TerminalNode | undefined;
    NULLS(): TerminalNode | undefined;
    FIRST(): TerminalNode | undefined;
    LAST(): TerminalNode | undefined;
    FILTER(): TerminalNode | undefined;
    GROUPS(): TerminalNode | undefined;
    EXCLUDE(): TerminalNode | undefined;
    TIES(): TerminalNode | undefined;
    OTHERS(): TerminalNode | undefined;
    DO(): TerminalNode | undefined;
    NOTHING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class NameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Function_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Schema_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Table_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Table_or_index_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Column_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Collation_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Foreign_tableContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Index_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Trigger_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class View_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Module_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Pragma_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Savepoint_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Table_aliasContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Transaction_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Window_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class AliasContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class FilenameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Base_window_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Simple_funcContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Aggregate_funcContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Table_function_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
export declare class Any_nameContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    keyword(): KeywordContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    OPEN_PAR(): TerminalNode | undefined;
    any_name(): Any_nameContext | undefined;
    CLOSE_PAR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SQLiteParserListener): void;
    exitRule(listener: SQLiteParserListener): void;
}
