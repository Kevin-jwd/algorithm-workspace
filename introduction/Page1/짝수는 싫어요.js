function solution(n) {
    answer = [];
    for (let i = 1; 2 * i - 1 <= n; i++) {
        answer.push(2 * i - 1);
    }
    return answer;
}
