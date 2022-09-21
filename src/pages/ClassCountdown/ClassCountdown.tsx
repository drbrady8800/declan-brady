import React, { useEffect, useState } from "react";
import { CountdownCircle } from "../../components";
import { ClockEnum } from "../../types";
import { startClock } from "./logic";
import theme from "../../theme/theme";
import { mountBodyDarkMode, unmountBodyDarkMode } from "../../utils/bodyUtlis";


const ClassCountdown: React.FC = () => {
  const END_TIME = new Date("2022-09-21T15:15:00.000");

  const [clockStarted, setClockStarted] = useState<boolean>(false);
  // TODO: Make this context global
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (!clockStarted) {
      startClock(END_TIME);
      setClockStarted(true);
      // Reset every 10 min to keep up to date
      setTimeout(() => {
        setClockStarted(false);
      }, 600000);
    }
  }, [clockStarted]);

  useEffect(() => {
    if (darkMode) {
      mountBodyDarkMode();
      return function cleanup() {
        unmountBodyDarkMode();
      };
    }
  }, [darkMode]);

  return (
    <div>
      <CountdownCircle
        animationDuration="3600s"
        color={darkMode ? theme.colors.cyan : "red"}
        darkMode={darkMode}
        label={ClockEnum.HOURS}
      />
      <CountdownCircle
        animationDuration="60s"
        color={darkMode ? theme.colors.cyan : "green"}
        darkMode={darkMode}
        label={ClockEnum.MINUTES}
      />
      <CountdownCircle
        animationDuration="1s"
        color={darkMode ? theme.colors.cyan : "blue"}
        darkMode={darkMode}
        label={ClockEnum.SECONDS}
      />
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
  );
};

export default ClassCountdown;