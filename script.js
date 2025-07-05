const message = `Selamat ulang tahun, bocil kicik kunti bogelku 💖🎉

Meski kita jauh, rasa sayangku nggak pernah berkurang sedikit pun.
Aku kangen banget peluk kamu hari ini...
Tapi biarlah doaku yang memeluk kamu dari jauh.

Semoga kamu selalu sehat, bahagia, dan dikelilingi cinta.
Aku janji, nanti saat kita ketemu,
semua rindu ini akan aku bayar lunas dengan peluk paling erat.

I love you, bocilku. Selamat ulang tahun ya 😘🎂🌌💖`;

let i = 0;
const speed = 50;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("message").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function openGift() {
  const giftBox = document.querySelector('.gift-box');
  const msg = document.getElementById("message");
  giftBox.classList.add('opened');
  msg.classList.remove('hidden');
  typeWriter();
  startConfetti();
}

// Confetti (sama seperti sebelumnya)
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      velocity: Math.random() * 3 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    pieces.forEach(p => {
      p.y += p.velocity;
      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  draw();
}
