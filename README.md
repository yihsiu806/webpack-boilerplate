# Webpack Boilerplate

* Start development server
```
npm start
```

* Build
```
npm run build
```


## Install

```
npm init -y
npm i -D webpack webpack-cli
npm i -D style-loader css-loader
npm i -D webpack-dev-server
```

```
npx webpack
npx webpack --config webpack.config.js
```

### `package.json`
```
{
  "scripts": {
    "start": "webpack-dev-server --mode development --host 127.0.0.1 --open",
    "build": "webpack --mode production"
  }
}
```

### `webpack.config.js`

Reference the file.

## Bundler

| bundler |
| ------- |
| webpack |
| rollup  |
| parcel  |
| gulp    |
