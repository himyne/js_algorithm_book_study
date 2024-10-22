class Stack {
    stack = []
    maxSize = 10;

    isFull(stack) {
        return stack.length === this.maxSize;
    }

    isEmpty(stack) {
        return stack.length === 0
    }

    push(value) {
        if(this.isFull(this.stack)){
            console.log('스택이 가득 찼습니다')
        } else {
            this.stack.push(value);
            console.log('데이터가 추가되었습니다');
        }
    }

    pop() {
        if(this.isEmpty(stack)){
            console.log('스택이 비어 있습니다');
            return null;
        } else {
            return this.stack.pop()
        }
    }
}