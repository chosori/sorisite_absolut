// shake.js
(function($){

// slide
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
      h1.css({top:winScroll/2+'px'});
      bannerBox.children('.banner_01').css({backgroundPosition:'center'+' '+ -winScroll/4+'px'});
      if(myView <= winScroll){
        var cocktailView =winScroll - myView;
        console.log(cocktailView);
        cocktailBox.css({backgroundPosition:'center'+' '+ -cocktailView/3+'px'});
      }

    });


      var baseUrl = "../media/video/";
  var videoList = [
                    {title:'cocktail', 
                    videoTitle:'absolut 레시피 영상'},
                   
                  ];

  var videoListLength = videoList.length;

  // video에 첫번째 영상 담기
  var video = $('.absolut_player').find('video');

  var i = 0;

  var playList = function(i){

    var playOrther = videoList[i];
    var playTitle = playOrther.title;
    var playStart = baseUrl + playTitle + '.mp4';

    return playStart;
  }; // playList;

  // video.append('<source src="' + playList(i) + '" type=video/mp4" />');
  video.prepend('<source />')
  var videoSrc = video.find('source');
  videoSrc.attr({'src' :playList(i), 'type': 'video/mp4'});

  var videoBtn = $('.play_btn');
  var pauseBtn = $('.stop_btn');

   videoBtn.on('click', function(e){
      e.preventDefault();
        video[0].play();
        videoBtn.removeClass('view');
        pauseBtn.addClass('view');
        // videoBtn.show();
    });

   pauseBtn.on('click', function(e){
      e.preventDefault();
        video[0].pause();
        pauseBtn.removeClass('view');
        videoBtn.addClass('view');
        // videoBtn.hide();
    });


  var movieBox = $('.absolut_player');

  movieBox.on('mouseleave', function(e){
    e.preventDefault();
    pauseBtn.stop().hide();
  });

  movieBox.on('mouseenter', function(e){
    e.preventDefault();
    pauseBtn.stop().show();
  });


})(this.jQuery);