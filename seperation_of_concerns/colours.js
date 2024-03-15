document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('button').forEach(button => {
    button.onclick = function() {
      document.querySelector('#hello').style.color = button.dataset.colour;
    }
  });
});
