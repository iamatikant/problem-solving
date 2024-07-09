// function Event() {
//   const events = [];
//   return {
//     subscribe: function (eventName) {
//       events.push(eventName);
//       return this;
//     },
//     fire: function (content) {
//       events.forEach((element) => {
//         element("this subscriber");
//         console.log("content");
//       });
//       return this;
//     },
//   };
// }

const eventHandler1 = (item) => {
  console.log("fired: ", item);
};

const Event = function () {
  this.handlers = [];

  this.subscribe = function (fn) {
    this.handlers.push(fn);
  };

  this.unsubscribe = function (fn) {
    this.handlers = this.handlers.filter((item) => item !== fn);
  };

  this.fire = function (o, thisObj) {
    const scope = thisObj || window;
    this.handlers.forEach((item) => {
      item.call(scope, o);
    });
  };
};

const eventObject = new Event();
eventObject.subscribe(eventHandler1);
eventObject.fire("All events");
