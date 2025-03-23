// console.log = function (){};
const datadiv = document.querySelector(".dataDiv");
const loader = document.querySelector(".loader");

const isLoading = (status = true) => {
  !status ? (loader.style.display = "none") : "";
};

async function getData(dataPath = "/") {
  try {
    const response = await fetch(
      `https://simple-api703.onrender.com${dataPath}`
    );
    const data = await response.json();
    isLoading(false);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

getData("/file?name=7-2024.json").then((res) => {
  if (res.code === "ENOENT") {
    datadiv.style.textAlign = "center";
    datadiv.textContent = res.message;
    return;
  }
  res.map((dataObj) => {
    console.log(dataObj);
    const dataCont = document.createElement("div");
    dataCont.classList.add("dataCont");

    dataCont.innerHTML = `<h3 class="date">Date: ${dataObj.date}</h3>
          <div class="wrapper">
            <p class="time">${dataObj.data.time}</p>
            <p class="status">${dataObj.data.status}</p>`;

    datadiv.appendChild(dataCont);
  });
});
