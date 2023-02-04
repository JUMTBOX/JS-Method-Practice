const num = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15];

const odd = num.filter((n) => {
  return n % 2 == 1;
});

console.log(odd);

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
  { title: "sharknado", score: 30 },
  { title: "nottinghill", score: 70 },
];

const worst = movies.filter((movie) => {
  return movie.score < 90;
});

for (let movie of worst) {
  console.log(movie.title);
}
