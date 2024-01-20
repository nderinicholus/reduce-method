// .reduce() = reduce the elements of an array
//            to a single value

// Example 1

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(getTotal);
console.log(`Total: $${total.toFixed(2)}`);

function getTotal(accumulator, element) {
  return accumulator + element;
}

// Example 2: Maximum, Minimum, Average

const grades = [75, 50, 90, 80, 65, 95];

const maximimum = grades.reduce(getMaximum);
const minimum = grades.reduce(getMinimum);
const average = grades.reduce(getAverage);

// Maximum
console.log(`Maximum: ${maximimum}`);
function getMaximum(accumulator, element) {
  return Math.max(accumulator, element);
}

// Minimum
console.log(`Minimum: ${minimum}`);
function getMinimum(accumulator, element) {
  return Math.min(accumulator, element);
}

// Average
console.log(`Average: ${average}`);
function getAverage(accumulator, element) {
  return (accumulator + element) / grades.length;
}
