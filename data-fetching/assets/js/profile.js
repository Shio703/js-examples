const profileCont = document.querySelector(".profileCont");
const loader = document.querySelector(".loader");
const isLoading = (status) => {
  status === true
    ? (loader.style.display = "block")
    : (loader.style.display = "none");
};
isLoading(true);

fetch("https://dummyjson.com/users/1")
  .then((response) => response.json())
  .then((result) => {
    isLoading(false);
    console.log(result);
    const image = document.createElement("img");
    const profileImageCont = document.createElement("div");
    profileImageCont.appendChild(image);
    const profileInfoCont = document.createElement("div");

    profileImageCont.className = "profileImageCont";
    profileInfoCont.className = "profileInfoCont";

    image.src = result.image;
    profileInfoCont.innerHTML = `<h3 class="profileTitle">User Information:</h3>
          <div class="userInfoCont">
            <h4>Firstname:</h4>
            <p>Feria</p>
          </div>
          <div class="userInfoCont">
            <h4>Lastname:</h4>
            <p>Amazing creature</p>
          </div>
          <div class="userInfoCont">
            <h4>Age:</h4>
            <p>18</p>
          </div>
          <div class="userInfoCont">
            <h4>Birthday:</h4>
            <p>7.03.2006</p>
          </div>
          <div class="userInfoCont">
            <h4>Gender:</h4>
            <p>Female</p>
          </div>
          <div class="userInfoCont">
            <h4>E-mail:</h4>
            <p>amazingCreature@gmail.com</p>
          </div>
        </div>`;
    profileCont.append(profileImageCont, profileInfoCont);
  });
