function solution(genres, plays) {
    let answer = [];
    let songs = genres.map( (genre, index) => {
        return {
            index: index,
            genre: genres[index],
            play: plays[index],
        }
    });


    for(let i of songs){
        console.log(i); 
    }

    let genrePlayCnt = [];

    songs.forEach(song => {
        let thisGenre = genrePlayCnt.find(genrePlay => genrePlay.genre === song.genre);
        if(!thisGenre) {
             genrePlayCnt.push({
                genre: song.genre,
                play: song.play
             });
        } else {
            thisGenre.play += song.play;
        }
    });
    genrePlayCnt.sort((a, b) => b.play - a.play);
    genrePlayCnt.forEach(genrePlay => {
        let thisGenreSongs = songs.filter(song => song.genre === genrePlay.genre);
        thisGenreSongs.sort((a, b) => b.play - a.play);
        answer.push(thisGenreSongs[0].index);
        if(thisGenreSongs.length > 1){
            answer.push(thisGenreSongs[1].index);
        }
    });
    return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);