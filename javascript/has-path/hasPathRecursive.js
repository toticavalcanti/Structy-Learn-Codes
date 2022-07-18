const hasPath = (graph, src, dst) => {
	 //basic case
	 if(src === dst) return true;

	 for(let neighbor of graph[src]){
	 	if(hasPath(graph, neighbor, dst)){
	 		return true;
	 	}
	 }
	 return false;
};


module.exports = hasPath;
// const graph = {
// 	f: ['g', 'i'],
// 	g: ['h'],
// 	h: [],
// 	i: ['g', 'k'],
// 	j: ['i'],
// 	k: []
// }

// console.log(hasPath(graph, 'f', 'k')); // true