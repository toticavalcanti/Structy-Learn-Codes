const assert = require('assert');
const islandCount = require('./islandCount');

describe('Island Count', function(){

    it('Case 00', function(){
        const grid = [
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'L', 'W'],
            ['W', 'W', 'L', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['L', 'L', 'W', 'W', 'W'],
        ];
        assert.equal(islandCount(grid), 3)
    })

    it('Case 01', function(){
        const grid = [
            ['L', 'W', 'W', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['W', 'L', 'W', 'L', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'L', 'L', 'L'],
        ];
        assert.equal(islandCount(grid), 4)
    })

    it('Case 02', function(){
        const grid = [
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
        ];
        assert.equal(islandCount(grid), 1)
    })
    
    it('Case 03', function(){
        const grid = [
            ['W', 'W'],
            ['W', 'W'],
            ['W', 'W'],
        ];
        assert.equal(islandCount(grid), 0)
    })
})