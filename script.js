// ===== SHOW / HIDE STACK =====
const toggleButton = document.querySelector("#toggleStack");
const stack = document.querySelector("#stack");

toggleButton.addEventListener("click", () => {
  if (stack.style.display === "none") {
    stack.style.display = "block";
    toggleButton.textContent = "Hide stack";
  } else {
    stack.style.display = "none";
    toggleButton.textContent = "Show stack";
  }
});

// ===== DARK / LIGHT MODE =====
const themeButton = document.querySelector("#themeToggle");
const body = document.body;

themeButton.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    themeButton.textContent = "Dark mode";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    themeButton.textContent = "Light mode";
  }
});
