// User constructor function
function User(name, age, weight, workouts) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.workouts = [];
}

// check local storage for users array
// if user array is null, create an empty array called users
let users = [];


// Function to retrieve data from the create user form
function getUserData() {
  const userNameInput = document.getElementById("user-name-create");
  const userAgeInput = document.getElementById("user-age");
  const userWeightInput = document.getElementById("user-weight");
  // console.log(userNameInput, userAgeInput, userWeightInput);
  const name = userNameInput.value;
  const age = parseInt(userAgeInput.value);
  const weight = parseInt(userWeightInput.value);

  return new User(name, age, weight);
}

// Event listener for the submit button
document.getElementById("submit-button").addEventListener("click", function (event) {
  event.preventDefault(); 
  const newUser = getUserData();
  event.preventDefault(); // Prevent form submission


  let storageValue = localStorage.getItem('users'); // null or array of users.
  if(storageValue == null){
    users = [];
  }else{
    users = JSON.parse(storageValue);
  }
  // add newUser to users array
  users.push(newUser);

  // Store the new user data into local storage
  localStorage.setItem('users', JSON.stringify(users));
  // localStorage.setItem('newUser', JSON.stringify(newUser));

  // console.log("new user data: ");
  // console.log(newUser);
  window.location.href = 'index.html';
});

// Checks if the user already exists
document.getElementById("login-button").addEventListener("click", function (event) {
  event.preventDefault();
  const userNameInput = document.getElementById("user-name-login");
  const name = userNameInput.value;
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  if (storedUsers === null ) {
    alert('Please create an account');
    userNameInput.value = '';
  } else {
    let userFound = false; 
    for (let i = 0; i < storedUsers.length; i++) {
      if (name === storedUsers[i].name) {
        let currentUser = storedUsers[i];
        userFound = true; 
        window.location.href = 'index.html';
        break; 
      }
    }
    if (!userFound) {
      alert('Please create an acount'); 
    }
  }
});

