const el = document.querySelector("#reserveNowButton");

el.addEventListener("mousemove", (e) => {
  el.style.setProperty('--mouse-x', e.clientX + "px"); //string, value
  el.style.setProperty('--mouse-y', e.clientY + "px");

});