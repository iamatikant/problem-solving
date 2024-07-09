class PubSub2 {
  constructor() {
    this.events = {};
  }
  subscribe(name, callback) {
    if (name in this.events) {
      this.events[name] = [...this.events[name], callback];
    } else {
      this.events[name] = [callback];
    }
    return {
      remove: () => {
        this.events[name] = this.events[name].filter(
          (call) => call !== callback
        );
      },
    };
  }
  publish(name, data) {
    const callbacks = this.events[name];
    callbacks.forEach((item) => {
      item(data);
    });
  }
}

const eventObject = new PubSub2();
const event1 = eventObject.subscribe("first", (data) => {
  console.log("first data: ", data);
});

const event2 = eventObject.subscribe("first", (data) => {
  console.log("second data: ", data);
});

eventObject.publish("first", "new notification");
event1.remove();

eventObject.publish("first", "new notification2");
