function solution1(numbers, num1, num2) {
    var answer = [];
    for (var i = num1; i < num2; i++) {
        answer.push(numbers[i]);
    }
    return answer;
}

function solution2(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}
