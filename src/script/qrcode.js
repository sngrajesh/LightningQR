const input = document.getElementById("gen-input");
const canvas = document.getElementById("qr");
const clear = document.getElementById("clear_btn");
const download = document.getElementById("download_btn");





let inputcolour = document.querySelectorAll("#baseColor");
let output = document.querySelector(".c_value");
let changecolor = "#ffffff";
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
 
   changecolor= this.value;
  output.innerHTML = this.value;
}
inputcolour.forEach((input) => input.addEventListener("change", handleUpdate));
inputcolour.forEach((input) => input.addEventListener("change", ()=>{
  qr.foreground = changecolor;
}));




let inputcolour2 = document.querySelectorAll("#baseColor2");
let output2 = document.querySelector(".c_value2");
let changecolor2 = "#000000";
function handleUpdate2() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  
   changecolor2= this.value;
  output2.innerHTML = this.value;
}
inputcolour2.forEach((input) => input.addEventListener("change", handleUpdate2));










const createQR = (v ,c=changecolor) => {
  return new QRious({
    element: canvas,
    value: v,
    size: 400,
    backgroundAlpha: 0,
    foreground: c,
  });
};

const qr = createQR(input.value , changecolor );

input.addEventListener("input", () => {
  const qr = createQR(input.value);
});

clear.addEventListener("click", () => {
  input.value = "";
});

download.addEventListener("click", () => {
  qr.backgroundAlpha = "1";
  qr.background = changecolor2;
  DownloadCanvasAsImage();
  qr.backgroundAlpha = "2";
  qr.background =  "transparent";
});

function DownloadCanvasAsImage() {
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "LightningQR.png");
  let canvas = document.getElementById("qr");
  canvas.toBlob(function (blob) {
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute("href", url);
    downloadLink.click();
  });
}

let obutton = document.getElementById("more_btn");
let cbutton = document.getElementById("close_btn");

obutton.addEventListener("click", () => {
  document.getElementById("more-section").style.zIndex = "10";
  setTimeout(() => {
    document.getElementById("more-section").style.opacity = "1";
  }, 200);
});

cbutton.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("more-section").style.opacity = "0";
  }, 200);
  document.getElementById("more-section").style.zIndex = "-10";
});
