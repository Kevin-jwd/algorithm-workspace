function solution(num_list) {
    var answer = [];
    var length = num_list.length;
    for (let i = length - 1; i >= 0; i--) {
        answer.push(num_list[i]);
    }
    return answer;
}
