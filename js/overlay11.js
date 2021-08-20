let abrirOverlay11 = document.getElementById('di'),
    overlay11 = document.getElementById('over11'),
    cerrarOverlay11 = document.getElementById('cerrar11');

abrirOverlay11.addEventListener('click', function(){
    overlay11.classList.add('act1');
})

cerrarOverlay11.addEventListener('click', function(){
    overlay11.classList.remove('act1');
})