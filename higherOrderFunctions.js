const numbers = [5, 10, 15, 20, 25];

//Map--------------
const map = (array, mapFunc) => {
  let mapResult = [];
  for (let i = 0; i < array.length; i++) {
    mapResult.push(mapFunc(array[i]));
  }
  console.log(mapResult);
};

const double = (num) => {
  newNum = num * 2;
  return newNum;
};

map(numbers, double);

//Filter-----------------------------------------------
const filter = (array, filterFunc) => {
  let filterResult = [];
  for (let i = 0; i < array.length; i++) {
    if (filterFunc(array[i])) {
      filterResult.push(array[i]);
    }
  }
  console.log(filterResult);
};

const isOdd = (num) => {
  return num % 2 == 0;
};

filter(numbers, isOdd);

//Reduce--------------------------------------------

const reduce = (array, reduceFunc) => {
  initialValue = [0];
  for (let i = 0; i < array.length; i++) {
    reduceFunc(array[i], initialValue);
  }
  console.log(initialValue);
};

const sumOfArray = (num, initialValue) => {
  initialValue[0] += num;
  return initialValue;
};

reduce(numbers, sumOfArray);

//forEach-------------------------------------------

const forEach = (array, forEachFunc) => {
  for (let i = 0; i < array.length; i++) {
    console.log(forEachFunc(array[i]));
  }
};

const addFive = (num) => {
  newNum = num + 5;
  return newNum;
};

forEach(numbers, addFive);
