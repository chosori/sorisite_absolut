// headBox.js
(function($){

// rwd------------------------


var originWinWidth = $(window).width();

// =======================================
  var gnb = $('#gnb');
  var menu = gnb.find('.menu');
  var gnb_nav = gnb.find('ul');


var mob = function(){
var openBtn = $('.open_btn');
var cnbBox = $('.gnb_box');
var bodyW = $('body').width();
var timed = 600;

// 1
// cnbBox.hide();

// 2.
cnbBox.css({transform:'translateX(' + bodyW + 'px)', transition:'all'+ ' ' + timed + 'ms ease',display:'block'});
var active =function(){ $('.active').css({transform:'translate(0)'}); };

openBtn.on('click',function(e) {
  e.preventDefault();
 // 1. slide기능으로 사라지거나 나타나게 만들기.
 // cnbBox.slideToggle();

 // 2. transform 기능으로 움직여서 처리하기
 // cnbBox.toggleClass('active');
 var cnbtr = cnbBox.hasClass('active');
  // console.log(cnbtr);
  if(!cnbtr){
    cnbBox.addClass('active');
    openBtn.addClass('active');
    cnbBox.css({transform:'translate(0)'});
    active();
  }else{
    cnbBox.removeClass('active');
    openBtn.removeClass('active');
    cnbBox.css({transform:'translateX(' + bodyW + 'px)'});
  }

});
};


var pc = function(){
  var langBox= $('.lang_box');
var langUl = langBox.children('.language');
var langLi = langUl.children('li');
var langA = langLi.children('a');
var gnbBox = $('.gnb_box');
gnbBox.show();
var langFn = function(){
  langLi.stop().slideDown();
};

langBox.on('mouseenter',function(){
  $(this).css({overflow:'inherit'});
});
langBox.on('mouseleave',function(){
  langBox.removeAttr('style');
});

langA.on('focus',function(){
  langBox.css({overflow:'inherit'});
}); 

langA.last().on('blur',function(){
  langBox.removeAttr('style');
})

};
// =======================================
var responsiveWeb = function() {
  if(originWinWidth < 960){
    mob();
  }else if(originWinWidth > 960){
    pc();
  }
};

responsiveWeb();


// =======================================

// ---------------------------------------------
  


// ---------------------------------------------



})(this.jQuery);