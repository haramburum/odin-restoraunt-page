const renderMenuTab = () => {
  const menuItems = [
    {
      title: "Tomahawk Steak",
      price: "$45",
      description: "Huge juicy grilled beef rib.",
    },
    {
      title: "Bear's Lair Burger",
      price: "$18",
      description: "Double patty with hot jalapeno.",
    },
    {
      title: "Wild Boar Ribs",
      price: "$26",
      description: "Smoked ribs with honey BBQ.",
    },
    {
      title: "Grilled Salmon",
      price: "$28",
      description: "Tender fish cooked over coals.",
    },
    {
      title: "Hunter's Stew",
      price: "$15",
      description: "Thick meat soup with mushrooms.",
    },
    {
      title: "Smoked Wings",
      price: "$12",
      description: "Spicy chicken wings from smoker.",
    },
    {
      title: "Charcoal Venison",
      price: "$38",
      description: "Wild deer meat with lingonberry.",
    },
    {
      title: "Woodland Mushrooms",
      price: "$14",
      description: "Crispy pan-fried forest chanterelles.",
    },
  ];

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Menu";
  title.classList.add("menu__title", "title");

  const list = document.createElement("ul");
  list.classList.add("menu__list");

  for (let menuItem of menuItems) {
    let menuElem = document.createElement("li");
    menuElem.classList.add("menu-item");

    let menuElemTitle = document.createElement("h3");
    menuElemTitle.textContent = menuItem.title;
    menuElemTitle.classList.add("menu-item__title");

    let menuElemDescr = document.createElement("p");
    menuElemDescr.textContent = menuItem.description;
    menuElemDescr.classList.add("menu-item__descr");

    let menuElemPrice = document.createElement("p");
    menuElemPrice.textContent = menuItem.price;
    menuElemPrice.classList.add("menu-item__price");

    menuElem.append(menuElemTitle, menuElemDescr, menuElemPrice);

    list.append(menuElem);
  }

  menuDiv.append(title, list);

  return menuDiv;
};

export default renderMenuTab;
