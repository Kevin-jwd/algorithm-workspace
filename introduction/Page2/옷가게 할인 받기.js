function solution(price) {
    var salePercent =
        price >= 500000 ? 20 : price >= 300000 ? 10 : price >= 100000 ? 5 : 0;

    var answer = Math.floor(price * ((100 - salePercent) / 100));
    return answer;
}
