// const myArray: (number | string)[] = [1, 2, 3, 4, 5, 6];
const myArray: number[] = [1, 2, 3, 4, 5, 6];

const myArray2 = [...myArray];

myArray2.push(7);
// myArray2.push('hola mundo');

console.log({ myArray, myArray2 });
