document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const playSongButtons = document.querySelectorAll('.play-song');

    let currentSongIndex = 0;
    const songs = [
        { src: 'PLAYBOI CARTI - TELESCOPE (feat. Travis Scott) (Slowed to perfection).mp3', title: 'PLAYBOI CARTI - TELESCOPE (feat. Travis Scott) (Slowed to perfection)', artist: 'Ai Carti', cover: 'yt.jpg' },
        { src: 'yeat.mp3', title: 'Sidëwayz 2', artist: 'YEAT', cover: 'Unknown.jpeg' }
    ];

    function loadSong(index) {
        const song = songs[index];
        audio.src = song.src;
        document.querySelector('.current-song .cover').src = song.cover;
        document.querySelector('.current-song .title').textContent = song.title;
        document.querySelector('.current-song .artist').textContent = song.artist;
    }

    function playSong() {
        audio.play();
        playButton.textContent = 'Pause';
    }

    function pauseSong() {
        audio.pause();
        playButton.textContent = 'Play';
    }

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    playSongButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            loadSong(index);
            playSong();
        });
    });

    loadSong(currentSongIndex);
});
