/**
 * @author Jordi Ros
 *
 */

function deg2rad(angle) {
	return Math.PI * angle / 180;
}

function Lerp(t0,t1, x0,x1, t) {
  if (t <= t0) return x0;
  if (t >= t1) return x1;
  return ((x1 - x0) * (t - t0) / (t1 - t0)) + x0;
}

function Time01(cur, ini, len) {
  if (len > 0)
  {
    if (cur > ini)
    {
      dt = cur - ini;
      if (dt > len) dt = len;
      return (dt / len);
    }
    return 0;
  }
  return 1;
}

// Class
GLHud = function(renderer, w, h, renderTarget, flipx, flipy) {
	this.renderer = renderer;
	this.renderTarget = renderTarget;
	this.w = w;
	this.h = h;
	this.flipx = flipx;
	this.flipy = flipy;
	// Scene
	this.defaultMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
	this.plane  = new THREE.PlaneGeometry(1, 1);
	this.quad   = new THREE.Mesh(this.plane, this.defaultMaterial);
	this.doubleSided = true;
	this.camera = new THREE.OrthographicCamera(0, w, 0, -h, 1000, -1000);
	this.scene  = new THREE.Scene();
	this.scene.add(this.quad);
	this.scene.add(this.camera);
}

GLHud.prototype.Render = function( input, x, y, w, h) {
	this.Set(x, y, w, h);
	if( input instanceof THREE.Material ) {
		this.SetMaterial( input );
	} else {
		this.SetMaterial(this.defaultMaterial);
		this.defaultMaterial.map = input;
	}
	this.renderer.setFaceCulling();
	this.renderer.render(this.scene, this.camera, this.renderTarget, false);
}

GLHud.prototype.FreeRender = function( input, p1, p2, p3, p4 ) {
	this.Distort( p1, p2, p3, p4 );
	if( input instanceof THREE.Material ) {
		this.SetMaterial( input );
	} else {
		this.SetMaterial(this.defaultMaterial);
		this.defaultMaterial.map = input;
	}
	this.renderer.setFaceCulling();
	this.renderer.render(this.scene, this.camera, this.renderTarget, false);
}

GLHud.prototype.Set = function(x, y, w, h) {
	xt   = x + w*0.5;
	yt   =-y - h*0.5;
	rotx = 0;
	roty = 0;
	if (this.flipx == true)
	{
		xt = this.w - xt;
		roty = deg2rad(180);
	}
	if (this.flipy == true)
	{
		yt = -this.h - yt;
		rotx = deg2rad(180);
	}
	this.quad.rotation.set(rotx, roty, 0);
	this.quad.position.set(xt, yt, 1);
	this.quad.scale.set(w, h, 1);
}

GLHud.prototype.Distort = function( p1, p2, p3, p4 ) {
	this.quad.geometry.dynamic = true;
	this.quad.rotation.set(0, 0, 0);
	this.quad.position.set(0, 0, 1);
	this.quad.scale.set(1, 1, 1);
	this.quad.geometry.vertices[ 0 ].position.set( p1.x, - p1.y, 1 );
	this.quad.geometry.vertices[ 1 ].position.set( p2.x, - p2.y, 1 );
	this.quad.geometry.vertices[ 2 ].position.set( p4.x, - p4.y, 1 );
	this.quad.geometry.vertices[ 3 ].position.set( p3.x, - p3.y, 1 );
	this.quad.geometry.__dirtyVertices = true;
	this.quad.geometry.__dirtyNormals = true;
	this.quad.geometry.__dirtyElements = true;
}

GLHud.prototype.SetMaterial = function(material) {
	this.quad.material = material;
}