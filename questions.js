// process.stdout = standard output

// use the write method of stdtout to print strings to the terminal

// process.stdout.write("Hello...");
// process.stdout.write("world \n\n\n");

//expected output: Hello...world (followed by 3 new lines)

// use process.stdout to ask questions

// initialize a questions array
const questions = [
	"What is your name?",
	"What would you like to be doing?",
	"What is your preferred programming language?",
];

// create function to ask questions.
// take i as an argument where i is a number corresponding to the index of an item in questions array
// uses process.stdout.write to print the question to the terminal

const ask = (i = 0) => {
	process.stdout.write(`\n\n\n ${questions[i]}`);
	process.stdout.write(` > `);
};

// use process.stdin to create a listener that will listen for data input in terminal

// create listener
// listens for data event
// process.stdin.on("data", (data) => {
// 	process.stdout.write(`${data.toString().trim()}`); // writes the data to the terminal
// 	process.exit(); // exits the process
// });

/**
 * expected output:
 * What is your name? > (user data input)
 * (user data input)
 */

// use above lessons to create a question & answer app

// ask first question
ask();

// initialize answer array
const answers = [];

// create listener for answers
process.stdin.on("data", (data) => {
	answers.push(`${data.toString().trim()}`); // push answer into answers array

	// if answers array is shorter than questions array prompt next question
	if (answers.length < questions.length) {
		ask(answers.length);
	}
	// else exit process
	else {
		process.exit();
	}
});

// handle exit from process
process.on("exit", () => {
	// use array destructuring to assign variables to items
	const [name, activity, lang] = answers;

	// write a message to terminal using literals
	process.stdout.write(
		`

    Go ${activity}, ${name}...you can write ${lang} code later!
    
    `
	);
});
