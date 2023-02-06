//배열내의 최댓값 찾기
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const maxNum = Math.max(...numArr);

console.log(maxNum);

//배열 합치기
const user = ["재연", "휘수", "건하", "진세"];
const supervisor = ["유나", "웹디", "섬원", "단비"];

const allTogether = [...user, ...supervisor, "speed"];
console.log(allTogether);

//객체 스프레드

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "caninae" };

//겹치는 family 키에서 충돌발생 더 나중에 복사 된 caninae가 승리
const catdog = { ...feline, ...canine };

//배열을 객체로 전환 - index를 키로 삼게 됨
const num = { ...[1, 2, 3, 4, 5] };
console.log(num);
