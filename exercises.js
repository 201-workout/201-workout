// const videoLink = document.getElementById("https://youtu.be/rT7DgCr-3pg")
// const exercises = [];

// constructor for when the user creates a program
function UserProgram(name, exercises) {
  this.name = name;
  this.workouts = workouts;
}

  
  // An array of exercise details
  const exerciseDetails = [
    // Chest
    {
      name: "Barbell Bench Press",
      bodyPart: "Chest",
      videoLink: "https://youtu.be/rT7DgCr-3pg",
      instructions: [
        "Lie down on a flat bench.",
        "Grab the barbell with a shoulder-width grip.",
        "Lower the barbell to your chest. Pause. Then press the barbell back up.",
        // "Press the barbell back up.",
      ],
    },
    {
      name: "Decline Barbell Press",
      bodyPart: "Chest",
      videoLink: "https://youtu.be/LfyQBUKR8SE",
      instructions: [
        "Adjust the bench to a decline angle.",
        "Lower the barbell to your lower chest.",
        "Press the barbell back up.",
      ],
    },
    {
      name: "Incline Cable Fly",
      bodyPart: "Chest",
      videoLink: "https://youtu.be/GtHNC-5GtR0",
      instructions: [
        "Set the pulleys to the highest position.",
        "Extend your arms forward.",
        "Squeeze your chest at the peak position.",
      ],
    },
    {
      name: "Incline Dumbbell Press",
      bodyPart: "Chest",
      videoLink: "https://youtu.be/8iPEnn-ltC8",
      instructions: [
        "Sit on an incline bench holding dumbbells.",
        "Lower the dumbbells to your sides.",
        "Press the dumbbells up.",
      ],
    },
    {
      name: "Dips",
      bodyPart: "Chest",
      videoLink: "https://youtu.be/wjUmnZH528Y",
      instructions: [
        "Hold the dip bars with your arms straight.",
        "Lower your body by bending your elbows.",
        "Push yourself back up.",
      ],
    },
  
    // Legs
    {
      name: "Barbell Back Squat",
      bodyPart: "Legs",
      videoLink: "https://youtu.be/SW_C1A-rejs",
      instructions: [
        "Place a barbell on your upper back.",
        "Squat down by bending your knees and hips.",
        "Stand back up to the starting position.",
      ],
    },
    {
      name: "Bulgarian Split Squat",
      bodyPart: "Legs",
      videoLink: "https://youtu.be/2C-uNgKwPLE",
      instructions: [
        "Stand with one foot forward and the other back.",
        "Lower your body by bending your knees.",
        "Push back up to the starting position.",
      ],
    },
    {
      name: "Leg Extensions",
      bodyPart: "Legs",
      videoLink: "https://youtu.be/YyvSfVjQeL0",
      instructions: [
        "Sit on a leg extension machine.",
        "Extend your legs fully.",
        "Lower the weight back down.",
      ],
    },
    {
      name: "Straight Leg Deadlift",
      bodyPart: "Legs",
      videoLink: "https://youtu.be/OpzRX3slWjE",
      instructions: [
        "Hold a barbell with a shoulder-width grip.",
        "Hinge at your hips and lower the barbell.",
        "Stand back up to the starting position.",
      ],
    },
    {
      name: "Dumbbell Calf Raise",
      bodyPart: "Legs",
      videoLink: "https://youtu.be/wwy3BSUjlW4",
      instructions: [
        "Hold dumbbells in each hand.",
        "Raise your heels off the ground.",
        "Lower your heels back down.",
      ],
    },
  
    // Back
    {
      name: "Barbell Row",
      bodyPart: "Back",
      videoLink: "https://youtu.be/9Gf-Ourup_k",
      instructions: [
        "Bend over with your knees slightly bent.",
        "Pull the barbell towards your torso.",
        "Lower the barbell back down.",
      ],
    },
    {
      name: "Pull Ups",
      bodyPart: "Back",
      videoLink: "https://youtu.be/i5fIB4Gqaec",
      instructions: [
        "Hang from a pull-up bar with your palms facing away.",
        "Pull yourself up until your chin is above the bar.",
        "Lower yourself back down.",
      ],
    },
    {
      name: "Neutral Grip Pull Down",
      bodyPart: "Back",
      videoLink: "https://youtu.be/i5fIB4Gqaec",
      instructions: [
        "Sit at a lat pulldown machine with a neutral grip.",
        "Pull the bar down to your chest.",
        "Release the bar back up.",
      ],
    },
    {
      name: "Deadlift",
      bodyPart: "Back",
      videoLink: "https://youtu.be/XSl9PlRssos",
      instructions: [
        "Stand with your feet hip-width apart.",
        "Bend down and grab the barbell with an overhand grip.",
        "Lift the bar by extending your hips and knees.",
      ],
    },
    {
      name: "Neutral Grip Cable Row",
      bodyPart: "Back",
      videoLink: "https://youtu.be/sP_4vybjVJs",
      instructions: [
        "Sit at a cable row machine with a neutral grip.",
        "Pull the handles towards your torso.",
        "Return the handles forward.",
      ],
    },
  
    // Biceps
  {
    name: "Barbell Curls",
    bodyPart: "Biceps",
    videoLink: "https://youtu.be/kwG2ipFRgfo",
    instructions: [
      "Hold a barbell with your palms facing up.",
      "Curl the barbell towards your shoulders.",
      "Lower the barbell back down.",
    ],
  },
  {
    name: "Dumbbell Hammer Curls",
    bodyPart: "Biceps",
    videoLink: "https://youtu.be/484A0p_y0r4o",
    instructions: [
      "Hold dumbbells with your palms facing your body.",
      "Curl the dumbbells towards your shoulders.",
      "Lower the dumbbells back down.",
    ],
  },
  {
    name: "Preacher Curls",
    bodyPart: "Biceps",
    videoLink: "https://youtu.be/fIWP-FRFNU0",
    instructions: [
      "Sit at a preacher curl bench.",
      "Curl the barbell towards your shoulders.",
      "Lower the barbell back down.",
    ],
  },

  // Triceps
  {
    name: "Cable Push Downs",
    bodyPart: "Triceps",
    videoLink: "https://youtu.be/i5fIB4Gqaec",
    instructions: [
      "Stand at a cable station with a straight bar attachment.",
      "Push the bar down until your arms are fully extended.",
      "Return the bar back up.",
    ],
  },
  {
    name: "Skull Crushers",
    bodyPart: "Triceps",
    videoLink: "https://youtu.be/S0fmDR60X-o",
    instructions: [
      "Lie on a flat bench with a barbell.",
      "Lower the barbell towards your forehead.",
      "Extend your arms to lift the barbell back up.",
    ],
  },
  {
    name: "Close Grip Bench Press",
    bodyPart: "Triceps",
    videoLink: "https://youtu.be/G6EsZnQMhmw",
    instructions: [
      "Lie on a flat bench with a narrow grip on the barbell.",
      "Lower the barbell to your chest.",
      "Press the barbell back up.",
    ],
  },
  {
    name: "Lateral Raises",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/i5fIB4Gqaec",
    instructions: [
      "Set the pulleys to the highest position.",
      "Extend your arms forward.",
      "Squeeze your chest at the peak position.",
    ],
  },
  {
    name: "Overhead Press",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/2yjwXTZQDDI",
    instructions: [
      "Sit on an incline bench holding dumbbells.",
      "Lower the dumbbells to your sides.",
      "Press the dumbbells up.",
    ],
  },
  {
    name: "Front Raises",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/-t7fuZ0KhDA",
    instructions: [
      "Stand with dumbbells in front of your thighs.",
      "Raise the dumbbells to shoulder level.",
      "Lower the dumbbells back down.",
    ],
  },
  {
    name: "Face Pulls",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/V8dZ3pyiCBo",
    instructions: [
      "Attach a rope to a cable machine at eye level.",
      "Pull the rope towards your face, squeezing your rear delts.",
      "Release the rope back to the starting position.",
    ],
  },
  {
    name: "Rear Delt Flys",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/0GSu6Z-Oj7U",
    instructions: [
      "Bend forward at the hips with dumbbells in hand.",
      "Raise the dumbbells to the sides, squeezing your rear delts.",
      "Lower the dumbbells back down.",
    ],
  },

  // Legs
  {
    name: "Bike",
    bodyPart: "Cardio",
    videoLink: "https://youtu.be/r9d3SUPlMOw",
    instructions: [
      "Place a barbell on your upper back.",
      "Squat down by bending your knees and hips.",
      "Stand back up to the starting position.",
    ],
  },
  {
    name: "Treadmill",
    bodyPart: "Cardio",
    videoLink: "https://youtu.be/8i3Vrd95o2k",
    instructions: [
      "Stand with one foot forward and the other back.",
      "Lower your body by bending your knees.",
      "Push back up to the starting position.",
    ],
  },
  {
    name: "Leg Extensions",
    bodyPart: "Legs",
    videoLink: "https://www.example.com/leg-extensions-video",
    instructions: [
      "Sit on a leg extension machine.",
      "Extend your legs fully.",
      "Lower the weight back down.",
    ],
  },
  {
    name: "Straight Leg Deadlift",
    bodyPart: "Legs",
    videoLink: "https://www.example.com/straight-leg-deadlift-video",
    instructions: [
      "Hold a barbell with a shoulder-width grip.",
      "Hinge at your hips and lower the barbell.",
      "Stand back up to the starting position.",
    ],
  },
  {
    name: "Dumbbell Calf Raise",
    bodyPart: "Legs",
    videoLink: "https://www.example.com/dumbbell-calf-raise-video",
    instructions: [
      "Hold dumbbells in each hand.",
      "Raise your heels off the ground.",
      "Lower your heels back down.",
    ],
  },

  // Back
  {
    name: "Hanging Leg Raises",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/j-vjZlP_mP8",
    instructions: [
      "Bend over with your knees slightly bent.",
      "Pull the barbell towards your torso.",
      "Lower the barbell back down.",
    ],
  },
  {
    name: "Planks",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/rerKy2AEHz4",
    instructions: [
      "Hang from a pull-up bar with your palms facing away.",
      "Pull yourself up until your chin is above the bar.",
      "Lower yourself back down.",
    ],
  },
  {
    name: "Hanging Leg Raise Side to Side",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/O_JUtT-4Mrk",
    instructions: [
      "Sit at a lat pulldown machine with a neutral grip.",
      "Pull the bar down to your chest.",
      "Release the bar back up.",
    ],
  },
  {
    name: "Mason Twist",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/j-vjZlP_mP8",
    instructions: [
      "Stand with your feet hip-width apart.",
      "Bend down and grab the barbell with an overhand grip.",
      "Lift the bar by extending your hips and knees.",
    ],
  },
  {
    name: "Neutral Grip Cable Row",
    bodyPart: "Back",
    videoLink: "https://www.example.com/neutral-grip-cable-row-video",
    instructions: [
      "Sit at a cable row machine with a neutral grip.",
      "Pull the handles towards your torso.",
      "Return the handles forward.",
    ],
  },

  // Biceps
{
  name: "Barbell Curls",
  bodyPart: "Biceps",
  videoLink: "https://www.example.com/barbell-curls-video",
  instructions: [
    "Hold a barbell with your palms facing up.",
    "Curl the barbell towards your shoulders.",
    "Lower the barbell back down.",
  ],
},
{
  name: "Dumbbell Hammer Curls",
  bodyPart: "Biceps",
  videoLink: "https://www.example.com/dumbbell-hammer-curls-video",
  instructions: [
    "Hold dumbbells with your palms facing your body.",
    "Curl the dumbbells towards your shoulders.",
    "Lower the dumbbells back down.",
  ],
},
{
  name: "Preacher Curls",
  bodyPart: "Biceps",
  videoLink: "https://www.example.com/preacher-curls-video",
  instructions: [
    "Sit at a preacher curl bench.",
    "Curl the barbell towards your shoulders.",
    "Lower the barbell back down.",
  ],
},

// Triceps
{
  name: "Cable Push Downs",
  bodyPart: "Triceps",
  videoLink: "https://www.example.com/cable-push-downs-video",
  instructions: [
    "Stand at a cable station with a straight bar attachment.",
    "Push the bar down until your arms are fully extended.",
    "Return the bar back up.",
  ],
},
{
  name: "Skull Crushers",
  bodyPart: "Triceps",
  videoLink: "https://www.example.com/skull-crushers-video",
  instructions: [
    "Lie on a flat bench with a barbell.",
    "Lower the barbell towards your forehead.",
    "Extend your arms to lift the barbell back up.",
  ],
},
{
  name: "Close Grip Bench Press",
  bodyPart: "Triceps",
  videoLink: "https://www.example.com/close-grip-bench-press-video",
  instructions: [
    "Lie on a flat bench with a narrow grip on the barbell.",
    "Lower the barbell to your chest.",
    "Press the barbell back up.",
  ],
},

  // Shoulders
  {
    name: "Lateral Raises",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/i5fIB4Gqaec",
    instructions: [
      "Stand with dumbbells at your sides.",
      "Raise the dumbbells out to your sides.",
      "Lower the dumbbells back down.",
    ],
  },
  {
    name: "Overhead Press",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/2yjwXTZQDDI",
    instructions: [
      "Hold a barbell at shoulder level with an overhand grip.",
      "Press the barbell overhead.",
      "Lower the barbell back to shoulder level.",
    ],
  },
  {
    name: "Front Raises",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/-t7fuZ0KhDA",
    instructions: [
      "Stand with dumbbells in front of your thighs.",
      "Raise the dumbbells to shoulder level.",
      "Lower the dumbbells back down.",
    ],
  },
  {
    name: "Face Pulls",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/V8dZ3pyiCBo",
    instructions: [
      "Attach a rope to a cable machine at eye level.",
      "Pull the rope towards your face, squeezing your rear delts.",
      "Release the rope back to the starting position.",
    ],
  },
  {
    name: "Rear Delt Flys",
    bodyPart: "Shoulders",
    videoLink: "https://youtu.be/0GSu6Z-Oj7U",
    instructions: [
      "Bend forward at the hips with dumbbells in hand.",
      "Raise the dumbbells to the sides, squeezing your rear delts.",
      "Lower the dumbbells back down.",
    ],
  },

  // Cardio
  {
    name: "Bike",
    bodyPart: "Cardio",
    videoLink: "https://youtu.be/r9d3SUPlMOw",
    instructions: [
      "Sit on a stationary bike.",
      "Pedal at a steady pace.",
      "Adjust resistance to increase intensity.",
    ],
  },
  {
    name: "Treadmill",
    bodyPart: "Cardio",
    videoLink: "https://youtu.be/8i3Vrd95o2k",
    instructions: [
      "Stand on a treadmill.",
      "Start walking or running at your desired speed.",
      "Adjust incline and speed to change intensity.",
    ],
  },

  // Abs
  {
    name: "Hanging Leg Raises",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/j-vjZlP_mP8",
    instructions: [
      "Hang from a pull-up bar.",
      "Raise your legs until they're parallel to the ground.",
      "Lower your legs back down.",
    ],
  },
  {
    name: "Planks",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/rerKy2AEHz4",
    instructions: [
      "Start in a push-up position with your elbows on the ground.",
      "Keep your body in a straight line.",
      "Hold the position for the desired time.",
    ],
  },
  {
    name: "Hanging Leg Raise Side to Side",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/O_JUtT-4Mrk",
    instructions: [
      "Hang from a pull-up bar.",
      "Raise your legs to one side as far as you can.",
      "Return to the starting position and repeat on the other side.",
    ],
  },
  {
    name: "Mason Twist",
    bodyPart: "Abs",
    videoLink: "https://youtu.be/j-vjZlP_mP8",
    instructions: [
      "Sit on the floor with your knees bent and feet lifted.",
      "Twist your torso to one side, then the other.",
      "Repeat for the desired number of reps.",
    ],
  },

];
  
  


