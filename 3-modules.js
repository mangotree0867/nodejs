//Modules - encapsulated code (only share minimum)
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')


// console.log(data)
// console.log(data.items[0])

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

//when you require it executes the file -> it runs the function when you require it
require('./7-mind-grenade.js')