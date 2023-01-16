const numbers = [1, 24, 15, 3, 4, 54, 7, 78, 68, 95, 62, 32, 54, 68];
const numberSlice = numbers.slice(8, 12);
// console.log(numberSlice)
// console.log(numbers)

// splice to remove an 
// const spliceNumber = numbers.splice(0, 8);
// console.log('splice array', spliceNumber)
// console.log('ager array', numbers)

const spliceNumber2 = numbers.splice(0, 8, 1000, 2000, 8000);
console.log(spliceNumber2)
console.log('new array', numbers)