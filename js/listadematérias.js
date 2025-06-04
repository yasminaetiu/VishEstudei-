document.addEventListener("DOMContentLoaded", function() {
    // Objeto com os redirecionamentos: verifique que os nomes dos arquivos estão corretos
    const redirections = {
        btnMath: "./mat.html",
        btnPort: "./port.html",
        btnBio: "./bio.html",
        btnQuim: "./qui.html",
        btnFis: "./fis.html",
        btnHis: "./his.html",
        btnGeo: "./geo.html",
        btnIng: "./ing.html"
    };

    // Para cada botão definido, adiciona o evento de clique para redirecionar
    Object.keys(redirections).forEach(function(btnId) {
        const button = document.getElementById(btnId);
        if (button) {
            button.addEventListener("click", function() {
                window.location.href = redirections[btnId];
            });
        } else {
            console.warn("Botão com ID " + btnId + " não encontrado!");
        }
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

