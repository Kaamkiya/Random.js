# js-plugin-Random

Many of these functions are from the Python module `random`.
1. ### Random.integer
  Takes in the parameters `min` and `max` and returns a number between them. 
  
  For example, `Random.integer(0, 9)` might return `4.76561989019456`.

  For a whole number, use `Math.floor()`.
   
2. ### Random.shuffle
  Credit to [Stack Overflow](https://stackoverflow.com/a/12646864)
  
  Takes an array and randomizes the order of the items. 
  
  For example, `Random.shuffle(['a', 'b', 'c', 'd', 'e'])` 
  might return
  `['e', 'a', 'd', 'c', 'b']`
