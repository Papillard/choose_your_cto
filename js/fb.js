$(document).ready(function() {
	window.fbAsyncInit = function() {
		FB.init({
			appId      : 'APP_ID',
			status     : true,
			xfbml      : true
		});
		
		FB.Event.subscribe('auth.authResponseChange', function(response) {
		  if (response.status === 'connected') {
		    console.log('Logged in');
				FB.api('/me', function(user) {
					spinner = spin();
					random_pics();
					setTimeout(function(){ 
						spinner.stop();
						picture_url = 'http://graph.facebook.com/' + user.id + '/picture?height=200&type=normal&width=200'
						fb_pic = $('#fb-pic').html('<img src="' + picture_url + '">').hide();
						fb_pic.fadeIn(2000);
					},2000);
					
				});
		  } else {
		    FB.login();
		  }
		});
	}; // Window

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "http://connect.facebook.net/en_US/all.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

});

