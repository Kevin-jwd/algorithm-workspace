function solution1(n) {
    var answer = 0;
    var num = String(n);

    for (let i = 0; i < num.length; i++) {
        answer += parseInt(num[i]);
    }
    return answer;
}

function solution2(n) {
    return String(n)
        .split("")
        .reduce((sum, num) => sum + parseInt(num), 0);
}
