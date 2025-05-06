def solution(k, dungeons):
    max_count = 0
    visited = [False] * len(dungeons)

    def dfs(current_k, count):
        nonlocal max_count
        max_count = max(max_count, count)

        for i in range(len(dungeons)):
            min_req, cost = dungeons[i]
            if not visited[i] and current_k >= min_req:
                visited[i] = True
                dfs(current_k - cost, count + 1)
                visited[i] = False      # 백트래킹

    dfs(k, 0)
    return max_count