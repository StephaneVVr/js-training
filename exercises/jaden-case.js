'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(charact){
    let tabl = charact.split(" ");
    
    for(let i=0; i < tabl.length; i++)
        console.log(tabl[i].charAt(0).toUpperCase() + tabl[i].substring(1).toLowerCase());
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')

// End of tests */
