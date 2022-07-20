def hasPath(graph, src, dst):
	#basic case
	if src == dst:
		return True

	for neighbor in graph[src]:	 	
		if hasPath(graph, neighbor, dst):
			return True
	 	
	 
	return False




# const graph = {
# 	f: ['g', 'i'],
# 	g: ['h'],
# 	h: [],
# 	i: ['g', 'k'],
# 	j: ['i'],
# 	k: []
# }

# print(hasPath(graph, 'f', 'k')); // True