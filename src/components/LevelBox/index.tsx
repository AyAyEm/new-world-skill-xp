import React from 'react';
import { Box, InputLabel } from '@mui/material';

import { LevelSlider } from '#components/LevelSlider';

import './LevelBox.scss';

import type { LevelSliderProps } from '#components/LevelSlider';

interface ExpBoxProps extends LevelSliderProps{
  children: React.ReactNode;
}

export function LevelBox(props: ExpBoxProps) {
  const {
    values,
    min,
    max,
    children,
    onChange,
  } = props;

  return (
    <Box className="level-box">
      <Box>
        <InputLabel htmlFor="min-input">Min </InputLabel>
        {children}
        <InputLabel htmlFor="max-input">Max </InputLabel>
      </Box>
      <LevelSlider values={values} min={min} max={max} onChange={onChange} />
    </Box>
  );
}
export default LevelBox;
