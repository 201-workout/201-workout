'include strict';

// assuming current user has logged in and it is available in local storage
// define current user (local user), then get current user (local user) from local storage and set to current user
let localUser = {};
let storageValue = localStorage.getItem('currentUser');
if(storageValue !== null){
  localUser = JSON.parse(storageValue);
}

// get name from current user object and add to welcome header
// document.getElementById("welcome-title").innerHTML = "Welcome, "  + localUser.name + "!";

// display the rest of current user object (age, weight, and workouts)
document.getElementById('age').innerHTML = 'Age: ' + localUser.age;
document.getElementById('weight').innerHTML = 'Weight: ' + localUser.weight;

// adding a workout to local user manually because error on create workout
// localUser.workouts = [];


// workout = {
//     workoutName: "test",
//     userExercises: []
// }
//
