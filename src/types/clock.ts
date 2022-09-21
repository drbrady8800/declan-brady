export enum ClockEnum {
  SECONDS = 'Seconds',
  MINUTES = 'Minutes',
  HOURS = 'Hours',
}

export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}