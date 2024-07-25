document.getElementById('menu-item').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});