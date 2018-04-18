// adult.js
(function($) {

var adultBox = $('.adult_box');

var age = adultBox.find('.number_box');
// console.log(year);
// val()입력값을 가져오는것
var enterBtn = adultBox.find('.ok_btn').children('a');

var d = new Date();
var nowYear = d.getFullYear();
// console.log(nowYear);
var yearCut = nowYear-20;

  enterBtn.on('click',function(e){
  e.preventDefault();
  var year = age.val();
    console.log('age: '+year);
  if (year>=yearCut){
    window.location = 'https://www.youtube.com/channel/UCPUeGC_AL-OnDQORKhRm6iA';
    //enterBtn.attr({'href':'https://www.youtube.com/channel/UCPUeGC_AL-OnDQORKhRm6iA','target':'_blank'});
   }else{
    window.location = '../html/showmain.html';
   }
});


  var checkBtn = $('.check_btn');
  var check = $('#check');
  var checkTr =  checkBtn.hasClass('checked');
  // if (!checkTr){
  //   checkBtn.addClass('checked');
  // }else{
  //   checkBtn.removeClass('checked');
    
  // }

checkBtn.on('click', function(e){
  e.preventDefault();
  checkBtn.toggleClass('checked');
})

})(this.jQuery);