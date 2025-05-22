document.addEventListener("DOMContentLoaded", function() {
    // Redirecionamento para Matemática (exemplo)
    document.getElementById('btnMath').addEventListener('click', function() {
        window.location.href = "./mat.html";
    });
    
    // Redirecionamento para Português (exemplo)
    document.getElementById('btnPort').addEventListener('click', function() {
        window.location.href = "./port.html";
    });
    
    // Redirecionamento para Biologia
    document.getElementById('btnBio').addEventListener('click', function() {
        window.location.href = "./bio.html";
    });
});

