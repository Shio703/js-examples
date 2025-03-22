const datadiv = document.querySelector(".dataDiv");

async function getData(dataPath = "/") {
  try {
    const response = await fetch(`http://localhost:3000${dataPath}`);
    
    const data = await response.json();
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
