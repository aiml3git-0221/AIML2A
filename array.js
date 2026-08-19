let str="Welcome JavaScript";

//1 upper case
console.log("Upper case=",str.toUpperCase());

//2 lower case
console.log("Lower case=",str.toLowerCase());

//3 charAt
console.log("Character at index 4=",str.charAt(4));

//4 lastindexof
console.log("Last index of 'word'=", str.lastIndexOf("word"));

//5 indexof
console.log("Index of 'Java'=", str.indexOf("Java"));

//6 slice
console.log("Slice=", str.slice(0,5));

//7 split
let data="HTML,CSS,JavaScript";
let result=data.split(",");
console.log("Split=", result);

//8 replace
let text="I Love Java";
console.log("Replace=", text.replace("Java", "Javascript"));

//9 concat
let first="Shivam";
let last="Sharma";
console.log("Concat=", first.concat(" ",last));

//10 includes
let course="JavaScript";
console.log("Includes 'Script'=", course.includes("Script"));

//-----------------------------
//Array Object
//-----------------------------
console.log("=====Array methods=====");

//1 push
let arr=[1,2,3,5,6,7,8];
arr.push(4);
console.log("push=", arr);

//2 pop
arr.pop();
console.log("pop=",arr);

//3 unshift
arr.unshift(2);
console.log("After unshift=", arr);

//4 shift
console.log(arr.shift(1));

//5 access elements
console.log(arr[3]);

//------------
//Data object
//------------

let date=new Date();
console.log(date);
console.log("year=", date.getFullYear());
console.log("month=", date.getMonth());
console.log("date=", date.getDate());

//Maths object
console.log("PI=", Math.PI);
console.log("Min=", Math.min(1,2,3,4,5));
console.log("Max=", Math.max(1,2,3,4,5));
console.log("Squareroot=", Math.sqrt(16));
console.log("Cuberoot=", Math.cbrt(27));
console.log("Absolute value=", Math.abs(-20));
console.log("Round off=", Math.round(3.14159));