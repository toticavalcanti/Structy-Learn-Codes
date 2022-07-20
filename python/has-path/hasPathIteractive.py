def hasPath(graph, src, dst):
	queue = [ src ]

	while(len(queue) > 0):
		current = queue.pop(0)

		if(current == dst):
			return True

		for neighbor in graph[current]:
			queue.append(neighbor)

	return False


#  graph = {
#  f: ['g', 'i'],
#  g: ['h'],
#  h: [],
#  i: ['g', 'k'],
#  j: ['i'],
#  k: []
# }

# print(hasPath(graph, 'f', 'k')); # true