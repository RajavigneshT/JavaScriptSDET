let employee=
{
 empname:"Ramu",
 empid:57,
 jon:"TechSupport",
 BasicSalary:650000,

 bonus:function()
 {
    return((this.BasicSalary*10))/100
 }

};

console.log(employee.empname);
console.log(employee.bonus());