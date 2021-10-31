import React, { Suspense } from 'react';
import { CircularProgress, Tab, Tabs, Box } from '@mui/material';
import {
  Switch,
  Route,
  HashRouter,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { pascalCase } from 'change-case';

import { bmcLogo, githubLogo64 } from '#assets/img';

import './Home.scss';

const Trade = React.lazy(() => import('#pages/trade'));
const Territory = React.lazy(() => import('#pages/territory'));
const Weapon = React.lazy(() => import('#pages/weapon'));

const routes = {
  trading: Trade,
  territory: Territory,
  weapon: Weapon,
};

function HomeTabs() {
  const routesNames = Object.keys(routes);
  const routeMatch = useRouteMatch(routesNames.map((r) => `/${r}`));
  const currentTab = routeMatch?.path || `/${routesNames[0]}`;

  return (
    <Box className="home-tabs">
      <Tabs value={currentTab}>
        {
          React.Children.map(routesNames, (r) => (
            <Tab label={pascalCase(r)} value={`/${r}`} to={`/${r}`} component={Link} />
          ))
        }
      </Tabs>
    </Box>
  );
}

export function Home() {
  return (
    <div className="home">
      <HashRouter>
        <header className="home-header">
          <HomeTabs />
          <Box className="header-refs">
            <a href="https://github.com/AyAyEm/new-world-skill-xp">
              <img src={githubLogo64} alt="github logo" />
            </a>
            <a href="https://www.buymeacoffee.com/AyAyEm">
              <img src={bmcLogo} alt="bmc logo" />
            </a>
          </Box>
        </header>
        <main className="home-main">
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<CircularProgress />}>
                <Trade />
              </Suspense>
            </Route>
            {
              Object.entries(routes).map(([name, Component]) => (
                <Route path={`/${name}`} key={name}>
                  <Suspense fallback={<CircularProgress />}>
                    <Component />
                  </Suspense>
                </Route>
              ))
            }
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}
export default Home;
