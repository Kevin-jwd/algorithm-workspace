// Stack ADT

const stack = [];      // 스택 초기화
const maxSize = 10;    // 스택 최대 크기

// 스택이 가득 찼는지
function isFull(stack) {
    return stack.length === maxSize;
}

// 스택이 비어 있는지
function isEmpty(stack) {
    return stack.length === 0;
}

// 스택 데이터를 추가하는 함수
function push(stack, item) {
    if (isFull(stack)) {
        console.log("스택이 가득 찼습니다.");
    } else {
        stack.push(item);
        console.log(`${item}이 스택에 추가되었습니다.`);
    }
}

// 스택 데이터를 꺼내는 함수
function pop(stack) {
    if(isEmpty(stack)){
        console.log('스택이 비어 있습니다.');
        return null;
    }
    return stack.pop()
}
