var opts = {
  lines: 17, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};

var spin = function() {
	var target = $('#spinner')[0];
	var spinner = new Spinner(opts).spin(target);	
	
	return spinner;	
}


var fb_id_array = [546911335, 
									100001665583956, 
									837428017, 
									100000171409187, 
									822712496, 
									709997316, 
									100003071006739];

function doSetTimeout(i, array) {	
  setTimeout(function() {
		picture_url = 'http://graph.facebook.com/' + array[i] + "/picture?height=200&type=normal&width=200";	
		$('#fb-pic').html('<img src="' + picture_url + '" >');		
	}, 300 * i);
}

function random_pics(){
	for (var i=0; i<length; i++){
	  doSetTimeout(i, fb_id_array);
	}
}


