# Random.js

Many of these functions are from the Python module `random`.

1. ### Random.integer()
  Takes in the parameters `min` and `max` and returns a number between them. 
  
  For example, 
  ```javascript
    Random.integer(0, 9)
  ``` 
  might return `4.76561989019456`.

  For a whole number, use `Math.floor()`.
   
2. ### Random.shuffle()
  <sub>Credit to [Stack Overflow](https://stackoverflow.com/a/12646864)</sub>
  
  Takes an array and randomizes the order of the items. 
  
  For example, 
  ```javascript 
    Random.shuffle(['a', 'b', 'c', 'd', 'e'])
  ```
  might return `['e', 'a', 'd', 'c', 'b']`. 
  
3. ### Random.choice()
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
  
4. ### Random.sample()
   Takes 2 parameters: `sequence` and `lengthOfOutput`.

   Returns a random series of characters from `sequence` with the length of `lengthOfOutput`.

   For example,
   ```javascript
   Random.sample('TurtlesAreLivingBeingsAndWeShouldBeNiceToThem', 15)
   ```
   might return
   ```javascript
   ["i", "S", "c", "o", "s", "d", "d", "d", "l", "B", "T", "S", "T", "n", "l"]
   ```


#

[This Fiddle](https://jsfiddle.net/Kaamkiya/hcmu2pq6/87/) was used for developing the Plugin. 
You can find the initial tests [here on p5.js](https://editor.p5js.org/Kaamkiya/sketches/qrsop9vjS)

##
<sub>
Sorry if this is bad, it's my first Github project.
</sub>
