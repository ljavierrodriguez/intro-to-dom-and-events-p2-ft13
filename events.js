window.onload = function () {

    let box1 = document.querySelector('#box1');
    let box2 = document.querySelector('#box2');
    let box3 = document.querySelector('#box2');

    //box1.addEventListener('click', saludo);

    /* box1.addEventListener('mouseover', function(evento){
        console.log("saludo, como esta?");
        console.log(evento.x);
    }) */

    box1.addEventListener('mouseover', function(evento){
        saludo(evento)
        imprimirNombre(evento);
        console.log(evento.target)
    })

    

    function saludo1() {
        console.log('Como esra?');
    }
    function imprimirNombre(evt){
        console.log("Mi nombre es Luis Rodriguez");
        event.target.style.backgroundColor = 'red';
    }

    let divMain = document.createElement('main');


    divMain.addEventListener('click', alarma);
    divMain.innerHTML = "Hola, como estan con javascript";

    document.body.appendChild(divMain);

    function alarma(event){
        console.log(event.target)
    }

    let btns = document.querySelectorAll('.box');
    btns.forEach((item) => {
        item.addEventListener('click', function(){
            document.querySelector('.mensaje').innerHTML += "<p>Anexando listener al documento</p>";
        })
    })

    let enlaces = document.querySelectorAll('a');
    enlaces.forEach((enlace) => enlace.addEventListener('click', function(evento){
        evento.preventDefault();
    }))


    let formLogin = document.querySelector('#login');
    formLogin.addEventListener("submit", function(evento){
        evento.preventDefault();
        alert("enviando datos")
        evento.target.submit();
    })
{}


}

function saludo() {
    console.log('Activo exterior');
}