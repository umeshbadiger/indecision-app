const square = function(x){
    return x*x;
};

console.log(square(8));

const firstName = 'umesh badiger';

// const getFirstName = function(name){
//    return name.split(' ')[0];
// }

const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName(firstName));

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num)
    }
};

console.log(multiplier.multiply());