const productsCont = document.querySelector(".productsCont");
const loader = document.querySelector(".loader");

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
    console.log(result);
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


      productsCont.append(productCard);
      productCard.append(imgCont, infoCont);
      infoCont.append(title, description, price, button);
    });
  });
