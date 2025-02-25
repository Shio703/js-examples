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
            <p>${result.firstName}</p>
          </div>
          <div class="userInfoCont">
            <h4>Lastname:</h4>
            <p>${result.lastName}</p>
          </div>
          <div class="userInfoCont">
            <h4>Age:</h4>
            <p>${result.age}</p>
          </div>
          <div class="userInfoCont">
            <h4>Birthday:</h4>
            <p>${result.birthDate}</p>
          </div>
          <div class="userInfoCont">
            <h4>Gender:</h4>
            <p>${result.gender}</p>
          </div>
          <div class="userInfoCont">
            <h4>E-mail:</h4>
            <p>${result.email}</p>
          </div>
        </div>`;
    profileCont.append(profileImageCont, profileInfoCont);
  });
