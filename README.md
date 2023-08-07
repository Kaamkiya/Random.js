# Random.js

## To include in your file
To include these functions in you file, simply add this code to your `<head>` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/Kaamkiya/Random.js@master/Random.js"></script>
```
and that's it!
#

Many of these functions are inspired by the the Python module `random`.

1. ### Random.float()
  Takes in the parameters `min` and `max` and returns a floating-point number between them. 
  
  For example, 
```javascript
Random.float(0, 9)
``` 
  might return `4.76561989019456`.

2. ### Random.int()
  Takes in the parameters `min` and `max` and returns a whole number between them. 
  
  For example, 
```javascript
Random.int(57, 67)
``` 
  might return `63`.
   
3. ### Random.shuffle()
  <sub>Credit to [Stack Overflow](https://stackoverflow.com/a/12646864)</sub>
  
  Takes an array and randomizes the order of the items. 
  
  For example, 
```javascript 
Random.shuffle(['a', 'b', 'c', 'd', 'e'])
```
  might return `['e', 'a', 'd', 'c', 'b']`. 
  
4. ### Random.choice()
  Takes 1 parameter, which can be an array or a string. 

  With a string:
```javascript
Random.choice('TheQuickBrownFoxJumpsOverTheLazyDog')
```
  might output `'k'`. 

  With an array: 
```javascript
Random.choice(['v', 'w', 'x', 'y', 'z'])
``` 
  might output `'x'`.
  
5. ### Random.sample()
   Takes 2 parameters: `sequence` and `lengthOfOutput`.

   Returns a random series of characters from `sequence` with the length of `lengthOfOutput`.

   For example,
```javascript
Random.sample('TurtlesAreLivingBeingsAndWeShouldBeNiceToThem', 15)
```
   might return `["i", "S", "c", "o", "s", "d", "d", "d", "l", "B", "T", "S", "T", "n", "l"]`

6. ### Random.stringFromChars()
   Takes 2 parameters: `chars` (defaults to 'abc.xyz/123'), and `len` (defaults to 5).

   Returns a random string based off of the characters you input.

   For example,
```javascript
Random.stringFromChars('I_like_pandas', 7)
```
   might return

   `"nseIeai"`

7. ### Random.multiFloat()
   Takes 3 parameters: `min`, `max`, and `amount`.

   Returns `amount` floating-point numbers. 

   `min` is the lowest the number can be, and `max` is the highest.

   `amount` is the amount of numbers to return.

   For example,
```javascript
Random.multiFloat(0, 1000, 3)
```
   might return `[344.93213081522134, 588.1717011769693, 212.36081135233925]`

8. ### Random.hex()
   Takes 0 parameters.

   Returns a hexadecimal color.

   For example,
```javascript
Random.hex()
```
   might return

   `#A0A0FE`

#

[This Fiddle](https://jsfiddle.net/Kaamkiya/hcmu2pq6/87/) was used for developing the Plugin. 
You can find the initial tests [here, on p5.js](https://editor.p5js.org/Kaamkiya/sketches/qrsop9vjS)

##
<sub>
Sorry if this is bad, it's my first Github project.
</sub>
