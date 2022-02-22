const converter =(minute)=>{
    let a=Math.floor(minute/60);
    let b=minute-(a*60);
    return `Minute is ${a}:${b}`;

}
console.log(converter(30));
let newAudioTrack= new Audio ('./songs/2.mp3');
console.log(newAudioTrack.duration)
