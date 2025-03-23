function solution(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

// input: [1, -5, 2, 4, 3], output: [-5, 1 ,2 ,3 ,4]
console.log(solution([1, -5, 2, 4, 3]));

// input: [2, 1, 1, 3, 2, 5, 4], output: [1, 1, 2, 2, 3, 4, 5]
console.log(solution([2, 1, 1, 3, 2, 5, 4]));

// input: [6, 1, 7], output: [1, 6, 7]
console.log(solution([6, 1, 7]));
