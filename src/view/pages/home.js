import navbar from "../components/navbar.js";

const renderHomePage = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.style.flexDirection = 'column';

    const navigation = navbar();
    container.appendChild(navigation);
    const titulo = document.createElement('h1');
    titulo.textContent = "Esta é a página home"
    container.appendChild(titulo)
    return container
}

export default renderHomePage