const assert = require ('assert');
const hasPath = require('./hasPathRecursive');

describe('Has Path', function() {
    
	it('Case 00', function () {
        const graph = {
          f: ['g', 'i'],
          g: ['h'],
          h: [],
          i: ['g', 'k'],
          j: ['i'],
          k: []
        };
        assert.equal(hasPath(graph, 'f', 'k'), true)
    })

	it('Case 01', function () {
        const graph = {
          f: ['g', 'i'],
          g: ['h'],
          h: [],
          i: ['g', 'k'],
          j: ['i'],
          k: []
        };
        assert.equal(hasPath(graph, 'f', 'j'), false)
    })

    it('Case 02', function () {
        const graph = {
          f: ['g', 'i'],
          g: ['h'],
          h: [],
          i: ['g', 'k'],
          j: ['i'],
          k: []
        };
        assert.equal(hasPath(graph, 'i', 'h'), true)
    })

    it('Case 03', function () {
        const graph = {
          v: ['x', 'w'],
          w: [],
          x: [],
          y: ['z'],
          z: [],  
        };
        assert.equal(hasPath(graph, 'v', 'w'), true)
    })	

    it('Case 04', function () {
        const graph = {
          v: ['x', 'w'],
          w: [],
          x: [],
          y: ['z'],
          z: [],  
        };
        assert.equal(hasPath(graph, 'v', 'z'), false)
    })
    
})