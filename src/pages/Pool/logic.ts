import { PoolPeople, PoolPerson } from "./constants";

export interface places {
  winner: string;
  secondPlace: string;
  lastPlace: string;
}

export const findWinner = (georgiaScore: number, tcuScore: number): places => {
  const georgiaWinning = georgiaScore > tcuScore;
  const totalScore = georgiaScore + tcuScore;
  const closest = PoolPeople.reduce((a, b) => {
    return Math.abs(b.score - totalScore) < Math.abs(a.score - totalScore) ? b : a;
  });

  let winner: PoolPerson = PoolPeople[0];
  let highScore = 0;

  let secondPlace: PoolPerson = PoolPeople[1];
  let secondScore = 0;

  let lastPlace: PoolPerson = PoolPeople[-1];
  let lowScore = 100;

  // Loop to calculate the scores
  PoolPeople.forEach((person) => {
    if (person.winner === "Georgia" && georgiaWinning) {
      person.points += 2;
    } else if (person.winner === "TCU" && !georgiaWinning) {
      person.points += 2;
    }
    if (person.score === closest.score) {
      person.points += 4;
    } else if (Math.abs(person.score - totalScore) <= 5) {
      person.points += 3;
    } else if (Math.abs(person.score - totalScore) <= 10) {
      person.points += 2;
    }
  });

  // Loop to calculate the winners
  PoolPeople.forEach((person) => {
    if (person.points > highScore) {
      secondPlace = winner;
      secondScore = highScore;
      highScore = person.points;
      winner = person;
    } else if (person.points === highScore) {
      if (person.gamesCorrect > winner.gamesCorrect || (person.gamesCorrect === winner.gamesCorrect && Math.abs(person.score - totalScore) < Math.abs(winner.score - totalScore))) {
        secondPlace = winner;
        secondScore = highScore;
        winner = person;
      }
    } else if (person.points > secondScore) {
      secondScore = person.points;
      secondPlace = person;
    } else if (person.points === secondScore) {
      if (person.gamesCorrect > secondPlace.gamesCorrect || (person.gamesCorrect === secondPlace.gamesCorrect && Math.abs(person.score - totalScore) < Math.abs(secondPlace.score - totalScore))) {
        secondPlace = person;
      }
    } else if (person.points < lowScore) {
      lowScore = person.points;
      lastPlace = person;
    } else if (person.points === lowScore) {
      if (person.gamesCorrect < lastPlace.gamesCorrect || (person.gamesCorrect === lastPlace.gamesCorrect && Math.abs(person.score - totalScore) > Math.abs(lastPlace.score - totalScore))) {
        lastPlace = person;
      }
    }
    person.points = person.gamesCorrect;
  });

  return {
    winner: winner.name, 
    secondPlace: secondPlace.name,
    lastPlace: lastPlace.name
  };
}

interface result {
  team: "Georgia" | "TCU";
  totalScore: number;
  winner: string;
  secondPlace: string;
  lastPlace: string;
}

export const findWinners = (): Array<result> => {
  let winners: Array<result> = [];
  for (let i = 2; i < 100; i++) {
    let placed = findWinner(i, 0);
    winners.push({
      team: "Georgia",
      totalScore: i,
      winner: placed.winner,
      secondPlace: placed.secondPlace,
      lastPlace: placed.lastPlace,
    });
  }
  for (let i = 2; i < 100; i++) {
    let placed = findWinner(0, i);
    winners.push({
      team: "TCU",
      totalScore: i,
      winner: placed.winner,
      secondPlace: placed.secondPlace,
      lastPlace: placed.lastPlace,
    });
  }
  console.log(csvFormat(winners));
  return winners;
}

const csvFormat = (winners: Array<result>): string => {
  return [
    [
      "Team",
      "Total Score",
      "Winner",
      "Second Place",
      "Last Place",
    ],
    ...winners.map(winner => [
      winner.team,
      winner.totalScore,
      winner.winner,
      winner.secondPlace,
      winner.lastPlace,
    ])
  ]
  .map(e => e.join(",")) 
  .join("\n");
};