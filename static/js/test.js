document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  let elem = document.documentElement;

  elem
    .requestFullscreen({ navigationUI: "hide" })
    .then(() => {})
    .catch((err) => {
      alert(
        `An error occurred while trying to switch into full-screen mode: ${err.message} (${err.name})`
      );
    });
});
