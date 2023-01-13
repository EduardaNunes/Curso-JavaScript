var clique = 1;
        // Observação IMPORTANTE -> mouseenter é tanto para o pai quanto para os filhos, enquanto mouseover é apenas para o pai, 
        // logo, se passar o mouse por cima dos filhos conta como se tivesse saido.
        function entrou(){
            window.document.getElementById('bloco1').innerText='Oi, mouse! :)';
        }

        // Observação IMPORTANTE -> mouseleave é tanto para o pai quanto para os filhos, enquanto mouseover é apenas para o pai, 
        // logo, se passar o mouse por cima dos filhos conta como se tivesse saido.
        function saiu(){
            window.document.getElementById('bloco1').innerText='Tchau, mouse :(';
        }

        function clicou(){
            window.document.getElementById('bloco2').innerText=`Clicou ${clique} vezes`;
            clique++;
        }

        function segurou(){
            window.document.getElementById('bloco3').innerText='Hihi faz cócegas';
        }

        function soltou(){
            window.document.getElementById('bloco3').innerText='Agora, tente segurar o clique';
        }

        function moveu(){
            window.document.getElementById('bloco4').innerText='CALMAAA!';
        }

        function saiu2(){
            window.document.getElementById('bloco4').innerText='Mova o mouse aqui dentro!';
        }

        function refresh(){
            location.reload()
        }
