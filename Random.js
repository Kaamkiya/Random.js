const Random = {
  int: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min + 1) + min;
  },
  shuffle: function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
  choice: function(thing) {
    if (typeof thing == 'string' || Array.isArray(thing)) {
      return thing[Math.floor(Random.int(0, thing.length - 1))];
    } else {
      return `cannot pick from ${typeof thing}`;
    }
  },
	sample: function(sequence, lengthOfReturn) {
  	let final = [];
	sequence = sequence.toString();
	for (let i=0; i<lengthOfReturn; i++) {
		final.push(sequence[Math.floor(Random.int(0, sequence.length-1))]);
	}
	return final;
  }
};

console.log('Thank you for using Random.js! You can view more of my plugins at https://github.com/Kaamkiya/');
