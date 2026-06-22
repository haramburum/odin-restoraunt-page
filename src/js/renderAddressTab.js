const renderAddressTab = () => {
  const addressDiv = document.createElement("address");
  addressDiv.classList.add("address");

  const title = document.createElement("h1");
  title.textContent = "Address";
  title.classList.add("address__title", "title");

  const addressInfo = document.createElement("p");
  addressInfo.textContent = `Deep in the Siberian Forest, 42nd kilometer of the Taiga Highway, Kemerovo Region.`;
  addressInfo.classList.add("address__text");

  const addressTime = document.createElement("p");
  addressTime.textContent =
    "Daily from 12:00 PM until the last wolf howls (around 11:00 PM).";
  addressTime.classList.add("address__time");

  const addressContacts = document.createElement("div");
  addressContacts.classList.add("address__contacts");

  const addressEmail = document.createElement("a");
  addressEmail.href = "mailto:reserve@evilbear.com";
  addressEmail.textContent = "reserve@evilbear.com";
  addressEmail.classList.add("address__email");

  const addressPhone = document.createElement("a");
  addressPhone.href = "tel:+7384555-BEAR";
  addressPhone.textContent = "tel:+7 (384) 555-BEAR";
  addressPhone.classList.add("address__phone");

  addressContacts.append(addressEmail, addressPhone);

  addressDiv.append(title, addressInfo, addressTime, addressContacts);

  return addressDiv;
};

export default renderAddressTab;
