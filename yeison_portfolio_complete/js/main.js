// Initialize typed effect for the hero section
// Requires typed.js library to be loaded before this script
document.addEventListener('DOMContentLoaded', () => {
  const typedTarget = document.getElementById('typed-text');
  if (typedTarget) {
    // Configure your professional roles here; they will rotate indefinitely
    const roles = [
      'Debt Relief Consultant',
      'Sales Specialist',
      'Virtual Assistant',
      'Technical Support Expert',
      'Customer Success Advocate'
    ];
    new Typed('#typed-text', {
      strings: roles,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
});