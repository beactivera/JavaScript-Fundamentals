//                         GENERAL LOOPS

// FOR LOOP   - you know how many iteration you have
for(let i=0; i<10; i++){
 if( i === 2){
     console.log('2 is my favorite number');
     continue; // keep going to the next iteration
 }

 if( i === 5){
     console.log('Stop the loop');
     break;
 }

 console.log('Number ' + i);
}

// WHILE LOOP
let i = 0;

while( i < 10){
 console.log('Number ' + i);
 i++;
}

// DO WHILE  - always it execute no matter what
let j = 0;

do{
    console.log('Number ' + j);
    i++;
}
while(i<10);

//  LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++ ){
    console.log(cars[i]);
}

//  forEach
cars.forEach(function(car, index, array){
    //console.log(car);
    console.log(`${index} : ${car}`);
    console.log(array);
})

// MAP
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
];

const ids = users.map(function(user){
    return user.id;
})

console.log(ids);


// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe', 
    age: 40
};

for(let x in user){
    console.log(x); // show a keys inside an object
    console.log(`${x} : ${user[x]}`); // show an object
};