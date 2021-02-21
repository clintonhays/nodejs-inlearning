// use setTimeout to delay a message written to the terminal

// declare variable for delay time in milliseconds
const timer = 5000;

// write a message that the timer is set
console.log(`Setting a timer for ${timer / 1000} seconds.`);

// create function to write a message to the terminal
// const timeUp = () => {
// 	console.log("DING!");
// };

// refactor timeUp to clear the interval
const timeUp = () => {
	clearInterval(intervalTimer);
	console.log(`
  
  DING!`);
};

// call setTimeout, pass the finished message function as the callback and the
// timer variable as the delay
setTimeout(timeUp, timer);

// refactor timer to use setInterval to report how much time is left on the
// initial timer

// declare variable for interval timer
const interval = 500;

// declare variable for current time
let currentTime = 0;

// create function to increment timer
const increment = () => {
	currentTime += interval;

	// create variable to hold percentage using Math.floor()
	const percent = Math.floor((currentTime / timer) * 100);

	// use process.stdout to remove new line
	process.stdout.clearLine();
	// use process.stdout to return cursor to beginning of line
	process.stdout.cursorTo(0);
	// use process.stdout to write the percentage to the terminal
	process.stdout.write(`waiting...${percent}%`);
};

// create setInterval as a variable so we can clear it
const intervalTimer = setInterval(increment, interval);

// refactor to show elapsed time as a percentage. Refer to increment() for refactor.
