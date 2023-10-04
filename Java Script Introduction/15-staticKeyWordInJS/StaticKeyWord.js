class Test
{
  static a=10; //staic variable
  b=20; //non static variable

  static m1()
  {
    console.log("This is a m1 is static Method")
    console.log(Test.a);
  }
   m2()
   {

    console.log("This is a m2 is non static Method")

   }

}

//1) we can directly  access static variables and  methods using class name

console.log(Test.a);//10
Test.a=1000;  // 1000 //we can change value one time it will change all others a values
console.log(Test.a);
console.log(Test.b);//undefined

Test.m1(); //This is a m1 is static Method
//Test.m2(); //error,incorrect

 //2) We can access non static variable and non static variables using creating objects

 let t=new Test();
 console.log(t.b);
 console.log(t.m2()); 
  //THUMBRULE  We can directly access static variables and methods using class name.
  //If we want to access non staic methods  and object we should create object .
  //We can reduce and saving memorey using static keyword.