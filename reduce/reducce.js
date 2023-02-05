const odd = [3, 5, 7, 9, 11];

//배열의 총합
const reduce = odd.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(`reduce로 나오는 합계: ${reduce}`);

let total = 0;
for (let num of odd) {
  total += num;
}

console.log(`for문으로 나오는 합계 : ${total}`);

// 최솟값 찾는 방법
const minNum = odd.reduce((min, current) => {
  if (current < min) {
    return current;
  } else {
    return min;
  }
});

console.log(minNum);

//최댓값 찾기
const maxNum = odd.reduce((max, current) => {
  if (current > max) {
    return current;
  } else {
    return max;
  }
});

console.log(maxNum);

//가장 높은 평점을 받은 영화 찾기
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

const bestMovies = movies.reduce((best, current) => {
  if (current.score > best.score) {
    return current;
  } else {
    return best;
  }
});

console.log(bestMovies.title);

//Reduce메서드에 초기값 할당

const A = odd.reduce((num, current) => {
  return num + current;
}, 100); //num의 초기값을 100으로 설정하여 (100 + 배열의 합)이 됨

console.log(A);
