// informaiton.js
(function($){
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