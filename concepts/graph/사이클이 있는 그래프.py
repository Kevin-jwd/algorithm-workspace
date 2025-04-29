def solution(graph, start):
    # 인접 리스트
    adj = {}
    for u, v in graph:
        if u not in adj:
            adj[u] = []
        adj[u].append(v)

    visited = set()
    results = []
    
    def dfs(node):
        visited.add(node)
        results.append(node)
        for neighbor in adj.get(node, []):
            if neighbor not in visited:
                dfs(neighbor)


    dfs(start)

    return results