module.exports = {
  "extends": "airbnb",
  "env": {
  "browser": true,
  "node": true
  },
  "globals": {
      "document": "readonly"
  },
  "rules": {
      // windows linebreaks when not in production environment
      "linebreak-style": 0
  }
};