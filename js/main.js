$(document).ready(function (){
    $("#erasable-canvas").attr('width', $("#erasable-canvas").width());
    $("#erasable-canvas").attr('height', $("#erasable-canvas").height());
    var canvas = $("#erasable-canvas");
    var context = canvas.get(0).getContext("2d");
    console.log('jquery ok');
    var imgObj = new Image();

    imgObj.onload = function() {
        console.log('img chargée');
        context.drawImage(imgObj, 0, 0, canvas.width(), canvas.height());
        $('#erasable-canvas').eraser();
    };
    imgObj.src = "../img/erasable.jpg";
});
