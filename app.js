const EventEmitter = require('events');

//create an instance
const customEmitter = new EventEmitter()

//on method -> pass in the string which is the name of the event and the callback function
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`);
})

//on method -> pass in the string which is the name of the event and the callback function
customEmitter.on('response', () => {
    console.log(`some other logic here`);
})

//you can have a lot of events here
//emit the string that the emitter is listening for
//you want to listen for the event first and then emit it
customEmitter.emit('response', 'john', 34)