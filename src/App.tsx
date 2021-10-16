import React from 'react';

import { SkillSelect, LevelSlider, ExpBox } from './components';

import type { Skill } from './types/skills';

import './App.css';

function App() {
  const [skill, setSkill] = React.useState<Skill>('Weaponsmithing');
  const [sliderValue, setSliderValue] = React.useState<[number, number]>([0, 100]);

  return (
    <div className="App">
      <header className="App-header">
        <SkillSelect onChange={setSkill} skill={skill}></SkillSelect>
      </header>
      <main className="App-main">
        <div>
          <ExpBox className="ExpBox" range={sliderValue} skill={skill}/>
          <LevelSlider value={sliderValue} onChange={setSliderValue} />
        </div>
      </main>
    </div>

  );
}

export default App;
