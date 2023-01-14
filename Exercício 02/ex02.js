var btn_play = window.document.querySelector('.btn_play');
var btn_pause = window.document.querySelector('.btn_pause');
var btn_x2 = window.document.querySelector('.btn_x2');
var btn_x3 = window.document.querySelector('.btn_x3');
var btn = window.document.querySelectorAll('.btn');
var relogio = window.document.querySelector('h2');

var horario = new Date();
var hh = horario.getHours();
var mm = horario.getMinutes();
var ss = horario.getSeconds();
var clock = setInterval(tempo,1000);

function pause(){

    for (var i = 0, max = btn.length; i < max; i++) {
        btn[i].style.background='var(--cor_btn)';
    }

    btn_pause.style.background='var(--cor_btn_hover)';

    clearInterval(clock);
}

function play(){

    for (var i = 0, max = btn.length; i < max; i++) {
        btn[i].style.background='var(--cor_btn)';
    }

    btn_play.style.background='var(--cor_btn_hover)';

    clearInterval(clock);
    clock = setInterval(tempo,1000);
}

function play_x2(){

    for (var i = 0, max = btn.length; i < max; i++) {
        btn[i].style.background='var(--cor_btn)';
    }

    btn_x2.style.background='var(--cor_btn_hover)';

    clearInterval(clock);
    clock = setInterval(tempo,100);
}

function play_x3(){
    
    for (var i = 0, max = btn.length; i < max; i++) {
        btn[i].style.background='var(--cor_btn)';
    }

    btn_x3.style.background='var(--cor_btn_hover)';

    clearInterval(clock);
    clock = setInterval(tempo,1);
}

function tempo(){


    if(ss<59){

        ss++;

    }else if(mm<59){

        mm++;
        ss=0;

    }else if(hh<23){

        hh++;
        mm=0;
        ss=0;

    }else{

        hh=0;
        mm=0;
        ss=0;

    }

    var formato_relogio = (hh<10?'0'+hh:hh) + ' : ' + (mm<10?'0'+mm:mm)+' : '+(ss<10?'0'+ss:ss);
    relogio.innerText=formato_relogio; 
    }

    function conferir_hora(){

        let ceu = window.document.querySelector('.ceu');

        if (hh>=6 && hh<=12){

            ceu.style.background='var(--cor_ceu_dia)';

        } else if (hh>=12 && hh<=18){

            ceu.style.background='var(--cor_ceu_tarde)';

        }else{
            ceu.style.background='var(--cor_ceu_noite)';
        }
    }

    setInterval(conferir_hora,1);




