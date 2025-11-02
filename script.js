const urlParams = new URLSearchParams(window.location.search);
const albumKey = urlParams.get("album");

// Mapping des noms d'albums
const albumNames = {
    album1: "Symphonie",
    album2: "Don du Sang",
    album3: "TEDx",
    album4: "Cérémonie de remise des diplômes",
    album5: "My Lens"
};

// Nom affiché de l'album
const albumDisplayName = albumNames[albumKey] || "Album";
document.getElementById("album-title").textContent = albumDisplayName;

const container = document.getElementById("mediaGrid");

// Charger les médias dynamiquement
if (albumKey) {
    for (let i = 1; i <= 30; i++) {
        // Essayer l'image .jpg
        const imgPath = `https://bensidi-portfolio.vercel.app/albums/${albumKey}/photo${i}.jpg`;
        const videoPath = `https://bensidi-portfolio.vercel.app/albums/${albumKey}/video${i}.mov`;

        // Créer un div pour chaque média
        const mediaItem = document.createElement("div");
        mediaItem.className = "media-item";
        mediaItem.style.animation = `fadeInUp 0.6s ease forwards`;
        mediaItem.style.animationDelay = `${i*0.1}s`;

        // Image
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = `Photo ${i} de ${albumDisplayName}`;
        img.loading = "lazy";
        img.onerror = function() {
            img.remove(); // si l'image n'existe pas, on la supprime
        };
        img.onload = function() {
            if (this.naturalHeight > this.naturalWidth) mediaItem.classList.add("portrait");
        };
        mediaItem.appendChild(img);

        // Vidéo
        const video = document.createElement("video");
        video.src = videoPath;
        video.controls = true;
        video.playsInline = true;
        video.onerror = function(){ video.remove(); };
        mediaItem.appendChild(video);

        container.appendChild(mediaItem);
    }
}

// Animation keyframes
const styleEl = document.createElement("style");
styleEl.textContent = `
@keyframes fadeInUp {
  from { opacity:0; transform:translateY(20px);}
  to { opacity:1; transform:translateY(0);}
}`;
document.head.appendChild(styleEl);
