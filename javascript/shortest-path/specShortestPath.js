const assert = require('assert');
const shortestPath = require('./shortestPath');

describe('Shortest Path', function(){

    it('Case 00', function(){

        const edges = [
            ['w', 'x'],
            ['x', 'y'],
            ['z', 'y'],
            ['z', 'v'],
            ['w', 'v']
          ];

          assert.equal(shortestPath(edges, 'w', 'z'), 2);
    })

    it('Case 01', function(){

        const edges = [
            ['w', 'x'],
            ['x', 'y'],
            ['z', 'y'],
            ['z', 'v'],
            ['w', 'v']
          ];

          assert.equal(shortestPath(edges, 'y', 'x'), 1);
    })

    it('Case 02', function(){

        const edges = [
            ['a', 'c'],
            ['a', 'b'],
            ['c', 'b'],
            ['c', 'd'],
            ['b', 'd'],
            ['e', 'd'],
            ['g', 'f']
          ];

          assert.equal(shortestPath(edges, 'a', 'e'), 3);
    })

    it('Case 03', function(){

        const edges = [
            ['a', 'c'],
            ['a', 'b'],
            ['c', 'b'],
            ['c', 'd'],
            ['b', 'd'],
            ['e', 'd'],
            ['g', 'f']
          ];

          assert.equal(shortestPath(edges, 'e', 'c'), 2);
    })

    it('Case 04', function(){

        const edges = [
            ['a', 'c'],
            ['a', 'b'],
            ['c', 'b'],
            ['c', 'd'],
            ['b', 'd'],
            ['e', 'd'],
            ['g', 'f']
          ];

          assert.equal(shortestPath(edges, 'b', 'g'), -1);
    })

    it('Case 05', function(){

        const edges = [
            ['c', 'n'],
            ['c', 'e'],
            ['c', 's'],
            ['c', 'w'],
            ['w', 'e'],
          ];

          assert.equal(shortestPath(edges, 'w', 'e'), 1);
    })

    it('Case 06', function(){

        const edges = [
            ['c', 'n'],
            ['c', 'e'],
            ['c', 's'],
            ['c', 'w'],
            ['w', 'e'],
          ];

          assert.equal(shortestPath(edges, 'n', 'e'), 2);
    })

    it('Case 07', function(){

        const edges = [
            ['m', 'n'],
            ['n', 'o'],
            ['o', 'p'],
            ['p', 'q'],
            ['t', 'o'],
            ['r', 'q'],
            ['r', 's']
          ];

          assert.equal(shortestPath(edges, 'm', 's'), 6);
    })

})