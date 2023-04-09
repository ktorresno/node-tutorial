const EventEmitter = require('events');
const eventEmitter = new EventEmitter(); 

eventEmitter.on('tutorial', () => {
    console.log('tutorial event has occurred');
})

eventEmitter.emit('tutorial');

eventEmitter.on('sumEvent', (num1, num2) => {
    const sum = num1 + num2;
    console.log('sumEvent has occurred: ', sum);
})

eventEmitter.emit('sumEvent', 3,5);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name; 
    }
    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
christina.on('name', () => {
    console.log('My name is ' + christina.name)
});
pedro.on('name', () => {
    console.log('My name is ' + pedro.name)
});
// Emit events are executed synchronosly
pedro.emit('name');
christina.emit('name');