// let s="RaJaVignesh";
// //let r=new String();

// //How to perform different operations and methods in string

// //charAt()
// console.log(s.charAt(2)); //return j based on index values

// //concat()
// console.log(s.concat("T")); //concat s string with "T"
// console.log(s.concat("T").concat("Parimala")); //concat s string with "T" and more

// //replace()
// //s="Welcome to javascript";
// console.log(s.replace("Rajavignesh","Java"));//replace a old value into update values

// //substring()

// console.log(s.substring(0,4)); //extratc a values based on index
// console.log(s.substring(4,13));

// //toLowerCase & toUpperCase()

// console.log(s.toLowerCase());
// console.log(s.toUpperCase());

// //split()
//  s="Welcome to JavaScript"
// let arr=s.split(' ');
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// //trim()
// s="    Welcome   ";
// console.log(s);
// console.log(s.trim()); //remove the spaces from string

//********************************Numbers****************************************/

let x=100;
//let x=new Number(100);

let r=102;   //Integer value
let t=10.2;  //decimal
let y=10e2;  //exponencial value

console.log(r,t,y);

// How to perform different operations and methods in Numbers

//isInteger()
r=10;
t=1.8;
y="x";

console.log(Number.isInteger(r)); //return true or flase if integer return true
console.log(Number.isInteger(t)); //flase
console.log(Number.isInteger(y)); //false

//parseInt() //will convert a string into Number

r1="Welcome";
r="12355";

console.log(Number.parseInt(r1)); //NaN
console.log(Number.parseInt(r));

console.log(typeof(r)); //string
console.log(typeof(Number.parseInt(r))); //number


//parseFloat()  //will convert a decimal into Number

r="123.54581";
console.log(typeof(r));
console.log(typeof(Number.parseFloat(r)));


//toString(); //will convert a number to String 

let n=123456;
console.log(typeof(n)); //number
console.log(typeof(n.toString()));//string
