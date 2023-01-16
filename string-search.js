const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashLight Phone',
    'yellow laptop with black camera',
    'Lenova commercial yoga Laptop',
    'Dell purple low price phne',
    'purple color phone with laptop'
];

const searching = 'dell';

// indexOf 
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product)
    }
}
// console.log(output)

// includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product)
    }
}


for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output)
