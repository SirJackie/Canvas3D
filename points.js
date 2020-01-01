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