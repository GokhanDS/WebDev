//Function expression to select elements
const selectElements = (s) => document.querySelector(s);
//Open the menu on click
selectElements(".open").addEventListener("click", () => {
  selectElements(".nav-list").classList.add("active");
});
//Close the menu on click
selectElements(".close").addEventListener("click", () => {
  selectElements(".nav-list").classList.remove("active");
});
