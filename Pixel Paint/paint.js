var pixel = document.querySelectorAll('.pixel-paint')
var colors = document.querySelectorAll('.color')
var color = ''

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
    this.style.background = color;
}