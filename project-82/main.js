var ctx= canvas.getContext("2d");
mouseevent= "";
canvas= document.getElementById("mycanvas");
color="";
linewidth="";
radius="";


addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

    radius= document.getElementById("radius").value;
    linewidth= document.getElementById("width").value;
    color= document.getElementById("color").value;
    mouseevent="mousedown";
}


addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseevent= "mouseup";
}


addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseevent= "mouseleave";
}


addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    mouseevent= "mousemove"
    currentx= e.clientX - canvas.offsetLeft;
    currenty= e.clientY - canvas.offsetTop;

    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= linewidth;
        ctx.arc(currentx, currenty, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

