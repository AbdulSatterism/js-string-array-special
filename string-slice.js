const anthem = 'amar sonar bangla ami tomay valobashi';
const words = anthem.split(' ');
const withOutA = anthem.split('a');
// console.log(withOutA)

const smallSlice = anthem.slice(5, 10);
// console.log(smallSlice)

// substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart)

// subString

const anotherPartSub = anthem.substring(11, 15);
// console.log(anotherPartSub)



// concat ata jora lagay r ki
const first = 'amader';
const second = 'City';
// const fullString = first + second;

const concatString = first.concat(second).concat('ke valo basi nare')
// console.log(concatString)

const word = ['a', 'b', 'c', 'd'];
const allJoin = word.join('');
console.log(allJoin)

