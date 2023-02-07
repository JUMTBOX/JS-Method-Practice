const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.forEach((el) => {
  if (el % 2 === 0) {
    console.log(el);
  }
});

for (let el of numbers) {
  console.log(el);
}

const movies = [
  {
    title: "amadeus",
    score: 99,
  },
  {
    title: "stand by me",
    score: 85,
  },
  {
    title: "parasite",
    score: 95,
  },
  {
    title: "alien",
    score: 90,
  },
];

movies.forEach((movie) => {
  console.log(`${movie.title}의 점수는 ${movie.score}점 입니다.`);
});
