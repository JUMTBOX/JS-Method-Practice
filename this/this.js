const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};

//fullName 함수를 화살표 함수로 바꾸면 this가 person을 가리키지 않고 window 객체를 가리키게됨
