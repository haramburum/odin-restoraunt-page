const renderHomeTab = () => {
  const homeDiv = document.createElement('div');

  const title = document.createElement("h1");
  title.textContent = "Evil Bear";

  const text = document.createElement("p");
  text.textContent = `Welcome to the "Evil Bear" lair! Why is the bear angry? Because he had
        been looking for the perfect combination of excellent cuisine and the
        right atmosphere for a long time. Our menu features harsh portions,
        signature snacks with character, and a solid bar menu. Here you can
        forget about the noise of the city, loosen your tie and have a great
        time in the company of your friends. Come on in, it's warm, noisy, and
        delicious. But remember: the bear has a good appetite!`;

  homeDiv.append(title, text);

  return homeDiv;
};

export default renderHomeTab;
