var kivalasztottLevesNev = "-";
var kivalasztottLevesAr = 0;
var kivalasztottLevesKep = "";

var kivalasztottFoetelNev = "-";
var kivalasztottFoetelAr = 0;
var kivalasztottFoetelKep = "";

var kivalasztottDesszertNev = "-";
var kivalasztottDesszertAr = 0;
var kivalasztottDesszertKep = "";

var kivalasztottItalNev = "-";
var kivalasztottItalAr = 0;
var kivalasztottItalKep = "";


function kivalasztas(kivalasztott)
{
    //Adatok felvétele
    if (kivalasztott.classList.contains("leves"))
    {
        var kelloMezok = document.getElementsByClassName("leves");
        kivalasztottLevesNev = kivalasztott.getElementsByClassName("etelNev")[0].innerHTML;
        kivalasztottLevesAr = parseInt(kivalasztott.getElementsByClassName("ar")[0].innerHTML.split(" ")[0]);
        kivalasztottLevesKep = kivalasztott.getElementsByTagName("img")[0].src;
    }
    else if (kivalasztott.classList.contains("foetel"))
    {
        var kelloMezok = document.getElementsByClassName("foetel");
        kivalasztottFoetelNev = kivalasztott.getElementsByClassName("etelNev")[0].innerHTML;
        kivalasztottFoetelAr = parseInt(kivalasztott.getElementsByClassName("ar")[0].innerHTML.split(" ")[0]);
        kivalasztottFoetelKep = kivalasztott.getElementsByTagName("img")[0].src;
    }
    else if (kivalasztott.classList.contains("desszert"))
    {
        var kelloMezok = document.getElementsByClassName("desszert");
        kivalasztottDesszertNev = kivalasztott.getElementsByClassName("etelNev")[0].innerHTML;
        kivalasztottDesszertAr = parseInt(kivalasztott.getElementsByClassName("ar")[0].innerHTML.split(" ")[0]);
        kivalasztottDesszertKep = kivalasztott.getElementsByTagName("img")[0].src;
    }
    else if (kivalasztott.classList.contains("ital"))
    {
        var kelloMezok = document.getElementsByClassName("ital");
        kivalasztottItalNev = kivalasztott.getElementsByClassName("etelNev")[0].innerHTML;
        kivalasztottItalAr = parseInt(kivalasztott.getElementsByClassName("ar")[0].innerHTML.split(" ")[0]);
        kivalasztottItalKep = kivalasztott.getElementsByTagName("img")[0].src;
    }

    if(kivalasztott.style.backgroundColor != "coral") //Felvétel
    {
        var cik = 0;
        while (cik<kelloMezok.length){
            kelloMezok[cik].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            cik++;
        }
        kivalasztott.style.backgroundColor = "coral";
    }
    else //Visszavétel
    {
        kivalasztott.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        if (kivalasztott.classList.contains("leves")){
            kivalasztottLevesNev = "-";
            kivalasztottLevesAr = 0;
            kivalasztottLevesKep = "";
        }
        else if (kivalasztott.classList.contains("foetel"))
        {
            kivalasztottFoetelNev = "-";
            kivalasztottFoetelAr = 0;
            kivalasztottFoetelKep = "";
        }
        else if (kivalasztott.classList.contains("desszert"))
        {
            kivalasztottDesszertNev = "-";
            kivalasztottDesszertAr = 0;
            kivalasztottDesszertKep = "";
        }
        else if (kivalasztott.classList.contains("ital"))
        {
            kivalasztottItalNev = "-";
            kivalasztottItalAr = 0;
            kivalasztottItalKep = "";
        }
    }
    
//Rendelés átírása
    localStorage.setItem("levesAr",kivalasztottLevesAr);
    localStorage.setItem("levesNev",kivalasztottLevesNev);
    localStorage.setItem("levesKep",kivalasztottLevesKep);
    localStorage.setItem("foetelAr",kivalasztottFoetelAr);
    localStorage.setItem("foetelNev",kivalasztottFoetelNev);
    localStorage.setItem("foetelKep",kivalasztottFoetelKep);
    localStorage.setItem("desszertAr",kivalasztottDesszertAr);
    localStorage.setItem("desszertNev",kivalasztottDesszertNev);
    localStorage.setItem("desszertKep",kivalasztottDesszertKep);
    localStorage.setItem("italAr",kivalasztottItalAr);
    localStorage.setItem("italNev",kivalasztottItalNev);
    localStorage.setItem("italKep",kivalasztottItalKep);
}

function menuFrissites(){
    document.getElementById("rendeltLeves").src = localStorage.getItem("levesKep");

    document.getElementById("rendeltFoetel").src = localStorage.getItem("foetelKep");

    document.getElementById("rendeltDesszert").src = localStorage.getItem("desszertKep");

    document.getElementById("rendeltItal").src = localStorage.getItem("italKep");

    if (localStorage.getItem("levesKep") == ""){
        document.getElementById("rendeltLeves").src = "Áruk/semmi.png";
    }
    if (localStorage.getItem("foetelKep") == ""){
        document.getElementById("rendeltFoetel").src = "Áruk/semmi.png";
    }
    if (localStorage.getItem("desszertKep") == ""){
        document.getElementById("rendeltDesszert").src = "Áruk/semmi.png";
    }
    if (localStorage.getItem("italKep") == ""){
        document.getElementById("rendeltItal").src = "Áruk/semmi.png";
    }

}

function elkuldes(){
    document.getElementById("rendeltLeves").src = "Áruk/semmi.png";
    document.getElementById("rendeltFoetel").src = "Áruk/semmi.png";
    document.getElementById("rendeltDesszert").src = "Áruk/semmi.png";
    document.getElementById("rendeltItal").src = "Áruk/semmi.png";
    //alert("Rendelését sikeresen elküldtük! Fizetendő összeg: " + parseInt(localStorage.getItem("levesAr"))+parseInt(localStorage.getItem("foetelAr"))+parseInt(localStorage.getItem("desszertAr"))+parseInt(localStorage.getItem("italAr")) + "Ft");
    alert("Rendelését sikeresen elküldtük!");
}