const path = require('path')

module.exports = {
  // verbose: true,
  // cache: false,
  rootDir: path.resolve(__dirname, '../../'),
  setupFiles: ['<rootDir>/tests/unit/setup'],
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/views/*.vue',
    '!src/main.js'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  mapCoverage: true
}
