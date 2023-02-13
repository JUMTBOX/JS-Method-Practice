//생성자 함수 복습

function Remind(review, practice) {
  this.review = review;
  this.practice = practice;
  this.getRemind = function () {
    console.log(`${this.review}과 ${this.practice}을 열심히 하자.`);
  };
}

let say = new Remind("복습", "연습");
// say.getRemind();

//class로 바꾸기 복습

class Remind2 {
  constructor(review, practice) {
    this.review = review;
    this.practice = practice;
  }

  getRemind() {
    console.log(`${this.review}과 ${this.practice}을 열심히 하자`);
  }
}

let tell = new Remind2("리뷰", "자습");
// tell.getRemind();

//상속 복습

class Remind3 extends Remind2 {
  constructor(review, practice, commit) {
    super(review, practice);
    this.commit = commit;
  }
  //오버라이딩 복습
  getRemind() {
    super.getRemind();
    console.log(`그리고 1일 1${this.commit}도 까먹지말자`);
  }
}

let should = new Remind3("복습", "연습", "커밋");
should.getRemind();
