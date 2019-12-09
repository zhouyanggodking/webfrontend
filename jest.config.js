module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  testMatch: [
    '**/*_t.js',
    '**/*[_, .]spec.js'
  ],
  transform: {
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  }
}