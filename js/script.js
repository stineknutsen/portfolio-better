const themeToggle = document.getElementById("theme-toggle");
const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");
const body = document.body;
const cards = document.querySelectorAll(".card");
const welcome = document.querySelector(".welcome");
const listItems = document.querySelectorAll("li");
const links = document.querySelectorAll("a");
const header = document.querySelector("header");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  welcome.classList.add("dark-theme");
  header.classList.add("dark-theme");
  links.forEach((link) => link.classList.add("dark-theme"));
  cards.forEach((card) => card.classList.add("dark-theme"));
  listItems.forEach((item) => item.classList.add("dark-theme"));
  iconSun.style.display = "inline-block";
  iconMoon.style.display = "none";
}

themeToggle.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("dark-theme");

  iconSun.style.display = isDarkMode ? "inline-block" : "none";
  iconMoon.style.display = isDarkMode ? "none" : "inline-block";

  cards.forEach((card) => card.classList.toggle("dark-theme", isDarkMode));
  listItems.forEach((item) => item.classList.toggle("dark-theme", isDarkMode));
  links.forEach((link) => link.classList.toggle("dark-theme", isDarkMode));
  welcome.classList.toggle("dark-theme", isDarkMode);
  header.classList.toggle("dark-theme", isDarkMode);

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
