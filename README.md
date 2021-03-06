# GitVub

[![Build Status](https://travis-ci.org/maxpou/gitvub.svg?branch=master)](https://travis-ci.org/maxpou/gitvub) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

> GitHub + Vue.js = GitVub

A Vue.js **Progressive Web App (PWA)** based on GitHub API.

![mobile screens](docs/mobile-screens.png)

*icon on desktop, splash screen and screen shot taken from this application*

A demo is available here: [https://gitvub.azurewebsites.net](https://gitvub.azurewebsites.net/).

## What's inside?

* [Vue.js](https://vuejs.org/): an awesome JS Framework
* [Vuex](https://vuex.vuejs.org/en/): A state management library for VueJs
* [vue-router](https://router.vuejs.org/en/): a routing library
* [Axios](https://github.com/mzabriskie/axios): a well known library for XMLHttpRequests
* [Facebook/Jest](https://facebook.github.io/jest/): a test library
* [Material Design Lite](https://getmdl.io/): CSS Framework
* [Material Icons](https://material.io/icons/): a set of icons
* [Workbox (v3)](https://developers.google.com/web/tools/workbox/next/): JavaScript libraries for Progressive Web Apps (PWA)

... using the [GitHub Api](https://api.github.com/) ([doc](https://developer.github.com/v3)).

Based on [vue-cli 3](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md#conventions) and follow his file structure/conventions.


## Notes

* Code style follow:
  * [StandarJS](https://standardjs.com/)
  * [VueJS **reccomended** rules](https://vuejs.org/v2/style-guide/) (thanks to [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue#readme))
* API tests use [dynamic import (Stage 3)](https://github.com/tc39/proposal-dynamic-import)


## Testing service workers

```bash
$ npm install -g serve
$ npm run build && serve dist
```

## Working with HTTPS

```bash
# first install ngrok (https://ngrok.com/)
$ npm install -g ngrok

# Terminal 1: (will run app on port 8080)
$ npm run dev

# Then on a 2nd terminal:
$ ngrok http 8080

ngrok by @inconshreveable                                                                                                                                                                                                   (Ctrl+C to quit)

Session Status                online
Version                       2.2.8
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://ada5c26b.ngrok.io -> localhost:8080
Forwarding                    https://ada5c26b.ngrok.io -> localhost:8080

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

You can now work with the HTTPS url given (in the example above: `https://ada5c26b.ngrok.io`)

## Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# Run tests
npm test

# Run tests + generate coverage (available under /tests/unit/coverage)
npm test -- --coverage

# Run tests in watch node
npm test -- --watchAll

# Run tests + update snapshots if needed
npm test -- -u
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
