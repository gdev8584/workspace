// eventEmiter is a core module in node.js used to create and handle custom events.

// emit(eventName,[args]) => use to emit(or trigger) an event with specific eventName. u pass argumnet and consume by listenrs
// on(eventName, listenr) => attaches a listenr to specific eventName. the listenr will excute when wvnt is emitted.

import EventEmitter from "events"; // import eventEmiter
//create an instance of EventEmitter

const emitter = new EventEmitter()

// Define an event listenr
// trigger event

export function eventModule() {
    // emitter.on("greet", (userName) => {
    //     console.log(`I am ${userName}`)
    // })

    // emitter.emit('greet', 'Devanand Giri')
    // emitter.emit('greet', 'Ravi kumar')
    // emitter.emit('greet', 'DG')
    // emitter.emit('greet', 'RK')

    emitter.on('greet', (args) => {
        console.log(`Hello ${args.name}, you are ${args.post}`)
    })

    emitter.emit('greet', {name: 'Devanand', post: 'Engineer'})
}