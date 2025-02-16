
// onload = () => {
//     const c = setTimeout(() => {
//       document.body.classList.remove("not-loaded");
//       clearTimeout(c);
//     }, 1000);
//   };

  function removeNotLoaded() {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
    let bgMusic = document.getElementById("bg-music");
    bgMusic.volume = 0.5;
    bgMusic
      .play()
      .catch((error) => console.log("Autoplay diblokir, butuh interaksi."));

    document.getElementById("start-sound").play();
}

