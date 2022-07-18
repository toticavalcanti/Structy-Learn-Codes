const assert = require('assert');
const { isTypedArray } = require('util/types');
const largestComponent = require('./largestComponent');

describe('Largest Component', function(){

    it('Case 00', function(){

        adjList = {
            0: ['8', '1', '5'],
            1: ['0'],
            5: ['0', '8'],
            8: ['0', '5'],
            2: ['3', '4'],
            3: ['2', '4'],
            4: ['3', '2']
          }; // -> 4

          assert.equal(largestComponent(adjList), 4);
    })

    it('Case 01', function() {
        adjList = {
            1: ['2'],
            2: ['1','8'],
            6: ['7'],
            9: ['8'],
            7: ['6', '8'],
            8: ['9', '7', '2']
          }; // -> 6

          assert.equal(largestComponent(adjList), 6);
    })

    it('Case 02', function() {
        adjList = {
            3: [],
            4: ['6'],
            6: ['4', '5', '7', '8'],
            8: ['6'],
            7: ['6'],
            5: ['6'],
            1: ['2'],
            2: ['1']
          }; // -> 5

          assert.equal(largestComponent(adjList), 5);
    })

    it('Case 03', function() {
        adjList = {}; // -> 0

          assert.equal(largestComponent(adjList), 0);
    })

    it('Case 04', function() {
        adjList = {
            0: ['4','7'],
            1: [],
            2: [],
            3: ['6'],
            4: ['0'],
            6: ['3'],
            7: ['0'],
            8: []
          }; // -> 3

          assert.equal(largestComponent(adjList), 3);
    })

})