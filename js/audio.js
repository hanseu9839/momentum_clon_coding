const albumCover = ["img/album1.png","img/album2.png","img/album3.jpeg","img/album4.jpeg"];
const albumSong = ["mp3/song1.mp3","mp3/song2.mp3","mp3/song3.mp3","mp3/song4.mp3"];
const playerAudio =  document.getElementById("musicPlayer");
const playerFunction = document.querySelector("player_function");
const playerAlbum = document.querySelector("#player_album");
const beforePlay = document.querySelector("#before");
const nextPlay = document.querySelector("#next");
const pause = document.querySelector("#pause");
const play = document.querySelector("#play");
console.dir(playerAudio);

ADD_NUM = 0;
ROTATION = "rotate";

function beforePlayListener(){
    console.log(ADD_NUM);
    if(ADD_NUM<=0){       
        ADD_NUM=albumCover.length-1;
        playerAlbum.src=albumCover[ADD_NUM];
        playerAudio.src=albumSong[ADD_NUM];
    }
    else
        ADD_NUM-=1;
    playerAlbum.src=albumCover[ADD_NUM];
    playerAudio.src=albumSong[ADD_NUM];
    playerAudio.autoplay=true;
    playerAudio.load();
}

function playnextEventListener(){
    if(ADD_NUM>=albumCover.length-1)
        ADD_NUM=0;
    else
        ADD_NUM = ADD_NUM+1;
    console.log(ADD_NUM);
    playerAlbum.src = albumCover[ADD_NUM];
    playerAudio.src = albumSong[ADD_NUM];
    playerAudio.autoplay=true;
    playerAudio.load();
}

function playEventListener(){
    playerAudio.play();
    playerAlbum.classList.add(ROTATION);
}
function pauseEventListener(){
    playerAudio.pause();
    playerAlbum.classList.remove(ROTATION);
}


pause.addEventListener("click",pauseEventListener);
play.addEventListener("click",playEventListener);
nextPlay.addEventListener("click",playnextEventListener);
beforePlay.addEventListener("click",beforePlayListener);