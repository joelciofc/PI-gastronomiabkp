const renderRegisterPage = () => {
    const container = document.createElement('div');
    container.id = 'container';
    container.style.height = '100vh';
    container.className = "container"

    const form = document.createElement('form')
    form.className = 'form-login';

    const labelNome = document.createElement('label')
    labelNome.htmlFor = 'nome'
    labelNome.textContent = 'Nome:'

    const inpNome = document.createElement('input')
    inpNome.type = 'text'
    inpNome.name = 'nome'
    inpNome.id = 'nome'
    inpNome.required
    inpNome.placeholder = 'Insira seu nome'

    const labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'email'
    labelEmail.textContent = 'Email:'

    const inpEmail = document.createElement('input')
    inpEmail.type = 'email'
    inpEmail.name = 'email'
    inpEmail.id = 'email'
    inpEmail.required
    inpEmail.placeholder = 'exemplo@email.com'

    const labelSenha = document.createElement('label')
    labelSenha.htmlFor = 'senha'
    labelSenha.textContent = 'Senha:'

    const inpSenha = document.createElement('input')
    inpSenha.type = 'password'
    inpSenha.name = 'senha'
    inpSenha.id = 'senha'
    inpSenha.required
    inpSenha.placeholder = 'insira sua senha'

    const labelConfirmarSenha = document.createElement('label')
    labelConfirmarSenha.htmlFor = 'ConfirmarSenha'
    labelConfirmarSenha.textContent = 'Confirme sua senha:'


    const inpConfirmarSenha = document.createElement('input')
    inpConfirmarSenha.type = 'password'
    inpConfirmarSenha.name = 'ConfirmarSenha'
    inpConfirmarSenha.id = 'ConfirmarSenha'
    inpConfirmarSenha.required
    inpConfirmarSenha.placeholder = 'Confirme sua senha'

    const btnEnviar = document.createElement('button')
    btnEnviar.type = 'submit'
    btnEnviar.textContent = 'Enviar'
    btnEnviar.id = 'btnEnviar'
    btnEnviar.style.height = '20px'
    btnEnviar.style.width = '100px'
    btnEnviar.disabled = true;

    function verficarSenhas() {
        if (inpSenha.value !== inpConfirmarSenha.value) {
            btnEnviar.disabled = true;
        } else {
            btnEnviar.disabled = false;
        }
    }

    inpSenha.addEventListener('input', verficarSenhas);
    inpConfirmarSenha.addEventListener('input', verficarSenhas);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = inpNome.value.trim()
        const email = inpEmail.value.trim()
        const senha = inpSenha.value.trim()
        const usuario = {
            nome,
            email,
            senha
        }

        try {
            const resultado = await fetch("http://localhost:3000/autenticacao/cadastrar",
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
                alert("Conta cadastrada com sucesso")
            } else {
                alert("Uma conta ja esta usando este email");
            } return confirmacao;
        }
        catch {
            console.error(erro)
            console.error(erro);
            alert("Erro ao logar!");

        }

    }) 

    form.appendChild(labelNome);
    form.appendChild(inpNome);

    form.appendChild(labelEmail);
    form.appendChild(inpEmail);

    form.appendChild(labelSenha);
    form.appendChild(inpSenha);

    form.appendChild(labelConfirmarSenha);
    form.appendChild(inpConfirmarSenha);

    form.appendChild(btnEnviar);
    container.appendChild(form);


    return container;
}

export default renderRegisterPage;