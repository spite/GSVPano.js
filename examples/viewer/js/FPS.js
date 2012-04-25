function FPS() {
			
	var time, frames = 0;
	var fps;
	var div = document.getElementById( 'fps' );
	
	var d = new Date();
	time = d.getTime();
	
	return {
	
		tick: function() {
			frames++;
			var d = new Date();
			var ctime = d.getTime();
			var diff = ( ctime - time );
			if( diff > 1000 ) {
				fps = ( 1000 * frames ) / diff;
				frames = 0;
				time = ctime;
				div.innerHTML = fps.toPrecision( 4 );
			}
		}
		
	};
	
}

var fps = new FPS();