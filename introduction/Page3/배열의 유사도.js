function solution1(s1, s2) {
    var answer = 0;
    s1.forEach(function (value1) {
        s2.forEach(function (value2) {
            if (value1 === value2) {
                answer++;
            }
        });
    });
    return answer;
}

function solution2(s1, s2) {
    const set1 = new Set(s1);
    const set2 = new Set(s2);
    let answer = 0;

    set1.forEach(value => {
        if (set2.has(value)) {
            answer++;
        }
    });

    return answer;
}
