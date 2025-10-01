// "Alright, Atikant, let's dive into our first problem for today.

// I'd like you to implement an EventEmitter class in JavaScript. This class should allow you to subscribe to events, emit events, and unsubscribe from them.

// Class Methods to Implement:

// subscribe(eventName, callback):

// Adds a callback function to be executed when eventName is emitted.

// Should return an object with an unsubscribe method. Calling unsubscribe() should remove that specific listener.

// emit(eventName, ...args):

// Executes all the callbacks subscribed to eventName, passing along any additional arguments (...args).

// Example Usage:

// JavaScript
// const emitter = new EventEmitter();

// 1. Subscribe to an event
// const sub1 = emitter.subscribe('sayHello', (name) => console.log(`Hello, ${name}!`));
// const sub2 = emitter.subscribe('sayHello', (name) => console.log(`How are you, ${name}?`));

// 2. Emit the event
// emitter.emit('sayHello', 'Atikant');
// Expected Console Output:
// > "Hello, Atikant!"
// > "How are you, Atikant?"

// 3. Unsubscribe from one of the listeners
// sub1.unsubscribe();

// 4. Emit the event again
// emitter.emit('sayHello', 'Atikant');
// Expected Console Output:
// > "How are you, Atikant?"
// (The first subscription is gone)

class EventEmitter {
  constructor() {
    this.events = new Map(); // key eventName and value array of callbacks with unique id
    this.id = 0;
  }

  subscribe(eventName, callback) {
    if (!eventName || !callback) {
      return;
    }

    const existingEvents = [];
    if (this.events.has(eventName)) {
      existingEvents.push(...this.events.get(eventName));
    }
    const idx = this.id;
    this.events.set(eventName, [...existingEvents, { id: idx, callback }]);
    this.id++;

    return {
      unsubscribe: () => {
        const filteredEvents = this.events
          .get(eventName)
          .filter((event) => event.id !== idx);
        this.events.set(eventName, filteredEvents);
      },
    };
  }

  emit(eventName, ...args) {
    if (!eventName) {
      return;
    }

    this.events.get(eventName).forEach(({ callback }) => {
      callback(...args);
    });
  }
}
