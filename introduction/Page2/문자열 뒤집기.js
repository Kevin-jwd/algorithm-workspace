function solution1(my_string) {
    var answer = "";
    var length = my_string.length;
    for (var i = 0; i < length; i++) {
        answer += my_string[length - i - 1];
    }
    return answer;
}

function solution2(my_string) {
    return my_string.split("").reverse().join("");
}
