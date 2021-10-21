# New World skill calculator
[![License](https://img.shields.io/github/license/AyAyEm/new-world-skill-xp)](https://github.com/AyAyEm/new-world-skill-xp/blob/main/LICENSE.md)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/AyAyEm/new-world-skill-xp.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AyAyEm/new-world-skill-xp/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/AyAyEm/new-world-skill-xp.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AyAyEm/new-world-skill-xp/alerts/)

## Usage
This project is hosted by github pages at https://ayayem.github.io/new-world-skill-xp/

## Development
### Instalation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

### Usage
**Development**

`yarn run start-dev`

* Build app continuously
* App served @ `http://localhost:5000`

**Note**: For [fast-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) to work, you need to install react-devtools for your browser, as an extension.

**Production**

`yarn run start-prod`

* Build app once to `/build/`
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
