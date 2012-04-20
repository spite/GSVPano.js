GSVPano - Google Street View Panorama Util
==================================================

Library to help requesting and stitching Google Street View panoramas.

Using
--------------------------------------

1. Include GSVPano.js or GSVPano.min.js
2. Include Google Maps API lib
3. The easiest code:

```js
var loader = new GSVPANO.PanoLoader();

loader.onPanoramaLoad = function() {

	/* ... */
	
};

loader.load( new google.maps.LatLng( 42.216188,-75.72657859999998 ) );
```