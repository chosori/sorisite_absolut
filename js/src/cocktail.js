// cocktail.js
(function($){

// slide
// var bannerBox = $('#cocktailBox');
// // 배너 올라가는 느낌
// $(window).on('scroll',function(){
//   var scrollOffset = $(this).scrollTop();
//   // console.log(scrollOffset);
//   bannerBox.css({top:-scrollOffset/10});
// });


    var bannerBox = $('#bannerBox');
    var cocktailBox = $('#cocktailBox');
    var cocktailOffset = cocktailBox.offset().top;
    console.log(cocktailOffset);
    var bodyH = $('body').height();
    console.log(bodyH);
    var myView = cocktailOffset - bodyH;
    console.log(myView);
    var h1 = $('h1').css({position:'relative', top:0});
    $(window).on('scroll', function(){
      var winScroll = $(this).scrollTop();
      h1.css({top:winScroll/3+'px'});
      bannerBox.children('.banner_01').css({backgroundPosition:'center'+' '+ -winScroll/4+'px'});
      if(myView <= winScroll){
        var cocktailView =winScroll - myView;
        console.log(cocktailView);
        cocktailBox.css({backgroundPosition:'center'+' '+ -cocktailView/3+'px'});
      }

    });


})(this.jQuery);