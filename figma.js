const searchBox = document.querySelector(".searchBox");
const navBtnContainer = document.querySelector(".navBtncontainer");
const searchBtn = document.querySelector(".searchBtn");
const closeBtn = document.querySelector(".closeBtn");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  navBtnContainer.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  navBtnContainer.classList.remove("active");
});
