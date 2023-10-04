let person=
{
    firstname:"Raja",
    lastname:"vignesh",
    age:26,
    weight:65
}

for (let x in person)
{
console.log(x);//it only prints property name alone
console.log(person[x]);
}