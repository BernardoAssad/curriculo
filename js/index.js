    function aplicarAnimacao() {
        var foto = document.getElementById('minhaFoto');
        var overlay = document.getElementById('overlayText');
        foto.classList.toggle('virada');
        overlay.classList.toggle('visivel');
    }

    document.getElementById('minhaFoto').addEventListener('click', aplicarAnimacao);
