/**
 * Cyberpunk Homepage Animations
 * - Typing effect for role descriptions
 * - Skill bar scroll-triggered animations
 */

// ==========================================================================
// TYPING EFFECT
// ==========================================================================
class TypeWriter {
  constructor(element, words, wait = 3000) {
    this.element = element;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = this.txt;

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// ==========================================================================
// SKILL BARS ANIMATION
// ==========================================================================
class SkillAnimator {
  constructor() {
    this.skillBars = document.querySelectorAll('.skill-fill');
    this.observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    this.observer = null;
    this.init();
  }

  init() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.showAllSkills();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateSkill(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    this.skillBars.forEach(bar => {
      this.observer.observe(bar);
    });
  }

  animateSkill(bar) {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
    bar.classList.add('animate');
  }

  showAllSkills() {
    this.skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  }
}

// ==========================================================================
// FADE IN ANIMATION ON SCROLL
// ==========================================================================
class FadeInObserver {
  constructor() {
    this.elements = document.querySelectorAll('.bio-card, .skills-card, .section-card');
    this.init();
  }

  init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.elements.forEach(el => el.style.opacity = '1');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });
  }
}

// ==========================================================================
// INITIALIZE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize typing effect
  const typingElement = document.getElementById('typing-target');
  if (typingElement) {
    const roles = [
      'AI Researcher',
      'Computer Vision Expert',
      'ML Engineer',
      'Deep Learning Enthusiast',
      'Graduate Student',
      'Problem Solver'
    ];
    new TypeWriter(typingElement, roles, 2000);
  }

  // Initialize skill bars
  if (!prefersReducedMotion) {
    new SkillAnimator();
  }

  // Initialize fade-in animations
  new FadeInObserver();
});
