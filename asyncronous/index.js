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

// asyncronous testing:

// using promises directly:
const asyncFunc = (username) => {
  return new Promise((resolve, reject) => {
    if (!username) {
      setTimeout(() => {
        reject("Username is not provided!");
      }, 1000);
    } else {
      setTimeout(() => {
        console.log(`username ${username} recieved`);
        resolve();
      }, 2500);
    }
  });
};

const { test } = require("node:test");
const assert = require("assert");

test("async test", () => assert.doesNotReject(() => asyncFunc("feria703")));
test("async test (which fails)", () => assert.doesNotReject(() => asyncFunc()));

// using async/await:
// but this approach is still not a truly asyncronous
// bicouse in this function operations are syncronous.
// with real async operations like setTimeout best approach is to use promises!
// but this function still returns a promise which in this case instantly rejects
// like so Promise.reject()
const asyncFunc2 = async (username) => {
  if (!username) {
    throw new Error("Username is not provided!");
  } else {
    console.log(`username ${username} recieved`);
  }
};

test("testing with async/await", async () => {
  await assert.rejects(async () => {
    await asyncFunc2("feria");
  });
});

// Do not forget that microtasks( Promises ) has priority over macrotasks( setTimeout ) in the event loop.
// and firstly syncronous code executes in any case! so that means that it has priority over the abovementioned.
console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise");
});

console.log("End");
// Output:
// Start
// End
// Microtask: Promise
// Macrotask: setTimeout

// /////////////////////////////////////////////////////////////////
// Two way to use **await**:
// you can use await on a top level of !ES Module only!
import fs from "node:fs";
// if youu are using this syntax import/from
// and in package.json should be defined as a type: "module" or
// add an extension .mjs to use it.

// so due to this line below ( with await ) presents this app will crash with ReferecError:
//Cannot determine intended module format because both require() and top-level
// await are present. If the code is intended to be CommonJS, wrap await in an async function.
//  If the code is intended to be an ES module, replace require() with import.
try {
  await new Promise((resovle, reject) => {
    resovle(console.log("Top level await waits for this promise"));
  });
} catch (err) {
  console.error(err);
}
// **on commonjs you cant use top level await it's ES modern js feature.**

// Promise.all && Promise.allSettled
// when using Promise.all even if one of the provided promise fails
// then entire function rejects with error.
const resultOfAll = Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject("Rejected"),
])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error:", err));

console.log("ResultOfAll:", resultOfAll);
// ResultOfAll: Promise { <pending> }

// Promise.allSettled is better because it won't fail if one of the provided promise fails. at the end
// it will provide an array with objects of containing result of each promise even the one's which rejected.
Promise.allSettled([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject("Rejected"),
])
  .then((result) => console.log("Result:", result))
  .catch((err) => console.error(err));

// so as a result if you use Promise.allSettled then you are still benefiting from promises plus your entire
// operation won't be permitted because one particular task failed.
// you can use Promise.all if it's very important case and you need all promises fulfilled.
