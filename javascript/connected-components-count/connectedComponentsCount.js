const connectedComponentsCount = (graph) =>{
	const visited = new Set();
	let count = 0;
	for(let node in graph){
		if(explore(graph, node, visited)){
			count += 1;
		}
	}

	return count;
};

const explore = (graph, current, visited) => {
	if(visited.has(String(current))) return false;

	visited.add(String(current));

	for(neighbor of graph[current]){
		explore(graph, neighbor, visited);
	}

	return true;
};

module.exports = connectedComponentsCount;