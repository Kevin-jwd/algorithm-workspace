function solution1(n) {
    var answer = 0;
    for (var i = 0; i <= n; i++) {
        if (n % i === 0) {
            answer += 1;
        }
    }
    return answer;
}

function solution2(n) {
    var answer = 0;
    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            answer += 1;
            if (i !== n / i) {
                answer += 1;
            }
        }
    }
    return answer;
}
