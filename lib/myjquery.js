$(document).ready(function()
{
	
	//jQuery UI Date
	$( "#aDate, #dDate" ).datepicker();


	//Room descriptions fadeToggle
	// $('.button').click(function(){
	// 	$(this).prev()
	// 	.fadeToggle(200);

	// });

	
	$('.button').click(function(){
    	$(this).next().toggle();
    
    if($('.desc').is(':visible')) {
      $(this).val('Click For Less');
    } else {
      $(this).val('Click For More');
    }
  });




	//Floating Navigation Bar
	 $(window).scroll(function () {
    	$('.nav-wrapper').css('top', $(document).scrollTop()); 
  	});

	 //Footer link To Top of Page
	 $('a[href=#]').click(function(){
	 	$('html').animate({scrollTop: 0}, 'slow');
	 	return false; // Return false to cancel the default link action
	 });


	
	 //ColorBox: A Lightbox Plugin (full size thubnail)
	$('a.lightbox').colorbox({ opacity:0.5 , rel:'group2' });


	

	


});

	//Un-used Code:

	//  //Resizing
	//  $(window).resize(function() {
		
	// });


	 /*//Custom Lightbox - used is to display full-sized versions of an image thumbnail in a modal dialog
	 $('a.lightbox').click(function(e) {
    	$('body').css('overflow-y', 'hidden'); // hide scrollbars!
    
    $('<div id="overlay"></div>')
      .css('top', $(document).scrollTop())
      .css('opacity', '0')
      .animate({'opacity': '0.5'}, 'slow')
      .appendTo('body');
      
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
      
    $('<img>')
      .attr('src', $(this).attr('href'))
      .load(function() {
        positionLightboxImage();
      })
      .click(function() {
        removeLightbox();
      })
      .appendTo('#lightbox');
    
    return false;
  });

});

  	function positionLightboxImage() 
  	{
  	var top = ($(window).height() - $('#lightbox').height()) / 2;
  	var left = ($(window).width() - $('#lightbox').width()) / 2;
	  $('#lightbox')
	    .css({
	      'top': top + $(document).scrollTop(),
	      'left': left
	    })
	    .fadeIn();
	}

	function removeLightbox() 
	{
	  $('#overlay, #lightbox')
	    .fadeOut('slow', function() {
	      $(this).remove();
	      $('body').css('overflow-y', 'auto'); // show scrollbars!
	    });
	}*/

