$(function(){
    var dis = 250;

  $("button").click(function(){
    $("body").children().animate({"margin-left" : "+=" + dis + "px"}, 200);
    dis *= -1;
  });
});

$(function(){
  $("a").click(function(){
    var dis = $(this).html()-1;
    $("#sections").animate({"left":dis*-700+"px"},300);
    $("body").css("background-positions",dis*-20+"px 100%");
    $("bg1").css("background-positions",dis*-150+"px 100%");
    $("bg2").css("background-positions",dis*-700+"px 100%");
    $(".current").removeClass("current");
    $(this).addClass("current");
    return false;
  })
})