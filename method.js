// const a={
//     name:"ravi",
//     marks:80,
//     grade:"A"
// };
// function updatemark(n){
//     this.marks=n;
// }
// a.updatemark(70);
// console.log(a.marks);

// const student = {
//     name: "Ravi",
//     marks: 80,
//     grade: "A",

//     updateGrade: function () {
//         this.grade = "A+";
//     }
// };

// student.updateGrade();

// console.log("Name:", student.name);
// console.log("Marks:", student.marks);
// console.log("Grade:", student.grade);

// function add(...nunm){
//     console.log(nunm);
// }
// add(12,34,56,82,84,93);
// function namto(name,...num){
//     let sum=0;
//     sum+=num;
//     console.log("Hello "+name);
//     console.log(sum);
// }
// namto("shivam",12,34,56,82,84,93);

//create a rest operator function that takes input from user and returns sum of the numbers
const sumAll = (...numbers) => {
  return numbers.reduce((total, current) => total + current, 0);
};
const userInput = prompt("Enter numbers separated by commas:");
const stringArray = userInput.split(",");
const numberArray = stringArray.map(num => Number(num.trim()));
const result = sumAll(...numberArray);
console.log(result);