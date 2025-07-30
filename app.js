// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreAmigo);
        console.log(amigos);
        document.getElementById('amigo').value = '';
        mostrarAmigos(amigos); 
    }
    return;
}

function mostrarAmigos(amigos) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    if (amigos.length === 0){
        alert('No hay amigos para sortear');
    } else {
        let amigoSorteado = Math.floor(Math.random() * amigos.length) + 1;
        resultado.innerHTML = 'El amigo secreto sorteado es: ' + amigos[amigoSorteado - 1];
        listaAmigos.innerHTML = '';
}
}
