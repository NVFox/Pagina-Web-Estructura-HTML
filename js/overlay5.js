let abrirOverlay5 = document.getElementById('com'),
    overlay5 = document.getElementById('over5'),
    cerrarOverlay5 = document.getElementById('cerrar5');

abrirOverlay5.addEventListener('click', function(){
    overlay5.classList.add('act1');
})

cerrarOverlay5.addEventListener('click', function(){
    overlay5.classList.remove('act1');
})