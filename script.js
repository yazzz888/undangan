function bukaUndangan(){

document.querySelector(".cover").style.display="none";

document.getElementById("content").style.display="block";

document.getElementById("musik").play();

}

const params=new URLSearchParams(window.location.search);

const nama=params.get("to");

if(nama){

document.getElementById("guestName").innerHTML=decodeURIComponent(nama);

}
