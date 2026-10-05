// //Ecommerce product system
// class Employee{
//     constructor(id,name,basicSalary){
//         this.id=id;
//         this.name=name;
//         this.basicSalary=basicSalary;
//     }
//     calculateSalary(){
//         return this.basicSalary;
//     }
// }
// class Manager extends Employee{
//     constructor(id,name,basicSalary,incentive){
//         super(id,name,basicSalary);
//         this.incentive=incentive;
//     }
//     calculateSalary(){
//         return this.basicSalary+this.incentive;
//     }
// }
// let emp=new Employee(101,"Rahul",30000);
// let mgr=new Manager(201,"Priya",50000,10000);
// console.log("Employee Salary =",emp.calculateSalary());
// console.log("Manager Salary =",mgr.calculateSalary());

//using timeout function
setTimeout(() => {
    console.log("Timeout function executed");
}, 1000);           