// Object that contains our new functions - this object represent ou  library
const _ = {
    /* Reuturn the number if it is in the range of low and up bounds (bounds included) 
        Otherwise it returns low bound if the number is smaller than the low bound or the large bound if not
    */
    clamp: (number, lowBound, upBound) => (number <= upBound && number >= lowBound)? 
    number: (number > upBound)? upBound : lowBound,

    /* Second implementation of bound function */
    clamp2: (number, lowBound, upBound) => Math.min(Math.max(number, lowBound), upBound),

    inRange: (number, start, end) => {
        if( end === undefined){
            end = start;
            start = 0;
        }
        if ( end < start){
            let temp = start;
            start = end;
            end = temp;
        }
        return (number >= start && number < end);
    },

    words: str => str.split(' '),

    pad: (str, len) => {
        if (! len > str.length) return str;
        let neededSpaceAmount = len - str.length;
        
        return "$".repeat(Math.floor(neededSpaceAmount/2)) + str + "$".repeat(neededSpaceAmount - Math.floor(neededSpaceAmount/2));
    },

    has: (object, k) => object[k] !== undefined 
    
};


let h1 = document.querySelector('h1');
let h2 = document.createElement('h1')
document.body.appendChild(h2);

/* Testing clamp and clamp2

h1.innerHTML = _.clamp(5,2,4);
h2.innerHTML = _.clamp2(5,2,4);
 */

// h1.innerHTML = _.inRange( -3, -2, -6);

//h1.innerHTML = _.words('Salam alikoum my brother');

//h1.innerHTML = _.pad('abc', 8);


// var other = _.create({ 'a': _.create({ 'b': 2 }) });

var object = { 'a': 2 };
h1.innerHTML = _.has(object, 'a');
