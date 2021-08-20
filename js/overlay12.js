let abrirOverlay12 = document.getElementById('ds'),
    overlay12 = document.getElementById('over12'),
    cerrarOverlay12 = document.getElementById('cerrar12');

abrirOverlay12.addEventListener('click', function(){
    overlay12.classList.add('act1');
})

cerrarOverlay12.addEventListener('click', function(){
    overlay12.classList.remove('act1');
})