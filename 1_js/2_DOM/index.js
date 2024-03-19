// let h1Element = document.querySelector("h1");
//
// h1Element.style.color = "red";
//
// let isBlue = false;
//
// setInterval(() => {
//   if (isBlue) {
//     h1Element.style.color = "blue";
//   } else {
//     h1Element.style.color = "purple";
//   }
//   isBlue = !isBlue;
// }, 1000);
//
// let oakParagraph = document.getElementById("oakParagraph");
// console.log(oakParagraph);
//
// let firstBackground = document.getElementsByClassName("background")[0];
// console.log(firstBackground);

const div1 = document.querySelector(".background");

// div1.style.backgroundColor = "red";
// div1.style.height = "50px";
// div1.style.width = "400px";
// div1.style.fontSize = "30px";
// div1.style.border = "5px solid black";

div1.classList.add("addClass");

const title = document.getElementById("page_title");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  console.log("clicked!");
  title.classList.toggle("addClass");
});

const unOrderedList = document.querySelector("ul");

unOrderedList.addEventListener("click", () => {
  unOrderedList.classList.add("listParent");
});

// const listItems = document.querySelectorAll("li");
// listItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("listItem");
//   });
// });

const toDoItems = document.querySelectorAll(".todoItem");

toDoItems.forEach((item) => {
  item.addEventListener(
    "mouseover",
    (event) => (event.target.style.backgroundColor = "blue"),
  );
  item.addEventListener(
    "mouseout",
    (event) => (event.target.style.backgroundColor = "white"),
  );
  item.addEventListener("click", (event) =>
    event.target.classList.toggle("listItem"),
  );
});
