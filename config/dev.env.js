'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GITHUB_CLIENTID: '"2c1a8680d4e497d52a52"',
  GITHUB_CLIENTSECRET: '"9c64d4b112a250806911ed8ba9c3a76e1afbfab2"'
})
