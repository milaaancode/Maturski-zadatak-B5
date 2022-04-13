function Kreni(id){
    let on = document.getElementById(id);
    on.play();
    console.log("Pusti");
}

function Prekini(id){
    let off = document.getElementById(id);
    off.pause();
    off.currentTime = 0;
    console.log("Zaustavi");
}