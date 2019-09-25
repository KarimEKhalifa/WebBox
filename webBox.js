$(document).ready(function(){

    $("textarea").click(() => $(this).disabled = !$(this).disabled)

    $.ajax({
        url : "./test/test.htm",
        dataType: "text",
        success : function (data) {
            var result = $(data).find('#container');
            $("#htmlTab").text(result.prevObject[19].innerHTML);
        }
    });
    $.ajax({
        url : "./test/test.css",
        dataType: "text",
        success : function (data) {
            $("#cssTab").text(data);
        }
    });
    $.ajax({
        url : "./test/test.js",
        dataType: "text",
        success : function (data) {
            $("#jsTab").text(data);
        }
    });
    $.ajax({
        url : "./test/test.htm",
        dataType: "text",
        success : function (data) {
            $("#output").contents().find('body').html((data));
        }
    });

    $("#htmlTab").bind('input', function(){
        $("#output").contents().find('#container').html($("#htmlTab").val())
      });
    
      $("#cssTab").bind('input', function(){
        $("#output").contents().find('style').html($("#cssTab").val())
      });
    
      $("#jsTab").bind('input', function(){
        $("#output").contents().find('body').js($("#jsTab").val())
      });

});