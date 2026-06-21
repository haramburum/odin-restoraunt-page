const renderAddressTab = () => {
 const addressDiv = document.createElement('div');

  const title = document.createElement("h1");
  title.textContent = "Address";

  const address = document.createElement("address");
  address.textContent = `Visit us in: San-Francisco, 1-234-567-8910`;

  addressDiv.append(title, address);

  return addressDiv;
};

export default renderAddressTab;
