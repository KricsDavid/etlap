function visszaigazol(){
    var nev = document.getElementById("nev").value;
    var cím = document.getElementById("hely").value;
    var tel = document.getElementById("tel").value;

    document.getElementById("nevspan").innerHTML=nev;
    document.getElementById("helyspan").innerHTML=cím;
    document.getElementById("telspan").innerHTML=tel;
}

function fokusz(kivalasztottElem){
    kivalasztottElem.style.backgroundColor = "rgba(200,200,250,255)";
}

function fokuszKi(kivalasztottElem){
    kivalasztottElem.style.backgroundColor = "white";
}