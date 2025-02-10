// This is a simple Callback opproach to handle asyncronous operation
const pizzaBakery = (callback) => {
  console.log("making a pizza...");

  setTimeout(() => {
    const pizza = "🍕";
    console.log(`${pizza} is ready.`);
    callback(pizza);
  }, 2000);
};

function recievedPizza(pizza) {
  console.log(`eating ${pizza}`);

  setTimeout(() => {
    console.log("it was so delicious");
  }, 2500);
}
// whe are ordering a pizza at pizza bakery so they need some time to make it and then bring it to us, also we need some time to eat it.
// pizzaBakery(recievedPizza);

// what callback hell is?
// callback hell is situation when due to nesting so many functions in each other our code becames terrible to read and reason what a (callback)hell is going on.

const myFunc = (callback) => {
  callback();
};
const myFunc2 = (callback) => {
  callback();
};
const myFunc3 = (callback) => {
  callback();
};
// this is a simple example how a callback hell looks like:
myFunc(() => {
  console.log("myFunc");
  myFunc2(() => {
    console.log("myFunc2");
    myFunc3(() => {
      console.log("myFunc3");
    });
  });
});
