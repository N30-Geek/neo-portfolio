// Animation de frappe pour le titre principal
function initTypingEffect() {
    const title = document.querySelector('.hero h1');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const speed = 100; // vitesse de frappe en ms
    
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Démarrer l'animation quand la section est visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            typeWriter();
            observer.disconnect();
        }
    });
    
    observer.observe(title);
}

// Bouton retour en haut
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mode sombre/clair
function initThemeSwitcher() {
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
        <input type="checkbox" id="theme-toggle" aria-label="Basculer le mode clair/sombre">
        <label for="theme-toggle" class="theme-toggle-label">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <span class="ball"></span>
        </label>
    `;
    
    // Ajouter le sélecteur de thème dans le header
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(themeToggle);
    }
    
    // Gestionnaire d'événement pour le changement de thème
    const toggle = themeToggle.querySelector('#theme-toggle');
    toggle.addEventListener('change', (e) => {
        document.body.classList.toggle('light-theme', e.target.checked);
        localStorage.setItem('theme', e.target.checked ? 'light' : 'dark');
    });
    
    // Vérifier le thème sauvegardé
    if (localStorage.getItem('theme') === 'light') {
        toggle.checked = true;
        document.body.classList.add('light-theme');
    }
}

// Effet de parallaxe léger
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        hero.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Initialiser toutes les animations
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initBackToTop();
    initThemeSwitcher();
    initParallax();
    
    // Animation au défilement
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observer les sections avec la classe 'reveal'
    document.querySelectorAll('.reveal').forEach(section => {
        observer.observe(section);
    });
});
