import React, { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

import './Home.scss';

const Trade = React.lazy(() => import('#pages/trade/Trade'));

export function Home() {
  return (
    <div className="home">
      <header className="home-header" />
      <main className="home-main">
        <Suspense fallback={<CircularProgress />}>
          <Trade />
        </Suspense>
      </main>
    </div>
  );
}
export default Home;
