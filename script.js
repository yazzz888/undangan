const text=`Untuk seseorang yang selalu mengisi hari-hariku.

Terima kasih telah hadir dalam hidupku.

Setiap senyummu membuat dunia terasa lebih indah.

Aku mungkin tidak sempurna,
tetapi aku akan selalu berusaha menjadi seseorang
yang mampu membuatmu bahagia.

Aku berharap kita akan terus berjalan bersama,
hari ini, besok, dan selamanya.

❤️ Aku mencintaimu ❤️`;

let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

function openLetter(){

document.getElementById("cover").style.display="none";

document.getElementById("content").style.display="block";

document.getElementById("music").play();

typeWriter();

}

function toggleMusic(){

let music=document.getElementById("music");

if(music.paused){

music.play();

}else{

music.pause();

}

}

const photos=[
"assets/foto1.jpg",
"assets/foto2.jpg",
"assets/foto3.jpg"
];

let index=0;

setInterval(()=>{

index++;

if(index>=photos.length){

index=0;

}

document.getElementById("slide").src=photos[index];

},3000);

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);
