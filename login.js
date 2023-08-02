// document.getElementById('account-button').addEventListener('click', function() {
//     const hiddenSection = document.getElementById('create-account');
//     const computedStyle = window.getComputedStyle(hiddenSection);
//     console.log(computedStyle.display);
    
//     if (computedStyle.display === 'none') {
//         hiddenSection.style.display = 'flex'; 
//     }
// });


function saveFormToObject(formId) {
    // Access the form using its ID
    const form = document.getElementById(formId);

    // Create an empty object to store the form data
    const formData = {};
    console.log(form.elements);
    // Iterate through all form elements
    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];

      // Check if the element is an input or select field with a name attribute
      if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
        const fieldName = element.name;
        const fieldValue = element.value;

        // Add the field name and value to the formData object
        formData[fieldName] = fieldValue;
      }
    }

    // At this point, formData object contains all the form field values
    // You can use it as needed, for example, you can log it to the console
    console.log(formData);

    // If you want to perform any other operations with the formData object, do it here.
  }

  // Example usage: Call the saveFormToObject function when the form is submitted
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to a server
    saveFormToObject('login-form'); // Call the function to save the form data to an object

  });
  document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to a server
    saveFormToObject('account-form'); // Call the function to save the form data to an object

  });