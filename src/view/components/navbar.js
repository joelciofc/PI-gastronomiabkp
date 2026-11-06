const navbar = () => {
    const container = document.createElement('div');
    container.style.height = '4rem';
    container.style.backgroundColor = '#3632a8';
    container.className = 'div-menu';

    const menu = document.createElement('ul');
    const itens = ['Estoque', 'Pedidos'];

    for (var i = 0; i < itens.length; i++) {
        console.log(itens);
        const item = document.createElement('li');
        item.textContent = itens[i];
        menu.appendChild(item)
    }
    container.appendChild(menu)
    return container
}

export default navbar;