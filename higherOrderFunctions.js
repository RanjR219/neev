const forEachNumbers = [5, 10, 15, 20, 25];

function double(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Using forEach", array[i] * 2);
  }
}

double(forEachNumbers);

const filterNumbers = [1, 2, 3, 4, 5];
resultArray = [];
function isOdd(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

const resultArray = isOdd(filterNumbers);
console.log(oddArray);
