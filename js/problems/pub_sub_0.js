// If multiple components need to react to an event (e.g., showing a toast message when an API request fails), passing props manually is cumbersome.

class EventBus {
  constructor() {
    this.events = [];
  }

  subscribe() {
    this.events.push(eventName);
  }

  publish(eventName, value) {
    this.events.forEach((item) => item(eventName(value)));
  }

  fetchData() {
    const response = fetch('https://mock.api.1').then((data) => data.json());
  }
}

const eventBus = new EventBus();

eventBus.subscribe(handleButtonClick);
eventBus.subscribe(handleButtonClick);
eventBus.subscribe(handleButtonClick);
eventBus.subscribe(handleButtonClick);


const Component1 = () => {
  const showTootlip(value) => {
    console.log(value);
  }
  return <button onClick={showTootlip}>click me</button>
}
const Component2 = () => {
  const showTootlip(value) => {
    console.log(value);
  }
  return <button onClick={showTootlip}>click me</button>
}
const Component3 = () => {
  const showTootlip(value) => {
    console.log(value);
  }
  return <button onClick={showTootlip}>click me</button>
}
