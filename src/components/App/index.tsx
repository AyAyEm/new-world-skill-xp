import React from 'react';

import { SkillSelect, ExpBox } from '#components';

import type { Skill } from '#types/skills';

import './App.scss';

export function App() {
  const [skill, setSkill] = React.useState<Skill>('Weaponsmithing');

  return (
    <div className="app">
      <header className="app-header" />
      <main className="app-main">
        <SkillSelect onChange={setSkill} skill={skill} />
        <ExpBox className="exp-box" skill={skill} />
      </main>
    </div>
  );
}
export default App;
