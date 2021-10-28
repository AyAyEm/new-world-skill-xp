import React from 'react';
import { Box, Slider, Input } from '@mui/material';

import './LevelSlider.scss';

import type { ChangeEvent } from 'react';

type InputSide = 'left' | 'right';

export interface LevelSliderProps {
  values: [number, number];
  min: number;
  max: number;
  onChange: (newValues: LevelSliderProps['values']) => void;
}

export function LevelSlider(props: LevelSliderProps) {
  const { values, min, max, onChange } = props;

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    props.onChange(newValue as [number, number]);
  };

  function handleInputChange(
    side: InputSide,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const newValue = +event.target.value;

    if (!Number.isNaN(newValue)) {
      if (side === 'left') {
        props.onChange([newValue, values[1]]);
      } else {
        props.onChange([values[0], newValue]);
      }
    }
  }

  const handleBlur = React.useMemo(() => (v: [number, number]) => {
    if (v[0] < min || v[1] < min) {
      onChange([v[0] < min ? min : v[0], v[1] < min ? min : v[1]]);
    } else if (v[0] > max || v[1] > max) {
      onChange([v[0] > max ? max : v[0], v[1] > max ? max : v[1]]);
    }
  }, [onChange]);

  const inputProps = {
    step: 1,
    min,
    max,
    type: 'number',
    'aria-labelledby': 'input-slider',
  };

  return (
    <Box className="level-slider">
      <Input
        id="min-input"
        value={values[0].toString()}
        size="small"
        onChange={(e) => handleInputChange('left', e)}
        onBlur={() => handleBlur(values)}
        inputProps={inputProps}
      />
      <Slider
        min={min}
        max={max}
        className="slider"
        getAriaLabel={() => 'Level range'}
        value={values}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        getAriaValueText={(v) => v.toString()}
      />
      <Input
        id="max-input"
        value={values[1].toString()}
        size="small"
        onChange={(e) => handleInputChange('right', e)}
        onBlur={() => handleBlur(values)}
        inputProps={inputProps}
      />
    </Box>
  );
}
export default LevelSlider;
