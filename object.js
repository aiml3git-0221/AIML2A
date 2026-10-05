let c={
    age: 20,
    job:"developer",
    details:function(){
        console.log("Age=", this.age);
        console.log("Job=", this.job);
    },
    profile:"Assistant developer",
    job_title:function(){
        console.log("Job title=", this.profile);
    }
}
//create a method addMarks() that adds 5 marks to the existing marks.
//create another method display() to display the updated marks.
let d={
    marks: 80,
    addMarks:function(){
        this.marks+=5;
    },
    display:function(){
        console.log("Updated marks=", this.marks);
    }
}

//create a function named college() and use dep and class as object and display the details
function college(){
    let dep={
        name:"Computer Science",
    };
    let class_obj={
        name:"AIML",
    };
    console.log("Department:", dep.name);
    console.log("Class:", class_obj.name);
}
college();