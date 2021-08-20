let abrirOverlay8 = document.getElementById('dcu'),
    overlay8 = document.getElementById('over8'),
    cerrarOverlay8 = document.getElementById('cerrar8');

abrirOverlay8.addEventListener('click', function(){
    overlay8.classList.add('act1');
})

cerrarOverlay8.addEventListener('click', function(){
    overlay8.classList.remove('act1');
})