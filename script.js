const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', () => {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('active');
});