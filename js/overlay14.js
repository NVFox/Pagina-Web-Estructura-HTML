let abrirOverlay14 = document.getElementById('dt'),
    overlay14 = document.getElementById('over14'),
    cerrarOverlay14 = document.getElementById('cerrar14');

abrirOverlay14.addEventListener('click', function(){
    overlay14.classList.add('act1');
})

cerrarOverlay14.addEventListener('click', function(){
    overlay14.classList.remove('act1');
})