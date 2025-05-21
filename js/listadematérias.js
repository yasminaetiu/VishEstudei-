document.addEventListener("DOMContentLoaded", function() {
    // Redirecionamento para a página de Matemática
    document.getElementById('btnMath').addEventListener('click', function() {
        window.location.href = "./mat.html";
    });
    
    // Redirecionamento para a página de Português
    document.getElementById('btnPort').addEventListener('click', function() {
        window.location.href = "./port.html";
    });
});

