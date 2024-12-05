function solution1(my_string, n) {
    var answer = "";
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            answer += my_string[i];
        }
    }
    return answer;
}

function solution2(my_string, n) {
    return my_string
        .split("")
        .map((char) => char.repeat(n))
        .join("");
}
