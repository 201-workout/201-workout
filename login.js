
let users = [];
let currentUser = null;

// User constructor function
function User(name, age, weight, workouts) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.workouts = [];
}

// Function to retrieve data from the create user form
function getUserData() {
  const userNameInput = document.getElementById('user-name-create');
  const userAgeInput = document.getElementById('user-age');
  const userWeightInput = document.getElementById('user-weight');
  const name = userNameInput.value;
  const age = parseInt(userAgeInput.value);
  const weight = parseInt(userWeightInput.value);

  return new User(name, age, weight);
}

// Event listener for the submit button
const submitBtn = document.getElementById('submit-button');
if (submitBtn) {
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const newUser = getUserData();
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));


    let storageValue = localStorage.getItem('users'); // null or array of users.
    if(storageValue === null){
      users = [];
    }else{
      users = JSON.parse(storageValue);
    }
    // add newUser to users array
    users.push(newUser);

    // Store the new user data into local storage
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'home.html';
  });
  
  
  // Checks if the user already exists
  document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();
    const userNameInput = document.getElementById('user-name-login');
    const name = userNameInput.value;
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers === null ) {
      // Add the shake effect to the login box
      userNameInput.classList.add('shake');
      // Remove the shake effect after the animation ends
      userNameInput.addEventListener('animationend', function () {
        userNameInput.classList.remove('shake');
      });
      userNameInput.value = '';
    } else {
      let userFound = false;
      for (let i = 0; i < storedUsers.length; i++) {
        if (name === storedUsers[i].name) {
          currentUser = storedUsers[i];
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          userFound = true;
          // Update the users array with the found user
          users = storedUsers;
          window.location.href = 'home.html';
          break;
        }
      }
      if (!userFound) {
        // Add the shake effect to the login box
        userNameInput.classList.add('shake');
        // Remove the shake effect after the animation ends
        userNameInput.addEventListener('animationend', function () {
          userNameInput.classList.remove('shake');
        });
      }
    }
  });
}

let localUser = {};
let storageValue = localStorage.getItem('currentUser');
if(storageValue !== null){
  localUser = JSON.parse(storageValue);
}

// get name from current user object and add to welcome header
document.getElementById('welcome-title').innerHTML = 'Welcome, ' + localUser.name + '!';

// display the rest of current user object (age, weight, and workouts)
document.getElementById('age').innerHTML = 'Age: ' + localUser.age;
document.getElementById('weight').innerHTML = 'Weight: ' + localUser.weight;
