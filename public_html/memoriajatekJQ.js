$(function(){

  $("div").html("Helo");
  $("div").append("<img>");
  $("div img").eq(0).attr("src",kepek[0].eleresiUt);
  $("div img").eq(0).attr("alt",kepek[0].alt);
  $("div").append("<img>");
  $("div img").eq(1).attr("src",kepek[1].eleresiUt);
  $("div img").eq(1).attr("alt",kepek[1].alt);
  $("div img").click(kattintasra);
  
  
});


var kep1={
    eleresiUt:"kepek/1.jpg",
    alt:"ürge"
};

var kep2={
    eleresiUt:"kepek/2.jpg",
    alt:"zebra"
};

var kepek=[kep1,kep2];

function kattintasra(){
    $(this).attr("src","kepek/1.jpg");
    $(this).attr("alt","mókus");
}