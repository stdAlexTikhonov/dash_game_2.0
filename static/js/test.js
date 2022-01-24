document.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "Enter") {
      elem
        .requestFullscreen({ navigationUI: "hide" })
        .then(() => {})
        .catch((err) => {
          alert(
            `An error occurred while trying to switch into full-screen mode: ${err.message} (${err.name})`
          );
        });
    }
  },
  false
);
