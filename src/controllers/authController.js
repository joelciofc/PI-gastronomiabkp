class AuthController {
    async cadastrar(req, res){
        try{
            const {
               nome,
               email,
               senha 
            } = req.body
            if(!nome || !email|| !senha){
                return res
                .status(400)
                .json({erro:`preencha todos os campos obrigatorios`});
            }
            const resultado = await AuthService.cadastrar(
                nome,email,senha
            );
            return res .status(201).json({
                mensagem: `cadastro feito com sucesso!`,
                usuario: resultado.user,
                requerConfirmacao: !resultado.session
            })
        }
    catch (erro){
        return res .status(400).json({erro: `Falha ao cadastrar: ${erro.mensagem}`});
    }
    }
    
}

export default AuthController;