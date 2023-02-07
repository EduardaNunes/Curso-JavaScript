var canvas = document.querySelector('.pixel-canvas')

var pixel = document.querySelectorAll('.pixel-paint')
var colors = document.querySelectorAll('.color')
var color = ''

paint();
size3();

function size3(){
      canvas.innerHTML=''
      for (var i=0; i<9; i++){
          canvas.innerHTML+='<div class="pixel-paint"></div>'
      }
      canvas.style.cssText+="width:32vh; height:32vh; grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);" 
      pixel = document.querySelectorAll('.pixel-paint')
      paint()
}

function size4(){
    canvas.innerHTML=''
    for (var i=0; i<16; i++){
        canvas.innerHTML+='<div class="pixel-paint"></div>'
    }
    canvas.style.cssText+="width:43vh; height:43vh; grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);"
    pixel = document.querySelectorAll('.pixel-paint')
    paint()
}

function size5(){
    canvas.innerHTML=''
    for (var i=0; i<25; i++){
        canvas.innerHTML+='<div class="pixel-paint"></div>'
    }
    canvas.style.cssText+="width:54vh; height:54vh; grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,1fr);"
    pixel = document.querySelectorAll('.pixel-paint')
    paint()
}

function paint(){

    for(var i = 0; i<pixel.length; i++){
        pixel[i].addEventListener('click', pixelPaint)
    }

    for(var c = 0; c<colors.length; c++){
        colors[c].addEventListener('click', paintBrush)
    }

    function paintBrush(){
        color = window.getComputedStyle(this).backgroundColor;
    }

    function pixelPaint(){
        console.log(pixel)
        this.style.background = color;
    }
}