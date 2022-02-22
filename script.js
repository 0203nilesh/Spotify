console.log("Welcome to Spotify");
const len = (path)=>{
    let audioFunc= new Audio (path);
    let minute= parseInt(audioFunc.duration);
    let a=Math.floor(minute/60);
    let b=minute-(a*60);
    return minute;
}
//Intialize the Variables   
let songIndex=0;
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let masterSong= document.getElementById('masterSong');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songItemPlay= Array.from(document.getElementsByClassName('songItemPlay'));
let gif= document.getElementById('gif');
let songs= [
    {songName:"On my Way", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Pull over the world", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"I am astronaut", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"Where are you", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Taki Taki", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Butter-", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"shape of you", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"Jaleby baby", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"money", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName:"No lie", filePath: "songs/10.mp3",coverPath: "covers/10.jpg"}
]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

let audioElement= new Audio ("./songs/1.mp3");
// audioElement.play();

// Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.pause==1 || audioElement.currentTime ==0){
        audioElement.play(); 
        // console.log('button-clicked');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause(); 
        console.log('button-clicked');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        makeAllPlays();
        gif.style.opacity =0;
    }
})

// Listen to the Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    let songPerc= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(audioElement.duration);
    // console.log(songPerc);
    myProgressBar.value=songPerc;
})

myProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays= ()=>{
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    });
}

songItemPlay.forEach(element => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        songIndex= parseInt(e.target.id);   
        audioElement.currentTime=0;
        masterSong.innerText= songs[songIndex-1].songName;
        audioElement.src= `songs/${songIndex}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;

    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>10){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
        audioElement.currentTime=0;
        masterSong.innerText= songs[songIndex-1].songName;
        audioElement.src= `songs/${songIndex}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<1){
        songIndex=10;
    }
    else{
        songIndex-=1;
    }
        audioElement.currentTime=0;
        masterSong.innerText= songs[songIndex-1].songName;
        audioElement.src= `songs/${songIndex}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
})