// append exercises to exercise list page
for (let i = 0; i < exerciseDetails.length; i++) {
  const exercise = exerciseDetails[i]
  if (exercise['bodyPart'] === "Chest") {
    appendExerciseSection('chest-title', exercise);
// append exercises to exercise list page
for (let i = 0; i < exerciseDetails.length; i++) {
  const exercise = exerciseDetails[i]
  if (exercise['bodyPart'] === "Chest") {
    appendExerciseSection('chest-title', exercise);

  } else if (exercise['bodyPart'] === "Back") {
    appendExerciseSection('back-title', exercise);
  } else if (exercise['bodyPart'] === "Back") {
    appendExerciseSection('back-title', exercise);

  } else if (exercise['bodyPart'] === "Legs") {
    appendExerciseSection('legs-title', exercise);
  } else if (exercise['bodyPart'] === "Legs") {
    appendExerciseSection('legs-title', exercise);

  } else if (exercise['bodyPart'] === "Shoulders") {
    appendExerciseSection('shoulders-title', exercise);

  } else if (exercise['bodyPart'] === "Biceps") {
    appendExerciseSection('biceps-title', exercise);

  } else if (exercise['bodyPart'] === "Triceps") {
    appendExerciseSection('triceps-title', exercise);

  } else if (exercise['bodyPart'] === "Abs") {
    appendExerciseSection('abs-title', exercise);

  } else if (exercise['bodyPart'] === "Cardio") {
    appendExerciseSection('cardio-title', exercise);
  } 
}

// creates elements and populates them with data from exerciseDetails array
function appendExerciseSection(bodyPartId, exercise) {
  let section = document.createElement('section');
  section.setAttribute('class', 'exercise-list-item');

  let img = document.createElement('img');
  img.setAttribute('class', 'img-list-item');
  // img.setAttribute('src', exercise.img);
  section.appendChild(img);

  let info = document.createElement('section');
  info.setAttribute('class', 'info-item');
  section.appendChild(info);

  let exerciseName = document.createElement('p');
  exerciseName.setAttribute('class', 'name-item');
  exerciseName.textContent = exercise.name;
  info.appendChild(exerciseName);

    let vidLink = document.createElement('a');
    vidLink.setAttribute('class', 'vid-link-item');
    vidLink.innerHTML = exercise.videoLink;
    // vidLink.addEventListener(click, function(event)){
    //   window.open(exercise.videoLink, '_blank')
    // }
    info.appendChild(vidLink);
    vidLink.addEventListener('click', function(event) {
      window.open(exercise.videoLink, '_blank');
    });

  let descriptionList = document.createElement('ol');
  descriptionList.setAttribute('class', 'description-list');

  let descriptionItem1 = document.createElement('li');
  descriptionItem1.setAttribute('type', '1');
  descriptionItem1.setAttribute('class', 'description-list-item');
  descriptionItem1.textContent = exercise.instructions[0]
  descriptionList.appendChild(descriptionItem1);

  let descriptionItem2 = document.createElement('li');
  descriptionItem2.setAttribute('type', '1');
  descriptionItem2.setAttribute('class', 'description-list-item');
  descriptionItem2.textContent = exercise.instructions[1]
  descriptionList.appendChild(descriptionItem2);

  let descriptionItem3 = document.createElement('li');
  descriptionItem3.setAttribute('type', '1');
  descriptionItem3.setAttribute('class', 'description-list-item');
  descriptionItem3.textContent = exercise.instructions[2]
  descriptionList.appendChild(descriptionItem3);

  info.appendChild(descriptionList);

  let referenceNode = document.getElementById(bodyPartId);
    referenceNode.after(section);
}

