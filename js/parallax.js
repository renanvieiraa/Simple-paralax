window.onload = function(){
  parallax();
}
$('.parallax').mousemove(function(){
  parallax(event);
})
function parallax(){
  let image = $('.parallax').children('div');
  let xPos = event.pageX;
  let yPos = event.pageY;
  let resultX = (xPos - $(this).width()/2)*(-1);
  let resultY = (yPos - $(this).height()/2)*(-1);
  
  image.each(function(){
    // $('.parallax').children('div')[0].style.left = Math.round(resultX / 100);
    // $('.parallax').children('div')[0].style.top = Math.round(resultY / 100);
    $(this).animate({
      left: resultX + 100,
      top: resultY+ 100
    },{
      duration: 50,
      queue: false,
      easing: 'linear'
    });
    console.log(resultX+100,resultY);
  })

  
  // console.log(image[0]);
  // console.log(event.pageY);
  // $('.parallax').children('div');

}