// This is a file demonstrating the global object. This is the object that is available globally in all node.js instances

const path = require("path"); // requires path module, must be stored in a variable

console.log(`This filename is ${path.basename(__filename)}`);
