/**
 * @author Jordi Ros
 *
 */

GLStitcher = function(renderer, width, height, flipX, flipY) {
	this.tex = new THREE.WebGLRenderTarget(width, height, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat });
	this.hud = new GLHud(renderer, width, height, this.tex, flipX, flipY);
}

GLStitcher.prototype.Render = function( input, x,y, w,h) {
	this.hud.Render( input, x,y, w,h);
}