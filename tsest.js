

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const array4 = [...array1, ...array2, ...array3];

console.log(array4)

const highnum = Math.max(...array4);

console.log(highnum);

let sum = 0;
for (
    let i = 0; i < array4.length; i++) {
    sum = sum + array4[i];
}
const avgsum = sum / array4.length;

console.log(avgsum);