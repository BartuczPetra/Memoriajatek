$(function () {
    tomb=["kepek/1.jpg", "kepek/2.jpg", "kepek/3.jpg", "kepek/2.jpg", "kepek/4.jpg", "kepek/4.jpg", "kepek/5.jpg", "kepek/6.jpg", "kepek/7.jpg", "kepek/5.jpg", "kepek/8.jpg", "kepek/7.jpg", "kepek/9.jpg", "kepek/8.jpg", "kepek/6.jpg", "kepek/3.jpg", "kepek/9.jpg", "kepek/1.jpg"];

    $("#ujJatek").click(kezd);
    kezd;

});

var tomb = []; //képek tárolása
var elso = true; //számon tartsuk hányadik kártyát fordítottuk meg
var elozo; //a jelenleg felfordított kártyák indexét tárolja
var mostani;
var alap = "kepek/kartya_hatlap.png"; //hátlap elérési út
var pontok = 0; //aktuális pontok

function kezd() {
    for (var i = 0; i < 12; i++) {
        $("section img").eq(i).attr("src", alap);
//        $("section img").eq(i).toggle(fordit);
    }
    $("section img").click(fordit);
//    $("section img").toggle(fordit);
    kever();
    pontok = 0;
}

function kever() {
//    tomb.sort(function(a, b){return 0.5 - Math.random();});

}
function ellenoriz() {
    
    if ( tomb[elozo] === tomb[mostani]) {
        pontok += 1;
    } else {
        $("section img").remove(ellenoriz);
        setTimeout(visszafordit, 1000);
    }
}
function fordit() {
//    for (var i = 0; i < 12; i++) {
//        if ("section img" === tomb[i]) {
//            elozo = i;
//        }
//    }
    var i = $(this).attr("id");
    console.log($(this));
    if (elso) {

        elozo = i - 1;
        elso = false;
    } else {
        mostani = i - 1;
        elso = true;
    }


  console.log(tomb[i-1]);
    $(this).attr("src", tomb[i - 1]);

}
function visszafordit() {
    $("section img").eq(elozo).attr("src", alap);
    $("section img").eq(mostani).attr("src", alap);
    $("section img").click(ellenoriz);
}