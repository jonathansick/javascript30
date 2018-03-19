// Get your shorts on - this is an array workout!
// filter, map, reduce are the gateway drug to functional programming
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
//
// first take as a regular filter function
// const fifteen = inventors.filter(function(inventor) {
//   if(inventor.year >= 1500 && inventor.year <= 1599) {
//     return true; // keep it
//   }
// });
//
// redo as an arrow function
// const fifteen = inventors.filter(inventor => {
//   if(inventor.year >= 1500 && inventor.year <= 1599) {
//     return true; // keep it
//   }
// });
//
// redo as an inline arrow function
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);

console.table(fifteen); // print each object as a row in a table. nicer here than console.log()

// Array.prototype.map()
// map returns same number of items, just modified
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// sort functions return 1 and -1 to bubble items up or down the sort order
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// redo using an arrow function and ternerary operator
// return 1 if statement is true, otherwise return -1
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// reduce creates a scalar from an array
// reduce takes the running total (for e.g.), and the next object to 'reduce'
const totalYears = inventors.reduce((total, inventor) => {
  return total + inventor.passed - inventor.year;
}, 0); // the 0 is the initial value
console.log(totalYears);

// 5. Sort the inventors by years lived
// i.e., reverse sort by ages
const oldest = inventors.sort((a, b) => a.passed - a.year > b.passed - b.year ? -1 : 1);
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// needs to run in the browser console
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')]; // use ES6 spreads to create an array, or Array.from()
// const de = links
//   .map(link => link.textContent)
//   .filter(name => name.includes('de')); // chain filter after a map

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  console.log(aLast, bLast);
  return aLast > bLast ? 1 : -1;
});
console.log(sortedPeople);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce(function(obj, item) {
  // check if the key is in the object already; if not seed it with a zero count
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {}); // start with empty object
console.log(transportation);