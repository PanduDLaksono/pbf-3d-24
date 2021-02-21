// Contents of fantastic.js
export let render = function() {
    console.log("Hello from fantastic.render()!")
}

// Contents of wonderful.js
export let render = function() {
        console.log("Hello from wonderful.render()!");
}

// Contents of amazing.js
export let render = function () {
        console.log("Hello from amazing.render()!");
}


// Contents of script.js
import * as fantastic from './fantastic.js';
import * as wonderful from './wonderful.js';
import * as amazing from './amazing.js';

fantastic.render();
wonderful.render();
amazing.render();
