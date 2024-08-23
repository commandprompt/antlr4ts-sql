import { antlr4tsSQL, SQLDialect } from "../dist/index";
import { SQLiteGrammar } from "../dist/index";

let antlr4tssql = null;
beforeAll(() => {
  antlr4tssql = new antlr4tsSQL(SQLDialect.SQLITE);
});

test.only("can parse and tokenize a query", () => {
  const query = 'SELECT * FROM "table_name"';
  const tokens = antlr4tssql.getTokens(query);
  const parser = antlr4tssql.getParser(tokens);
  expect(parser instanceof SQLiteGrammar.SQLiteParser).toBeTruthy();
  const parseTree = antlr4tssql.getParseTree(parser);
  expect(tokens.getTokens().length).toBe(4 + 3 + 1); // 4 "words", 3 space characters, 1 EOF
  expect(parseTree instanceof SQLiteGrammar.ParseContext).toBeTruthy();
});
