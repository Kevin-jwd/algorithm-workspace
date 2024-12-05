function solution(my_string) {
    var answer = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i])) {
            answer += parseInt(my_string[i]);
        }
    }
    return answer;
}

function solution2(my_string) {
    return my_string
        .split("")
        .filter((char) => !isNaN(char))
        .reduce((sum, num) => sum + parseInt(num), 0);
}

function solution3(my_string) {
    return my_string
        .match(/\d/g)
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}
