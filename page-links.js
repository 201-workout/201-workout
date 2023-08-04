// links to create a program page (exercisePage.html)
if (window.location.pathname === "/index.html") {
  document.getElementById("create-workout").addEventListener("click", function () {
    window.location.href = "exercisePage.html";
  });

}
