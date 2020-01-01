//const
//var everyDegree = (2 * Math.PI) / 360;
var everyDegree = 1;
//spherical coordinate
function sphericalVertex(rho,phi,theta){
    this.rho = rho;
    this.phi = phi;
    this.theta = theta;
    return this;
}
//cartesian coordinate
function cartesianVertex(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
}
function cver2sver(cver){
    var rho   = Math.sqrt(cver.x*cver.x + cver.y*cver.y + cver.z*cver.z);
    var phi   = Math.acos(everyDegree * (cver.z / rho));
    var theta = Math.atan(everyDegree * (cver.y / cver.x));
    return new sphericalVertex(rho,phi,theta);
}
function sver2cver(sver){
    var x = sver.rho * Math.sin(everyDegree * (sver.phi)) * Math.cos(everyDegree * (sver.theta));
    var y = sver.rho * Math.sin(everyDegree * (sver.phi)) * Math.sin(everyDegree * (sver.theta));
    var z = sver.rho * Math.cos(everyDegree * (sver.phi));
    return new cartesianVertex(x,y,z);
}