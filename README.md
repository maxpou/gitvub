# GitVub

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)


## What's inside?

* [VueJs 2](https://vuejs.org/): an awesome JS Framework
* [Vuex](https://vuex.vuejs.org/en/): A state management library for VueJs
* [vue-router 2](https://router.vuejs.org/en/): a routing library
* [Axios](https://github.com/mzabriskie/axios): a well known library for XMLHttpRequests
* [Facebook/Jest](https://facebook.github.io/jest/): a test library
* [Bootstrap](http://getbootstrap.com/docs/4.0/getting-started/introduction/): CSS Framework

... using the [GitHub Api](https://api.github.com/) ([doc](https://developer.github.com/v3)).

Based on [vue/webpack template](https://github.com/vuejs-templates/webpack) and follow [his file structure](http://vuejs-templates.github.io/webpack/structure.html).


## Notes

* Code follow [StandarJS](https://standardjs.com/) rules;
* API test use [dynamic import (Stage 3)](https://github.com/tc39/proposal-dynamic-import)


## Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Run tests
npm test

# Run tests + generate coverage (available under /tests/unit/coverage)
npm run unit -- --coverage

# Run tests in watch node
npm run unit -- --watchAll

# Run tests + update snapshots if needed
npm run unit -- -u
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
