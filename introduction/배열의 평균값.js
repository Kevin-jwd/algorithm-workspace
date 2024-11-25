function solution1(numbers) {
    var answer = 0;
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    answer = sum / numbers.length;
    return answer;
}

function solution2(numbers) {
    var answer = 0;
    var sum = 0;
    for (n of numbers) {
        sum += n;
    }
    answer = sum / numbers.length;
    return answer;
}

function solution3(numbers) {
    var answer = 0;
    var sum = 0;
    numbers.forEach(function (value) {
        sum += value;
    });
    answer = sum / numbers.length;
    return answer;
}

function solution4(numbers) {
    const avg = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
    return avg(numbers);
}
