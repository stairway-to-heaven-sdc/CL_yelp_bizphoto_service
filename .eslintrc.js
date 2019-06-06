module.exports = {
  "extends": "airbnb",
  "env": {
  "browser": true,
  "node": true,
  "jest": true
  },
  "globals": {
      "document": "readonly"
  },
  "plugins": [
    "react-hooks",
    "jest"
  ],
  "parser": "babel-eslint",
  "rules": {
      // windows linebreaks when not in production environment
      "linebreak-style": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": [true, { "forbid": ['any', 'array', 'object'], checkContextTypes: false, checkChildContextTypes: false }]
  }
};