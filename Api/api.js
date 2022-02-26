// first api practice to display and get data
function getApi() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayApi(data))
  // .catch(er => console.log(er))
}
function displayApi(data) {
  const first10 = data.slice(0, 10);
  for (const info of first10) {
    const container = document.createElement('div')
    container.innerHTML = `
    <h1>${info.title}</h1>
    <p>${info.body}</p>
    `;
    document.getElementById('body').appendChild(container);
  }
}
// get image from api (async await system)

async function getImg() {
  // fetch("https://jsonplaceholder.typicode.com/photos")
  // .then(res => res.json())
  // .then(data => displayApi2(data))
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    displayApi2(data);
  }
  catch (error) {
    console.log(error);
  }
}
const displayApi2 = data => {
  const first5 = data.slice(0, 5);
  for (const photo of first5) {
    const photoCon = document.createElement('div');
    photoCon.innerHTML = `
    <div> <img src="${photo.thumbnailUrl}" alt=""> ${photo.title} </div>
    <div> <img src="${photo.url}" alt=""></div>
     `;
    document.getElementById('body').appendChild(photoCon);
  }

}
