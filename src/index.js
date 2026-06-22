import './css/styles.css';
import renderAddressTab from "./js/renderAddressTab.js";
import renderHomeTab from "./js/renderHomeTab.js";
import renderMenuTab from "./js/renderMenuTab.js";

const TabsSwitcher = (() => {
  const homeLink = document.querySelector(".home-link");
  const menuLink = document.querySelector(".menu-link");
  const addressLink = document.querySelector(".address-link");
  const contentDiv = document.querySelector(".content");

  const clearTab = () => {
    contentDiv.innerHTML = "";
  }

  homeLink.addEventListener("click", () => {
    clearTab();
    contentDiv.append(renderHomeTab());
  });

  menuLink.addEventListener("click", () => {
    clearTab();
    contentDiv.append(renderMenuTab());
  });

  addressLink.addEventListener("click", () => {
    clearTab();
    contentDiv.append(renderAddressTab());
  });

  contentDiv.append(renderHomeTab());

})();

