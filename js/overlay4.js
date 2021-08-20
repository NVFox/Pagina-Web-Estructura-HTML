let abrirOverlay4 = document.getElementById('des'),
    overlay4 = document.getElementById('over4'),
    cerrarOverlay4 = document.getElementById('cerrar4');

abrirOverlay4.addEventListener('click', function(){
    overlay4.classList.add('act1');
})

cerrarOverlay4.addEventListener('click', function(){
    overlay4.classList.remove('act1');
})