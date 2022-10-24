function greet(name = 'Rahman') {
    console.log(`Hello ${name}`);
}

greet('Rahamn Mossad');

const array = [1, 1, 1]
const plusOne = async n => n + 1;

const result = array.map(plusOne);
console.log(result);