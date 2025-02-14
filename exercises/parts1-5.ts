// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spaceCraftname: string = "determination";
let speedMph: number = 17500;
let kiloToMars: number = 225000000;
let kiloToMoon: number = 384400;
let milesPerKilo: number = 0.621;


// Part 2: Print Days to Mars
let milesToMars = kiloToMars * milesPerKilo;
let hoursToMars = milesToMars / speedMph;
let daysToMars = hoursToMars / 24;

// Code an output statement here (use a template literal):

console.log(`${spaceCraftname} has ${getDaysToLocation(kiloToMars)} until it reaches mars.`)

// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kiloAway: number){
    let milesTo = kiloAway * milesPerKilo;
    let hoursTo = milesTo / speedMph;
    let daysTo = hoursToMars / 24;
}


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(`${spaceCraftname} has ${getDaysToLocation(kiloToMoon)} until it reaches mars.`)



// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
