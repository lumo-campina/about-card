$(document).ready(function(){
  $("#viewMore").click(function(){
    $("#info").animate({top:"460px"});
    $("#aboutMe").animate({top:"0px"});
    $("#image").animate({left:"250px"});
    $("#project").animate({left:"0px"});
  });

  $("#close").click(function(){
    $("#info").animate({top:"320px"});
    $("#aboutMe").animate({top:"-160px"});
    $("#image").animate({left:"3%"});
    $("#project").animate({left:"-250px"});
  });
});
