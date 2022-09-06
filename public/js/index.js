console.log('index.js success');

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);

const main = qs('.container');
const link = qs('a');
const subtitulo = qs('.subtitulo');
const parrafos = qsa('p');

/* ************* PREGUNTAR POR NOMBRE ******************* */

let nombre = prompt('Ingrese su nombre');

/* while (nombre === '') {
    nombre = prompt('Ingrese su nombre');
} */

if(nombre){
    subtitulo.innerHTML += nombre
}else{
    subtitulo.innerHTML += 'invitado'
}

subtitulo.style.textTransform = 'uppercase';
link.style.color = '#E51B3E';

/* ************* PREGUNTAR POR FONDO ******************* */

let respuesta = confirm('Desea agregar un fondo de pantalla?');

if(respuesta) {
    qs('body').classList.add('fondo')
}

for (let i = 0; i < parrafos.length; i++) {
   
    if(i%2 === 0){
        parrafos[i].classList.add('destacadoPar')
    }else{
        parrafos[i].classList.add('destacadoImpar')
    }
    
}

main.style.display = 'block';


/* ************* PREGUNTAR POR NOMBRE ******************* */