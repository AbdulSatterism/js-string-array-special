const numbers = [4, 7, 1, 3, 9, 2, 5, 8];
const sortetNumber = numbers.sort();
// console.log(sortetNumber);

const friends = ['Kabli', 'Josim', 'Razzak', 'Dipjol', 'Fordi', 'Badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends)

// const reverseFriends = friends.reverse();
// console.log(reverseFriends)

const sortedFriendsReverse = friends.sort().reverse();
// console.log(sortedFriendsReverse)


// number sorting fun
const bigNumber = [66, 58, 81, 92, 8, 9, 37, 13, 2];
// const bigNumber = [8, 5, 9, 7, 2, 1];
const sortedBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber)


