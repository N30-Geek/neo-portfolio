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

// Gestion du menu hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;
const stat_repo = document.querySelector(".stat-repo");

// Création de l'overlay s'il n'existe pas
let overlay = document.querySelector('.nav-overlay');
if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
}

// Fonction pour fermer le menu
function closeMobileMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = 'auto';
}

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
        closeMobileMenu();
    } else {
        hamburger.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
    }
}

// Événements
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
}

// Fermer le menu lors du clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Fermer le menu lors du redimensionnement de la fenêtre
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 1024) {
            closeMobileMenu();
        }
    }, 100);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Fermer le menu mobile après le clic
            closeMobileMenu();
        }
    });
});

// Fonction pour afficher le nombre de dépôts GitHub
async function afficherNombreRepos() {
  try {
    // Récupérer les éléments du DOM
    const statRepo = document.querySelector('.stat-repo');
    if (!statRepo) {
      console.warn("Élément .stat-repo non trouvé");
      return;
    }

    // Remplacer 'votre-nom-utilisateur' par votre nom d'utilisateur GitHub
    const username = 'n30-geek';
    if (username === 'votre-nom-utilisateur') {
      console.warn("Veuillez remplacer 'votre-nom-utilisateur' par votre nom d'utilisateur GitHub");
      statRepo.textContent = "+0";
      return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    const nombreRepos = data.public_repos;
    
    // Mise à jour de l'interface utilisateur
    statRepo.textContent = `+${nombreRepos}`;
    
  } catch (error) {
    console.error("Erreur lors de la récupération des dépôts GitHub:", error);
    const statRepo = document.querySelector('.stat-repo');
    if (statRepo) {
      statRepo.textContent = "+0";
    }
  }
}

// Appel de la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  afficherNombreRepos();
  
  // Désactiver le comportement par défaut des liens vides
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Lien cliqué :', link.textContent.trim());
    });
  });
});