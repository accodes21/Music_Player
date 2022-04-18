console.log('welcome');
let index = 0;
let audio = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let progressBar = document.getElementById("progressBar");
let songInfoName = document.getElementById("songInfoName");
let imginfo = document.getElementById("imginfo");
let songItem = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: 'Matargashti - Mohit Chauhan', filepath: 'songs/1.mp3', coverpath: 'covers/1.jpg' },
    { songName: 'Love You Zindagi - Amit Trivedi', filepath: 'songs/2.mp3', coverpath: 'covers/2.jpg' },
    { songName: 'Tu Hi Hai - Arijit Singh', filepath: 'songs/3.mp3', coverpath: 'covers/3.jpg' },
    { songName: 'Pani Da - Ayushman Khurana', filepath: 'songs/4.mp3', coverpath: 'covers/4.jpg' },
    { songName: 'Raatan Lambiyan - Jubin Nautiyal', filepath: 'songs/5.mp3', coverpath: 'covers/5.jpg' },
    { songName: 'Nachde Ne Saare - Jasleen Royal', filepath: 'songs/6.mp3', coverpath: 'covers/6.jpg' },
    { songName: 'Sooraj Dooba Hain - Arijit Singh', filepath: 'songs/7.mp3', coverpath: 'covers/7.jpg' },
    { songName: 'Tum Hi Ho Bandhu - Kavita Seth', filepath: 'songs/8.mp3', coverpath: 'covers/8.jpg' }
]

// songItem.forEach((element,i)=>{
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// audio.play()

//Event listeners

//Pause/Play
masterplay.addEventListener("click",()=>{
    if(audio.paused || audio.currentTime <= 0){
        audio.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            // makeAllplay()
            element.addEventListener("click",(e)=>{
                e.target.classList.remove("fa-circle-pause");
                e.target.classList.add("fa-circle-play");
                // console.log(e)
                })
            // element.classList.remove("fa-circle-play");
            // element.classList.add("fa-circle-pause");
           
        })
    }
    else{
        audio.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            makeAllplay()
            // element.addEventListener("click",(e)=>{
            // // e.target.classList.remove("fa-circle-pause");
            // // e.target.classList.add("fa-circle-play");
            // console.log(e)
            // })
            // element.classList.remove("fa-circle-pause");
            // element.classList.add("fa-circle-play");
        })

    }
})

audio.addEventListener("timeupdate",()=>{
    //Update Seekbar
    progress = parseInt((audio.currentTime/audio.duration)*1000)
    progressBar.value = progress;
})

progressBar.addEventListener("change",()=>{
    audio.currentTime = progressBar.value * audio.duration /1000;
})

const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllplay();
        index = parseInt(e.target.id);
        
        songInfoName.innerText = songs[index-1].songName;
        imginfo.src = songs[index-1].coverpath;
        
        audio.src = `songs/${index}.mp3`;
        audio.currentTime = 0;
        if(audio.paused){
            audio.play();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            console.log("bye")
        }
        else{
            audio.pause();
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
            masterplay.classList.remove("fa-pause-circle");
            masterplay.classList.add("fa-play-circle");
            console.log("hello")
        }
    })
})

document.getElementById('next').addEventListener("click",()=>{
    if(index>8){
        index = 1;
    }
    else{
        index += 1;
    }
    audio.src = `songs/${index}.mp3`;
    songInfoName.innerText = songs[index-1].songName;
    imginfo.src = songs[index-1].coverpath;
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener("click",()=>{
    if(index<0){
        index = 8;
    }
    else{
        index -= 1;
    }
    audio.src = `songs/${index}.mp3`;
    songInfoName.innerText = songs[index-1].songName;
    imginfo.src = songs[index-1].coverpath;
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})

