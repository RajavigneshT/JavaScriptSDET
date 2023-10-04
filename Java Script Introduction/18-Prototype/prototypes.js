//How can add new props in function

function studnet()
{
    this.name="Raja";
    this.gender="Male";
}

studnet.prototype.age=35; //if we want to add new Pro at later stage to  function/class,we can take the help of 
//Prorotype

stu1=new studnet();
stu1.age=25;
//console.log(stu1.name);
//console.log(stu1.gender);

console.log(stu1.name,stu1.gender,stu1.age);

stu2=new studnet();
console.log(stu2.name,stu2.gender,stu2.age);

