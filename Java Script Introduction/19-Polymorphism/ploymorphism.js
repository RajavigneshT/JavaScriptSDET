//ploy=many
//morph=forms
//ploymorphism=many forms

class Shape
{
    draw()
    {
        return "I am generic shape";
    }
}

class Square extends Shape
{
    draw()
    {
        return "I am Square";
    }
}

class Circle extends Shape
{
    draw()
    {
        return "i am circle";
    }


}

let s=new Shape()
console.log(s.draw());

s=new Square()
console.log(s.draw());

s= new Circle()
console.log(s.draw());