const exerciseDropdown = document.getElementById('exercise_dropdown');
const exerciseTypeDropdown = document.getElementById('exercise_type');
const setsRepsInputsDiv = document.getElementById('sets_reps_inputs');
const timeInputDiv = document.getElementById('time_input');
const distanceInputDiv = document.getElementById('distance_input');
const exerciseDetailsDiv = document.getElementById('exercise_details');
const selectedExercisesDiv = document.getElementById('selected_exercises');


let selectedExercises = [];
let workouts = [];

// Populates the dropdown with exercise names
for (let i = 0; i < exerciseDetails.length; i++) {
  const exercise = exerciseDetails[i];
  const exerciseOption = document.createElement('option');
  exerciseOption.value = i; 
  exerciseOption.textContent = exercise.name;
  exerciseDropdown.appendChild(exerciseOption);
}

exerciseTypeDropdown.addEventListener('change', handleExerciseTypeChange);

// Function to handle exercise type change
function handleExerciseTypeChange() {
  const selectedType = exerciseTypeDropdown.value;
  if (selectedType === 'sets') {
    setsRepsInputsDiv.style.display = 'block';
    distanceInputDiv.style.display = 'none';
    timeInputDiv.style.display = 'none';
  } else if (selectedType === 'time') {
    setsRepsInputsDiv.style.display = 'none';
    distanceInputDiv.style.display = 'none';
    timeInputDiv.style.display = 'block';
  } else if (selectedType === 'distance') {
    setsRepsInputsDiv.style.display = 'none';
    distanceInputDiv.style.display = 'block';
    timeInputDiv.style.display = 'none';
  } else {
    setsRepsInputsDiv.style.display = 'none';
    distanceInputDiv.style.display = 'none';
    timeInputDiv.style.display = 'none';
  }
}


// Function to add the selected exercise to the workout
function addExercise() {
  const exerciseIndex = exerciseDropdown.value;
  const exercise = exerciseDetails[exerciseIndex];
  const exerciseType = exerciseTypeDropdown.value;

  let userExercise;

  if (exerciseType === 'sets') {
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    userExercise = new UserExercise(exercise.name, exercise.bodyPart, exerciseType, sets, null, null, reps);
  } else if (exerciseType === 'time') {
    const time = document.getElementById('time').value;
    userExercise = new UserExercise(exercise.name, exercise.bodyPart, exerciseType, null, time, null, null);
  } else  {
    const distance = document.getElementById('distance').value;
    userExercise = new UserExercise(exercise.name, exercise.bodyPart, exerciseType, null, null, distance, null);
  } 

  selectedExercises.push(userExercise);

  displaySelectedExercises();

  document.getElementById('sets').value = '';
  document.getElementById('reps').value = '';
  document.getElementById('time').value = '';
  document.getElementById('distance').value = '';
}


// Function to remove an exercise from the selected exercises
function removeExercise(exerciseToRemove) {
  const index = selectedExercises.indexOf(exerciseToRemove);
  if (index > -1) {
    selectedExercises.splice(index, 1);
  }

  displaySelectedExercises();
}

// Function to display selected exercises
function displaySelectedExercises() {
  selectedExercisesDiv.innerHTML = '';

  for (const exercise of selectedExercises) {
    const exerciseDiv = document.createElement('div');
    exerciseDiv.textContent = exercise.name;

    if (exercise.type === 'sets') {
      const setsElement = document.createElement('p');
      setsElement.textContent = 'Sets: ' + exercise.sets + ', Reps: ' + exercise.reps;
      exerciseDiv.appendChild(setsElement);
    } else if (exercise.type === 'time') {
      const timeElement = document.createElement('p');
      timeElement.textContent = 'Time: ' + exercise.time + ' minutes';
      exerciseDiv.appendChild(timeElement);
    } else if (exercise.type === 'distance') {
      const distanceElement = document.createElement('p');
      distanceElement.textContent = 'Distance: ' + exercise.distance + ' miles';
      exerciseDiv.appendChild(distanceElement);
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      removeExercise(exercise);
    };
    exerciseDiv.appendChild(deleteButton);
    selectedExercisesDiv.appendChild(exerciseDiv);
  }
}

// Function to create a workout
function createWorkout() {
  const programName = document.getElementById('program_name').value;
  const workoutName = document.getElementById('workout_name').value;

  const newWorkout = new Workout(programName, workoutName, selectedExercises);

  document.getElementById('workout_name').value = '';
  
  selectedExercises = [];
  displaySelectedExercises();
  workouts.push(newWorkout);
  console.log(workouts);
}

// UserExercise constructor
function UserExercise(name, bodyPart, type, sets, time, distance, reps) {
  this.name = name;
  this.bodyPart = bodyPart;
  this.type = type;
  if (type === 'sets') {
    this.sets = sets;
    this.reps = reps;
  } else if (type === 'time') {
    this.time = time;
  } else if (type === 'distance') {
    this.distance = distance;
  }
}

// Workout constructor
function Workout(programName, workoutName, userExercises) {
  this.programName = programName;
  this.workoutName = workoutName;
  this.userExercises = userExercises;
}


