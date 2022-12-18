const botao = document.querySelector('.botao');
const seta = document.querySelector('.reload');

let numero = Math.round(Math.random() * 10);

botao.addEventListener('click', function(e){
    e.preventDefault();
    const valor = document.querySelector('.valor');
    const value = valor.value;

    if(value === ''){
        alert('Colque um valor!');
        return;
    }

    if(value == numero){
        const texto = document.querySelector('.texto');

        texto.textContent = `Parabéns, o número é ${numero}`;

    }else{

        const texto = document.querySelector('.texto');
        texto.textContent = `Puts, tente novamente, o número era ${numero}`;
    }
});

seta.addEventListener('click', function(){

    location.reload();
});