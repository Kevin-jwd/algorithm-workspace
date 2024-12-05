function solution1(money) {
    var answer = [];
    var price = 5500;
    var count = 0;
    var rest = 0;

    count = Math.floor(money / price);
    rest = money % price;
    answer.push(count);
    answer.push(rest);

    return answer;
}

function solution2(money) {
    var price = 0;
    return [Math.floor(money / price), money % price];
}
