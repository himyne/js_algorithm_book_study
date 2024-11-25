function solution(genres, plays) {
    // 1. 속한 노래가 많이 재생된 장르 수록
    // 2. 장르 내에서 많이 재생된 노래
    // 3. 장르 내에서 재생 횟수가 같으면 인덱스가 낮은 노래
    
    const genreHash = {};
    
    genres.forEach((genre, index) => {
        if(!genreHash[genre]) genreHash[genre] = 0;
        
        genreHash[genre] += plays[index];
    });
    
    const hashMap = genres.map((genre, index) => ({genre, play: plays[index], index}))
    
    hashMap.sort((a, b) => {
        if(a.genre === b.genre) {
            if(a.play === b.play){
                return 0
            }
            return b.play - a.play;
        }
        return genreHash[b.genre] - genreHash[a.genre];
    })
    
    const album = new Map();

    hashMap.forEach(({genre, play, index}) => {
        if(!album.has(genre)) {
            album.set(genre, []);
        }
        if(album.has(genre) && album.get(genre).length < 2){
            const albums = [...album.get(genre), index];
            album.set(genre, albums);
        }
    })
    
    const result = [];
    
    for(const indexList of album.values()) {
        result.push(indexList);    
    }
    
    return result.flat();
}