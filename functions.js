// FUNCTIONS DECLARATIONS AND EXPRESSIONS

// FUNCTION DECLARATIONS

function greet(){
 console.log('Hello');
}

greet();

function greet(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
   }
   
console.log(greet('John', 'Doe'));

function greet(firstName = 'John', lastName = 'Doe'){
   // if(type of firstName === 'undifined'){firstName = 'John'}
   // if(type of lastName === 'undifined'){lastName = 'Doe'}
    return 'Hello ' + firstName + ' ' + lastName;
}
   
console.log(greet());

// FUNCTION EXPRESSIONS

  const square = function(x){
    return x*x;
  };

  console.log(square(8));

  // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

 (function(){
      console.log('IIFE Ran..')
 })();

(function(name){
    console.log('Hello ' + name)
})('Brad');

// PROPERTY METHODS
 
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();
