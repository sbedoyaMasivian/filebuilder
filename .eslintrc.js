module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quote-props": ["error", "consistent"],
    "comma-dangle": ["error", "never"],
    "quotes": ["error", "double"],
    "implicit-arrow-linebreak": ["error", "below"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
