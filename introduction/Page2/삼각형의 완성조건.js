function solution(sides) {
    var answer = 1;
    var max = 0;
    var maxIndex = 0;
    for (var i = 0; i < sides.length; i++) {
        if (max < sides[i]) {
            max = sides[i];
            maxIndex = i;
        }
    }
    sides.splice(maxIndex, 1);
    if (max >= sides.reduce((sum, num) => sum + num, 0)) {
        answer = 2;
    }
    return answer;
}

function solution2(sides) {
    sides.sort((a, b) => a - b);
    return sides[2] >= sides[0] + sides[1] ? 2 : 1;
}
