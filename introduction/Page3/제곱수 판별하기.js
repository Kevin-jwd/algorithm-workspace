function solution(n) {
    var answer = 2;
    if (Number.isInteger(Math.sqrt(n))) {
        answer = 1;
    }
    return answer;
}
