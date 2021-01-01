module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true, // 单引号
        'trailingComma': 'none', // 尾逗号
        'semi': false, // 尾分号
      },
    ],
    'generator-star-spacing': 'off',
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-new": 'off'
  },
  globals: {
    $CONFIG: false,
    $API: false,
  }
}
