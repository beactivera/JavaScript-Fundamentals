//  Dates and Times

let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/q0/1981');

val = today.getMonth(); // January - 0
val = today.getDate();
val = today.getDay(); // 1- Sunday, 2 - Monday....
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
 
console.log(birthday);