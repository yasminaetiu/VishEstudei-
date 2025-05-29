document.addEventListener("DOMContentLoaded", function() {
    const redirections = {
        btnMath: "./mat.html",
        btnPort: "./port.html",
        btnBio: "./bio.html",
        btnQuim: "./quim.html",
        btnFis: "./fis.html",
        btnHis: "./his.html",
        btnGeo: "./geo.html",
        btnIng: "./ing.html"
    };

    Object.keys(redirections).forEach(function(btnId) {
        const button = document.getElementById(btnId);
        if (button) {
            button.addEventListener("click", function() {
                window.location.href = redirections[btnId];
            });
        }
    });
});

