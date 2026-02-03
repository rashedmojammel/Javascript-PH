// Advanced Portfolio Controller
class Portfolio {
  constructor() {
    this.init();
  }

  init() {
    this.cursor();
    this.loader();
    this.smoothScroll();
    this.activeNav();
    this.revealOnScroll();
    this.statsCounter();
    this.tiltEffect();
  }

  cursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
      
      follower.style.left = posX + 'px';
      follower.style.top = posY + 'px';
      
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;
    });
  }

  loader() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      document.body.style.overflow = 'auto';
    }, 3200);
  }

  smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  activeNav() {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = section.id;
        }
      });
      
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    });
  }

  revealOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  statsCounter() {
    const animate = (el, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(start);
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('[data-target]').forEach(stat => {
            animate(stat, parseInt(stat.dataset.target));
          });
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelector('.hero-stats')?.parentElement && observer.observe(document.querySelector('.hero-stats'));
  }

  tiltEffect() {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      let rotateX = 0, rotateY = 0;
      
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        rotateX = (y / rect.height - 0.5) * 20;
        rotateY = (x / rect.width - 0.5) * 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => new Portfolio());
