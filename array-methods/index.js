// function rectangle(a, b) {
//   const perimeter = 2 * (a + b);
//   const area = a * b;
//   return `The perimeter of the rectangle is - ${perimeter}, and the area is - ${area}`;
// }

// function circle(radius) {
//   const perimeter = 2 * 3.14 * radius;
//   const area = 3.14 * radius * radius;
//   return `The perimeter of the circle is - ${perimeter}, and the area is - ${area}`;
// }

// function findIndex(str, char) {
//   return str.indexOf(char);
// }

// function findLastIndex(str, char) {
//   return str.lastIndexOf(char);
// }

// function containsWord(str, word) {
//   return str.includes(word);
// }

// function charAtIndex(str, index) {
//   return str.charAt(index);
// }

// function stringLength(str) {
//   return str.length;
// }

// function replaceWord(str, oldWord, newWord) {
//   return str.replace(oldWord, newWord);
// }

// function sliceString(str, start, end) {
//   return str.slice(start, end);
// }

// console.log(findIndex());

// Exercise 1: გაფილტრეთ/გამოიტანეთ მხოლოდ ლუწი რიცხვები
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = numbers1.filter((value, index, array) => {
  return value % 2 == 0;
});
console.log("ლუწი მასივი:", filteredArray);

// Exercise 2: გაფილტრეთ/გამოიტანეთ მხოლოდ ის ხალხი რომელიც 18 წელზე მეტისაა
const people1 = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 30 },
];
const filteredPeople = people1.filter((value, index, array) => {
  return value.age >= 18;
});
console.log("18+ people:", filteredPeople);

// Exercise 3: გაფილტრეთ/გამოიტანეთ მხოლოდ ის პროდუქტები, რომლებიც მარაგშია
const products1 = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true },
  { name: "Monitor", inStock: false },
];
const inStock = products1.filter((value, index, array) => {
  return value.inStock === true;
});
console.log("In Stock Products:", inStock);

// Exercise 4: გაფილტრეთ/გამოიტანეთ მხოლოდ ის ქალაქები სადაც მოსახლეობა 1 მილიონზე ნაკლებია
const cities1 = [
  { name: "City A", population: 500000 },
  { name: "City B", population: 1500000 },
  { name: "City C", population: 800000 },
  { name: "City D", population: 2500000 },
];
const filteredCities = cities1.filter((value, index, array) => {
  return value.population > 1000000;
});
console.log("Over 1m people cities:", filteredCities);

// Exercise 5: გაფილტრეთ/გამოიტანეთ მხოლოდ ის სიტყვები რომლების სიგრძეც 5-ზე ნაკლებია
const words1 = ["apple", "cat", "banana", "dog", "elephant"];
// Filter out all the words that have less than 5 characters.
const filteredWords = words1.filter((value, index, array) => {
  return value.length > 5;
});
console.log("words over 5 in length:", filteredWords);

// Sort მეთოდის სავარჯიშო
// Exercise 6: დაალაგეთ ზრდადობის მიხედვით
const numbers2 = [5, 3, 8, 1, 2, 7];
const sortedNumbers = numbers2.sort((a, b) => {
  return a - b;
});
console.log("sorted numbers:", sortedNumbers);

// Exercise 7: დაალაგეთ ანბანის მიხედვით
const fruits = ["banana", "apple", "cherry", "date"];
const sortedFruits = fruits.sort();
console.log("sorted fruits:", sortedFruits);

// Exercise 8: დაალაგეთ მომხმარებლების ასაკის კლებადობის მიხედვით
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];
const sortedUsers = people.sort((a, b) => {
  return b.age - a.age;
});
console.log("sorted users:", sortedUsers);

// Exercise 9: დაალაგეთ პროდუქტის ფასის ზრდადობის მიხედვით
const products2 = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
];
const sortedProducts = products2.sort((a, b) => {
  return a.price - b.price;
});
console.log("sorted products:", sortedProducts);
// Exercise 10: დაალაგეთ სათაურები ანბანის მიხედვით
const books1 = [
  { title: "The Great Gatsby" },
  { title: "Moby Dick" },
  { title: "To Kill a Mockingbird" },
  { title: "1984" },
];
const sortedBooks = books1.sort((a, b) => a.title.localeCompare(b.title));

