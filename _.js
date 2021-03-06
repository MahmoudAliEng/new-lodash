// Object that contains our new functions - this object represent ou  library
const _ = {
    /* Reuturn the number if it is in the range of low and up bounds (bounds included) 
        Otherwise it returns low bound if the number is smaller than the low bound or the large bound if not
    */
    clamp: (number, lowBound, upBound) => (number <= upBound && number >= lowBound)? 
    number: (number > upBound)? upBound : lowBound,

    /* Second implementation of bound function */
    clamp2: (number, lowBound, upBound) => Math.min(Math.max(number, lowBound), upBound),

    /* Verifiy if number is in given interval specified by start and end */
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

    /* Returns the words of given text by spliting by spcaes */
    words: str => str.split(' '),

    /* Add padding to the right and the left of string by filling with car up to the given length */
    pad: (str, len, car) => {
        if (! len > str.length) return str;
        let neededSpaceAmount = len - str.length;
        
        return car.repeat(Math.floor(neededSpaceAmount/2)) + str + car.repeat(neededSpaceAmount - Math.floor(neededSpaceAmount/2));
    },

    /* Verify if a given object has a given key */
    has: (object, k) => object[k] !== undefined ,

    /* Invert keys to be values and visversa for a given object */
    invert: object => {
        let newObj = {};
        for (let [key, value] of Object.entries(object)) {
            newObj[value] = key;
          }
          
          return newObj;
    },

    /* Return a key of an object that fullfil a function */
    findKey: (object, func) => {
        for (let [key, value] of Object.entries(object)) {
            if(func(value))  return key;
          }
          return undefined;
    },

    /* Drop n element from the begining of an array */
    drop: (array, n=1) => {
        let res =  array;
        res.splice(0, n);
        return res;
    },

    /* Drop elements from an array till the function returns a falsy value on the element */
     dropWhile: function (array, func)  {
        let fValue = array.findIndex((element, index) => !func(element, index, array));
        
        let newArray = this.drop(fValue);
        
        return newArray;    

    },

    /* Returns chunks of an array with the given size */
    chunk: (array, size=1) => {
        let res = [];
        for(let i = 0; i < array.length; ){
            res.push(array.slice(i, size+i ));
            i += size;
        }
        return res;
    }
    
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

/* var object = { 'a': 2 };
h1.innerHTML = _.has(object, 'a');
 */

/* let newObject = _.invert({ 'a': 1, 'b': 2, 'c': 1 })
console.log(newObject); */

 /* var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };  */
//h1.innerHTML = _.findKey(users, function(o) { return o.age < 40; });

//h1.innerHTML = _.dropWhile(users, function(o) { return !o.active; });

h1.innerHTML = _.chunk(['a', 'b', 'c', 'd'], 2);
