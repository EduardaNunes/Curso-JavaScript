var canvas = document.querySelector('.pixel-canvas')

var pixel = document.querySelectorAll('.pixel-paint')
var colors = document.querySelectorAll('.color')
var color = ''

paint();

function size3(){
    canvas.innerHTML=''
    for (var i=0; i<9; i++){
        canvas.innerHTML+='<div class="pixel-paint"></div>'
    }
    canvas.style.width='32vh'
    canvas.style.height='32vh'
    canvas.style.gridTemplateColumns='repeat(3,1fr)'
    canvas.style.gridTemplateRows='repeat(3,1fr)'
    
    pixel = document.querySelectorAll('.pixel-paint')
    paint()
}

function size4(){
    canvas.innerHTML=''
    for (var i=0; i<16; i++){
        canvas.innerHTML+='<div class="pixel-paint"></div>'
    }
    canvas.style.width='43vh'
    canvas.style.height='43vh'
    canvas.style.gridTemplateColumns='repeat(4,1fr)'
    canvas.style.gridTemplateRows='repeat(4,1fr)'

    pixel = document.querySelectorAll('.pixel-paint')
    paint()
}

function size5(){
    canvas.innerHTML=''
    for (var i=0; i<25; i++){
        canvas.innerHTML+='<div class="pixel-paint"></div>'
    }
    canvas.style.width='54vh'
    canvas.style.height='54vh'
    canvas.style.gridTemplateColumns='repeat(5,1fr)'
    canvas.style.gridTemplateRows='repeat(5,1fr)'

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