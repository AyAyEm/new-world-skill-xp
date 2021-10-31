import React from 'react';
import { Box, Typography } from '@mui/material';

import { LevelBox } from '#components';
import { apSumOfNTerms } from '#lib/utils';

import './Weapon.scss';

const masteryLevelXp = (level: number) => apSumOfNTerms(50, level, 100);
function masteryLevelDifference(values: [number, number]): number {
  return masteryLevelXp(values[1]) - masteryLevelXp(values[0]);
}

export function Weapon() {
  const [values, setValues] = React.useState<[number, number]>([0, 20]);

  return (
    <Box className="weapon-mastery">
      <Typography variant="h6">
        Weapon mastery
      </Typography>
      <hr />
      <LevelBox min={0} max={20} onChange={setValues} values={values}>
        <Typography>
          {`${masteryLevelDifference(values).toLocaleString()} xp`}
        </Typography>
      </LevelBox>
    </Box>
  );
}
export default Weapon;
