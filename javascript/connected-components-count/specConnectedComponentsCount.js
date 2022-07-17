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

	it('Case 01', function(){
		adjList = {
			1: [2],
			2: [1,8],
			6: [7],
			9: [8],
			7: [6, 8],
			8: [9, 7, 2]
		};

		assert.equal(connectedComponentsCount(adjList), 1)
	})

	it('Case 02', function(){
		adjList = {
			3: [],
			4: [6],
			6: [4, 5, 7, 8],
			8: [6],
			7: [6],
			5: [6],
			1: [2],
			2: [1]
		};

		assert.equal(connectedComponentsCount(adjList), 3)
	})

	it('Case 03', function(){
		adjList = {};

		assert.equal(connectedComponentsCount(adjList), 0)
	})

	it('Case 04', function(){
		adjList = {
			0: [4,7],
			1: [],
			2: [],
			3: [6],
			4: [0],
			6: [3],
			7: [0],
			8: []
		};

		assert.equal(connectedComponentsCount(adjList), 5)
	})
})