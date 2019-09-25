const toggle = (id) =>{
    $("#"+id).toggle();
}

$("#htmlBtn").click(() => toggle("htmlTab"))
$("#cssBtn").click(() => toggle("cssTab"))
$("#jsBtn").click(() => toggle("jsTab"))