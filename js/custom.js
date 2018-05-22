$(document).ready(function() {
   (function($) {
      $('.js-nav-menu-toggle').on('click', function() {
        $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
        if(window.innerWidth<768){
          $('.js-nav-menu-toggle').toggleClass('navigation-menu__toggle-mobile');
        }
      });

      $('html').on('click', function(e) {
        if(!$(e.target).closest('.js-nav-menu').length &&
          ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
            $('.js-nav-menu').removeClass('navigation-menu--open');
        }
      });
    })(jQuery);

    
    
    
    
    
    $('.btn-banner button').on('click', function() {
        $('.modal-form').toggleClass('bg-modal-form');
      });
    
      
    
    
    
    
    
    
    
    
    
    $(function(){
        $('[name="phone_cont"]').mask("+7(999) 999-99-99");
        $('[name="phone"]').mask("+7(999) 999-99-99");
        $('[name="phone_modal"]').mask("+7(999) 999-99-99");
    });
    
    
    
    
    

    
    
    
        var locations = [
            ["Суворова 52", 47.225547, 39.728745, "http://ewal-web.ru/assets/site/img/marker.png"],
            ["Шолохова 7", 47.238116, 39.745126, "http://ewal-web.ru/assets/site/img/marker.png"],
        ];
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            styles: 
            [
                {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
                {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
                {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
                {"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}
            ],
            center: new google.maps.LatLng(47.231475,39.739586),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();
        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: {
                    url: locations[i][3],
                    scaledSize: new google.maps.Size(22, 22)
                }
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }

    
    
    
    
    
    
    
    
    
    
    
    
    
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
      
    
    
    
    
    
    











    wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 200,
            mobile: false,
            live: true
        })
        wow.init();








    
    $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $('.images .img-preview .item').on('click', function(event){
        event.preventDefault();
        var attr_src = $(this).find('img').attr('src');
        $('.images .img-full img').attr('src', attr_src);
        $('#img-attr').attr('href', attr_src);
        $('.images .img-anim .inner').toggleClass('wrp');
        $('.images .img-anim .inner').toggleClass('tgl');
    });
    $(function (){
		var attr_src_load = $('.images .img-preview .item img').first().attr('src');
        $('.images .img-full img').attr('src', attr_src_load);
        $('#img-attr').attr('href', attr_src_load);
	});
    
    








    
    
    
    
    
    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }

    
    $('#btn_modal').on('click', function(){
        if(($('[name="name_modal"]').val()!='')&&($('[name="phone_modal"]').val()!='')&&($('[name="phone_modal"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });
    $('#btn_cont').on('click', function(){
        if(($('[name="name_cont"]').val()!='')&&($('[name="phone_cont"]').val()!='')&&($('[name="phone_cont"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });
    $('#btn_stock').on('click', function(){
        if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     $("a.ancLinks").click(function () { 
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html,body').animate( { scrollTop: destination }, 400 );
			return false;
		});
    
    $(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup, .callme').fadeIn();
			}
			else {
				$('.scrollup, .callme').fadeOut();
			}
		});

		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
    
    
    
    
    
    
    
    



    
});



























