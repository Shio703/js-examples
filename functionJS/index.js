// function is a first class (first class citizen) which means
// that function in javascript
// is capable of anything that can be done
// with other data types for example: assigning to variable and etc.

// one and potentially useful example (in my view):

function myFunc(currencyUnit) {
  return (price = Number()) => {
    if (!price) return console.log("You must provide price as well!");
    if (currencyUnit === "$") console.log(`Price in USD is: ${price}`);
    if (currencyUnit === "€") console.log(`Price in EUR is: ${price}`);
  };
}

const priceInUsd = myFunc("$");
const priceInEur = myFunc("€");

priceInUsd(700);
priceInEur(300);

// example two: function can take a function as a parameter and execute it.
// for instance map method recieves an anonymus function as a callback (parameter).

[].map(() => {});
