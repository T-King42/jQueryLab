$( document ).ready(function(){
  $("#area").hover(function(){
    $('#area').css("background-color", "green");
    alert("close me to make the box green!");
  });
  $("#reset").click(function(){
    $('#area').css("background-color", "#953674");
  });
});
