$('#pagetop').hide();
 $(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
   $('#pagetop').fadeIn();
  } else {
   $('#pagetop').fadeOut();
  }
});
 
$('#pagetop').click(function () {
 $('body,html').animate({
  scrollTop: 0
 }, 700);
 return false;
});