//顶部导航下降控制
$(window).bind("scroll",function(){
  var wtop = $(window).scrollTop();
  if(wtop>=760){
    $("header").addClass("Navigation")
  }
  else{
    $("header").removeClass("Navigation")
  }
})

//返回顶部按钮
$(window).bind("scroll",function(){
  var gotop = $(window).scrollTop();
  if(gotop>=800){
    $(".scrolltop").fadeIn(200)
  }
  else{
    $(".scrolltop").fadeOut(200)
  }
})
$(".scrolltop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },500)
})
//导航点击跳转

var Reveal = {
  delay:300,
  distance:"50px",
  duration:500,
  easing:"ease-in-out",
  origin:"bottom"
}
ScrollReveal().reveal('.busines',{...Reveal,interval:300});
ScrollReveal().reveal('.service-item',{...Reveal,interval:300});


ScrollReveal().reveal('.data',{
  beforeReveal: function(){
    anime({
      targets:".math .num",
      innerHTML(el){
        return [0,el.innerHTML]
      },
      duration:2000,
      round: 1,
      easing:"easeOutExpo"
    })
  }
})

var scroll = new SmoothScroll('nav a[href*="#"], .scrolltop a[href*="#"]',{
  header:"header",
  offset:70,
})
$(".explore-btn").click(function(){
  $("html,body").animate({
    scrollTop:850
  },500)
})


//折叠按钮
$(".burger").click(function(){
  $("header").toggleClass("open")
})

