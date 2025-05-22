document.addEventListener("DOMContentLoaded", function() {
    var btnHistory = document.getElementById("btnHistory");
    if (btnHistory) {
        btnHistory.addEventListener("click", function() {
            window.location.href = "hist.html";
        });
    }
    // ... código para outros botões, se houver ...
});

