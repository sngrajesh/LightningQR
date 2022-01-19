let obutton = document.getElementById("previous_btn");
let cbutton = document.getElementById("close_btn");
let ul = document.getElementById("previousLink");

document.addEventListener("DOMContentLoaded", (event) => {
  let scanner = new Instascan.Scanner({
    video: document.getElementById("preview"),
  });
  Instascan.Camera.getCameras()
    .then((cameras) => {
      scanner.camera = cameras[cameras.length - 1];
      scanner.start();
    })
    .catch((e) => console.error(e));

  scanner.addListener("scan", (content) => {
    let r = document.getElementById("resultAnchor");
    r.href = content;
    r.innerHTML = content;
    console.log(content);
    var li = document.createElement("li");
    li.innerHTML = content;
    ul.appendChild(li);
  });
});

obutton.addEventListener("click", () => {
  document.getElementById("previous-section").style.zIndex = "10";
  setTimeout(() => {
    document.getElementById("previous-section").style.opacity = "1";
  }, 200);
});

cbutton.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("previous-section").style.opacity = "0";
  }, 200);
  document.getElementById("previous-section").style.zIndex = "-10";
});
