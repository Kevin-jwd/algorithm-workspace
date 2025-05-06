def solution(N):
    result = []

    def backtrack(start, path, total):
        if total == 10:
            result.append(path[:])
            return
        if total > 10:
            return
        
        for i in range(start, N+1):
            path.append(i)
            backtrack(i+1, path, total+i)
            path.pop()

    backtrack(1, [], 0)
    return result

print(solution(5))
print(solution(2))
print(solution(7))
