import AuthService from "../services/authService.js";
class AuthController {
    static async cadastrar(req, res) {
        try {
            const {
                nome,
                email,
                senha
            } = req.body
            if (!nome || !email || !senha) {
                return res
                    .status(400)
                    .json({ erro: `preencha todos os campos obrigatorios` });
            }
            const resultado = await AuthService.cadastrar(
                nome, email, senha
            );
            return res.status(201).json({
                mensagem: `cadastro feito com sucesso!`,
                usuario: resultado.user,
                requerConfirmacao: !resultado.session
            })
        }
        catch (erro) {
            return res.status(400).json({ erro: `Falha ao cadastrar: ${erro.menssage}` });
        }
    }

    static async login(req, res) {
        try {
            const {
                email,
                senha
            } = req.body

            if (!email || !senha) {
                return res
                    .status(400)
                    .json({
                        erro: `Preencha todos os
                            campos obrigatórios`});
            }
            const resultado = await AuthService.login(
                email, senha
            );
            return res
                .status(200)
                .json({
                    mensagem: `Login feito com sucesso!`,
                    usuario: resultado.user,
                    token: resultado.session.access_token
                });
        }
        catch (erro) {
            return res
                .status(400)
                .json({
                    erro: `Falha ao logar:
                    ${erro.message}`
                });
        }
    }
}

export default AuthController;