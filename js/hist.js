document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("histBtn");
    if (button) {
        button.addEventListener("click", function() {
            window.location.href = "hist.html";
        });
    }
});