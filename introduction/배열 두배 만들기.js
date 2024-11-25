function solution(numbers) {
    var answer = [];
    for(let i = 0;i<numbers.length;i++) {
        answer.push(2* numbers[i]);
    }
    return answer;
}

function solution2(numbers) {
    return numbers.map(num => num * 2);
}