let abrirOverlay13 = document.getElementById('dcn'),
    overlay13 = document.getElementById('over13'),
    cerrarOverlay13 = document.getElementById('cerrar13');

abrirOverlay13.addEventListener('click', function(){
    overlay13.classList.add('act1');
})

cerrarOverlay13.addEventListener('click', function(){
    overlay13.classList.remove('act1');
})