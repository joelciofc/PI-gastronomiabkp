import renderCadastroPage from "./pages/cadastro.js";
import renderHomePage from "./pages/home.js";
import renderLoginPage from "./pages/login.js";

const app = document.querySelector('#root');
const res = await fetch(`/interface-config`);
const interfaceConfig = await res.json();

const tagLink = document.createElement('link');
tagLink.rel = 'stylesheet';
tagLink.href = interfaceConfig.urlComplete;
document.head.appendChild(tagLink);

function navegarParaCadastro() {
    app.replaceChildren(renderCadastroPage(
        interfaceConfig.icons,
        navegarParaLogin
    ));
}
function navegarParaLogin() {
    app.replaceChildren(renderLoginPage(
        interfaceConfig.icons,
        navegarParaCadastro
    ));
}

function navergarPorHash() {
    const hash = window.location.hash;
    switch (hash) {
        case '#home':
            app.replaceChildren(renderHomePage());
            break
        case '#login':
            app.replaceChildren(renderLoginPage(
                interfaceConfig.icons,
                navegarParaCadastro

            ));
            break
        case '#cadastro':
            app.replaceChildren(renderCadastroPage(
                interfaceConfig.icons,
                navegarParaLogin
            ));
                break
    }
}
window.addEventListener("hashchange", navergarPorHash);

function navegarPorReq(){
    const path = window.location.pathname;
    switch(path){
        case "/home":
            app.replaceChildren(renderHomePage);
            break
            case "/login":
            app.replaceChildren(renderLoginPage);
            break
            case "/cadastro":
            app.replaceChildren(renderCadastroPage);
            break
    }
}

navergarPorHash();

function renderizar(){
    if(window.location.hash){
        navergarPorHash()
        return
    }navegarPorReq();
}

renderizar();