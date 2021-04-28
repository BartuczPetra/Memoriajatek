$(function () {
    tomb["kepek/1.jpg","kepek/2.jpg","kepek/3.jpg","kepek/2.jpg","kepek/4.jpg","kepek/4.jpg","kepek/5.jpg","kepek/6.jpg","kepek/7.jpg","kepek/5.jpg","kepek/8.jpg","kepek/7.jpg","kepek/9.jpg","kepek/8.jpg","kepek/6.jpg","kepek/3.jpg","kepek/9.jpg","kepek/1.jpg"];
    
    $("#ujJatek").click(kezd);
    kezd();

});

var tomb = []; //képek tárolása
var elso = true; //számon tartsuk hányadik kártyát fordítottuk meg
var elozo; //a jelenleg felfordított kártyák indexét tárolja
var alap = "kepek/kartya_hatlap.png"; //hátlap elérési út
var pontok = 0; //aktuális pontok


function kezd(){
    for (var i = 0; i < tomb.length; i++) {
        $("section img").eq(i).attr("src",alap);
    }
    $("section img").click(ellenoriz);
    kever();
    pontok=0;
}

function kever(){
//    tomb.sort(function(a, b){return 0.5 - Math.random();});
    
}
