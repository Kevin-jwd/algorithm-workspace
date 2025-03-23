function solution(my_string, letter) {
    var answer = "";
    const regex = new RegExp(letter, "g");
    answer = my_string.replace(regex, "");
    return answer;
}
