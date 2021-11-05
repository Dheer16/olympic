canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="yellow";



ctx.beginPath();
    
    ctx.lineWidth=10;
    ctx.strokeStyle="blue";
    ctx.arc(350,250,50,0,360);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.arc(490,250,50,0,360);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.arc(625,250,50,0,360);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.arc(420,300,50,0,360);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.arc(560,300,50,0,360);
    
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=1;
    ctx.rect(250,150,500,250);
    ctx.stroke();