console.log("sorted books:", sortedBooks);

// Map მეთოდის სავარჯიშოები

// Exercise 11: შექმენით ცვლადი, სადაც შეინახავთ მოცემული მასივის კვადრატულ მნიშვნელობებს (ანუ: [1, 4, 9, 16, 25])
const numbers3 = [1, 2, 3, 4, 5];

// Exercise 12: შექმენით ცვლადი, სადაც შეინახავთ ხილის დასახელების სიგრძეებს (ანუ: [5, 6, 6, 4]);
const words2 = ["apple", "banana", "cherry", "date"];
const mappedWords = words2.map((value, index, array) => {
  return value.length;
});
console.log("mapped words:", mappedWords);

// Exercise 13: შექმენით ცვლადი, სადაც შეინახავთ თითოეულ სახელს დიდი ასოებით ჩაწერილს (ანუ: [ALICE, BOB, CHARLIE, DAVID])
const people03 = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" },
];

const mappedPeople = people03.map((value, index, array) => {
  return value.name.toUpperCase();
});
console.log("mapped people to uppercase:", mappedPeople);

// Exercise 14: შექმენით ცვლადი, სადაც შეინახავთ თითოეული პროდუქტის ფასს, ოღონდ 10%-ით დაქვითულს ანუ: 800-ის ნაცვლად უნდა შეინახოთ 720; 500-ის ნაცვლად 450 და ა.შ...
const products3 = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
];

const discountedPrices = products3.map((value, index, array) => {
  return value.price - value.price / 10;
});
console.log("discounted prices:", discountedPrices);

// Exercise 15: შექმენით ცვლადი, სადაც შეინახავთ თითოეული წევრის პირველ ასო ბგერას (ანუ: ['a', 'b', 'c', 'd'])
const words3 = ["apple", "banana", "cherry", "date"];
// Create a new array with the first letter of each word.
const mappedWords2 = words3.map((value, index, array) => {
  return value.slice(0, 1);
});
console.log("mapped words2 first letters:", mappedWords2);
// კომბინირებულები:

// Exercise 16: გაფილტრეთ/გამოიტანეთ კენტი რიცხვები, და აიყვანეთ კვადრატში. ანუ filter მეთოდს უნდა მიაბათ map მეთოდი
const numbers04 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers04
  .filter((value, index, array) => {
    return value % 2 === 1;
  })
  .map((value, index, array) => {
    return Math.sqrt(value);
  });

console.log("odd numbers/sqrt (square root):", oddNumbers);

// Exercise 17: დაალაგეთ პროდუქტები ფასის კლებადობის მიხედვით, შემდეგ კი გამოიტანეთ ამ პროდუქტების მხოლოდ დასახელებები (sort და map)
const products4 = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
];
const sortedMappedProducts = products4
  .sort((a, b) => {
    return b.price - a.price;
  })
  .map((value, index, array) => {
    return value.name;
  });
console.log("soted mapped products:", sortedMappedProducts);

// Exercise 18: გაფილტრეთ 20+ ხალხი, შემდეგ დაალაგეთ ზრდადობის მიხედვით, შემდეგ დააბრუნეთ მხოლოდ მათი სახელები
const people4 = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 30 },
  { name: "Eve", age: 20 },
];
const processedData = people4
  .filter((value, index, array) => {
    return value.age > 20;
  })
  .sort((a, b) => {
    return a.age - b.age;
  })
  .map((value, index, array) => {
    return value.name;
  });
console.log("procesed people(20 + && sorted):", processedData);

// Exercise 19: დაალაგეთ წიგნები ანბანის მიხედვით, იპოვენთ ის წიგნები, რომლებიც "T"-თი იწყება და გამოიტანეთ მათი სახელები დიდი ასოებით ჩაწერილი - მაგ: THE GREAT GATSBY
const books2 = [
  { title: "The Great Gatsby" },
  { title: "Moby Dick" },
  { title: "To Kill a Mockingbird" },
  { title: "1984" },
];
const processedBooks = books2
  .sort((a, b) => {
    return a.title.localeCompare(b.title);
  })
  .filter((value, index, array) => {
    return value.title.at(0) === "T";
  })
  .map((value, index, array) => {
    return value.title.toUpperCase();
  });

