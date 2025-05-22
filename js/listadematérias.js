document.addEventListener("DOMContentLoaded", function() {
    // Redirecionamento para Matemática
    document.getElementById('btnMath').addEventListener('click', function() {
        window.location.href = "./mat.html";
    });
    
    // Redirecionamento para Português
    document.getElementById('btnPort').addEventListener('click', function() {
        window.location.href = "./port.html";
    });
    
    // Redirecionamento para Biologia
    document.getElementById('btnBio').addEventListener('click', function() {
        window.location.href = "./bio.html";
    });
    
    // Você também pode adicionar aqui o listener para Química
    document.getElementById('btnQuim').addEventListener('click', function() {
        window.location.href = "./quím.html";
    });

    // Redirecionamento para Física
    var btnFis = document.getElementById("btnFis");
    if (btnFis) {
        btnFis.addEventListener("click", function() {
            window.location.href = "fís.html";
        });
    }
});

