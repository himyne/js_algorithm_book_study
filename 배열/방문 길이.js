const getOppositeDir = (dir) => {
    if(dir === 'L') return 'R'
    if(dir === 'R') return 'L'
    if(dir === 'D') return 'U'
    if(dir === 'U') return 'D'
}

function solution(dirs) {
    const initDir = {
        U: false,
        D: false,
        R: false,
        L: false,
    };
    
    const visitedObj = {};
    
    const move = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1,0]
    }
    
    let curLocation = [0,0]
    let answer = 0;
    
    for(let i=0; i<dirs.length; i++){
        const dir = dirs[i];
        
        const curCoord = curLocation.join('');
        
        const isVisited = visitedObj[curCoord] && visitedObj[curCoord][dir]
        
        const tempNext = [curLocation[0] + move[dir][0], curLocation[1] + move[dir][1]];
        
        if(tempNext[0] < -5 || tempNext[0] > 5 || tempNext[1] < -5 || tempNext[1] > 5) continue;
        
        curLocation = tempNext;
        
        if(isVisited) continue;
        
        const nextCoord = curLocation.join('');
        
        if(!visitedObj[curCoord]) {
            visitedObj[curCoord] = {...initDir}
        }
        
        if(!visitedObj[nextCoord]) {
            visitedObj[nextCoord] = {...initDir}
        }
        
        visitedObj[curCoord][dir] = true;
        visitedObj[nextCoord][getOppositeDir(dir)] = true;
        
        answer++;
    }
    
    return answer;
}