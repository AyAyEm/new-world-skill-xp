import { Trade } from '#pages/trade';

import './Home.scss';

export function Home() {
  return (
    <div className="home">
      <header className="home-header" />
      <main className="home-main">
        <Trade />
      </main>
    </div>
  );
}
export default Home;
