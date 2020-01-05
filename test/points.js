//const
function sin(x){
    return Math.sin(x * 0.017453293);
}
function cos(x){
    return Math.cos(x * 0.017453293);
}
function tan(x){
    return Math.tan(x * 0.017453293);
}
function arcsin(x){
    return Math.asin(x * 0.017453293);
}
function arccos(x){
    return Math.acos(x * 0.017453293);
}
function arctan(x){
    return Math.atan(x * 0.017453293);
}
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
    var x = cver.x;
    var y = cver.y;
    var z = cver.z;

    var r = Math.sqrt(x*x + y*y + z*z);
    var theta = arccos(z/r);
    var phi = arctan(y/x);
    
    var tmp = new sphericalVertex(r,phi,theta);
    return tmp;
}
function sver2cver(sver){
    var theta = sver.theta;
    var phi = sver.phi;
    var r = sver.rho;

    var x = r*sin(theta)*cos(phi);
    var y = r*sin(theta)*sin(phi);
    var z = r*cos(theta);

    var tmp = new cartesianVertex(x,y,z)
    return tmp;
}