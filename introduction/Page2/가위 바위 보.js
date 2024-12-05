function solution1(rsp) {
    var answer = "";
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] == 2) {
            answer += "0";
        } else if (rsp[i] == 0) {
            answer += "5";
        } else {
            answer += "2";
        }
    }
    return answer;
}

function solution2(rsp) {
    const winningMap = { 2: "0", 0: "5", 5: "2" };
    return rsp
        .split("")
        .map((char) => winningMap[char])
        .join("");
}
