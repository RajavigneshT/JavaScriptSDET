//Multiple values stores in a single varibale.
//Array is s specail variable ,which can hold more than one value at a time.
//let cars=["AUdi","BMW","Volvo"]
//Sometime ARRAYS store objects and methods in array.

//we can create a array in two ways
//let cars=["BMW","Volvo0","Audi"]
//let car=new Array("BMW","Saab","Audi")

//how to print arrays
//console.log(cars);

//How to get value or access values from arrays

//console.log(cars[2]);

//how to change elements in array
//cars[0]="Tesla";
//console.log(cars);

//We can store different types of data
 //let myarray=[100,"Welcome",10.5,true]

 //console.log(myarray);

 //Arrays can holds objects also inside the Array
//  let  person1={

//     name:"Raja",
//     age:28
//  }
//  let person2={
//     name:"Ram",
//     age:40
//  }

 //how can i store above objects in below array
 //let myarray1=[person1,person2];

 //console.log(myarray1);

 //we can get inside array objects with indexing
 //console.log(myarray1[0]);

 //let fruits=["Banana","Orange","Apple","Mango"]
 //how to know length of arrays
 //console.log(fruits.length);
//Looping elements  from array

// for(let i=0;i<=fruits.length-1;i++)
// {
//    console.log(fruits[i]);
//    //console.log(i);

// }


//Looping element from arry using For/of loop
// for(rv of fruits)
// {
//  console.log(rv);
// }

//Recognize an array -typeof
console.log(typeof(fruits)); //Array is basically a object

console.log(Array.isArray(fruits)); //this line find out a variable array or not.