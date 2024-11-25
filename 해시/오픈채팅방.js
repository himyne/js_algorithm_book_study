function solution(record) {
    const hash = {};
    const result = []
    
    record.forEach((cmd) => {
        const [command, uid, name] = cmd.split(' ');
        if(command === 'Enter' || command === 'Change'){
            hash[uid] = name;    
        }
    });
    
    record.forEach((cmd) => {
        const [command, uid, name] = cmd.split(' ');
        if(command === 'Enter') {
            result.push(hash[uid] + '님이 들어왔습니다.');
        }
        if(command === 'Leave') {
            result.push(hash[uid] + '님이 나갔습니다.');
        }
    })
    
    return result;
}