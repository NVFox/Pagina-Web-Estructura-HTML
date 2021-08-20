let abrirOverlay15 = document.getElementById('dgi'),
    overlay15 = document.getElementById('over15'),
    cerrarOverlay15 = document.getElementById('cerrar15');

abrirOverlay15.addEventListener('click', function(){
    overlay15.classList.add('act1');
})

cerrarOverlay15.addEventListener('click', function(){
    overlay15.classList.remove('act1');
})