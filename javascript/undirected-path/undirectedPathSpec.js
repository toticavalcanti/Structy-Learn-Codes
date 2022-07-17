const assert = require ('assert');
const undirectedPath = require('./undirectedPath');

describe('Has Path in undirected graph', function() {

	it('Case 00', function(){
		const edges = [
			['i', 'j'],
			['k', 'i'],
			['m', 'k'],
			['k', 'l'],
			['o', 'n']
		];
		// edges, nodeA and nodeB
		assert.equal(undirectedPath(edges, 'j', 'm'), true)
	})

	it('Case 01', function(){
		const edges = [
			['i', 'j'],
			['k', 'i'],
			['m', 'k'],
			['k', 'l'],
			['o', 'n']
		];

		assert.equal(undirectedPath(edges, 'm', 'j'), true)
	})

	it('Case 02', function(){
		const edges = [
			['i', 'j'],
			['k', 'i'],
			['m', 'k'],
			['k', 'l'],
			['o', 'n']
		];

		assert.equal(undirectedPath(edges, 'l', 'j'), true)
	})

	it('Case 03', function(){
		const edges = [
			['i', 'j'],
			['k', 'i'],
			['m', 'k'],
			['k', 'l'],
			['o', 'n']
		];

		assert.equal(undirectedPath(edges, 'k', 'o'), false)
	})

	it('Case 04', function(){
		const edges = [
			['i', 'j'],
			['k', 'i'],
			['m', 'k'],
			['k', 'l'],
			['o', 'n']
		];

		assert.equal(undirectedPath(edges, 'i', 'o'), false)
	})

	it('Case 05', function(){
		const edges = [
			['b', 'a'],
			['c', 'a'],
			['b', 'c'],
			['q', 'r'],
			['q', 's'],
			['q', 'u'],
			['q', 't'],
		];

		assert.equal(undirectedPath(edges, 'a', 'b'), true)
	})

	it('Case 06', function(){
		const edges = [
			['b', 'a'],
			['c', 'a'],
			['b', 'c'],
			['q', 'r'],
			['q', 's'],
			['q', 'u'],
			['q', 't'],
		];

		assert.equal(undirectedPath(edges, 'a', 'c'), true)
	})

	it('Case 07', function(){
		const edges = [
			['b', 'a'],
			['c', 'a'],
			['b', 'c'],
			['q', 'r'],
			['q', 's'],
			['q', 'u'],
			['q', 't'],
		];

		assert.equal(undirectedPath(edges, 'r', 't'), true)
	})

	it('Case 08', function(){
		const edges = [
			['b', 'a'],
			['c', 'a'],
			['b', 'c'],
			['q', 'r'],
			['q', 's'],
			['q', 'u'],
			['q', 't'],
		];

		assert.equal(undirectedPath(edges, 'r', 'b'), false)
	})

	it('Case 09', function(){
		const edges = [
			['s', 'r'],
			['t', 'q'],
			['q', 'r'],
		];

		assert.equal(undirectedPath(edges, 'r', 't'), true)
	})

})