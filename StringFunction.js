
let str = "  Muhammad Talha ";

let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); 


let lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); 


let strLength = str.length;
console.log(strLength); 

let index = str.indexOf("Talha");
console.log(index); 


let subStr = str.substring(7, 12);
console.log(subStr); 


let newStr = str.replace("World", "Universe");
console.log(newStr); 


let firstName = "Ali";
let lastName = "Hassan";
let fullName = firstName + " " + lastName;
console.log(fullName); 



let trimmedStr = str.trim();
console.log(trimmedStr); 


let includesSubStr = str.includes("Talha");
console.log(includesSubStr); 


let arr = str.split(", ");
console.log(arr); 


let repeatedStr = "abc".repeat(3);
console.log(repeatedStr); 


let numStr = "42";
let num = Number(numStr);
console.log(num); 


let newNumStr = num.toString();
console.log(newNumStr);


let dateString = "2023-04-15";
let dateObj = new Date(dateString);
console.log(dateObj); 
