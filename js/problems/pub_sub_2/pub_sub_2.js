class PubSub2 {
  constructor() {
    // this.events = {name: [{ once: true, callback: func}]};
    this.events = {};
  }

  subscribe(name, callback) {
    if (name in this.events) {
      this.events[name] = [...this.events[name], { callback }];
    } else {
      this.events[name] = [{ callback }];
    }
    return {
      remove: () => {
        this.events[name] = this.events[name].filter(
          (call) => call.callback !== callback
        );
      },
    };
  }

  publish(name, data) {
    const callbacks = this.events[name];
    callbacks.forEach((item) => {
      item.callback(data);
    });
    this.events[name] = this.events[name].filter((item) => !item.once);
  }

  publishAll(data) {
    for (const item in this.events) {
      this.events[item].forEach((item) => item.callback(data));
      this.events[item] = this.events[item].filter((item) => !item.once);
    }
  }

  subscribeOnce(name, callback) {
    if (name in this.events) {
      this.events[name] = [...this.events[name], { callback, once: true }];
    } else {
      this.events[name] = [{ callback, once: true }];
    }
  }
}

const eventObject = new PubSub2();
const event1 = eventObject.subscribe("first", (data) => {
  console.log("first data: ", data);
});

const event2 = eventObject.subscribe("first", (data) => {
  console.log("second data: ", data);
});

const event3 = eventObject.subscribeOnce("first", (data) => {
  console.log("subscribe once event", data);
});

// eventObject.publish("first", "new notification");
// event1.remove();

eventObject.publish("first", "publish all");
eventObject.publish("first", "publish all");
eventObject.publishAll("publish all");
