function solution(n) {
    var answer = [];
    for (var i = 0; i < n + 1; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }
    return answer;
}
