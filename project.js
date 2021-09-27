var background=["slide01.jpg" , "slide02.jpg" , "slide03.jpg" , "slide04.jpg" , "slide05.jpg"];
var container=document.querySelector(".container");
var imageslength=background.length;
var Ul=document.createElement('ul');
Ul.setAttribute('id','Ul');
for(var i = 1; i <= imageslength; i++)
{
    var LI = document.createElement('li');
    LI.setAttribute('data-index', i);
     Ul.appendChild(LI);
}
document.getElementById('bullets').appendChild(Ul);
var GetUl=document.getElementById('Ul');
var sliderBullets=Array.from(document.querySelectorAll('#Ul li'));
var slides = document.getElementsByClassName("mySlides");

var i=0;
var slideI=0;
  var interval=setInterval(() => {
    if(i<5)
    {  

          container.style.backgroundImage =`url(${background[i]})`;
          for (var j = 0; j < slides.length; j++) {
            slides[j].style.display = "none";
          }
          slides[i].style.display = "block";  
        
          slideI++;
          if (slideI > slides.length) {slideI = 1}   
          for (var k = 0; k < sliderBullets.length; k++) {
            sliderBullets[k].className = sliderBullets[k].className.replace(" active", "");
          }

          sliderBullets[slideI-1].className += " active";  
          i=i+1;
     }
     else{
         i=0;
         }
    },2000); 
     for(let l=0; l<sliderBullets.length; l++)
      {   
         sliderBullets[l].onclick=function(){
           clearInterval(interval);
          var b;
      container.style.backgroundImage =`url(${background[l]})`;
      for (b = 0; b < slides.length; b++) {
          slides[b].style.display = "none";  
      }
      slides[l].style.display = "block";  
      for (b = 0; b < sliderBullets.length; b++) {
          sliderBullets[b].className = sliderBullets[b].className.replace(" active", "");
      }
      sliderBullets[l].className += " active";

         };
      }
      function openNav() {
        document.getElementById("menu").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("menu").style.width = "0";
      }
      var btn=document.querySelector(".btn");
      btn.onclick=openNav;



var image=document.querySelectorAll('.i');
for(let y=0; y<image.length; y++)
{
image[y].onclick=function(){
  scrollTo(0,0);
}
}
