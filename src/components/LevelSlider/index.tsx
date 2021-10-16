import { useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

import './LevelSlider.css';

import type { ChangeEvent } from 'react';

const Input = styled(MuiInput)`
  width: 65px;
  margin: 0px 15px 0px;
  color: white;
`;

const [min, max] = [0, 200]
const inputProps = {
  step: 10,
  min,
  max,
  type: 'number',
  'aria-labelledby': 'input-slider'
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

  const handleInputChange = (side: InputSide, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = +event.target.value;

    if (!Number.isNaN(newValue)) {
      if (side === 'left') {
        props.onChange([newValue, value[1]]);
      } else {
        props.onChange([value[0], newValue]);
      }
    }
  }

  const handleBlur = useCallback((value: [number, number]) => {
    if (value[0] < min || value[1] < min) {
      onChange([value[0] < min ? min : value[0], value[1] < min ? min : value[1]]);
    } else if (value[0] > max || value[1] > max) {
      onChange([value[0] > max ? max : value[0], value[1] > max ? max : value[1]]);
    }

    if (value[0] > value[1]) {
      onChange([value[1], value[0]]);
    }
  }, [onChange]);

  return (
    <Box sx={{ width: 400 }} className="LevelSlider">
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
        getAriaLabel={() => 'Level range'}
        value={props.value}
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
  )
}