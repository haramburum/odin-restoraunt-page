import logoImg from "../img/logo.webp";

const renderHomeTab = () => {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "Evil Bear";
  title.classList.add("home__title", "title");

  const logo = document.createElement("img");
  logo.src = logoImg;
  logo.classList.add("home__logo");

  const text = document.createElement("p");
  text.textContent = `Welcome to the "Evil Bear" lair! Why is the bear angry? Because he had
        been looking for the perfect combination of excellent cuisine and the
        right atmosphere for a long time. Our menu features harsh portions,
        signature snacks with character, and a solid bar menu. Here you can
        forget about the noise of the city, loosen your tie and have a great
        time in the company of your friends. Come on in, it's warm, noisy, and
        delicious. But remember: the bear has a good appetite!`;
  text.classList.add("home__text");

  homeDiv.append(title, logo, text);

  return homeDiv;
};

export default renderHomeTab;
