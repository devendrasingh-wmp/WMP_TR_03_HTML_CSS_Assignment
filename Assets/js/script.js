const cardContainer = document.querySelector('.card-cards');
const leftButton = document.querySelector('.backward');
const rightButton = document.querySelector('.forward');

leftButton.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
    toggleButtonStyle(leftButton, rightButton);
});

rightButton.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
    toggleButtonStyle(rightButton, leftButton);
});

function toggleButtonStyle(activeButton, inactiveButton) {
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
}
document.getElementById('toggle-btn').addEventListener('click', function() {
    const dropDownMenu = document.getElementById('nav-toggle');
    const toggleBtn = document.getElementById('toggle-btn');
  
    dropDownMenu.classList.toggle('active');
    if (dropDownMenu.classList.contains('active')) {
      toggleBtn.textContent = '×'; 
    } else {
      toggleBtn.textContent = '☰'; 
    }
  });
  