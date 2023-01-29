// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const double = numbers.map((num) => {
//   //   console.log(num * 2);
//   return num * 2;
// });

// console.log(double);

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

const titles = movies.map((movie) => {
  return movie.title.toUpperCase();
});

console.log(titles);
