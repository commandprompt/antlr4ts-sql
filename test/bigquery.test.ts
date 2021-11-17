import { antlr4tsSQL, SQLDialect, PredictionMode } from "../index";
import { BigQueryGrammar } from "../index";

let antlr4tssql = null;
beforeAll(() => {
  antlr4tssql = new antlr4tsSQL(SQLDialect.BigQuery);
});

test("can parse and tokenize a query", () => {
  const query = `SELECT
  *
FROM \`sch1.table`;
  const tokens = antlr4tssql.getTokens(query, []);
  const parser = antlr4tssql.getParser(tokens, []);
  parser.interpreter.setPredictionMode(PredictionMode.LL);
  expect(parser instanceof BigQueryGrammar.BigQueryParser).toBeTruthy();
  const parseTree = antlr4tssql.getParseTree(parser);
  expect(tokens.getTokens().length).toBe(7 + 1); // 7 "words", 1 EOF, the BigQuery Grammar skips whitespace characters
  expect(parseTree instanceof BigQueryGrammar.SqlContext).toBeTruthy();
});
