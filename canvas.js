/*
** Structs
*/
function Camera(positionX,positionY,positionZ,angleX,angleY,angleZ){
    this.x = positionX;
    this.y = positionY;
    this.z = positionZ;
    this.angleX = angleX;
    this.angleY = angleY;
    this.angleZ = angleZ;
    return this;
}

function Vertex(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
}

function Vertex2D(x,y){
    this.x = x;
    this.y = y;
    return this;
}

function Mesh(Vertex1,Vertex2,Vertex3){
    this.vertex1 = Vertex1;
    this.vertex2 = Vertex2;
    this.vertex3 = Vertex3;
    return this;
}

function Mesh2D(Vertex2D1,Vertex2D2,Vertex2D3){
    this.vertex1 = Vertex2D1;
    this.vertex2 = Vertex2D2;
    this.vertex3 = Vertex2D3;
    return this;
}

//const
//spherical coordinate
function sphericalVertex(rho,phi,theta){
    this.rho = rho;
    this.phi = phi;
    this.theta = theta;
    return this;
}
function cver2sver(cver){
    var rho   = Math.sqrt(cver.x*cver.x + cver.y*cver.y + cver.z*cver.z);
    var phi   = Math.acos(cver.z / rho);
    var theta = Math.atan(cver.y / cver.x);
    return new sphericalVertex(rho,phi,theta);
}
function sver2cver(sver){
    var x = sver.rho * Math.sin(sver.phi) * Math.cos(sver.theta);
    var y = sver.rho * Math.sin(sver.phi) * Math.sin(sver.theta);
    var z = sver.rho * Math.cos(sver.phi);
    return new Vertex(x,y,z);
}

/*
** Drawing Functions
*/

function CanvasInitialize(canvasID){
    var canvas = document.getElementById(canvasID);
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    return ctx;
}

function drawMark(ctx,x,y){
    ctx.fillRect(x-3,y-3,6,6);
}

function drawLine(ctx,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

function prespectiveProjection(camera,vertex){
    vertex.x2d = (document.body.clientWidth/2) +(vertex.x - camera.x) / (vertex.z + camera.z);
    vertex.y2d = (document.body.clientHeight/2) - ((vertex.y - camera.y) / (vertex.z + camera.z));
    return vertex;
}

