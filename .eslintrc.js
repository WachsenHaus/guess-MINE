module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  rules: {
    "no-console": "off",
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "no-redeclare": 0,
    "no-dupe-else-if": 0,
    "no-import-assign": 0,
    "no-setter-return": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
