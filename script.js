const urlParams = new URLSearchParams(window.location.search);
const albumName = urlParams.get("album");

if (albumName) {
  document.getElementById("album-title").textContent = albumName.replace(
    "album",
    "Album "
  );

  const container = document.getElementById("photoGrid");

  for (let i = 1; i <= 30; i++) {
    let img = document.createElement("img");
    img.src = `albums/${albumName}/photo${i}.jpg`;
    img.onerror = () => img.remove();
    container.appendChild(img);
  }
}
const albumNames = {
  album1: "Symphonie",
  album2: "Votre Nom d'Album 2",
  album3: "Votre Nom d'Album 3",
  // etc.
};