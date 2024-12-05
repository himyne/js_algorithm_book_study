        // 1
    // 2        3
//   4   5    6   7

const 전위순회 = (nodes, idx) => {
    if(idx < nodes.length) {
        let course = nodes[idx] + ' ';
        course += 전위순회(nodes, idx * 2 + 1);
        course += 전위순회(nodes, idx * 2 + 2);
        return course;
    }

    return "";
}

const 중위순회 = (nodes, idx) => {
    if(idx < nodes.length) {
        let course = 중위순회(nodes, idx * 2 + 1);
        course += nodes[idx] + ' ';
        course += 중위순회(nodes, idx * 2 + 2);
        return course;
    }

    return ''
}

const 후위순회 = (nodes, idx) => {
    if(idx < nodes.length) {
        let course = 후위순회(nodes, idx * 2 + 1);
        course += 후위순회(nodes, idx * 2 + 2);
        course += nodes[idx] + ' ';
        return course;
    }

    return ''
}

function solution(nodes) {
    return [
        전위순회(nodes,0).slice(0, -1),
        중위순회(nodes,0).slice(0, -1),
        후위순회(nodes,0).slice(0, -1)
    ]
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]))