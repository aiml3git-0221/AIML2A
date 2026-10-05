//1
console.log("Part 1");
const EventEmitter = require('events');
const { timestamp } = require('events');
const ok = new EventEmitter()
ok.on('greet', (name) => {
    console.log(`Hello How are you?, ${name}!`);
});
ok.on(`exit`,(number)=>{
    console.log(`Exiting....thankyou ${number}`);
})
ok.emit('greet', 'Saanvi');
ok.emit('exit', 100);

//2
console.log("Part 2");
class Button extends EventEmitter {
    click(){
        console.log('Button clicked');
        this.emit('click',{timestamp: Date.now()});
    }
}
const button = new Button();
button.on('click', (event) => {
    console.log(`Button was clicked at ${event.timestamp}`);
});
button.click();

//3
console.log("Part 3");
setTimeout(() => {
    console.log('Hello Saanvi');
}, 3000);
function printMessage2() {
    console.log('Hello Shivam');
}
printMessage2();