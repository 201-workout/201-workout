"use strict"

// function Workout(programName, exerciseName, sets, reps, day){
//     this.programName = programeName;
//     this.exerciseName = exerciseName;
//     this.sets = sets;
//     this.reps = reps;
//     this.day = day;

// }


function UserExercise(name, bodyPart, instructions, videoLink) {
      this.name = name;
      this.bodyPart = bodyPart;
      this.instructions = instructions; 
      this.videoLink = videoLink; 
      this.type = type;
      this.reps = 0;
    }

    
const exerciseDropdown = document.getElementById('exercise_dropdown');

// Populate the dropdown with exercise names 
for (let i = 0; i < exerciseDetails.length; i++) {
    const exercise = exerciseDetails[i];
    const exerciseOption = document.createElement('option');
    exerciseOption.textContent = exercise.name;
    exerciseDropdown.appendChild(exerciseOption);
}


  // Function to save the form data to an object
  function saveFormToObject() {
    // Access the form using its ID
    const form = document.getElementById('workoutForm');

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
  document.getElementById('workoutForm').addEventListener('submit', function(event) {
    // let programName = event.target.program_name.value;
    // let workoutName = event.target.workoutName.value;
    // let sets =  parseInt(event.target.sets.value);
    // let reps = parseInt(event.target.reps.value);
    // let day = event.target.day.value;
    event.preventDefault(); // Prevent the form from submitting to a server
    saveFormToObject(); // Call the function to save the form data to an object
  });
console.log(saveFormToObject());