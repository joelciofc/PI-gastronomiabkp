import conn from "../config/database.js"

class AuthService {
    static async cadastrar(nome, email, senha) {

        const { data, error } = await conn.auth.signUp(
            {
                email,
                password: senha,
                options: {
                    data: {
                        nome
                    }
                }
            }
        );
        if (error) throw error;
        return data;
    }

    static async login(email, senha) {

        const { data, error } = await conn.auth.signInWithPassword(
            {
                email,
                password: senha
            }
        );
        if (error) throw error;
        return data;
    }
}

export default AuthService