import { ClockEnum, TimeLeft } from "../../types";

export const calculateTimeLeft = (endTime: Date): TimeLeft => {
  const newDate = new Date();
  const deltaMilliseconds = (endTime.getTime() - newDate.getTime());
  const deltaSeconds = Math.floor(deltaMilliseconds / 1000);
  return {
    hours: Math.floor(deltaSeconds / 3600),
    minutes: Math.floor((deltaSeconds % 3600) / 60),
    seconds: deltaSeconds % 60,
    milliseconds: deltaMilliseconds % 1000,
  };
};

export const startClock = (endTime: Date): NodeJS.Timer => {
  const updateClockInterval = setInterval(() => updateClock(endTime), 10);
  initializeCircles(endTime);
  return updateClockInterval;
}

// Updates the time left on the numerical countdown, refreshes every 10 milliseconds
export const updateClock = (endTime: Date): void => {
  const timeLeft = calculateTimeLeft(endTime);
  document.getElementById(`${ClockEnum.HOURS}Count`).innerHTML = timeLeft.hours.toString();
  document.getElementById(`${ClockEnum.MINUTES}Count`).innerHTML = timeLeft.minutes.toString();
  document.getElementById(`${ClockEnum.SECONDS}Count`).innerHTML = timeLeft.seconds.toString();
}

export const initializeCircles = (endTime: Date): void => {
  const timeLeft = calculateTimeLeft(endTime);
  // Calculate the delay of the initial circle animation
  const secondDelay = -(1 - (timeLeft.milliseconds/1000));
  const minuteDelay = -(60 - (timeLeft.seconds + timeLeft.milliseconds/1000));
  const hourDelay = -(3600 - (timeLeft.minutes*60 + timeLeft.seconds + timeLeft.milliseconds/1000));

  // Shortens the path of the animation by adding a delay
  document.getElementById(`${ClockEnum.SECONDS}Circle`).style.animationDelay = secondDelay.toString() + "s";
  document.getElementById(`${ClockEnum.MINUTES}Circle`).style.animationDelay = minuteDelay.toString() + "s";
  document.getElementById(`${ClockEnum.HOURS}Circle`).style.animationDelay = hourDelay.toString() + "s";
}

// // Shows and hides the UI
// function disappear() {
//   document.getElementById("parent").style.display = "none";
//   document.getElementById("status").style.display = "block";
// }
// function appear() {
//   document.getElementById("parent").style.display = "block";
//   document.getElementById("status").style.display = "none";
// }

// // Changes the colors of the navigation menu based on which one is selected
// function menu(event) {
//   var elementTargeted = event.target;
//   var whichMenuItem = elementTargeted.className;

//   // Remove the Active class from all menu items
//   document.getElementsByClassName("one")[0].classList.remove("oneActive");
//   document.getElementsByClassName("two")[0].classList.remove("twoActive");
//   document.getElementsByClassName("three")[0].classList.remove("threeActive");

//   // Add the Active class to the element selected
//   elementTargeted.classList.add(whichMenuItem + "Active");
// }