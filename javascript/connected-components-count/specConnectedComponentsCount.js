const assert = require('assert');
const connectedComponentsCount = require('./connectedComponentsCount');

describe('Connected Components Count', function(){
	it('Case 00', function(){
		adjList = {
			0: [8, 1, 5],
			1: [0],
			5: [0, 8],
			8: [0, 5],
			2: [3, 4],
			3: [2, 4],
			4: [3, 2]
		};

		assert.equal(connectedComponentsCount(adjList), 2)
	})
})