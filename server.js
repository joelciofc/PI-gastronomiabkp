import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
//Carrega as variáveis de ambiente
dotenv.config();

//Responsável pela API: definir rotas e processar requisições
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static("src/view"))
app.use('/autenticacao', authRoutes);



app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));