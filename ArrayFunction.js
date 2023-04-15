let arr = [3,5,3,2,8];



let arrLength = arr.length;
console.log(arrLength); 



let firstElement = arr[0];
console.log(firstElement); 


arr.push(6);
console.log(arr);


arr.pop();
console.log(arr); 


arr.unshift(0);
console.log(arr); 


arr.shift();
console.log(arr); 


let sliceArr = arr.slice(1, 4);
console.log(sliceArr); 



arr.splice(2, 2, 6, 7);
console.log(arr); 


let arr2 = [8, 9, 10];
let concatArr = arr.concat(arr2);
console.log(concatArr); 


let reverseArr = arr.reverse();
console.log(reverseArr); 


let sortArr = arr.sort();
console.log(sortArr); 


let index = arr.indexOf(5);
console.log(index); 


let includesElement = arr.includes(3);
console.log(includesElement); 


let squaredArr = arr.map(num => num ** 2);
console.log(squaredArr); 


let filteredArr = arr.filter(num => num % 2 === 0);
console.log(filteredArr); 

let sum = arr.reduce((acc, num) => acc + num);
console.log(sum); 

