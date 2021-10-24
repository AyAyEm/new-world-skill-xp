import { useCallback } from 'react';
import { styled, Box, Slider, Input as MuiInput } from '@mui/material';

import './LevelSlider.scss';

import type { ChangeEvent } from 'react';

const Input = styled(MuiInput)`
  width: 65px;
  color: white;
  margin: 0px 6% 0px;
`;

const [min, max] = [0, 200];
const inputProps = {
  step: 10,
  min,
  max,
  type: 'number',
  'aria-labelledby': 'input-slider',
};

type InputSide = 'left' | 'right';

export interface LevelSliderProps {
  value: [number, number];
  onChange: (newValue: LevelSliderProps['value']) => void;
}

export function LevelSlider(props: LevelSliderProps) {
  const { value, onChange } = props;

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
        props.onChange([newValue, value[1]]);
      } else {
        props.onChange([value[0], newValue]);
      }
    }
  }

  const handleBlur = useCallback((v: [number, number]) => {
    if (v[0] < min || v[1] < min) {
      onChange([v[0] < min ? min : v[0], v[1] < min ? min : v[1]]);
    } else if (v[0] > max || v[1] > max) {
      onChange([v[0] > max ? max : v[0], v[1] > max ? max : v[1]]);
    }

    if (v[0] > v[1]) {
      onChange([v[1], v[0]]);
    }
  }, [onChange]);

  return (
    <Box className="level-slider">
      <Input
        value={value[0].toString()}
        size="small"
        onChange={(e) => handleInputChange('left', e)}
        onBlur={() => handleBlur(value)}
        inputProps={inputProps}
      />
      <Slider
        min={0}
        max={200}
        className="slider"
        getAriaLabel={() => 'Level range'}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        getAriaValueText={(v) => v.toString()}
      />
      <Input
        value={value[1].toString()}
        size="small"
        onChange={(e) => handleInputChange('right', e)}
        onBlur={() => handleBlur(value)}
        inputProps={inputProps}
      />
    </Box>
  );
}
export default LevelSlider;
