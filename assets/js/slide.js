var Kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
var Chuyenslide = document.getElementsByClassName("chuyen-slide")[0];
var Img = Chuyenslide.getElementsByTagName("img");
var Max = Kichthuoc*Img.length;
Max -= Kichthuoc;
var Chuyen = 0;
function next(){
  if(Chuyen < Max) Chuyen += Kichthuoc;
  else Chuyen = 0;
  Chuyenslide.style.marginLeft = '-' + Chuyen + 'px';
}
function back(){
  if(Chuyen == 0) Chuyen = Max;
  else Chuyen -= Kichthuoc;
  Chuyenslide.style.marginLeft = '-' + Chuyen + 'px';
}
setInterval(function(){
  next();
}, 6000);
