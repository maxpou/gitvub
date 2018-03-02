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
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/views/*.vue',
    '!src/main.js'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage'
}
