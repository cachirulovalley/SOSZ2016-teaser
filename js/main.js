/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function($) {

   /*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
   $(window).load(function() {

      // will first fade out the loading animation
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });

  	})

   /*---------------------------------------------------- */
	/* Final Countdown Settings
	------------------------------------------------------ */
	var finalDate = '2016/04/16';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<span>%D <em>días</em></span>' +
   									'<span>%H <em>horas</em></span>' +
   									'<span>%M <em>minutos</em></span>' +
   									'<span>%S <em>segundos</em></span>'));

   });

   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input').placeholder()


   /*----------------------------------------------------- */
   /* Modals
   ------------------------------------------------------- */
   $('.modal-toggles ul').on('click', 'a', function(e) {

   	var html     = $('html'),
   		main     = $('main, footer'),
   		footer   = $('footer'),
        curMod   = $(this).attr('href'),
        modal    = $(curMod),
        modClose = modal.find('#modal-close');

		main.fadeOut(500, function(){
			$('html,body').scrollTop(0);
        	modal.addClass('is-visible');
      });

      e.preventDefault();

      // for old ie
      if (html.hasClass('oldie')) {

      	$(document).on('click', "#modal-close", function(evt) {
	      	$('html,body').scrollTop(0);
	      	modal.removeClass('is-visible');
	      	setTimeout(function() {
	        		main.fadeIn(500);
	        	}, 500);

	        	evt.preventDefault();
      	});

      }
      // other browsers
      else {

      	modClose.on('click', function(evt) {
	      	$('html,body').scrollTop(0);
	      	modal.removeClass('is-visible');
	      	setTimeout(function() {
	        		main.fadeIn(500);
	        	}, 500);

	        	evt.preventDefault();
	      });

      }

   });

   /*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        items: 4,
        navigationText: false
    });


   /*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	  $('main h1, #mod-about h1').fitText(1.1, { minFontSize: '28px', maxFontSize: '38px' });

  	}, 100);


   /*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://cachirulovalley.us10.list-manage.com/subscribe/post?u=5ae11e25f8f74aee8cdce2757&amp;id=c2a2bc8ae6'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'Envíar': 'Enviando...',
	  0: '<i class="fa fa-check"></i> Te acabamos de envíar un email de confirmación',
	  1: '<i class="fa fa-warning"></i> Debes introducir una dirección de email válida.',
	  2: '<i class="fa fa-warning"></i> El email introducido no es válido.',
	  3: '<i class="fa fa-warning"></i> El email introducido no es válido.',
	  4: '<i class="fa fa-warning"></i> El email introducido no es válido.',
	  5: '<i class="fa fa-warning"></i> El email introducido no es válido.'
	}

	/*---------------------------------------------------- */
	/* Map
	------------------------------------------------------ */
	var latitude = 14.549072,
		 longitude = 121.046958,
		 map_zoom = 15,
		 main_color = '#d8ac00',
		 saturation_value= -30,
		 brightness_value= 5,
		 winWidth = $(window).width();

   // marker url
	if ( winWidth > 480 ) {
		marker_url = 'images/icon-location-b.png';
   } else {
      marker_url = 'images/icon-location.png';
   }

	// map style
	var style = [
		{
			// set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{ saturation: saturation_value }
			]
		},
	   {	// poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			// don't show highways lables on the map
	      featureType: 'road.highway',
	      elementType: 'labels',
	      stylers: [
	         { visibility: "off" }
	      ]
	   },
		{
			// don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{ visibility: "off" }
			]
		},
		{
			// don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{ visibility: "off" }
			]
		},
		{
			// don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{ visibility: "off" }
			]
		},
		// style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		}
	];

	// map options

	// var map_options = {
    //
    //   	center: new google.maps.LatLng(latitude, longitude),
    //   	zoom: 15,
    //   	panControl: false,
    //   	zoomControl: false,
    //     	mapTypeControl: false,
    //   	streetViewControl: false,
    //   	mapTypeId: google.maps.MapTypeId.ROADMAP,
    //   	scrollwheel: false,
    //   	styles: style
    //
    // 	};

   // inizialize the map
	//var map = new google.maps.Map(document.getElementById('map-container'), map_options);

	// add a custom marker to the map
	// var marker = new google.maps.Marker({
    //
	// 	 	position: new google.maps.LatLng(latitude, longitude),
	// 	 	map: map,
	// 	 	visible: true,
	// 	 	icon: marker_url
    //
	// 	});

	// add custom buttons for the zoom-in/zoom-out on the map
	// function CustomZoomControl(controlDiv, map) {
    //
	// 	// grap the zoom elements from the DOM and insert them in the map
	//  	var controlUIzoomIn= document.getElementById('map-zoom-in'),
	// 	  	 controlUIzoomOut= document.getElementById('map-zoom-out');
    //
	// 	controlDiv.appendChild(controlUIzoomIn);
	// 	controlDiv.appendChild(controlUIzoomOut);
    //
	// 	// Setup the click event listeners and zoom-in or out according to the clicked element
	// 	google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
	// 		map.setZoom(map.getZoom()+1)
	// 	});
	// 	google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
	// 		map.setZoom(map.getZoom()-1)
	// 	});
    //
	// }
    //
	// var zoomControlDiv = document.createElement('div');
	// var zoomControl = new CustomZoomControl(zoomControlDiv, map);
    //
	// // insert the zoom div on the top right of the map
	// map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);

    // Random Background
    var image = ["launching", "gagarin", "team-nasa", "theorizing", "training"],
    randomImage = Math.floor((Math.random() * 5)),
    background = 'url(/images/' + image[randomImage] + '.jpg),radial-gradient(1400px at 500px 50%, rgb(22, 45, 93) 0%, rgb(14, 75, 104) 100%)';
    $("#content-wrap").css("background", background);

})(jQuery);
