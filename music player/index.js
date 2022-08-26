const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const album = document.getElementById("album");
const prev = document.querySelector(".fa-backward");
const next = document.querySelector(".fa-forward");

// --------progres_bar----------

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div =  document.getElementById("progress_div");

let isPlaying = false;

// to Pause
// play.addEventListener('click',()=>{
//     isPlaying = true
//     music.play();
//     play.classList.replace('fa-play','fa-pause');
//     img.classList.add('img_rotate');
// });
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("img_rotate");
};
// to Play
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("img_rotate");
};

play.addEventListener("click", () => {
  // if(isPlaying == true){
  //     pauseMusic();
  // }
  // else{
  //     playMusic();
  // }
  isPlaying ? pauseMusic() : playMusic();
});

// data
const songs = [
  {
    name: "song-1",
    album: "295",
    artist: "Sidhu Moosewala",
  },
  {
    name: "song-2",
    album: "never fold",
    artist: "Sidhu Moosewala",
  },
  {
    name: "song-3",
    album: "Celebrity_killer",
    artist: "Sidhu Moosewala",
  },
  {
    name: "song-4",
    album: "the Last Ride",
    artist: "Sidhu Moosewala",
  },
  {
    name: "song-5",
    album: "GOAT",
    artist: "Sidhu Moosewala",
  },
];

// changing music data

const loadSong = (songs) => {
  album.innerText = songs.album;
  artist.innerText = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = `img/${songs.name}.jpg`;
};


// ------------------next and prev button-------------------------------

 songIndex = 0;
 const nextSong = ()=>{
   songIndex = (songIndex + 1)% songs.length;
  //  songIndex++; no loop in this , so use above code
   loadSong(songs[songIndex]);
   playMusic();
  };
  const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
   //  songIndex--; no loop in this , so use above code
    loadSong(songs[songIndex]);
    playMusic();
   };
 
 next.addEventListener("click", nextSong);
 prev.addEventListener("click", prevSong);
 

// ---------------- progress_bar-------------------

music.addEventListener('timeupdate',(event)=>{
  const {currentTime,duration} = event.srcElement;
let progress_time = (currentTime/duration)*100;
progress.style.width = `${progress_time}%`;

// ---------------duration update---------------
let min_duration = Math.floor(duration / 60);
let sec_duration = Math.floor(duration % 60);

// ternory operator to add 0 to single sec.  digit 
sec_duration = (sec_duration < 10) ? "0" + sec_duration : sec_duration;

// to stop NAN , till we get duration , do not load 
if (duration){
  total_duration.innerText = `${min_duration}:${sec_duration}`;
}
// or
// let tot_duration = `${min_duration}:${sec_duration}`;
// total_duration.innerText = ${tot_duration};

// ---------------current update---------------
let min_currentTime = Math.floor(currentTime / 60);
let sec_currentTime = Math.floor(currentTime % 60);

// ternory operator to add 0 to single sec.  digit 
sec_currentTime = (sec_currentTime < 10) ? "0" + sec_currentTime : sec_currentTime;

// to stop NAN , till we get duration , do not load 
current_time.innerText = `${min_currentTime}:${sec_currentTime}`;
});
// call next song when current song ends
music.addEventListener("ended",nextSong)


// ---------progress bar function------

progress_div.addEventListener("click",(event)=>{
  const {duration}= music;
  music.currentTime= (event.offsetX / event.srcElement.clientWidth)*duration;
})

