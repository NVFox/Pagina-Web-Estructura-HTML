let abrirOverlay = document.getElementById('dc'),
    overlay = document.getElementById('over1'),
    cerrarOverlay = document.getElementById('cerrar');

abrirOverlay.addEventListener('click', function(){
    overlay.classList.add('act1');
})

cerrarOverlay.addEventListener('click', function(){
    overlay.classList.remove('act1');
})