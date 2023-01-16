function meghaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }

    let megha = friends[0];
    for (const friend of friends) {

        if (friend.length > megha.length) {
            megha = friend
        }
    }
    return megha;
}
const friends = ['lion', 'mamakhfaf', 'lutu bin putu bin hutu', 'milu'];
const myBigByddy = meghaFriends(245);
// console.log(myBigByddy)

if (friends.indexOf('milu') != -1) {
    // console.log('milu ke paisi')
}

// includes
if (friends.includes('milu')) {
    console.log('aj tore paisi re bapai')
}

// concat 
const first = [1, 2, 4, 5, 6, 8];
const second = [54, 78, 46, 21];
const combined = first.concat(second);
console.log(combined)










