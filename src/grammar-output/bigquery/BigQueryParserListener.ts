// Generated from src/grammars/bigquery/BigQueryParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SqlContext } from "./BigQueryParser";
import { Query_statementContext } from "./BigQueryParser";
import { Query_exprContext } from "./BigQueryParser";
import { Select_statementContext } from "./BigQueryParser";
import { From_statementContext } from "./BigQueryParser";
import { From_itemContext } from "./BigQueryParser";
import { Where_statementContext } from "./BigQueryParser";
import { Group_statementContext } from "./BigQueryParser";
import { Having_statementContext } from "./BigQueryParser";
import { Window_statementContext } from "./BigQueryParser";
import { Order_clauseContext } from "./BigQueryParser";
import { Limit_clauseContext } from "./BigQueryParser";
import { Unary_operatorContext } from "./BigQueryParser";
import { ExprContext } from "./BigQueryParser";
import { Cast_exprContext } from "./BigQueryParser";
import { Column_exprContext } from "./BigQueryParser";
import { Except_statementContext } from "./BigQueryParser";
import { Replace_statementContext } from "./BigQueryParser";
import { Join_typeContext } from "./BigQueryParser";
import { On_clauseContext } from "./BigQueryParser";
import { Set_opContext } from "./BigQueryParser";
import { Using_clauseContext } from "./BigQueryParser";
import { Field_pathContext } from "./BigQueryParser";
import { SstructContext } from "./BigQueryParser";
import { Array_exprContext } from "./BigQueryParser";
import { Array_pathContext } from "./BigQueryParser";
import { Bool_expressionContext } from "./BigQueryParser";
import { Window_nameContext } from "./BigQueryParser";
import { Window_definitionContext } from "./BigQueryParser";
import { CountContext } from "./BigQueryParser";
import { Skip_rowsContext } from "./BigQueryParser";
import { With_statementContext } from "./BigQueryParser";
import { NameContext } from "./BigQueryParser";
import { Alias_nameContext } from "./BigQueryParser";
import { Array_nameContext } from "./BigQueryParser";
import { Column_nameContext } from "./BigQueryParser";
import { Cte_nameContext } from "./BigQueryParser";
import { Dataset_nameContext } from "./BigQueryParser";
import { Datatype_nameContext } from "./BigQueryParser";
import { Function_nameContext } from "./BigQueryParser";
import { Join_nameContext } from "./BigQueryParser";
import { Member_nameContext } from "./BigQueryParser";
import { Project_nameContext } from "./BigQueryParser";
import { Struct_nameContext } from "./BigQueryParser";
import { Table_nameContext } from "./BigQueryParser";
import { Pure_project_nameContext } from "./BigQueryParser";
import { Pure_dataset_nameContext } from "./BigQueryParser";
import { Pure_table_nameContext } from "./BigQueryParser";
import { Table_exprContext } from "./BigQueryParser";
import { NumberContext } from "./BigQueryParser";
import { Integer_typeContext } from "./BigQueryParser";
import { Float_typeContext } from "./BigQueryParser";
import { StringContext } from "./BigQueryParser";
import { Quoted_stringContext } from "./BigQueryParser";
import { Triple_quoted_stringContext } from "./BigQueryParser";
import { Raw_stringContext } from "./BigQueryParser";
import { Byte_stringContext } from "./BigQueryParser";
import { Raw_byte_stringContext } from "./BigQueryParser";
import { Special_stringContext } from "./BigQueryParser";
import { KeywordContext } from "./BigQueryParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BigQueryParser`.
 */
