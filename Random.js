const Random = {
	integer: function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.random() * (max - min + 1) + min; 
	},
	shuffle: function(array) {
    		for (let i = array.length - 1; i > -1; i--) {
      			const j = Random.integer(i + 1, 0);
      			[array[i], array[j]] = [array[j], array[i]];
    		}
    		return array;
	}
}
