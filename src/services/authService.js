import conn, { connAdimin } from "../config/database.js"

class AuthService {
    static async cadastrar(nome, email, senha, tipo_usuario) {

        const { data: auth, error } = await conn.auth.signUp(
            {
                email,
                password: senha,
                options: {
                    data: {
                        display_name: nome,
                        tipo_usuario
                    }
                }
            }
        );
        if (error) throw error;

        const id_usuario = auth.user.id;
        const {data: dadosUsuario, error: erroUsuario} = await connAdimin.from("usuario").insert({
            id_usuario: id_usuario,
            perfi_usuario: tipo_usuario
        }).select.single()
        if(erroUsuario){
            await connAdimin.auth.admin.deleteUser(id_usuario)
        }
        return {auth, dadosUsuario};
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