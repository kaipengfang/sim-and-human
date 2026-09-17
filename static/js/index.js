window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    // Teaser video play button functionality
    var teaserVideo = document.getElementById('teaser');
    var teaserPlayButton = document.getElementById('teaser-play-button');

    if (teaserVideo && teaserPlayButton) {
      // Click play button to play video
      teaserPlayButton.addEventListener('click', function() {
        teaserVideo.play();
        teaserPlayButton.style.display = 'none';
      });

      // Show play button when video is paused
      teaserVideo.addEventListener('pause', function() {
        teaserPlayButton.style.display = 'flex';
      });

      // Hide play button when video is playing
      teaserVideo.addEventListener('play', function() {
        teaserPlayButton.style.display = 'none';
      });

      // Hover effect for play button
      teaserPlayButton.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(0, 0, 0, 0.9)';
        this.style.transform = 'translate(-50%, -50%) scale(1.1)';
      });

      teaserPlayButton.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(0, 0, 0, 0.7)';
        this.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    }

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    bulmaSlider.attach();

})
