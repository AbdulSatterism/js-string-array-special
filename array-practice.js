// sorting big numbers
/* simple number can sorting easely but big number doesn't solved it;
 const numbers = [8, 9, 5, 4, 6, 7, 2, 1, 5, 3];
const sortNumber = numbers.sort()
console.log(sortNumber)
*/

const numbers = [87, 45, 76, 95, 2, 1, 4, 3, 6, 5, 4, 100, 488, 57, 1, , 01, 02];

const sortBigArranyNumber = numbers.sort(function (a, b) {
    return a - b;
});
console.log('after sorting properly', sortBigArranyNumber)