const renderLoginPage = () => {
    const container = document.createElement('div');
    container.id = 'container';
    container.style.height = '100vh';

    const form = document.createElement('form')

    const labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'email'

    const inpEmail = document.createElement('input')
    inpEmail.type = 'email'
    inpEmail.name = 'email'
    inpEmail.required
    inpEmail.placeholder = 'exemplo@email.com'

    const labelSenha = document.createElement('label')
    labelSenha.htmlFor = 'email'

    const inpSenha = document.createElement('input')
    inpSenha.type = 'password'
    inpSenha.name = 'senha'
    inpSenha.required
    inpSenha.placeholder = 'insira sua senha'

    const btnEnviar = document.createElement('button')
    btnEnviar.type = 'submit'
    btnEnviar.textContent = 'Enviar'
    btnEnviar.id = 'btnEnviar'
    btnEnviar.style.height = '20px'
    btnEnviar.style.width = '100px'

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const  email = inpEmail.value.trim()
        const senha = inpSenha.value.trim()
        const usuario = {
            email,
            senha
        }
        try {
            const resultado = await fetch("http://localhost:3000/autenticacao/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(usuario)
                }
            );
            const confirmacao = await resultado.json();
            if (!resultado.ok) {
                alert("Conta inexstente!")
            } else {
                alert("Login realizado com sucesso!");
            } return confirmacao;
        }
        catch {
            console.error(erro)
            console.error(erro);
            alert("Erro ao logar!");

        }
    })

    form.appendChild(labelEmail);
    form.appendChild(inpEmail);
    form.appendChild(labelSenha);
    form.appendChild(inpSenha);
    form.appendChild(btnEnviar);
    container.appendChild(form);


    return container;
}

export default renderLoginPage;