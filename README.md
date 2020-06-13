# New Lodash

This is a simple implementation of some of the <a href="https://lodash.com/">**Loadsh library**</a> in different manner and may be in different functionality.

These are the implemented functions:
```clamp```: Clamps number within the inclusive lower and upper bounds.

``` inRange```: Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

``` words``` : Splits string into an array of its words.

```pad ```: Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.

```has```: Checks if path is a direct property of object.

```invert```: Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.

```findKey```: This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.

```drop```: Creates a slice of array with n elements dropped from the beginning.

```dropWhile```: Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

```chunk```: Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.


