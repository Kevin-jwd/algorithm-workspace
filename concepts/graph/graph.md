# 그래프

<br>

## 그래프란 무엇인가

- `그래프`는 `정점(Vertex)`과 `간선(Edge)`으로 이루어진 자료구조
    - `정점` : 점
    - `간선` : 점과 점을 연결하는 선

- *ex.* SNS: 사람(정점)과 친구 관계(간선), 지도: 도시(정점)와 도로(간선)

<br>

## 그래프의 종류

| 종류 | 설명 | 예시 |
| --- | --- | --- |
| **방향 그래프** | 간선에 방향이 있음 | 인스타그램 팔로우 관계 |
| **무방향 그래프** | 간선에 방향이 없음 | 페이스북 친구 관계 |

<br>

## 가중치

- 가끔 간선마다 **비용**이나 **거리**처럼 가중치를 부여하기도 함.

- ex. 서울 -> 부산 (거리 **400km**)

<br>

## 그래프 표현 방법

| 방법 | 특징 | 예시 |
| --- | --- | --- |
| **인접 리스트** | 연결된 정점만 리스트로 저장 | 메모리 효율이 좋음 |
| **인접 행렬** | 정점끼리 연결 여부를 2차원 배열로 저장 | 구현이 간단 |

<br>

### 인접 리스트

- 정점마다 **연결된 정점을 리스트로 저장**하는 방식

- *ex.* 정점 0이 1, 2와 연결 / 정점 1이 2와 연결 / 정점 2가 0, 3과 연결


```python
graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}
```

✅ 장점 : 연결 여부를 $O(1)$ 시간에 바로 알 수 있음

✅ 단점 : 연결이 적은 그래프에서 메모리 낭비가 심함

<br>

### 인접 행렬

- **모든 정점 간 연결 여부를 2차원 배열로 저장**하는 방식
- *ex.* 위와 같은 예시

```python
graph = [
    [0, 1, 1, 0],  # 0번 정점: 1, 2와 연결
    [0, 0, 1, 0],  # 1번 정점: 2와 연결
    [1, 0, 0, 1],  # 2번 정점: 0, 3과 연결
    [0, 0, 0, 1],  # 3번 정점: 자기 자신과 연결
]
```

✅ 장점 : 연결된 것만 저장하기 때문에 메모리가 절약됨

✅ 단점 : 연결 여부를 찾으려면 리스트 탐색이 필요함 

<br>

## DFS (Depth-First Search)

- **깊이 우선 탐색**
- 가능한 한 깊게 들어가면서 탐색하는 방법

<br>

### 구현 방법

1. 재귀(Recursive)를 사용하여 구현
- 방문한 노드는 체크
- 현재 노드에서 연결된 노드를 차례로 재귀 호출

```python
def dfs(graph, v, visited):
    visited[v] = True  # 현재 노드 방문 처리
    print(v, end=' ')  # 방문한 노드 출력

    for next_v in graph[v]:
        if not visited[next_v]:
            dfs(graph, next_v, visited)
```

<br>

2. 스택(Stack)을 사용하여 반복문으로 구현
```python
def dfs_stack(graph, start):
    visited = [False] * len(graph)
    stack = [start]

    while stack:
        v = stack.pop()
        if not visited[v]:
            visited[v] = True
            print(v, end=' ')
            stack.extend(reversed(graph[v]))  # 연결된 노드를 뒤집어서 스택에 추가
```

<br>

## BFS (Breadth-First Search)

- **너비 우선 탐색**
- 가까운 노드부터 차례대로 탐색하는 방법
- 최단 경로 탐색 등에서 자주 사용

### 구현 방법

1. **큐(Queue)** 자료구조 사용
    - `collections.deque`를 사용하면 `pop(0)`보다 훨씬 빠름
2. 노드를 방문한 순서대로 큐에 넣고, 하나씩 꺼내면서 인접한 노드들을 다시 큐에 추가

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for next_v in graph.get(v, []):
            if next_v not in visited:
                visited.add(next_v)
                queue.append(next_v)
```