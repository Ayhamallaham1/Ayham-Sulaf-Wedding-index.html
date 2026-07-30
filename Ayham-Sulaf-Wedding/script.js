function openWedding(){

let cover = document.getElementById("cover");

let wedding = document.getElementById("wedding");


cover.style.opacity="0";


setTimeout(()=>{

cover.style.display="none";

wedding.style.display="block";


window.scrollTo({

top:0,

behavior:"smooth"

});


},800);



let music = document.getElementById("music");


music.play().catch(()=>{});


}





function toggleMusic(){

let music = document.getElementById("music");


if(music.paused){

music.play();

}else{

music.pause();

}


}





let weddingDate = new Date("August 21, 2026 19:00:00").getTime();



setInterval(function(){


let now = new Date().getTime();


let distance = weddingDate - now;



if(distance < 0){

return;

}



let days = Math.floor(

distance / (1000*60*60*24)

);



let hours = Math.floor(

(distance % (1000*60*60*24)) /

(1000*60*60)

);



let minutes = Math.floor(

(distance % (1000*60*60)) /

(1000*60)

);



let seconds = Math.floor(

(distance % (1000*60)) /

1000

);



document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;



},1000);
