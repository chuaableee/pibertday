function revealGreeting() {
    document.getElementById('gift-section').classList.add('hidden');
    const card = document.getElementById('card');
    card.classList.remove('hidden');
    setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; }, 50);
    
    startConfetti();
}

// Simple Confetti Logic
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function startConfetti() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 7 + 3,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            velocity: Math.random() * 3 + 2
        });
    }
    animate();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.y += p.velocity;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        
        if (p.y > canvas.height) particles[i].y = -10;
    });
    requestAnimationFrame(animate);
}








