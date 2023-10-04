//Wrapping up for data and methods in one single unit it is called encapsulations

class Student 
{
    constructor()
    {
        let name,marks;
    }

    getName()
    {
        return this.name;
    }
    setName(name)
    {
        this.name=name;
    }

    getMarks()
    {
        return this.marks;
    }

    setMarks(marks)
    {
        this.marks=marks;
    }
}

let stu=new Student();

stu.setName("Rajavignesh")
stu.setMarks(62);

console.log(stu.getName(),stu.getMarks());