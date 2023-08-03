// links to create a program page (exercisePage.html)
if (window.location.pathname === "/index.html") {
  document.getElementById("create-workout").addEventListener("click", function () {
    window.location.href = "exercisePage.html";
  });

}

// //links to exercise list page (exercise-list.html)
// document.getElementById("nav-item-list").addEventListener("click", function () {
//   window.location.href = "exercise-list.html";
// });

// // links to user account (user-account.html)
// document.getElementById("nav-item-user").addEventListener("click", function () {
//   window.location.href = "user-account.html";
// });

// // links to home page (index.html)
// document.getElementById("nav-item-home").addEventListener("click", function () {
//   window.location.href = "index.html";
// });
// console.log('DONE LOADING LINK JS');