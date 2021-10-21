# Project name

<!-- Your badges/shields here -->

> Project description

* **[React](https://facebook.github.io/react/)** (17.x)
* **[Webpack](https://webpack.js.org/)** (5.x)
* **[Typescript](https://www.typescriptlang.org/)** (4.x)
* **[Fast refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)**
* Production build script (Webpack)
* Image loading/minification ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
* [SASS](http://sass-lang.com/) support
* Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage
**Development**

`yarn run start-dev`

* Build app continuously
* App served @ `http://localhost:5000`

**Production**

`yarn run start-prod`

* Build app once to `/dist/`
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`yarn start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`yarn start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`yarn build` | Build app to `/dist/`
`yarn lint` | Run linter
`yarn lint:fix` | Run linter and fix issues
`yarn start` | (alias of `yarn run start-dev`)

**Note**: replace `yarn` with `npm` in `package.json` if you use npm.

<!-- Don't need to include in your project -->
## Credits
* **[vikpe](https://github.com/vikpe) for [react-webpack-typescript-starter](https://github.com/vikpe/react-webpack-typescript-starter)**
* **[facebook](https://github.com/facebook) for [react-scripts](https://github.com/facebook/create-react-app/tree/main/packages/react-scripts)**
