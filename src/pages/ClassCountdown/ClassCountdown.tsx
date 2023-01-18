import React, { useEffect, useRef, useState } from "react";
import { CountdownCircle } from "../../components";
import { ClockEnum } from "../../types";
import { startClock } from "./logic";
import theme from "../../theme/theme";
import { mountBodyDarkMode, unmountBodyDarkMode } from "../../utils/bodyUtlis";
import { dateToInputWithTimezone } from "../../utils/dateUtils";
import { ClockWrapper, StyledButton } from "./styles";


const ClassCountdown: React.FC = () => {
  const END_TIME = new Date("2023-01-18T15:15:00.000");
  // TODO: Make look nicef
  // TODO: empty state

  const [clockStarted, setClockStarted] = useState<boolean>(false);
  const [isOver, setIsOver] = useState<boolean>(false);
  // TODO: Make this context global
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [endTime, setEndTime] = useState<Date>();
  const [clockInterval, setClockInterval] = useState<NodeJS.Timer>();

  const timeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!clockStarted) {
      console.log("HERE")
      const interval = startClock(endTime || END_TIME);
      setClockInterval(interval);
      setClockStarted(true);
    }
  }, [clockStarted, endTime]);

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
      {!isOver && (
        <ClockWrapper>
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
        </ClockWrapper>
      )}
      <div className="w-100 d-flex">
        <StyledButton className="mt-5 px-3 py-2 mx-auto" onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</StyledButton>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        // Logic for min value
        if (clockInterval !== undefined) {
          clearInterval(clockInterval);
        }
        console.log(timeRef.current?.value, new Date(timeRef.current?.value));
        setEndTime(new Date(timeRef.current?.value));
        setClockStarted(false);
      }}>
        <input
          type="datetime-local"
          ref={timeRef}
          defaultValue={dateToInputWithTimezone(new Date())}
        />
        <input type="submit" value="Change time" />
      </form>
    </div>
  );
};

export default ClassCountdown;