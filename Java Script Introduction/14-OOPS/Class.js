//Class is a Logical entity which contains variables and Methods
//Object is Physical entity & an instance of class
//Method contains statements,Some times method can accecpt arguments
//Class also conatains constructor
//constructor will be called when you create Object for the class.

class Student
{
 constructor(sid,sname,grade)
 {
    this.sid=sid;
    this.sname=sname;
    this.grade=grade;
 }
 setDetails(sid,sname,grade)
 {
    this.sid=sid;
    this.sname=sname;
    this.grade=grade;
 }
 display(){
   console.log(this.sid,this.sname,this.grade);
  }

}
let stu=new Student(100,"RajaV","GF");
//stu.setDetails(100,"Raja","M");
stu.display();
let stu1=new Student(1001,"Raja","GF");//every object is independent and own phycial memory
stu1.display();
let stu2=new Student(1002,"Raj","GF");
stu2.display();
let stu3=new Student(1003,"RaaV","GF");
stu3.display();
let stu4=new Student(1004,"RjaV","GF");
stu4.display();
let stu5=new Student(1005,"RaaV","GF");
stu5.display();
let stu6=new Student(1006,"Ra","GF");
stu6.display();

