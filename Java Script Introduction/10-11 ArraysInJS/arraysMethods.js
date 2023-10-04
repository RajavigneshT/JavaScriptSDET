let fruits=["Banana","Orange","Apple","Mango"];


// toString() &Join()
console.log(fruits.toString()); //Banana,Orange,Apple,Mango
console.log(fruits.join("&&")); //We can split value with our signs  //Banana && Orange &&  Apple && Mango

//how to remove last value from array using predefined array methods
//we can use pop();

console.log(fruits.pop()); //removing the last value and return the same value 
console.log(fruits);

//how to  add  last value from array using predefined array methods
//we can use push();
fruits.push("Kiwi"); //add the last value and return  the same value
console.log(fruits);

//how to  remove first array and shfit all other element to lower index value from array using predefined array methods
//using shift()
console.log(fruits.shift()); //remove the value of first element and retrun same  values
console.log(fruits);

//how to add first array and shfit all other element to higer index value from array using predefined array methods
//using unshif()
console.log(fruits.unshift("Lemon")); //retrun the total length of and array
console.log(fruits);

//how to delete value from array 
// using delete key word
console.log(delete fruits[0]); //retrun =true and delete the value but still idex not occcupaid any values index value empty
console.log(fruits);


//how to merge array using predefined arrays methods
//using conact();
let arr1=[10,20];
let arr2=["A","B","C"];

console.log(arr1.concat(arr2));//returns the concated values of two arrays

//want to add more arrays
let arr3=["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//how to slice a value in array ,should not slice original array
//using slice()
console.log(fruits.slice(1));//return the new array with '1'  index sliced 
console.log(fruits);

//How to sort value from array
//using sort()
console.log(fruits.sort()); //return sorted string array 

let nums=[100,200,300,500,400]//we can sort numbers also
console.log(nums.sort());


//How to reverse a string
console.log("+++++++++++ Before reverse array +++++++++++++++");
console.log(fruits);
console.log("+++++++++++ After reverse array ++++++++++++++++")
console.log(fruits.reverse());


