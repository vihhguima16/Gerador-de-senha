function gerarSenha() {

    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";

    let senha = [];

    // Adiciona 4 letras
    for (let i = 0; i < 4; i++) {
        let letra = letras.charAt(Math.floor(Math.random() * letras.length));
        senha.push(letra);
    }

    // Adiciona 2 números
    for (let i = 0; i < 2; i++) {
        let numero = numeros.charAt(Math.floor(Math.random() * numeros.length));
        senha.push(numero);
    }

    // Embaralha os caracteres
    for (let i = senha.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [senha[i], senha[j]] = [senha[j], senha[i]];
    }

    document.getElementById("campo-senha").value = senha.join("");
}

// Gera uma senha automaticamente ao abrir a página
gerarSenha();
