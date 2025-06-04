document.addEventListener('DOMContentLoaded', function() {
    console.log("Página de Química carregada!");

    // Exemplo: Alterna a visibilidade de seções com informações extras quando clicada
    const toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.classList.toggle('expanded');
            }
        });
    });
});

function showVideo(){
    document.getElementById('videoContainer').style.display = 'block';
}
function showTable(){
    document.getElementById('periodicTable').style.display = 'block';
}