const productsCont = document.querySelector(".productsCont");
const loader = document.querySelector(".loader");
const modal = document.querySelector(".modalCont");
const modalContentWrapper = document.querySelector(".modalContentWrapper");
const closeModalButton = document.querySelector(".closeModalButton");
const isLoading = (status) => {
  status === true
    ? (loader.style.display = "block")
    : (loader.style.display = "none");
};
isLoading(true);

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((result) => {
    isLoading(false);
    result.map((product) => {
      // creating elements
      const productCard = document.createElement("div");
      const img = document.createElement("img");
      const imgCont = document.createElement("div");
      const infoCont = document.createElement("div");
      const title = document.createElement("h2");
      const description = document.createElement("p");
      const price = document.createElement("p");
      const button = document.createElement("button");

      // assigning classes to the elements
      productCard.className = "productCard";
      img.className = "productImg";
      imgCont.className = "imgCont";
      infoCont.className = "infoCont";
      title.className = "productTitle";
      description.className = "productDesc";
      price.className = "productPrice";
      button.className = "infoButton";

      // filling with the data
      img.src = product.image;
      imgCont.append(img);
      title.innerText = product.title;
      description.innerHTML = product.description;
      button.innerText = "See More";
      price.innerText = product.price + " $";
      button.id = product.id;

      // adding event listeners to the buttons see more & close modal
      button.addEventListener("click", (event) => {
        modal.style.display = "flex";
        singleObjectFetcher(event.target.id);
      });
      closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
        modalContentWrapper.innerHTML = "";
      });

      productsCont.append(productCard);
      productCard.append(imgCont, infoCont);
      infoCont.append(title, description, price, button);
    });
  });

const singleObjectFetcher = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((product) => {
      const img = document.createElement("img");
      const imgCont = document.createElement("div");
      const infoCont = document.createElement("div");
      const title = document.createElement("h2");
      const description = document.createElement("p");
      const price = document.createElement("p");

      img.className = "productImg";
      imgCont.className = "imgCont";
      infoCont.className = "infoCont";
      title.className = "productTitle";
      description.className = "productDesc";
      price.className = "productPrice";

      img.src = product.image;
      imgCont.append(img);
      title.innerText = product.title;
      description.innerHTML = product.description;
      price.innerText = product.price + " $";

      infoCont.append(title, description, price);
      modalContentWrapper.append(imgCont, infoCont);
    });
};
