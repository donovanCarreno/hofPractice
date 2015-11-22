var numbers = [1,2,3,4,5,6,7,8,9,10];

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
               'o','p','q','r','s','t','u','v','w','x','y','z'];

// Practice Problems:
//-------------------
// Use the higherOrderFunctions to solve the following problems:

// Use filter to return just the vowels from the array letters
filter(letters, function(letter) {
  // your code here
  return ('aeiou').indexOf(letter) >= 0;
});


// Use each to print the odd numbers to the console
each(numbers, function(number) {
  // your code here
  if (number % 2 !== 0) {
  	console.log(number);
  }
});


// Use reduce to return the sum of numbers
reduce(numbers, function(sum, number) {
  // your code here
  return sum + number;
});


// Use map to convert the array letters to all capital letters
map(letters, function(letter) {
  // your code here
  return letter.toUpperCase();
});


// Use filter to return every other letter in letters
filter(letters, function(letter) {
  // your code here
  return letters.indexOf(letter) % 2 === 0;
});


// Modify the above function to return the other letters
filter(letters, function(letter) {
  // your code here
  return letters.indexOf(letter) % 2 !== 0;
});


// Use filter to return the string "lmnop" from letters
filter(letters, function(letter) {
  // your code here
  return ('lmnop').indexOf(letter) >= 0;
}).join(''); // HINT: more code here


// Return the sum of the even numbers using filter and reduce together
// NO HINTS: All of your code here
reduce(filter(numbers, function(element) {
	return element % 2 === 0;
}),function(accumulator, element) {
	return accumulator + element;
});
