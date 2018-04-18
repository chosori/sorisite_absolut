    // footBox.js


    (function($){
      var fnb01 = $('.fnb').children('button');
      var contentBox = $('#showinfoBox');
      // var showBox = contentBox.find('.popupBox');
      var btn = $('.esc_btn');

      fnb01.on('click',function(e){
        e.preventDefault();
        contentBox.slideDown();
        // showBox.slideDown();
      });

      btn.on('click', function(e){
        e.preventDefault();
        contentBox.fadeOut();
      });

    })(this.jQuery);