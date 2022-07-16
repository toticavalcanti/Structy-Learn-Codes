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

const breadthFirstPrint = (graph, source) => {
	const queue = [ source ];

	while(queue.length > 0){
		const current = queue.shift()
		console.log(current)
		for(let neighbor of graph[current]){
			queue.push(neighbor);
		}
	}
}

const graph = {
	a: ['c', 'b'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: []
};

breadthFirstPrint(graph, 'a'); //abdfce