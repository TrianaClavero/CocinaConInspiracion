document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuList = document.querySelector('.menu-list');
  
    menuToggle.addEventListener('change', function () {
      if (this.checked) {
        menuOverlay.style.display = 'block';
        menuList.style.display = 'block';
      } else {
        menuOverlay.style.display = 'none';
        menuList.style.display = 'none';
      }
    });
  
    menuOverlay.addEventListener('click', function () {
      menuToggle.checked = false;
      menuOverlay.style.display = 'none';
      menuList.style.display = 'none';
    });
  });