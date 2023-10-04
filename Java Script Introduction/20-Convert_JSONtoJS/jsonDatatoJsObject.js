let text={
    "Employees": [
      {
        "firstname": "John",
        "lastname": "Doe"
      },
      {
        "firstname": "Alice",
        "lastname": "Smith"
      },
      {
        "firstname": "Bob",
        "lastname": "Johnson"
      }
    ]
  };

//how to convert above json to JS
let obj=JSON.parse(Employees);

console.log(obj.Employees[1].firstname);


  