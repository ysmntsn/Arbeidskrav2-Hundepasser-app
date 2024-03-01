console.log("start");


const apiUrl = "https://dog.ceo/api/breeds/image/random";
const dogImg = document.getElementById("dog_img");
const getBtn = document.querySelector("#get_btn");

function fetchRandomImage() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("https error status:", `${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.message);
      dogImg.src = data.message; // oppdater bildet ved å bruke src-egenskapen
    })
    .catch((error) => {
      console.error("Err:", error);
    });
}

fetchRandomImage();