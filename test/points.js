//const
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
    var phi   = Math.acos(cver.z / rho)*0.017453293;
    var theta = Math.atan(cver.y / cver.x)*0.017453293;
    return new sphericalVertex(rho,phi,theta);
}
function sver2cver(sver){
    var x = sver.rho * Math.sin(sver.phi)*0.017453293 * Math.cos(sver.theta)*0.017453293;
    var y = sver.rho * Math.sin(sver.phi)*0.017453293 * Math.sin(sver.theta)*0.017453293;
    var z = sver.rho * Math.cos(sver.phi)*0.017453293;
    return new cartesianVertex(x,y,z);
}