import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import authRoutes from './src/utils/authRoutes.js';
//Carrega as variáveis de ambiente
dotenv.config();

//Responsável pela API: definir rotas e processar requisições
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/autenticacao', authRoutes);

const conn = mysql.createPool({
    host: process.env.SUPABASE_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// app.get('/usuarios', async (req, res) => {
//     try {
//         const [rows] = await conn.query('SELECT * FROM usuario');
//         res.json(rows);
//     }
//     catch (erro) {
//         res
//             .status(500)
//             .json({
//                 mensagem: erro.message
//             });
//     }
// });

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));