module.exports = {
  "extends": "airbnb",
  "env": {
  "browser": true,
  "node": true
  },
  "globals": {
      "document": "readonly"
  },
  "plugins": [
    "react-hooks"
  ],
  "rules": {
      // windows linebreaks when not in production environment
      "linebreak-style": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
  }
};