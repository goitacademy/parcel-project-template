[![CircleCI](https://circleci.com/gh/dev5c32373043/parcel-reporter-clean-dist/tree/main.svg?style=svg)](https://circleci.com/gh/dev5c32373043/parcel-reporter-clean-dist/tree/main)

# parcel-reporter-clean-dist

Reporter to clean files inside dist folder for Parcel V2 (**buildSuccess** event)

## Install

Using npm:
```shell
npm install -D parcel-reporter-clean-dist
```
Using yarn:
```shell
yarn add -D parcel-reporter-clean-dist
```
Using bower:
```shell
bower install -D parcel-reporter-clean-dist
```

## Configuration

First of all, add a new reporter in the Parcel config.

*.parcelrc*
```json
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-clean-dist"] // "..." is needed to include all other pipelines
}
```

That's it! all files except those generated on the current build will be removed from the dist folder.

If you need to apply specific rules for the cleanup process, then define a config in the package.json of the project.

*package.json*
```js
// example to remove only some specific file
{
  ...
  "cleanDistFiles": ["dist/file1.txt"]
}

// example to remove only files with specific ext
{
  ...
  "cleanDistFiles": ["dist/**/*.js"]
}

// example to exclude from removal some specific file/folder
{
  ...
  "cleanDistFiles": ["!dist/file1.txt", "!dist/embed"]
}
```

#### cleanDistFiles
Type: `String[]`<br />
Default: `${dist folder of the current build}/**/*`<br />
Glob or relative path from where we clean files (root path is the current working directory of the process)

## Requirements
* [Node.js][node] 10.0.0+
* [Parcel][parcel] 2.0.0+


[node]: https://nodejs.org/
[parcel]: https://parceljs.org/

## Contributing
Any contribution is highly appreciated.

## Licensing
The code in this project is licensed under MIT license.