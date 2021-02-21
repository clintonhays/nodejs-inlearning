// This file represents the globalProcess. This allows us access to the process object.

console.log(process.pid); // log the process id
console.log(process.versions.node); // log the node version currently running

// .argv
console.log(process.argv); // Contains all the variables we used to run the process. Returns an array.

// We can manipulate the return of this array as we would any other.

const [, , firstName, lastName] = process.argv; // use array destructuring to assign variable names to items

console.log(`My name is ${firstName} ${lastName}`);

// $ node globalProcess Clinton Hays
// expected output: My Name is Clinton Hays

// Use argv with flags in node.js to know what variables will be passed into the array.
// Use a grab() function to pull the flagged variables.

// create a function that takes the flag's index, increments it by one and returns the item of the array at that index
// using a function allows arguments to be passed into node.js in any order. since the function searches for the flag
const grab = (flag) => {
	let indexAfterFlag = process.argv.indexOf(flag) + 1;
	return process.argv[indexAfterFlag];
};

// assign variables to grab functions
const greeting = grab("--greeting");
const user = grab("--user");

// log variables
console.log(`${user} says, "${greeting}!"`);

// run node globalProcess --user Clinton --greeting "What is up dog?"
// expected output: Clinton says, "What is up dog?!"
