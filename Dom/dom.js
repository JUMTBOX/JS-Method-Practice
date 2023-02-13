const btn = document.querySelector(".bts");

//클릭시 메시지를 콘솔창에 나타냄
function scream() {
  console.log("동작이 원활하네요!!");
}

///마우스롤 올리면 배경색이 바뀜
function change() {
  btn.style.backgroundColor = "black";
}

//addEventListner로 바꾸면...

btn.addEventListener("click", scream); // btn.onclick = scream;    ----같은 줄에는 서로 같은 역할을 하는 코드---

btn.addEventListener("mouseover", change); // btn.onmouseover = change;