export interface BigQueryParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BigQueryParser.sql`.
	 * @param ctx the parse tree
	 */
	enterSql?: (ctx: SqlContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.sql`.
	 * @param ctx the parse tree
	 */
	exitSql?: (ctx: SqlContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.query_statement`.
	 * @param ctx the parse tree
	 */
	enterQuery_statement?: (ctx: Query_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.query_statement`.
	 * @param ctx the parse tree
	 */
	exitQuery_statement?: (ctx: Query_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.query_expr`.
	 * @param ctx the parse tree
	 */
	enterQuery_expr?: (ctx: Query_exprContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.query_expr`.
	 * @param ctx the parse tree
	 */
	exitQuery_expr?: (ctx: Query_exprContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.from_statement`.
	 * @param ctx the parse tree
	 */
	enterFrom_statement?: (ctx: From_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.from_statement`.
	 * @param ctx the parse tree
	 */
	exitFrom_statement?: (ctx: From_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.from_item`.
	 * @param ctx the parse tree
	 */
	enterFrom_item?: (ctx: From_itemContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.from_item`.
	 * @param ctx the parse tree
	 */
	exitFrom_item?: (ctx: From_itemContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.where_statement`.
	 * @param ctx the parse tree
	 */
	enterWhere_statement?: (ctx: Where_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.where_statement`.
	 * @param ctx the parse tree
	 */
	exitWhere_statement?: (ctx: Where_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.group_statement`.
	 * @param ctx the parse tree
	 */
	enterGroup_statement?: (ctx: Group_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.group_statement`.
	 * @param ctx the parse tree
	 */
	exitGroup_statement?: (ctx: Group_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.having_statement`.
	 * @param ctx the parse tree
	 */
	enterHaving_statement?: (ctx: Having_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.having_statement`.
	 * @param ctx the parse tree
	 */
	exitHaving_statement?: (ctx: Having_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.window_statement`.
	 * @param ctx the parse tree
	 */
	enterWindow_statement?: (ctx: Window_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.window_statement`.
	 * @param ctx the parse tree
	 */
	exitWindow_statement?: (ctx: Window_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.order_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_clause?: (ctx: Order_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.order_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_clause?: (ctx: Order_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.limit_clause`.
	 * @param ctx the parse tree
	 */
	enterLimit_clause?: (ctx: Limit_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.limit_clause`.
	 * @param ctx the parse tree
	 */
	exitLimit_clause?: (ctx: Limit_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.cast_expr`.
	 * @param ctx the parse tree
	 */
	enterCast_expr?: (ctx: Cast_exprContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.cast_expr`.
	 * @param ctx the parse tree
	 */
	exitCast_expr?: (ctx: Cast_exprContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.column_expr`.
	 * @param ctx the parse tree
	 */
	enterColumn_expr?: (ctx: Column_exprContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.column_expr`.
	 * @param ctx the parse tree
	 */
	exitColumn_expr?: (ctx: Column_exprContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.except_statement`.
	 * @param ctx the parse tree
	 */
	enterExcept_statement?: (ctx: Except_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.except_statement`.
	 * @param ctx the parse tree
	 */
	exitExcept_statement?: (ctx: Except_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.replace_statement`.
	 * @param ctx the parse tree
	 */
	enterReplace_statement?: (ctx: Replace_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.replace_statement`.
	 * @param ctx the parse tree
	 */
	exitReplace_statement?: (ctx: Replace_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.join_type`.
	 * @param ctx the parse tree
	 */
	enterJoin_type?: (ctx: Join_typeContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.join_type`.
	 * @param ctx the parse tree
	 */
	exitJoin_type?: (ctx: Join_typeContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.on_clause`.
	 * @param ctx the parse tree
	 */
	enterOn_clause?: (ctx: On_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.on_clause`.
	 * @param ctx the parse tree
	 */
	exitOn_clause?: (ctx: On_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.set_op`.
	 * @param ctx the parse tree
	 */
	enterSet_op?: (ctx: Set_opContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.set_op`.
	 * @param ctx the parse tree
	 */
	exitSet_op?: (ctx: Set_opContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.using_clause`.
	 * @param ctx the parse tree
	 */
	enterUsing_clause?: (ctx: Using_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.using_clause`.
	 * @param ctx the parse tree
	 */
	exitUsing_clause?: (ctx: Using_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.field_path`.
	 * @param ctx the parse tree
	 */
	enterField_path?: (ctx: Field_pathContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.field_path`.
	 * @param ctx the parse tree
	 */
	exitField_path?: (ctx: Field_pathContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.sstruct`.
	 * @param ctx the parse tree
	 */
	enterSstruct?: (ctx: SstructContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.sstruct`.
	 * @param ctx the parse tree
	 */
	exitSstruct?: (ctx: SstructContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.array_expr`.
	 * @param ctx the parse tree
	 */
	enterArray_expr?: (ctx: Array_exprContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.array_expr`.
	 * @param ctx the parse tree
	 */
	exitArray_expr?: (ctx: Array_exprContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.array_path`.
	 * @param ctx the parse tree
	 */
	enterArray_path?: (ctx: Array_pathContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.array_path`.
	 * @param ctx the parse tree
	 */
	exitArray_path?: (ctx: Array_pathContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.bool_expression`.
	 * @param ctx the parse tree
	 */
	enterBool_expression?: (ctx: Bool_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.bool_expression`.
	 * @param ctx the parse tree
	 */
	exitBool_expression?: (ctx: Bool_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.window_name`.
	 * @param ctx the parse tree
	 */
	enterWindow_name?: (ctx: Window_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.window_name`.
	 * @param ctx the parse tree
	 */
	exitWindow_name?: (ctx: Window_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.window_definition`.
	 * @param ctx the parse tree
	 */
	enterWindow_definition?: (ctx: Window_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.window_definition`.
	 * @param ctx the parse tree
	 */
	exitWindow_definition?: (ctx: Window_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.count`.
	 * @param ctx the parse tree
	 */
	enterCount?: (ctx: CountContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.count`.
	 * @param ctx the parse tree
	 */
	exitCount?: (ctx: CountContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.skip_rows`.
	 * @param ctx the parse tree
	 */
	enterSkip_rows?: (ctx: Skip_rowsContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.skip_rows`.
	 * @param ctx the parse tree
	 */
	exitSkip_rows?: (ctx: Skip_rowsContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.with_statement`.
	 * @param ctx the parse tree
	 */
	enterWith_statement?: (ctx: With_statementContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.with_statement`.
	 * @param ctx the parse tree
	 */
	exitWith_statement?: (ctx: With_statementContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.alias_name`.
	 * @param ctx the parse tree
	 */
	enterAlias_name?: (ctx: Alias_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.alias_name`.
	 * @param ctx the parse tree
	 */
	exitAlias_name?: (ctx: Alias_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.array_name`.
	 * @param ctx the parse tree
	 */
	enterArray_name?: (ctx: Array_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.array_name`.
	 * @param ctx the parse tree
	 */
	exitArray_name?: (ctx: Array_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.column_name`.
	 * @param ctx the parse tree
	 */
	enterColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.column_name`.
	 * @param ctx the parse tree
	 */
	exitColumn_name?: (ctx: Column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.cte_name`.
	 * @param ctx the parse tree
	 */
	enterCte_name?: (ctx: Cte_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.cte_name`.
	 * @param ctx the parse tree
	 */
	exitCte_name?: (ctx: Cte_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.dataset_name`.
	 * @param ctx the parse tree
	 */
	enterDataset_name?: (ctx: Dataset_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.dataset_name`.
	 * @param ctx the parse tree
	 */
	exitDataset_name?: (ctx: Dataset_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.datatype_name`.
	 * @param ctx the parse tree
	 */
	enterDatatype_name?: (ctx: Datatype_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.datatype_name`.
	 * @param ctx the parse tree
	 */
	exitDatatype_name?: (ctx: Datatype_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.join_name`.
	 * @param ctx the parse tree
	 */
	enterJoin_name?: (ctx: Join_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.join_name`.
	 * @param ctx the parse tree
	 */
	exitJoin_name?: (ctx: Join_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.member_name`.
	 * @param ctx the parse tree
	 */
	enterMember_name?: (ctx: Member_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.member_name`.
	 * @param ctx the parse tree
	 */
	exitMember_name?: (ctx: Member_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.project_name`.
	 * @param ctx the parse tree
	 */
	enterProject_name?: (ctx: Project_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.project_name`.
	 * @param ctx the parse tree
	 */
	exitProject_name?: (ctx: Project_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.struct_name`.
	 * @param ctx the parse tree
	 */
	enterStruct_name?: (ctx: Struct_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.struct_name`.
	 * @param ctx the parse tree
	 */
	exitStruct_name?: (ctx: Struct_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.table_name`.
	 * @param ctx the parse tree
	 */
	enterTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.table_name`.
	 * @param ctx the parse tree
	 */
	exitTable_name?: (ctx: Table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.pure_project_name`.
	 * @param ctx the parse tree
	 */
	enterPure_project_name?: (ctx: Pure_project_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.pure_project_name`.
	 * @param ctx the parse tree
	 */
	exitPure_project_name?: (ctx: Pure_project_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.pure_dataset_name`.
	 * @param ctx the parse tree
	 */
	enterPure_dataset_name?: (ctx: Pure_dataset_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.pure_dataset_name`.
	 * @param ctx the parse tree
	 */
	exitPure_dataset_name?: (ctx: Pure_dataset_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.pure_table_name`.
	 * @param ctx the parse tree
	 */
	enterPure_table_name?: (ctx: Pure_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.pure_table_name`.
	 * @param ctx the parse tree
	 */
	exitPure_table_name?: (ctx: Pure_table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.table_expr`.
	 * @param ctx the parse tree
	 */
	enterTable_expr?: (ctx: Table_exprContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.table_expr`.
	 * @param ctx the parse tree
	 */
	exitTable_expr?: (ctx: Table_exprContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?: (ctx: Integer_typeContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.float_type`.
	 * @param ctx the parse tree
	 */
	enterFloat_type?: (ctx: Float_typeContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.float_type`.
	 * @param ctx the parse tree
	 */
	exitFloat_type?: (ctx: Float_typeContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	enterQuoted_string?: (ctx: Quoted_stringContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	exitQuoted_string?: (ctx: Quoted_stringContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.triple_quoted_string`.
	 * @param ctx the parse tree
	 */
	enterTriple_quoted_string?: (ctx: Triple_quoted_stringContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.triple_quoted_string`.
	 * @param ctx the parse tree
	 */
	exitTriple_quoted_string?: (ctx: Triple_quoted_stringContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.raw_string`.
	 * @param ctx the parse tree
	 */
	enterRaw_string?: (ctx: Raw_stringContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.raw_string`.
	 * @param ctx the parse tree
	 */
	exitRaw_string?: (ctx: Raw_stringContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.byte_string`.
	 * @param ctx the parse tree
	 */
	enterByte_string?: (ctx: Byte_stringContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.byte_string`.
	 * @param ctx the parse tree
	 */
	exitByte_string?: (ctx: Byte_stringContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.raw_byte_string`.
	 * @param ctx the parse tree
	 */
	enterRaw_byte_string?: (ctx: Raw_byte_stringContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.raw_byte_string`.
	 * @param ctx the parse tree
	 */
	exitRaw_byte_string?: (ctx: Raw_byte_stringContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.special_string`.
	 * @param ctx the parse tree
	 */
	enterSpecial_string?: (ctx: Special_stringContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.special_string`.
	 * @param ctx the parse tree
	 */
	exitSpecial_string?: (ctx: Special_stringContext) => void;

	/**
	 * Enter a parse tree produced by `BigQueryParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `BigQueryParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;
}

