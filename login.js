// document.getElementById('account-button').addEventListener('click', function() {
//     const hiddenSection = document.getElementById('create-account');
//     const computedStyle = window.getComputedStyle(hiddenSection);
//     console.log(computedStyle.display);
    
//     if (computedStyle.display === 'none') {
//         hiddenSection.style.display = 'flex'; 
//     }
// });


// User constructor function
function User(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}

// check local storage for users array
// if user array is null, create an empty array called users


// Function to retrieve data from the create user form
function getUserData() {
  const userNameInput = document.getElementById("user-name-create");
  const userAgeInput = document.getElementById("user-age");
  const userWeightInput = document.getElementById("user-weight");
  console.log(userNameInput, userAgeInput, userWeightInput);
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

  let users;
  let storageValue = localStorage.getItem('users'); // null or array of users.
  if(storageValue == null){
    users = [];
  }else{
   users = JSON.parse(storageValue);
  }
  users.push(newUser);
  // add newUser to users array

  // Store the new user data into local storage
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('newUser', JSON.stringify(newUser));

  console.log("new user data: ");
  console.log(newUser);

  window.location.href = 'http://127.0.0.1:5500/index.html';
});

// Checks if the user already exists
document.getElementById("login-button").addEventListener("click", function (event) {
  event.preventDefault();
  const userNameInput = document.getElementById("user-name-login");
  const name = userNameInput.value;
  const storedUser = JSON.parse(localStorage.getItem('newUser'));
  if (name === storedUser.name) {
    window.location.href = 'http://127.0.0.1:5500/index.html';
  } else {
  alert ('Please create an account');
  }
});


// function User (name, age, weight) {
//   self.name = name,
//   self.age = age,
//   self.weight = weight
// }


// function saveFormToObject(formId) {
//     // Access the form using its ID
//     const form = document.getElementById(formId);

//     // Create an empty object to store the form data
//     // const formData = {};
//     console.log(form.elements);
//     // Iterate through all form elements
//     for (let i = 0; i < form.elements.length; i++) {
//       const element = form.elements[i];
      
//       // Check if the element is an input or select field with a name attribute
//       if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
//         const fieldName = element.name;
//         const fieldValue = element.value;
        
//         // Add the field name and value to the formData object
//         // formData[fieldName] = fieldValue;
//         let newUser[fieldName] = fieldValue;
//       }
//     }
//     let newUser = User(name, age, weight);
//     console.log(newUser);
//     return newUser;

//     // At this point, formData object contains all the form field values
//     // You can use it as needed, for example, you can log it to the console

//     // If you want to perform any other operations with the formData object, do it here.
//   }

  // Example usage: Call the saveFormToObject function when the form is submitted
  // document.getElementById('login-form').addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent the form from submitting to a server
  //   saveFormToObject('login-form'); // Call the function to save the form data to an object

  // });
  // document.getElementById('account-form').addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent the form from submitting to a server
  //   saveFormToObject('account-form'); // Call the function to save the form data to an object

  // });