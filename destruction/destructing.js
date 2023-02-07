//배열 분해
const scores = [100, 95, 93, 92, 88];

// const [gold, silver, bronze, fourth, fifth] = scores;

//각각 변수에 값이 저장된 것을 확인할 수 있음

// console.log(gold, silver, bronze, fourth, fifth);

const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(everyoneElse);

// 객체 분해

const user = {
  email: "yjey12@naver.com",
  password: "123456789",
  name: "양재연",
  born: 1996,
  city: "대전",
};

const { name, email, password } = user;
console.log(`${name}님의 이메일은 ${email} 이고 비밀번호는 ${password}입니다.`);

//user객체의 born 특성값을 가져와 변수명 birthYear에 할당하는 코드
const { born: birthYear } = user;

console.log(`${name}님의 출생년도는 ${birthYear}년 입니다.`);
