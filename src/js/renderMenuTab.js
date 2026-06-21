const renderMenuTab = () => {
  const menuDiv = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = 'Menu';

  const list = document.createElement('ul');

  for (let i = 0; i <= 6; i++) {
    let menuItem = document.createElement('li');
    list.appendChild(document.createElement('li'));
    menuItem.textContent = '123';
  }

  menuDiv.append(title, list);

  return menuDiv;

}

export default renderMenuTab;