function solution (arr, target) {
    const hash = {};

    [...arr].forEach((item) => {
        const key = target - item;
        hash[key] = item;
    }); 

    for(const cur of arr) {
        if(hash[cur] && hash[cur] !== cur) {
            return 'true'
        }
    }

    return 'false'
}

function solution2 (arr, target) {
  const hash = new Array(target + 1).fill(0);

  for (const item of arr) {
    if(item <= target) {
      hash[item] = 1;
    }
  }


  for (const item of arr) {
    const complement = target - item;
    if(complement >= 0 && hash[complement] === 1 && complement !== item && complement <= target) {
      return true
    }
  }

  return false
}

console.log(solution2([1,2,3,4,5], 6));
console.log(solution2([2,3,5,9], 10));
