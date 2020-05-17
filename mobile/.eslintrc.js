module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "index", "sibling", "parent"],
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
  },
};
