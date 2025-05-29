document.addEventListener('DOMContentLoaded', function() {
    // Abre os modals
    var openModalButtons = document.querySelectorAll('.open-modal');
    openModalButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Fecha os modals ao clicar no X
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});