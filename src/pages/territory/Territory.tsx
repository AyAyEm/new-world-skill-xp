import React from 'react';
import { Box, Typography } from '@mui/material';

import { LevelBox } from '#components';
import { apSumOfNTerms } from '#lib/utils';

import './Territory.scss';

function standingLevelXp(level: number): number {
  let xp = apSumOfNTerms(150, level > 100 ? 100 : level, 225);
  if (level > 100) {
    xp += (level - 100) * 22500;
  }

  return xp;
}

function standingLevelDifference(values: [number, number]): number {
  return standingLevelXp(values[1]) - standingLevelXp(values[0]);
}

export function Territory() {
  const [values, setValues] = React.useState<[number, number]>([0, 300]);

  return (
    <Box className="territory-standing">
      <Typography variant="h6">
        Territory standing
      </Typography>
      <hr />
      <LevelBox min={0} max={300} onChange={setValues} values={values}>
        <Typography>
          {`${standingLevelDifference(values).toLocaleString()} xp`}
        </Typography>
      </LevelBox>
    </Box>
  );
}
export default Territory;
