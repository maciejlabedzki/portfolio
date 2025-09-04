export default {
  output: './public/locales/$LOCALE/$NAMESPACE.json',
  locales: ['en', 'pl'],
  lexers: {
    js: [
      {
        lexer: 'JsxLexer',
      },
    ],
  },
  sort: true,
  lineEnding: 'lf',
};
