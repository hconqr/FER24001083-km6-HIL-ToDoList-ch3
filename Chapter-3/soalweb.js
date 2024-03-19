// Function to return a random item from an array
function random_item(items) {
  // Use Math.random() to generate a random number between 0 and 1,
  // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
  return items[Math.floor(Math.random() * items.length)];
}

// Declare and initialize an array of items
var items = [254, 45, 212, 365, 2543];

// Output the result of the random_item function with the array of items
console.log(random_item(items));
