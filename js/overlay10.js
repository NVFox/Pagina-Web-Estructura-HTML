let abrirOverlay10 = document.getElementById('dme'),
    overlay10 = document.getElementById('over10'),
    cerrarOverlay10 = document.getElementById('cerrar10');

abrirOverlay10.addEventListener('click', function(){
    overlay10.classList.add('act1');
})

cerrarOverlay10.addEventListener('click', function(){
    overlay10.classList.remove('act1');
})