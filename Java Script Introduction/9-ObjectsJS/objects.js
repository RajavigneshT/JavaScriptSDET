let person=
{
    firstname:"Raja",
    lastname:"vignesh",
    age:26,
    weight:65
}

//Accessing object properties
console.log(person["firstname"]);//Raja
console.log(person.age);//26

//add new Propertie to existing objects
//person["Height"]=160;
person.height=175;
console.log(person.height);

//update existing objects properties

person.weight=65;
console.log(person.weight)

//remove properties from object

delete person.age;
console.log(person.age);