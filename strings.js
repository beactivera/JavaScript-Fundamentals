// String

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design, web development, programming';

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Weronika ';
val += 'Wdowiak';

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName); // William Johnson

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// index
val = firstName[0]; // W

// indexOf()
val = firstName.indexOf('l'); // 2
val = firstName.lastIndexOf('l'); // 3

// charAt()
val = firstName.charAt('2'); // l 
// Get last char
val = firstName.charAt(firstName.length - 1); // m

// substring()
val = firstName.substring(0,4); // Will

// slice()
val = firstName.slice(0,4); // Will
val = firstName.slice(-3); // iam

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

//includes()  - give true or false if sth is included in string
val = str.includes('Brad');

console.log(val);