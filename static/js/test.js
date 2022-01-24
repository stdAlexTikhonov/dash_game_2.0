window.onload = () => {
  document.getElementsByTagName("header")[0].style.display = "none";
  var goFS = document.getElementById("goFS");
  goFS.addEventListener(
    "click",
    function () {
      document.body.webkitRequestFullScreen();
    },
    false
  );
};
