// drinsList.js
(function($) {

// var modalBox = $('#modalBox');

// modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

//   var viewBox = $('.view_box'),  listWrap = $('.list_box'), listBox = listWrap.find('ul');

//     viewBox.append($('<div>',{class:'slide_btn'}));
//   $('.slide_btn').append($('<button>',{type:'button', class:'left_btn'}));
//   $('.slide_btn').append($('<button>',{type:'button', class:'right_btn'}));
//   $('.left_btn').append($('<i>',{class:'fa fa-arrow-left'}), $('<span>', {class:'hidden', text:'이전 이미지 보기'}) );
//   $('.right_btn').append($('<i>',{class:'fa fa-arrow-right'}), $('<span>', {class:'hidden', text:'다음 이미지 보기'}) );
//  var modalLeft  = viewBox.find('.left_btn');
//  var modalRight = viewBox.find('.right_btn');

//  // 5. json파일불러오기(서버구동필수)
// var jsonUrl = '../../js/data/modalImage.json';
// var baseDir    = '../../img/drins_list/', thumDir = baseDir + 'modal_img/';
// $.getJSON(jsonUrl,  function(data){ // console.log(data);
//   var i          = 0, dataLength = data.length;
//   for(; i<dataLength; i++){
//     listBox.append('<li><a href="../../html/products.html"></a></li>');
//     listBox.children('li').eq(i).find('a').append($('<img />',{alt:data[i].thum, src:thumDir + data[i].file }));
//   }

// // 모달창에서만 키포커스 움직이기
//   viewBox.find('button').last().on('blur',function(event) {
//         viewBox.find('button.close').focus();
//     // console.log(event.type);   
//   });


//   // 모달창 키보드 제어
//   function mView() {
//     var viewBoxSee = viewBox.css('display') == 'block';
//     // console.log(viewBoxSee);
//     if(viewBoxSee){
//       $(document).unbind('keydown');    

//       $(document).on('keydown', function(event) {
//         // console.log(event.key, event.keyCode, event.which);
//         // ArrowLeft 37, ArrowRight 39, Escape 27
//           switch (event.which){ 
//             case 37:
//               modalLeft.focus();
//               modalLeft.trigger('click');    
//               break;
//             case 39:
//               modalRight.focus();
//               modalRight.trigger('click');  
//               break;
//             case 27:
//               viewBox.find('.close').focus();     
//               viewBox.find('.close').trigger('click'); 
//               break;
//           } 
//       });
//     }// if(viewBoxSee)
//   }//  function mView();
//   mView();

//   //1. 모달 리스트내용을 일부만 보이게 만들자!
// listWrap.css({height:'250px', overflow:'hidden', position:'relative'});
// listBox.css({position:'absolute', left:'50%', marginLeft:'-460px', marginTop:'0', top:'0'});

// listWrap.prepend($('<div>',{class:'list_view_btn', 
//                    append:'<button class="list_view_left_btn"></button><button class="list_view_right_btn"></button>'}));
// var listViewBtn = $('.list_view_btn'), listLBtn = $('.list_view_left_btn'),listRBtn = $('.list_view_right_btn');

// listViewBtn.children('button').append( $('<i></i>',{class:'fa'}), $('<span></span>',{class:'hidden'}));

// listLBtn.find('i').addClass('fa-angle-left');
// listRBtn.find('i').addClass('fa-angle-right');

// listLBtn.find('span').text('이전목록보기');
// listRBtn.find('span').text('다음목록보기');

// listViewBtn.css({position:'absolute', top:'50%', left:'50%', marginTop:'-50px', marginLeft:'-480px',
//                       width:'960px', height:0});
// listViewBtn.find('button').css({width:'50px', height:'100px', fontSize:'3rem', background:'inherit'});
// listLBtn.css({float:'left', marginLeft:'-100px'});
// listRBtn.css({float:'right',  marginRight:'-100px'});

// listViewBtn.find('i').css({fontSize:'4rem', color:'#fff'});

// // listBtn 내부 좌우버튼(listLBtn, listRBtn) 클릭시 내부 목록을 순차적으로 보이게 만들기

// var listBoxTop = 0;
// listViewBtn.children('button').on('click', function(e) {
//   e.preventDefault();
//   var _this = $(this);
//   var mv = 290;

//   if(_this[0] == listRBtn[0]){
//     listBoxTop -= mv;

//     (listBoxTop <= -listBox.height()) ? listBoxTop = -listBox.height()+mv : listBoxTop;

//   }else if(_this[0] == listLBtn[0]  && !listBoxTop <= 0){
//     if(listBoxTop >= 0){ 
//       listBoxTop = 0
//     }else{
//       listBoxTop += mv;  
//     }
//   }


//   listBox.stop().animate({marginTop:listBoxTop + 'px'});
//   });

//  }); // $.getJSON



// // gallery

// var galleryView = $('.gallery_view');
// var url         = '../../img/drins_list/';
// var thumUrl     = url+'thum/';
// var bigUrl      = url+'big/';
// var galleryList = $('.gallery_btn').children('ul').children('li');
// var i           = 0;

//   for(;i < galleryList.length; i++){
//     galleryList.eq(i).find('button').css({backgroundImage:'url(' + thumUrl + 'small_0' + (i+1) + '.jpg)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'});
//   }
//   // list 클릭
//   galleryList.on('click',function(e) {
//     e.preventDefault();
//     var _this = $(this);
//     var thisI = _this.index() + 1;
//     var link  = _this.find('button').attr('data-link');

//     galleryView.css({backgroundImage:'url(' + bigUrl + 'big_0' + thisI + '.jpg)'});
//     galleryView.children('a').attr({'href':link});
//   });

// rwd------------------------


var originWinWidth = $(window).width();

// =======================================
  var gnb = $('#gnb');
  var menu = gnb.find('.menu');
  var gnb_nav = gnb.find('ul');
  var mobSize     = 481;
  var tabSize     = 768;
  var pcSize      = 960;
  var pcfullSize  = 1366;

// mob ----------------------------------------------
var mob = function(){
var modalBox = $('#modalBox');

modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

  var viewBox = $('.view_box'),  listWrap = $('.list_box'), listBox = listWrap.find('ul');

    viewBox.append($('<div>',{class:'slide_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'left_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'right_btn'}));
  $('.left_btn').append($('<i>',{class:'fa fa-arrow-left'}), $('<span>', {class:'hidden', text:'이전 이미지 보기'}) );
  $('.right_btn').append($('<i>',{class:'fa fa-arrow-right'}), $('<span>', {class:'hidden', text:'다음 이미지 보기'}) );
 var modalLeft  = viewBox.find('.left_btn');
 var modalRight = viewBox.find('.right_btn');

 // 5. json파일불러오기(서버구동필수)
var jsonUrl = '../../js/data/modalImage.json';
var baseDir    = '../../img/drins_list/', thumDir = baseDir + 'modal_img/';
$.getJSON(jsonUrl,  function(data){ // console.log(data);
  var i          = 0, dataLength = data.length;
  for(; i<dataLength; i++){
    listBox.append('<li><a href="../../html/products.html"></a></li>');
    listBox.children('li').eq(i).find('a').append($('<img />',{alt:data[i].thum, src:thumDir + data[i].file }));
  }

// 모달창에서만 키포커스 움직이기
  viewBox.find('button').last().on('blur',function(event) {
        viewBox.find('button.close').focus();
    // console.log(event.type);   
  });


  // 모달창 키보드 제어
  function mView() {
    var viewBoxSee = viewBox.css('display') == 'block';
    // console.log(viewBoxSee);
    if(viewBoxSee){
      $(document).unbind('keydown');    

      $(document).on('keydown', function(event) {
        // console.log(event.key, event.keyCode, event.which);
        // ArrowLeft 37, ArrowRight 39, Escape 27
          switch (event.which){ 
            case 37:
              modalLeft.focus();
              modalLeft.trigger('click');    
              break;
            case 39:
              modalRight.focus();
              modalRight.trigger('click');  
              break;
            case 27:
              viewBox.find('.close').focus();     
              viewBox.find('.close').trigger('click'); 
              break;
          } 
      });
    }// if(viewBoxSee)
  }//  function mView();
  mView();

  //1. 모달 리스트내용을 일부만 보이게 만들자!
listWrap.css({height:'260px', overflow:'hidden', position:'relative'});
listBox.css({position:'absolute', left:'50%', marginLeft:'-240px', top:'0'});

listWrap.prepend($('<div>',{class:'list_view_btn', 
                   append:'<button class="list_view_left_btn"></button><button class="list_view_right_btn"></button>'}));
var listViewBtn = $('.list_view_btn'), listLBtn = $('.list_view_left_btn'),listRBtn = $('.list_view_right_btn');

listViewBtn.children('button').append( $('<i></i>',{class:'fa'}), $('<span></span>',{class:'hidden'}));

var imageUrl = '../../img/';
// background
listLBtn.css({backgroundImage:'url('+imageUrl+'left.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});
listRBtn.css({backgroundImage:'url('+imageUrl+'right_btn.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});

// listLBtn.find('i').addClass('fa-angle-left');
// listRBtn.find('i').addClass('fa-angle-right');

listLBtn.find('span').text('이전목록보기');
listRBtn.find('span').text('다음목록보기');

listViewBtn.css({position:'absolute', top:'50%', left:'0', marginTop:'-50px', /*marginLeft:'-100px',*/ zIndex:'100',
                      width:'100%', height:0});
listViewBtn.find('button').css({width:'50px', height:'100px', fontSize:'3rem'});
listLBtn.css({float:'left', marginLeft:'20px'});
listRBtn.css({float:'right',  marginRight:'20px'});

listViewBtn.find('i').css({fontSize:'4rem', color:'#fff'});

// listBtn 내부 좌우버튼(listLBtn, listRBtn) 클릭시 내부 목록을 순차적으로 보이게 만들기

var listBoxTop = 0;
listViewBtn.children('button').on('click', function(e) {
  e.preventDefault();
  var _this = $(this);
  var mv = 280;

  if(_this[0] == listRBtn[0]){
    listBoxTop -= mv;

    (listBoxTop <= -listBox.height()) ? listBoxTop = -listBox.height()+mv : listBoxTop;

  }else if(_this[0] == listLBtn[0]  && !listBoxTop <= 0){
    if(listBoxTop >= 0){ 
      listBoxTop = 0
    }else{
      listBoxTop += mv;  
    }
  }


  listBox.stop().animate({marginTop:listBoxTop + 'px'});
  });

 }); // $.getJSON



// gallery

var galleryView = $('.gallery_view');
var url         = '../../img/drins_list/';
var thumUrl     = url+'thum/';
var bigUrl      = url+'big/';
var galleryList = $('.gallery_btn').children('ul').children('li');
var i           = 0;

  for(;i < galleryList.length; i++){
    galleryList.eq(i).find('button').css({backgroundImage:'url(' + thumUrl + 'small_0' + (i+1) + '.jpg)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'});
  }
  // list 클릭
  galleryList.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    var thisI = _this.index() + 1;
    var link  = _this.find('button').attr('data-link');

    galleryView.css({backgroundImage:'url(' + bigUrl + 'big_0' + thisI + '.jpg)'});
    galleryView.children('a').attr({'href':link});
  });
}; // mob
// ==================================================


// tablet ---------------------------------------
var tablet = function(){

  var modalBox = $('#modalBox');

modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

  var viewBox = $('.view_box'),  listWrap = $('.list_box'), listBox = listWrap.find('ul');

    viewBox.append($('<div>',{class:'slide_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'left_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'right_btn'}));
  $('.left_btn').append($('<i>',{class:'fa fa-arrow-left'}), $('<span>', {class:'hidden', text:'이전 이미지 보기'}) );
  $('.right_btn').append($('<i>',{class:'fa fa-arrow-right'}), $('<span>', {class:'hidden', text:'다음 이미지 보기'}) );
 var modalLeft  = viewBox.find('.left_btn');
 var modalRight = viewBox.find('.right_btn');

 // 5. json파일불러오기(서버구동필수)
var jsonUrl = '../../js/data/modalImage.json';
var baseDir    = '../../img/drins_list/', thumDir = baseDir + 'modal_img/';
$.getJSON(jsonUrl,  function(data){ // console.log(data);
  var i          = 0, dataLength = data.length;
  for(; i<dataLength; i++){
    listBox.append('<li><a href="../../html/products.html"></a></li>');
    listBox.children('li').eq(i).find('a').append($('<img />',{alt:data[i].thum, src:thumDir + data[i].file }));
  }

// 모달창에서만 키포커스 움직이기
  viewBox.find('button').last().on('blur',function(event) {
        viewBox.find('button.close').focus();
    // console.log(event.type);   
  });


  // 모달창 키보드 제어
  function mView() {
    var viewBoxSee = viewBox.css('display') == 'block';
    // console.log(viewBoxSee);
    if(viewBoxSee){
      $(document).unbind('keydown');    

      $(document).on('keydown', function(event) {
        // console.log(event.key, event.keyCode, event.which);
        // ArrowLeft 37, ArrowRight 39, Escape 27
          switch (event.which){ 
            case 37:
              modalLeft.focus();
              modalLeft.trigger('click');    
              break;
            case 39:
              modalRight.focus();
              modalRight.trigger('click');  
              break;
            case 27:
              viewBox.find('.close').focus();     
              viewBox.find('.close').trigger('click'); 
              break;
          } 
      });
    }// if(viewBoxSee)
  }//  function mView();
  mView();

  //1. 모달 리스트내용을 일부만 보이게 만들자!
listWrap.css({height:'250px', overflow:'hidden', position:'relative'});
listBox.css({position:'absolute', left:'50%', marginLeft:'-240px', top:'0'});

listWrap.prepend($('<div>',{class:'list_view_btn', 
                   append:'<button class="list_view_left_btn"></button><button class="list_view_right_btn"></button>'}));
var listViewBtn = $('.list_view_btn'), listLBtn = $('.list_view_left_btn'),listRBtn = $('.list_view_right_btn');

listViewBtn.children('button').append( $('<i></i>',{class:'fa'}), $('<span></span>',{class:'hidden'}));

var imageUrl = '../../img/';
// background
listLBtn.css({backgroundImage:'url('+imageUrl+'left.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});
listRBtn.css({backgroundImage:'url('+imageUrl+'right_btn.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});

// listLBtn.find('i').addClass('fa-angle-left');
// listRBtn.find('i').addClass('fa-angle-right');

listLBtn.find('span').text('이전목록보기');
listRBtn.find('span').text('다음목록보기');

listViewBtn.css({position:'absolute', top:'50%', left:'0', marginTop:'-50px', /*marginLeft:'-100px',*/ zIndex:'100',
                      width:'100%', height:0});
listViewBtn.find('button').css({width:'50px', height:'100px', fontSize:'3rem'});
listLBtn.css({float:'left', marginLeft:'20px'});
listRBtn.css({float:'right',  marginRight:'20px'});

listViewBtn.find('i').css({fontSize:'4rem', color:'#fff'});

// listBtn 내부 좌우버튼(listLBtn, listRBtn) 클릭시 내부 목록을 순차적으로 보이게 만들기

var listBoxTop = 0;
listViewBtn.children('button').on('click', function(e) {
  e.preventDefault();
  var _this = $(this);
  var mv = 250;

  if(_this[0] == listRBtn[0]){
    listBoxTop -= mv;

    (listBoxTop <= -listBox.height()) ? listBoxTop = -listBox.height()+mv : listBoxTop;

  }else if(_this[0] == listLBtn[0]  && !listBoxTop <= 0){
    if(listBoxTop >= 0){ 
      listBoxTop = 0
    }else{
      listBoxTop += mv;  
    }
  }


  listBox.stop().animate({marginTop:listBoxTop + 'px'});
  });

 }); // $.getJSON



// gallery

var galleryView = $('.gallery_view');
var url         = '../../img/drins_list/';
var thumUrl     = url+'thum/';
var bigUrl      = url+'big/';
var galleryList = $('.gallery_btn').children('ul').children('li');
var i           = 0;

  for(;i < galleryList.length; i++){
    galleryList.eq(i).find('button').css({backgroundImage:'url(' + thumUrl + 'small_0' + (i+1) + '.jpg)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'});
  }
  // list 클릭
  galleryList.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    var thisI = _this.index() + 1;
    var link  = _this.find('button').attr('data-link');

    galleryView.css({backgroundImage:'url(' + bigUrl + 'big_0' + thisI + '.jpg)'});
    galleryView.children('a').attr({'href':link});
  });

}; // tablet


// pc -----------------------------------------
var pc = function(){
var modalBox = $('#modalBox');

modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

  var viewBox = $('.view_box'),  listWrap = $('.list_box'), listBox = listWrap.find('ul');

    viewBox.append($('<div>',{class:'slide_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'left_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'right_btn'}));
  $('.left_btn').append($('<i>',{class:'fa fa-arrow-left'}), $('<span>', {class:'hidden', text:'이전 이미지 보기'}) );
  $('.right_btn').append($('<i>',{class:'fa fa-arrow-right'}), $('<span>', {class:'hidden', text:'다음 이미지 보기'}) );
 var modalLeft  = viewBox.find('.left_btn');
 var modalRight = viewBox.find('.right_btn');

 // 5. json파일불러오기(서버구동필수)
var jsonUrl = '../../js/data/modalImage.json';
var baseDir    = '../../img/drins_list/', thumDir = baseDir + 'modal_img/';
$.getJSON(jsonUrl,  function(data){ // console.log(data);
  var i          = 0, dataLength = data.length;
  for(; i<dataLength; i++){
    listBox.append('<li><a href="../../html/products.html"></a></li>');
    listBox.children('li').eq(i).find('a').append($('<img />',{alt:data[i].thum, src:thumDir + data[i].file }));
  }

// 모달창에서만 키포커스 움직이기
  viewBox.find('button').last().on('blur',function(event) {
        viewBox.find('button.close').focus();
    // console.log(event.type);   
  });


  // 모달창 키보드 제어
  function mView() {
    var viewBoxSee = viewBox.css('display') == 'block';
    // console.log(viewBoxSee);
    if(viewBoxSee){
      $(document).unbind('keydown');    

      $(document).on('keydown', function(event) {
        // console.log(event.key, event.keyCode, event.which);
        // ArrowLeft 37, ArrowRight 39, Escape 27
          switch (event.which){ 
            case 37:
              modalLeft.focus();
              modalLeft.trigger('click');    
              break;
            case 39:
              modalRight.focus();
              modalRight.trigger('click');  
              break;
            case 27:
              viewBox.find('.close').focus();     
              viewBox.find('.close').trigger('click'); 
              break;
          } 
      });
    }// if(viewBoxSee)
  }//  function mView();
  mView();

//1. 모달 리스트내용을 일부만 보이게 만들자!
listWrap.css({height:'250px', overflow:'hidden', position:'relative'});
listBox.css({position:'absolute', left:'50%', marginLeft:'-460px', top:'0'});

listWrap.prepend($('<div>',{class:'list_view_btn', 
                   append:'<button class="list_view_left_btn"></button><button class="list_view_right_btn"></button>'}));
var listViewBtn = $('.list_view_btn'), listLBtn = $('.list_view_left_btn'),listRBtn = $('.list_view_right_btn');

listViewBtn.children('button').append( $('<i></i>',{class:'fa'}), $('<span></span>',{class:'hidden'}));

var imageUrl = '../../img/';
// background
listLBtn.css({backgroundImage:'url('+imageUrl+'left.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});
listRBtn.css({backgroundImage:'url('+imageUrl+'right_btn.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});

// listLBtn.find('i').addClass('fa-angle-left');
// listRBtn.find('i').addClass('fa-angle-right');

listLBtn.find('span').text('이전목록보기');
listRBtn.find('span').text('다음목록보기');

listViewBtn.css({position:'absolute', top:'50%', left:'0', marginTop:'-50px', /*marginLeft:'-100px',*/ zIndex:'100',
                      width:'100%', height:0});
listViewBtn.find('button').css({width:'50px', height:'100px', fontSize:'3rem'});
listLBtn.css({float:'left', marginLeft:'10px'});
listRBtn.css({float:'right',  marginRight:'10px'});

listViewBtn.find('i').css({fontSize:'4rem', color:'#fff'});

// listBtn 내부 좌우버튼(listLBtn, listRBtn) 클릭시 내부 목록을 순차적으로 보이게 만들기

var listBoxTop = 0;
listViewBtn.children('button').on('click', function(e) {
  e.preventDefault();
  var _this = $(this);
  var mv = 290;

  if(_this[0] == listRBtn[0]){
    listBoxTop -= mv;

    (listBoxTop <= -listBox.height()) ? listBoxTop = -listBox.height()+mv : listBoxTop;

  }else if(_this[0] == listLBtn[0]  && !listBoxTop <= 0){
    if(listBoxTop >= 0){ 
      listBoxTop = 0
    }else{
      listBoxTop += mv;  
    }
  }


  listBox.stop().animate({marginTop:listBoxTop + 'px'});
  });

 }); // $.getJSON




// gallery

var galleryView = $('.gallery_view');
var url         = '../../img/drins_list/';
var thumUrl     = url+'thum/';
var bigUrl      = url+'big/';
var galleryList = $('.gallery_btn').children('ul').children('li');
var i           = 0;

  for(;i < galleryList.length; i++){
    galleryList.eq(i).find('button').css({backgroundImage:'url(' + thumUrl + 'small_0' + (i+1) + '.jpg)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'});
  }
  // list 클릭
  galleryList.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    var thisI = _this.index() + 1;
    var link  = _this.find('button').attr('data-link');

    galleryView.css({backgroundImage:'url(' + bigUrl + 'big_0' + thisI + '.jpg)'});
    galleryView.children('a').attr({'href':link});
  });


}; // pc


// full ----------------------------------------------

var full = function(){
var modalBox = $('#modalBox');

modalBox.append('<div class="list_box"><ul class="clearfix"></ul></div>'); //아래방법으로 대체가능

  var viewBox = $('.view_box'),  listWrap = $('.list_box'), listBox = listWrap.find('ul');

    viewBox.append($('<div>',{class:'slide_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'left_btn'}));
  $('.slide_btn').append($('<button>',{type:'button', class:'right_btn'}));
  $('.left_btn').append($('<i>',{class:'fa fa-arrow-left'}), $('<span>', {class:'hidden', text:'이전 이미지 보기'}) );
  $('.right_btn').append($('<i>',{class:'fa fa-arrow-right'}), $('<span>', {class:'hidden', text:'다음 이미지 보기'}) );
 var modalLeft  = viewBox.find('.left_btn');
 var modalRight = viewBox.find('.right_btn');

 // 5. json파일불러오기(서버구동필수)
var jsonUrl = '../../js/data/modalImage.json';
var baseDir    = '../../img/drins_list/', thumDir = baseDir + 'modal_img/';
$.getJSON(jsonUrl,  function(data){ // console.log(data);
  var i          = 0, dataLength = data.length;
  for(; i<dataLength; i++){
    listBox.append('<li><a href="../../html/products.html"></a></li>');
    listBox.children('li').eq(i).find('a').append($('<img />',{alt:data[i].thum, src:thumDir + data[i].file }));
  }

// 모달창에서만 키포커스 움직이기
  viewBox.find('button').last().on('blur',function(event) {
        viewBox.find('button.close').focus();
    // console.log(event.type);   
  });


  // 모달창 키보드 제어
  function mView() {
    var viewBoxSee = viewBox.css('display') == 'block';
    // console.log(viewBoxSee);
    if(viewBoxSee){
      $(document).unbind('keydown');    

      $(document).on('keydown', function(event) {
        // console.log(event.key, event.keyCode, event.which);
        // ArrowLeft 37, ArrowRight 39, Escape 27
          switch (event.which){ 
            case 37:
              modalLeft.focus();
              modalLeft.trigger('click');    
              break;
            case 39:
              modalRight.focus();
              modalRight.trigger('click');  
              break;
            case 27:
              viewBox.find('.close').focus();     
              viewBox.find('.close').trigger('click'); 
              break;
          } 
      });
    }// if(viewBoxSee)
  }//  function mView();
  mView();

//1. 모달 리스트내용을 일부만 보이게 만들자!
listWrap.css({height:'250px', overflow:'hidden', position:'relative'});
listBox.css({position:'absolute', left:'50%', marginLeft:'-460px', top:'0'});

listWrap.prepend($('<div>',{class:'list_view_btn', 
                   append:'<button class="list_view_left_btn"></button><button class="list_view_right_btn"></button>'}));
var listViewBtn = $('.list_view_btn'), listLBtn = $('.list_view_left_btn'),listRBtn = $('.list_view_right_btn');

listViewBtn.children('button').append( $('<i></i>',{class:'fa'}), $('<span></span>',{class:'hidden'}));

var imageUrl = '../../img/';
// background
listLBtn.css({backgroundImage:'url('+imageUrl+'left.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});
listRBtn.css({backgroundImage:'url('+imageUrl+'right_btn.png)',backgroundRepeat:'no-repeat',backgroundColor:'#111',backgroundSize:'100%', backgroundPosition:'center'});

// listLBtn.find('i').addClass('fa-angle-left');
// listRBtn.find('i').addClass('fa-angle-right');

listLBtn.find('span').text('이전목록보기');
listRBtn.find('span').text('다음목록보기');

listViewBtn.css({position:'absolute', top:'50%', left:'0', marginTop:'-50px', /*marginLeft:'-100px',*/ zIndex:'100',
                      width:'100%', height:0});
listViewBtn.find('button').css({width:'50px', height:'100px', fontSize:'3rem'});
listLBtn.css({float:'left', marginLeft:'90px'});
listRBtn.css({float:'right',  marginRight:'90px'});


listViewBtn.find('i').css({fontSize:'4rem', color:'#fff'});

// listBtn 내부 좌우버튼(listLBtn, listRBtn) 클릭시 내부 목록을 순차적으로 보이게 만들기

var listBoxTop = 0;
listViewBtn.children('button').on('click', function(e) {
  e.preventDefault();
  var _this = $(this);
  var mv = 290;

  if(_this[0] == listRBtn[0]){
    listBoxTop -= mv;

    (listBoxTop <= -listBox.height()) ? listBoxTop = -listBox.height()+mv : listBoxTop;

  }else if(_this[0] == listLBtn[0]  && !listBoxTop <= 0){
    if(listBoxTop >= 0){ 
      listBoxTop = 0
    }else{
      listBoxTop += mv;  
    }
  }


  listBox.stop().animate({marginTop:listBoxTop + 'px'});
  });

 }); // $.getJSON




// gallery

var galleryView = $('.gallery_view');
var url         = '../../img/drins_list/';
var thumUrl     = url+'thum/';
var bigUrl      = url+'big/';
var galleryList = $('.gallery_btn').children('ul').children('li');
var i           = 0;

  for(;i < galleryList.length; i++){
    galleryList.eq(i).find('button').css({backgroundImage:'url(' + thumUrl + 'small_0' + (i+1) + '.jpg)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'});
  }
  // list 클릭
  galleryList.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    var thisI = _this.index() + 1;
    var link  = _this.find('button').attr('data-link');

    galleryView.css({backgroundImage:'url(' + bigUrl + 'big_0' + thisI + '.jpg)'});
    galleryView.children('a').attr({'href':link});
  });


}; // full
// =======================================
var responsiveWeb = function() {
  if(originWinWidth < mobSize){
    mob();
  }else if (originWinWidth <= tabSize){
    tablet();
  }
  else if(originWinWidth  > pcfullSize){
    full();
  }else{
    pc();
  }
};

responsiveWeb();


// =======================================

// ---------------------------------------------
  
console.log($(window).width());


// ---------------------------------------------


})(this.jQuery);