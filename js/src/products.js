 // product
(function($){
  var baseUrl = "../media/video/";
  var videoList = [
                    {title:'recipe', 
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