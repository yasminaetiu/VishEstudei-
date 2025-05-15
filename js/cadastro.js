document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dados a serem salvos no localStorage
    const userData = {
        email,
        username,
        password // Atenção: em produção, não salve senhas em localStorage!
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    
    alert('Cadastro realizado com sucesso!');
    
    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();
    
    // Direciona para a página de login
    window.location.href = "./login.html";
});