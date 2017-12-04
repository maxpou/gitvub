module.exports = {
  // verbose: true,
  cache: true,
  setupFiles: [
    '<rootDir>/tests/unit/custom/browserMock.js'
  ],
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
    '!src/main.js',
    '!**/node_modules/**'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  mapCoverage: false
}
