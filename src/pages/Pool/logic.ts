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
  }).score;

  // Loop to calculate the scores
  PoolPeople.forEach((person) => {
    person.points = person.gamesCorrect;
    if (person.winner === "Georgia" && georgiaWinning) {
      person.points += 2;
    } else if (person.winner === "TCU" && !georgiaWinning) {
      person.points += 2;
    }
    person.offBy = Math.abs(person.score - totalScore)
    if (person.score === closest) {
      person.points += 4;
    } else if (person.offBy <= 5) {
      person.points += 3;
    } else if (person.offBy <= 10) {
      person.points += 2;
    }
  });


  // Sort the people by points
  PoolPeople.sort((a,b) => {
    if (a.points != b.points) {
      return b.points - a.points;
    } else if (a.gamesCorrect != b.gamesCorrect) {
      return b.gamesCorrect - a.gamesCorrect;
    } else {
      return a.offBy - b.offBy;
    }
  });

  return {
    winner: PoolPeople[0].name,
    secondPlace: PoolPeople[1].name,
    lastPlace: PoolPeople[PoolPeople.length - 1].name
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