var divlength = document.querySelectorAll('.song').length;
console.log(divlength);

for(var i=0; i<divlength; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);

 var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src = "music/musicplayer/volare.mp3";

var song2 = new Audio();
song2.src = "music/musicplayer/siviaggiare.mp3";

var song3 = new Audio();
song3.src = "music/musicplayer/contepartiro.mp3";

var song4 = new Audio();
song4.src = "music/musicplayer/epensoate.mp3";

var song5 = new Audio();
song5.src = "music/musicplayer/stupendo.mp3";

var song6 = new Audio();
song6.src = "music/musicplayer/vogliounapelle.mp3";

function playsong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.play();
   break;

  case "b":
   song2.play();
   break;

  case "c":
   song3.play();
   break;

  case "d":
   song4.play();
   break;

  case "e":
   song5.play();
   break;

  case "f":
   song6.play();
   break;

  default:
   console.log("wrong input");
   break;
 }
}

function pausesong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.pause();
   break;

  case "b":
   song2.pause();
   break;

  case "c":
   song3.pause();
   break;

  case "d":
   song4.pause();
   break;

  case "e":
   song5.pause();
   break;

  case "f":
   song6.pause();
   break;

  default:
   console.log("wrong input");
   break;
 }
}