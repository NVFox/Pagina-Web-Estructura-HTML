let abrirOverlay7 = document.getElementById('dpf'),
    overlay7 = document.getElementById('over7'),
    cerrarOverlay7 = document.getElementById('cerrar7');

abrirOverlay7.addEventListener('click', function(){
    overlay7.classList.add('act1');
})

cerrarOverlay7.addEventListener('click', function(){
    overlay7.classList.remove('act1');
})