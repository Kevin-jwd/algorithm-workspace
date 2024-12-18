function solution1(angle) {
    var answer = 0;
    if (0 < angle && angle < 90) {
        answer = 1;
    } else if (angle === 90) {
        answer = 2;
    } else if (90 < angle && angle < 180) {
        answer = 3;
    } else {
        answer = 4;
    }
    return answer;
}

function solution2(angle) {
    return angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
}

function solution3(angle) {
    return [1,2,3,4][
        angle < 90 ? 1 :
        angle === 90 ? 2 :
        angle < 180 ? 3 : 4
    ]
}