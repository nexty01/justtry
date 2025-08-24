function openGift() {
  const box = document.querySelector(".gift-box");
  box.classList.add("opened");

  document.getElementById("surprise").classList.remove("hidden");

  // Confetti
  confetti({
    particleCount: 200,
    spread: 180,
    origin: { y: 0.6 }
  });

  // Floating hearts
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
