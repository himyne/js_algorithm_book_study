function solution(id_list, report, k) {  
    // reportHash 유저별 신고한 사람 집합
    // {
    //     muzi: Set(2) { 'frodo', 'neo' },
    //     apeach: Set(1) { 'frodo' },
    //     frodo: Set(1) { 'neo' }
    //   }
    const reportHash = {};
    
    report.forEach((value) => {
        const [reporter, reported] = value.split(' ');
        
        reportValue = reportHash[reporter] ?? new Set(); // 같은 유저 중복 신고를 처리하기 위해 set을 사용
        
        reportValue.add(reported);
        
        reportHash[reporter] = reportValue;
    })
    
    // reportedHash 유저별 신고당한 횟수
    // { frodo: 2, neo: 2, muzi: 1 }
    const reportedHash = {};
    
    //
    Object.values(reportHash).forEach((reportedSet) => {
        reportedSet.forEach((reported) => {
            reportedHash[reported] = (reportedHash[reported] || 0) + 1;
        })
    })
    
    Object.values(reportHash).forEach((reportedSet) => {
        reportedSet.forEach((reported) => {
            if(reportedHash[reported] < k) reportedSet.delete(reported)
        })
    })
    
    return Object.values(id_list).map((id) => reportHash[id]?.size ?? 0)
}