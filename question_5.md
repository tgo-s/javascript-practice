## What does the following snippet output, and why?
```js
['12341234','5678901234','10','7890','123456a'].map(parseInt)
```

## The output is :
```js
[ 12341234, NaN, 2, NaN, 27 ]
```
The reason is in how both function are defined and how they work together: 

The map function is defined as: `Array.prototype.map ( callbackfn [ , thisArg ])` 

The `callbackfn` should be a function that accepts three arguments: the value of the element, the index of the element, and the object being traversed.

The parseInt function is defined as: `parseInt (string , radix)`

It produces an integer value from the string passed according to the _radix_. 

In this case, on each iteration of `map` function the `parseInt` will be receiving three parameters, which the index will be passed as the radix and the third argument will be ignored since it isn't declared.

The following snippet is an example of the process occured:

```js
// First iteration - value: '12341234', index = 0, object = ['12341234','5678901234','10','7890','123456a']
parseInt('12341234', 0, ['12341234','5678901234','10','7890','123456a']); // radix 0 => the radix default is assumed (radix 10)
// output: 123451234

// Second iteration - value: '5678901234', index = 1, object = ['12341234','5678901234','10','7890','123456a']
parseInt('5678901234', 1, ['12341234','5678901234','10','7890','123456a']); // radix 1 => the value doesn't exist
// output: NaN

// Third iteration - value: '10', index = 2, object = ['12341234','5678901234','10','7890','123456a']
parseInt('10', 2, ['12341234','5678901234','10','7890','123456a']); // radix 2 => binary system
// output: 2

// Forth iteration - value: '7890', index = 3, object = ['12341234','5678901234','10','7890','123456a']
parseInt('7890', 3, ['12341234','5678901234','10','7890','123456a']) // radix 3 => the value doesn't exist
// output: NaN

// Fifth iteration - value '123456a', index = 4, object = ['12341234','5678901234','10','7890','123456a']
parseInt('123456a', 4, ['12341234','5678901234','10','7890','123456a']) // radix 4 => quaternary system
// output: 27

``` 

