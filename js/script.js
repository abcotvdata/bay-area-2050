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




// <----------------------- map expansion ----------------------->

// $(".mapbuttonclick").click(function(){

// 	$(".map_button").fadeIn()
// 	$('body').css({'overflow':'hidden'})


// });

// $(".exitbutton").click(function(){
// 	$(".map_button").fadeOut()
// 	$('body').css({'overflow':'scroll'})
// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




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
