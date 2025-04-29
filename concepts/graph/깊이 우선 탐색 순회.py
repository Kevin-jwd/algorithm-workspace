def solution(graph, start):
    # 1. 인접 리스트 만들기
    adj = {}
    for u,v in graph:
        if u not in adj:
            adj[u] = []
        adj[u].append(v)

    # 2. 방문 기록용 Set
    visited = set()

    # 3. 결과 저장 리스트
    result = []

    # 4. DFS 함수 정의
    def dfs(node):
       visited.add(node)       # 방문 체크
       result.append(node)     # 방문한 순서 기록

       for neighbor in adj.get(node, []):        # 연결된 노드들 순회
           if neighbor not in visited:           # 방문 안했으면
               dfs(neighbor)                     # 깊이 우선 재귀
    
    # 5. DFS 시작
    dfs(start)
   
    return result


graph = [['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e']]
start = 'a'

print(solution(graph, start))

