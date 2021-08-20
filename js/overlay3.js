let abrirOverlay3 = document.getElementById('dpq'),
    overlay3 = document.getElementById('over3'),
    cerrarOverlay3 = document.getElementById('cerrar3');

abrirOverlay3.addEventListener('click', function(){
    overlay3.classList.add('act1');
})

cerrarOverlay3.addEventListener('click', function(){
    overlay3.classList.remove('act1');
})