console.log("processed books(starts with T):", processedBooks);

// Exercise 20: გაფილტრეთ ქალაქები, სადაც მოსახლეობა 1 მილიონზე მეტია, დაალაგეთ კლებადობის მიხედვით, და გამოიტანეთ ამ ქალაქების დასახელებები (filter, sort, map)
const cities2 = [
  { name: "City A", population: 500000 },
  { name: "City B", population: 1500000 },
  { name: "City C", population: 800000 },
  { name: "City D", population: 2500000 },
];

const filteredPopilation = cities2
  .filter((value, index, array) => {
    return value.population > 1000000;
  })
  .sort((a, b) => {
    return b.population - a.population;
  })
  .map((value, index, array) => {
    return value.name;
  });
console.log("filtered population over 1m:", filteredPopilation);
// ახლები:

// Exercise 21:  შეამოწმეთ შემდეგი პირობა: ყველა წევრი 18 წელზე მეტისაა (every)
const people3 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];
const everyPeople = people3.every((value, index, array) => {
  return value.age > 18;
});
console.log("is everyone over 18:", everyPeople);

// Exercise 22: შეამოწმეთ შემდეგი პირობა: მასივის ყველა წევრი ლუწია (every)
const numbers4 = [2, 4, 6, 8, 10];
const everIsEven = numbers4.every((value, index, array) => {
  return value % 2 === 0;
});
console.log("every number is even:", everIsEven);

// Exercise 23: შეამოწმეთ შემდეგი პირობა: მასივის ზოგიერთი წევრი 'a' ასოთი იწყება (some)
const fruits1 = ["apple", "banana", "cherry", "date"];
const someFruit = fruits1.some((value, index, array) => {
  return value.startsWith("a");
});
console.log("word starts with (a):", someFruit);

// Exercise 24: შეამოწმეთ შემდეგი პირობა: მასივის ზოგიერთი წევრი 18 წელზე ნაკლებისაა (some)
const people02 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];
const someIsBelowAge = people02.some((value, index, array) => {
  return value.age < 18;
});
console.log("some people are below 18:", someIsBelowAge);

// Exercise 25: reduce მეთოდის დახმარებით გადააბით შემდეგი სიტყვები, მათ შორის ჩასმული უნდა იყოს დეფისი ჩასმული (ანუ ასე გამოიტანეთ: apple - banana - cherry - mango)
const words01 = ["apple", "banana", "cherry", "mango"];

const wordsReduce = words01.reduce(
  (previousValue, currentValue, index, array) => {
    return previousValue + " - " + currentValue;
  }
);
console.log("reduced words:", wordsReduce);
// Exercise 26: გამოითვალეთ პროდუქტების ჯამური რაოდენობა, არ დაგავიწყეთ initial values მინიჭება, ანუ: sale.reduce(() => {}, 0) - აი ეს ნული არ დაგავიწყდეთ,

const sales1 = [
  { product: "Laptop", amount: 1000 },
  { product: "Phone", amount: 500 },
  { product: "Tablet", amount: 800 },
];

const totalAmount = sales1.reduce((prevValue, curValue, index, array) => {
  return prevValue + curValue.amount;
}, 0);
console.log("total amount of products:", totalAmount);

// Exercise 27: გამოითვალეთ პროდუქტების ჯამური ღირებულება (არ ფასი და რაოდენობა უნდა გაამრავლოთ ერთმანეთზე), არ დაგავიწყეთ initial values მინიჭება, ანუ: sale.reduce(() => {}, 0) - აი ეს ნული არ დაგავიწყდეთ,
const sales = [
  { product: "Laptop", amount: 10, price: 100 },
  { product: "Phone", amount: 50, price: 100 },
  { product: "Tablet", amount: 80, price: 10 },
];

const totalWorth = sales.reduce((total, value, index, array) => {
  return total + value.amount * value.price;
}, 0);

console.log("total worth of products:", totalWorth);

// for of loop:
const testArr = ["a", "b", "c"];
for (const item of testArr) {
  console.log(item);
}
