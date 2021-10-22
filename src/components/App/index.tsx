import React from 'react';

import { SkillSelect, ExpBox } from '#components';

import type { Skill } from '#types/skills';

import './App.scss';

export function App() {
  const [skill, setSkill] = React.useState<Skill>('Weaponsmithing');

  return (
    <div className="App">
      <header className="App-header" />
      <main className="App-main">
        <SkillSelect onChange={setSkill} skill={skill} />
        <ExpBox className="ExpBox" skill={skill} />
      </main>
    </div>
  );
}
export default App;
