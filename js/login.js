document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    // Recupera os dados do usuário do localStorage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        
        // Verifica se o nome de usuário e senha estão corretos
        if (inputUsername === userData.username && inputPassword === userData.password) {
            // Redireciona para a página home se o usuário estiver cadastrado
            window.location.href = "./home.html";
        } else {
            errorDiv.textContent = "Usuário incorreto!";
        }
    } else {
        errorDiv.textContent = "Usuário não cadastrado!";
    }
});