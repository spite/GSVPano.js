# GSVPano - Google Street View Panorama Util

Library to help requesting and stitching Google Street View panoramas.

You can see it in use in a [WebGL Google Street View Panorama Viewer](http://www.clicktorelease.com/code/street).

#Using

1. Include GSVPano.js or GSVPano.min.js
2. Include Google Maps API lib
3. The easiest code:

```js
// Create a PanoLoader object
var loader = new GSVPANO.PanoLoader();

// Implement the onPanoramalLoad handler
loader.onPanoramaLoad = function() {

	/*
		Do your thing with 
		this.canvas: an HTML5 canvas with the texture
		this.copyright: the copyright of the images
	*/
	
};

// Invoke the load method with a LatLng point
loader.load( new google.maps.LatLng( 42.216188,-75.72657859999998 ) );
```