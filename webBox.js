$(document).ready(function(){

    $("textarea").click(() => $(this).disabled = !$(this).disabled);

    $("#htmlTab").bind('input', function(){
        $("#output").contents().find('body').html($("#htmlTab").val())
      });
    
      $("#cssTab").bind('input', function(){
        $("#output").contents().find('style').html($("#cssTab").val())
      });
    
      $("#jsTab").bind('input', function(){
        frames[0].window.eval($("#jsTab").val());
        
      });

});