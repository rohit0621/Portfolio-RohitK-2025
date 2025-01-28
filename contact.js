document.addEventListener("DOMContentLoaded", function () {
  const contactItems = [
    {
      icon: "fa-solid fa-location-dot",
      title: "Address",
      details: "N S Palya, Bengaluru, Karnataka PIN-560076",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Contact Number",
      details: "+91-9304364669",
    },
    {
      icon: "fa-solid fa-paper-plane",
      title: "Email Address",
      details: "poni2243548@gmail.com",
    },
    {
      icon: "fa-solid fa-earth-americas",
      title: "Website",
      details: "mysite.com",
    },
  ];

  const template = document.getElementById("contacts-item");
  const itemsContainer = document.getElementById("contacts-items-container");

  contactItems.forEach((item) => {
    const clone = template.content.cloneNode(true);

    // Split and add multiple classes to the icon-name element
    const iconElement = clone.querySelector(".icon-name");
    item.icon.split(" ").forEach((cls) => iconElement.classList.add(cls));

    clone.querySelector(".item-title").textContent = item.title.toUpperCase();
    clone.querySelector(".item-details").textContent = item.details;

    itemsContainer.appendChild(clone);
  });
});
