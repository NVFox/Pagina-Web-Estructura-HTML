let abrirOverlay9 = document.getElementById('dac'),
    overlay9 = document.getElementById('over9'),
    cerrarOverlay9 = document.getElementById('cerrar9');

abrirOverlay9.addEventListener('click', function(){
    overlay9.classList.add('act1');
})

cerrarOverlay9.addEventListener('click', function(){
    overlay9.classList.remove('act1');
})