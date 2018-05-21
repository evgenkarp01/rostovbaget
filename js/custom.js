$(document).ready(function() {
   (function($) {
      $('.js-nav-menu-toggle').on('click', function() {
        $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
      });

      $('html').on('click', function(e) {
        if(!$(e.target).closest('.js-nav-menu').length &&
          ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
            $('.js-nav-menu').removeClass('navigation-menu--open');
        }
      });
    })(jQuery);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(function(){
      $('[name="phone"]').mask("+7(999) 999-99-99");
      $('[name="phone_modal"]').mask("8(999) 999-9999");
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

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
});