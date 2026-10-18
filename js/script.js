const movie = "Avatar";
const tickets = 3;
const ticketPrice = 40;
const hours = 2;
const minutes = 15;

const text1 = `the movie is ${movie}`;
const text2 = `we bought ${tickets} tickets`;
const text3 = `the total price is ${tickets * ticketPrice} NIS`
console.log(text1);
console.log(text2);
console.log(text3);



function greet(name){
    return 'hello'+ name;
}

const greet2 = name =>'hello'+ name;

console.log(greet2('tarek'));


const colors =["red","green","blue"];
const [first,secound] = colors
console.log(first,secound)


const a = [1,2];
const b = [3,4];
const all = [...a,...b];
console.log(all);