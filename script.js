const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if a theme is already saved in localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  themeToggle.classList.replace("bx-moon", "bx-sun");
}

// When icon is clicked
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  // Change icon and save preference
  if (body.classList.contains("light-theme")) {
    themeToggle.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "dark");
  }
});
