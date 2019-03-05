//var, let, const

var name1= 'John Doe';
console.log(name1);
name1 = 'Steve Smith';
console.log(name1);

// Init var
var greeting;
greeting = 'Hello';
console.log(greeting);

//letters, number, _, $
// Can not start with number

//Multi word vars
var firstName = 'John';  //Camel case
var first_name = 'Sara'; //Underscore
var FirstName = 'Tom'; //Pascal case - constructive functions, name classes


 //LET

let name2;
name2= 'John Doe';
console.log(name2);
name2 = 'Steve Smith';
console.log(name2);


//CONST
const name3 ='John';
console.log(name3);
// Can not reassign -- name = 'Sara';
// Have to assign a value  -- const greeting;


const person = {
    name: 'John',
    age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);