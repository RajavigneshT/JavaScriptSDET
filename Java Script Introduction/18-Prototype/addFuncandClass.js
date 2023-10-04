//How can add new functions/class by using prototype

class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}
Employee.prototype.salary=25000; 

Employee.prototype.display=function() //we can add function like this
{
    console.log(this.eid,this.ename,this.salary);
    
}

emp=new Employee(101,"Devid");
emp.display();
emp1=new Employee(102,"Kumar");
emp1.display();


