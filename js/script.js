/* script.js 
   Project: Bay Area 2050
   Date: May 2024
*/

$(document).ready(function(){ // begin document.ready block

	
	var iframe = document.getElementById('iframe1'),
	lastheight;

setInterval(function(){
	if (iframe.document.body.scrollheight != lastheight) {
			// adjust the iframe's size

			lastheight = iframe.document.body.scrollheight;
	}
}, 200);




var linkleng = links.length

	for (var i=0; i<linkleng; i++) {

		// MAKE THE LINKS EITHER APPEAR OR DON'T APPEAR!

		if (links[i].storylink=="NONE") {
					
				$('.photoblocks').append('<div class="photos"><div class="logo withNotag"><img src="logos/' + links[i].station + '.png"></div><p>' + links[i].p + '</p></div>')	
					
			} else {

				$('.photoblocks').append('<a class="atags" href="' + links[i].storylink + '" target="_blank"><div class="photos"><div class="logo"><img src="logos/' + links[i].station + '.png"></div><p>' + links[i].p + '</p></div></a>')	
			}



		// IF YOU CLICK, AN ALERT COMES UP OR IT DOESN'T

		$('.withNotag', this).on("click", function(){
			$(".alert").show()
			$('body').css({'overflow':'hidden'})
		});
		

		$(".exitbutton").click(function(){
			$(".alert").hide()
			$('body').css({'overflow':'scroll'})
		});

	
		
	}	

}); //end document.ready block
