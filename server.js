import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import {createRequire} from 'node:module';

//Carrega as variáveis de ambiente
dotenv.config();

//Responsável pela API: definir rotas e processar requisições
const app = express();
const PORT = process.env.PORT;
const require = createRequire(import.meta.url);
const googlFonts = require('google-fonts');
const visibleIcon = require('@iconify/icons-basil/eye-solid').default
const invisibleIcon = require('@iconify/icons-basil/eye-closed-outline').default

app.get('/interface-config', (req, res) =>{
    const fontFamily = googlFonts({'League Spartan': ['400', '700']});
    const urlFonts = fontFamily.match(/href="([^"]+)"/)[1];
    res.json({
        urlComplete: `https:${urlFonts}`,
        icons:{
            visibleIcon: visibleIcon,
            invisibleIcon: invisibleIcon
        }
    });
});

app.use(express.json());

app.use(express.static("./src/view"));
app.use("/src/view", express.static("./src/view/pages"));


app.use('/autenticacao', authRoutes);



app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
