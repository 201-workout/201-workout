
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
if (window.location.pathname === '/index.html') {
  document.getElementById('submit-button').addEventListener('click', function (event) {
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
