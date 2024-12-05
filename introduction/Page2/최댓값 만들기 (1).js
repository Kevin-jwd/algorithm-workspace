function solution1(numbers) {
    var answer = 0;
    var max = 0;
    var maxIndex = 0;
    var secondMax = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
            maxIndex = i;
        }
    }
    numbers.splice(maxIndex, 1);

    for (let j = 0; j < numbers.length; j++) {
        if (secondMax < numbers[j]) {
            secondMax = numbers[j];
        }
    }
    answer = max * secondMax;
    return answer;
}

function solution2(numbers) {
    var firstMax = 0;
    var secondMax = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > firstMax) {
            secondMax = firstMax;
            firstMax = numbers[i];
        } else if (numbers[i] > secondMax) {
            secondMax = numbers[i];
        }
    }
    return firstMax * secondMax;
}
