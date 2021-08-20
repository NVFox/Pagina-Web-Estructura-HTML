let abrirOverlay2 = document.getElementById('do'),
    overlay2 = document.getElementById('over2'),
    cerrarOverlay2 = document.getElementById('cerrar2');

abrirOverlay2.addEventListener('click', function(){
    overlay2.classList.add('act1');
})

cerrarOverlay2.addEventListener('click', function(){
    overlay2.classList.remove('act1');
})