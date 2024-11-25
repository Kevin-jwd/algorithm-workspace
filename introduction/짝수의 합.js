function solution(n) {
    var answer = 0;
    for (var i = 0; i <= n / 2; i++) {
        answer += 2 * i;
    }
    return answer;
}

function solution2(n) {
    var lastEven = Math.floor(n / 2) * 2;
    var evenCount = Mahth.floor(n / 2);
    return (count * (2 + lastEven)) / 2;
}
