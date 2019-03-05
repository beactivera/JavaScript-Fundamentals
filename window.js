//                    A Look At The Window Object

// WINDOW METHODS / OBJECTS / PROPORTIES

// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure')){
    console.log('yes');
} else {
    console.log('no');
}

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.href;
val = window.lacation.search;

// Redirect
window.location.href = 'http://google.com';
// Reload
window.location.reload();

// History Object  - you can come back to the previous page
window.history.go(-1);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigatio.appName;
val = window.navigator.appVersion;

console.log(val);
