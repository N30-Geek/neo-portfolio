// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show');
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .card, .blob, .project').forEach(el => io.observe(el));

// Animate bars when visible
const bars = document.querySelectorAll('.bar');
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const w = entry.target.getAttribute('data-width') || '70%';
            entry.target.style.width = w;
        }
    });
}, { threshold: 0.3 });
bars.forEach(b => barObserver.observe(b));

// Simple floating animation for blob
(function floatBlob() {
    const blob = document.querySelector('.blob');
    if (!blob) return;
    let t = 0; function anim() {
        t += 0.01; blob.style.transform = `translateY(${Math.sin(t) * 6}px) rotate(${Math.sin(t / 2) * 1}deg)`;
        requestAnimationFrame(anim);
    }
    anim();
})();

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const tgt = document.querySelector(a.getAttribute('href'));
        if (tgt) { e.preventDefault(); tgt.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    })
})

// Opinionated note (visible in console)
console.info('Opinion: Le design sombre, les transitions fluides et les blobs organiques donnent un rendu moderne et professionnel — gardez la simplicité.');