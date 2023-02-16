const posting = document.querySelector("#postingForm");
const ul = document.querySelector("ul");

const addReply = (username, reply) => {
  const newReply = document.createElement("li");
  newReply.textContent = `${username}의 댓글 : ${reply} `;
  ul.append(newReply);
};

posting.addEventListener("submit", function (e) {
  const username = this.elements.username;
  const reply = this.elements.reply__content;

  username.value === "" || reply.value === ""
    ? alert("아이디 혹은 내용을 입력하세요!!")
    : addReply(username.value, reply.value);
  username.value = "";
  reply.value = "";

  e.preventDefault();
});
