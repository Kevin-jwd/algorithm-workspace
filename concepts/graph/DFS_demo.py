# 그래프 준비
graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}

# 방문 기록용 리스트
visited = [False] * len(graph)

# DFS 함수 정의
def dfs(graph, v, visited):
    visited[v] = True  # 현재 노드 방문 처리
    print(v, end=' ')  # 현재 노드 출력

    for i in graph[v]:  # 현재 노드와 연결된 노드들에 대해
        if not visited[i]:  # 방문하지 않았다면
            dfs(graph, i, visited)  # 재귀적으로 DFS 수행


# 0번 노드부터 DFS 시작
dfs(graph, 0, visited)