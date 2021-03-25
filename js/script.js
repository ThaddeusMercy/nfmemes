var x = 0;
var y = 0; 
var teta = 0; 
var current = 0;
var nav = document.getElementById('nav');
var services = document.querySelectorAll('#myservices')
var websites = document.querySelectorAll('#websites')
function navify(){
  console.log(pageYOffset)
  if(window.pageYOffset > 197){
    nav.className = 'nav-on-scroll'
  }
  else{
     nav.className = ' '
  }
}
function displayOnScroll() {
  for(var i = 0; i < services.length; i++ )
  if(window.pageYOffset > 250){
    setTimeout(function(){
      services[0].style.animationName = 'fadeIn'
    },0)
    setTimeout(function(){
      services[1].style.animationName = 'fadeIn'
    },200) 
     setTimeout(function(){
    services[2].style.animationName = 'fadeIn'
    },400)
    setTimeout(function(){
    services[3].style.animationName = 'fadeIn'
    },800)
  }
  if(window.pageYOffset > 1000){
     services[4].style.animationName = 'fadeUp';
     setTimeout(function(){
      services[5].style.animationName = 'fadeIn'
    },200) 
  }
  for(var i = 0; i < websites.length; i++ )
  if(window.pageYOffset > 1800){
     websites[0].style.animationName = 'fadeIn';
     setTimeout(function(){
      websites[1].style.animationName = 'fadeIn'
    },200) 
     setTimeout(function(){
      websites[2].style.animationName = 'fadeIn'
    },400) 
     setTimeout(function(){
      websites[3].style.animationName = 'fadeIn'
    },600) 
     setTimeout(function(){
      websites[4].style.animationName = 'fadeIn'
    },800) 
     setTimeout(function(){
      websites[5].style.animationName = 'fadeIn'
    },1000)
     setTimeout(function(){
      websites[6].style.animationName = 'fadeIn'
    },1200)
     setTimeout(function(){
      websites[7].style.animationName = 'fadeIn'
    },1400)  
  }
}




  // MOBILENAV SECTION
var hamburger = document.querySelectorAll('#hamburger')
var mobileNav = document.getElementById('mobileNav')
v = 0;
function mobileNavify(){
  for(var i = 0; i < hamburger.length; i++)
  if(v == 0){
    hamburger[0].style.animationName = 'burgerAnimi'
    hamburger[1].style.display = 'none'
    hamburger[2].style.animationName = 'buggerAfterAnimi'
    hamburger[2].style.width = '35px'
    mobileNav.style.animationName = 'navOpened'
    v = 1
  }
  else{
    hamburger[0].style.animationName = 'burgerAnimiClose'
    hamburger[2].style.animationName = 'buggerAfterAnimiClose'
    hamburger[2].style.width = '30px' 
    hamburger[1].style.display = 'block'
    mobileNav.style.animationName = 'navClosed'
    v = 0
  }
}

