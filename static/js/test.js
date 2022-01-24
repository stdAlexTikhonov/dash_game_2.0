window.onload = () => {
  const confirmation = confirm("Развернуть приложение на полный экран?");

  if (confirmation) {
    document.documentElement
      .requestFullscreen({ navigationUI: "hide" })
      .then(() => {})
      .catch((err) => {
        alert(
          `An error occurred while trying to switch into full-screen mode: ${err.message} (${err.name})`
        );
      });
  }
};
