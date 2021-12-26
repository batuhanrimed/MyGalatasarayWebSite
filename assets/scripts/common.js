window.addEventListener("load", function () {
  var template = document.getElementById("template");
  var darkMode = document.getElementById("dark-mode");
  darkMode.addEventListener("click", function () {
    if (darkMode.checked) {
      template.href = "assets/styles/style.dark.css";
    } else {
      template.href = "assets/styles/style.css";
    }
  });
});
