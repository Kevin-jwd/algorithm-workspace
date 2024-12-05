function solution(my_string) {
    var answer = "";
    for (let i = 0; i < my_string.length; i++) {
        if (isLowerCase(my_string[i])) {
            answer += my_string[i].toUpperCase();
        } else {
            answer += my_string[i].toLowerCase();
        }
    }

    function isUpperCase(string) {
        return string === string.toUpperCase();
    }

    function isLowerCase(string) {
        return string === string.toLowerCase();
    }

    return answer;
}

function solution2(my_string) {
    var answer = "";
    for (let i = 0; i < my_string.length; i++) {
        answer +=
            my_string[i] === my_string[i].toUpperCase()
                ? my_string[i].toLowerCase()
                : my_string[i].toUpperCase();
    }
    return answer;
}
