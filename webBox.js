$(document).ready(function(){

    $("button").click(function(){
        let id = this.id;
        $("textarea")[id].hidden = ! $("textarea")[id].hidden;
    })

    $("#output").contents().find('head').append('<style></style>');

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