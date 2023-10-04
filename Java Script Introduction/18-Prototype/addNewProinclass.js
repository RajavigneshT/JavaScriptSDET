//How can add new props in class
class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}
Employee.prototype.salary=25000; //if we want to add new Pro at later stage to class,we can take the help of 
//Prorotype

emp=new Employee(101,"Devid");
console.log(emp.eid,emp.ename,emp.salary);

emp1=new Employee(102,"Kumar");
console.log(emp1.eid,emp1.ename,emp1.salary);


