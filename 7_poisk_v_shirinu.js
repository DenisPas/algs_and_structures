// Поиск в ширину в графе

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'e'))

function bfs(adj, s, t) {
	// adj - смежный список
	// s - начальная вершина
	// t - пункт назначения

	// инициализируем очередь
	let queue = []
	// добавляем s в очередь
	queue.push(s)
	// помечаем s как посещенную вершину во избежание повторного добавления в очередь
	s.visited = true
	while(queue.length > 0) {
		// удаляем первый (верхний) элемент из очереди
		let v = queue.shift()
		// abj[v] - соседи v
		for(let neighbor of adj[v]) {
			// если сосед не посещался
			if(!neighbor.visited) {
				// добавляем его в очередь
				queue.push(neighbor)
				// помечаем вершину как посещенную
				neighbor.visited = true
				// если сосед является пунктом назначения, мы победили
				if(neighbor === t) return true
			}
		} 
	}
	// если t не обнаружено, значит пункта назначения достичь невозможно
	return false
}
