let obutton = document.getElementById("about_btn");
let cbutton = document.getElementById("close_btn");

obutton.addEventListener("click", () => {
  document.getElementById("contactus-section").style.zIndex = "-10";

  document.getElementById("aboutus-section").style.zIndex = "10";
  setTimeout(() => {
    document.getElementById("aboutus-section").style.opacity = "1";
  document.getElementById("contactus-section").style.opacity = "0";

  }, 200);
});

cbutton.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("aboutus-section").style.opacity = "0";
  }, 200);
  document.getElementById("aboutus-section").style.zIndex = "-10";
});

let obutton2 = document.getElementById("contact_btn");
let cbutton2 = document.getElementById("close_btn_2");

obutton2.addEventListener("click", () => {
  document.getElementById("contactus-section").style.zIndex = "20";
  document.getElementById("aboutus-section").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("contactus-section").style.opacity = "1";
    document.getElementById("aboutus-section").style.zIndex = "-10";
  }, 200);
});

cbutton2.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("contactus-section").style.opacity = "0";
  }, 200);
  document.getElementById("contactus-section").style.zIndex = "-10";
});

//close_btn_2
