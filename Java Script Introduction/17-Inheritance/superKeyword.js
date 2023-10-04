class Animal
{

    constructor (color)
    {
        this.color=color;

    }
    printcolor()
    {

        console.log(this.color);
    }
    
}

class Dog extends Animal
{
    constructor(color,food)
    {
        super(color); //super keywird used for accessing parant class constructor
        this.food=food;

    }
    eating()
    {
        console.log("Eating: ",this.food);
    }

    display()
    {
        this.printcolor();
        this.eating();
    }



}

d=new Dog("Blue","Bread");
d.display();
