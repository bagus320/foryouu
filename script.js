const sectionOne = document.querySelector("#p1");
const sectionTwo = document.querySelector("#p2");
const sectionThree = document.querySelector("#p3");
const gif1 = document.querySelector("#gif-container1");
const gif2 = document.querySelector("#gif-container2");
const yey = document.querySelector("#yey");

function func1() {
  sectionOne.style.display = "none";
  sectionTwo.style.display = "flex";
}
function func2() {
  sectionTwo.style.display = "none";
  sectionThree.style.display = "flex";
}
function func3() {
  sectionThree.style.display = "none";
  gif1.style.display = "none";
  gif2.style.display = "none";
  yey.style.display = "flex";
}
