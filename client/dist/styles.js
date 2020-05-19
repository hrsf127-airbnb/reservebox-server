const el = document.querySelector("#reserveNowButton");

el.addEventListener("mousemove", (e) => {
  el.style.setProperty('--mouseX', e.clientX + "px"); //string, value
  el.style.setProperty('--mouse-Y', e.clientY + "px");

});


