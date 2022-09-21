import React, { useEffect, useState } from 'react';
import {
  Circle,
  LabelText,
  NumberText,
} from './styles';
import { ClockEnum } from '../../types';

interface CountdownCircleProps {
  animationDuration: string;
  color: string;
  darkMode: boolean;
  label: ClockEnum;
}

const CountdownCircle: React.FC<CountdownCircleProps> = (props) => {
  const { animationDuration, color, darkMode, label } = props;

  return (
    <svg viewBox="0 0 200 200" height="20rem" width="20rem" strokeDasharray={500}>
      <Circle
        animationDuration={animationDuration}
        color={color}
        cx="50%"
        cy="50%"
        id={`${label}Circle`}
        r={80}
        transform="rotate(-90, 100, 100)"
      />
      <NumberText className={darkMode ? "dark" : ""} id={`${label}Count`} x="50%" y="45%" textAnchor="middle" alignmentBaseline="central"/>
      <LabelText className={darkMode ? "dark" : ""} x="50%" y="65%" textAnchor="middle" alignmentBaseline="central">{label}</LabelText>
    </svg>
  );
};

export default CountdownCircle;