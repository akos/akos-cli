# Akos

Akos CLI

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/akos-cli.svg?style=flat-square
[npm-url]: http://npmjs.org/package/akos-cli
[david-img]: http://img.shields.io/david/akos/akos-cli.svg?style=flat-square
[david-url]: https://david-dm.org/akos/akos-cli
[download-img]: https://img.shields.io/npm/dm/akos-cli.svg?style=flat-square
[download-url]: https://npmjs.org/package/akos-cli

## Install

``` shell
npm install -g akos
```

## Quick Start

## Commands

- `akos help`: Show help of all commands
- `akos -V, --version`: Show the version of current CLI

- `akos init <project-name>`: Initalize a akos project
- `akos start`: Start server
    - `-b, --open-browser`: Open browser when start server
    - `-B, --build`: Build files in the beginning
    - `-p, --port <port>`: Web Server Port
- `akos dev`: Start server with webpack dev middleware
    - `-b, --open-browser`: Open browser when start server
    - `-p, --port <port>`: WebpackDevServer port in dev mode

## Configuration

``` js
{
    type: '',                       // Project type
    root: '',                       // Project root
    port: 8000,                     // Server port
    entry: '',                      // Server start entry
    controller: '',                 // Controller path
    routes: '',                     // Routes path
};
```
