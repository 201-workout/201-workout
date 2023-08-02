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

// Function to retrieve data from the create user form
function getUserData() {
  const userNameInput = document.getElementById("user-name-create");
  const userAgeInput = document.getElementById("user-age");
  const userWeightInput = document.getElementById("user-weight");

  const name = userNameInput.value;
  const age = parseInt(userAgeInput.value);
  const weight = parseInt(userWeightInput.value);

  return new User(name, age, weight);
}

// Event listener for the submit button
document.getElementById("submit-button").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  const newUser = getUserData();

  // Do something with the new user data
  console.log("New User Data:");
  console.log(newUser);
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