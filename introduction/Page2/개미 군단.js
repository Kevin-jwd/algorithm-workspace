function solution(hp) {
    var answer = 0;
    var generalAnt = Math.floor(hp / 5);
    var soldierAnt = Math.floor((hp - 5 * generalAnt) / 3);
    var workerAnt = hp - 5 * generalAnt - 3 * soldierAnt;
    answer = generalAnt + soldierAnt + workerAnt;
    return answer;
}
