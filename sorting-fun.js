// number sorting fun
const bigNumber = [66, 58, 81, 92, 8, 9, 37, 13, 2];

const sortedBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber)