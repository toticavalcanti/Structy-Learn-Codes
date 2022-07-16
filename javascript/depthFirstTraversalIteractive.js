/*
has path

Write a function, hasPath, 
that takes in an object representing the 
adjacency list of a directed acyclic graph 
and two nodes (src, dst). The function should 
return a boolean indicating whether or not 
there exists a directed path between the 
source and destination nodes.

Hey. This is our first graph problem, 
so you should be liberal with watching 
the Approach and Walkthrough. Be productive, 
not stubborn. -AZ

*/

const depthFirstPrint = (graph, source) => {
	const stack = [ source ];

	while (stack.length > 0) {
		const current = stack.pop();
		console.log(current);

		for(let neighbor of graph[current]){
			stack.push(neighbor);
		}
	}

};

const graph = {
	a: ['c', 'b'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: []
};

depthFirstPrint(graph, 'a'); //abdfce