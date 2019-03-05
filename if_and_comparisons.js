//                   If Statements & Comparison Operators

const id = 100;  //  = assigning

// EQUAL TO
if(id == 100){   // == compare , it doesn't matter what kind of typ it is
  console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 100){   
    console.log('CORRECT');
  } else{
      console.log('INCORRECT');
  }

// EQUAL TO VALUE & TYPE
if(id === 100){   
    console.log('CORRECT');
  } else{
      console.log('INCORRECT');
  }

// NOT EQUAL TO VALUE & TYPE
if(id !== 100){   
    console.log('CORRECT');
  } else{
      console.log('INCORRECT');
  }

// Test if undefined
  if(typeof id !== 'undifined'){
      console.log(`The ID is ${id}`);
  } else{
      console.log(`NO ID`)
  }

// IF ELSE
const color = 'red';

if(color === 'red'){
    console.log('Color is red');
} else if(color === 'blue'){
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

// LOGICAL OPERATORS 

const name = 'Steve';
const age = 20;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if( age>=13 && age <= 19){
    console.log(`${name} is a teenager`);
} else{
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65 ){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registred for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');