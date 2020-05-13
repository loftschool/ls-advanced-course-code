module.exports = {
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  moduleFileExtensions: ["vue", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js",
  },
};
