// Contents of amazing.js
const vowels = ['a','e','i','o','u']; 

let render = function () {
           console.log("Hello from amazing.render()!");
}

function testing() {                                
  console.log("testing() in amazing.js");  
  
}

export {vowels,render,testing};

// Contents of fantastic.js
export let render = function() {
       console.log("Hello from fantastic.render()!")
}

let main = function() { 
    console.log("main() in fantastic"); 
}

export default main;

// Contents of wonderful.js
export let render = function() {
           console.log("Hello from wonderful.render()!");
}

console.log("Log statement in global scope of wonderful.js");



// Contents of script.js
import coolstuff, * as fantastic from './fantastic.js';
import './wonderful.js';
import {vowels as letters, render,testing} from './amazing.js';

fantastic.render();
console.log(letters);
render();
testing();
coolstuff();