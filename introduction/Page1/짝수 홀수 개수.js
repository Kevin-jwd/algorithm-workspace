function solution1(num_list) {
    var answer = [];
    var evenCount = 0;
    var oddCount = 0;
    num_list.forEach(function (value) {
        if (value % 2 === 0) evenCount += 1;
        else oddCount += 1;
    });
    answer.push(evenCount);
    answer.push(oddCount);
    return answer;
}

function solution2(num_list) {
    return num_list.reduce(
        ([evenCount, oddCount], value) =>
            value % 2 === 0
                ? [evenCount + 1, oddCount]
                : [evenCount, oddCount + 1],
        [0, 0]
    );
}
