let abrirOverlay6 = document.getElementById('dp'),
    overlay6 = document.getElementById('over6'),
    cerrarOverlay6 = document.getElementById('cerrar6');

abrirOverlay6.addEventListener('click', function(){
    overlay6.classList.add('act1');
})

cerrarOverlay6.addEventListener('click', function(){
    overlay6.classList.remove('act1');
})