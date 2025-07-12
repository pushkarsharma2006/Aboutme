const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggleButton.textContent = 'Switch to Light Theme';
  } else {
    toggleButton.textContent = 'Switch to Dark Theme';
  }
});