console.log('JS loaded');

document.addEventListener('DOMContentLoaded', () => {
  const deleteBtns = document.querySelectorAll('.delete');

  deleteBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      if(!confirm('Are you sure?')) e.preventDefault();
    });
  });


  (function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-item');

    burger.addEventListener('click', function(){
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });
  })();

});
