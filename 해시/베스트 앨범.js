function solution(genres, plays) {
    // 1. 속한 노래가 많이 재생된 장르 수록
    // 2. 장르 내에서 많이 재생된 노래
    // 3. 장르 내에서 재생 횟수가 같으면 인덱스가 낮은 노래
    
    const genreHash = {};
    
    // 가장 많이 재생된 장르를 찾기 위해 해시에 저장
    genres.forEach((genre, index) => {
        if(!genreHash[genre]) genreHash[genre] = 0;
        
        genreHash[genre] += plays[index];
    });
    
    // 장르 배열의 원소를 장르, 플레이 수, 인덱스 값을 가지는 객체로 변환
    const genreList = genres.map((genre, index) => ({genre, play: plays[index], index}))
    
    // 재생된 장르 -> 장르 같으면 재생된 노래 -> 재생횟수 같으면 인덱스 순으로 정렬
    genreList.sort((a, b) => {
        if(a.genre === b.genre) {
            if(a.play === b.play){
                return 0
            }
            return b.play - a.play;
        }
        return genreHash[b.genre] - genreHash[a.genre];
    })
    
    const album = new Map();

    // 인덱스를 반환해야 하므로 정렬된 배열에서 2개까지 인덱스를 추출
    genreList.forEach(({genre, index}) => {
        if(!album.has(genre)) album.set(genre, []);

        if(album.has(genre) && album.get(genre).length < 2) {
            const albums = [...album.get(genre), index];
            album.set(genre, albums);
        }
    })

    return Array.from(album.values()).flat()
}