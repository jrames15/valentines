const introCard = document.getElementById('introCard');
const openEnvelope = document.getElementById('openEnvelope');
const choices = document.getElementById('choices');
const heartsContainer = document.querySelector('.hearts');

let opened = false;

openEnvelope?.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  introCard.classList.add('open');

  setTimeout(() => {
    choices.classList.add('visible');
  }, 700);
});

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;
  heart.style.opacity = `${0.2 + Math.random() * 0.4}`;
  heart.style.transform = `scale(${0.6 + Math.random() * 0.8}) rotate(45deg)`;
  heartsContainer?.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

setInterval(spawnHeart, 650);
for (let i = 0; i < 8; i++) {
  setTimeout(spawnHeart, i * 240);
}
