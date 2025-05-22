document.addEventListener("DOMContentLoaded", function() {
    // Redirecionamento para a página de Matemática
    document.getElementById('btnMath').addEventListener('click', function() {
        window.location.href = "./mat.html";
    });
    
    // Redirecionamento para a página de Português
    document.getElementById('btnPort').addEventListener('click', function() {
        window.location.href = "./port.html";
    });

    // Redirecionamento para a página de Física
    document.getElementById('btnFis').addEventListener('click', function() {
        window.location.href = "./fís.html";
    });
    var btnHistory = document.getElementById("btnHistory");
    if (btnHistory) {
        btnHistory.addEventListener("click", function() {
            window.location.href = "hist.html";
        });
    }
    // ... código para outros botões, se houver ...
});

