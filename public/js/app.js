console.log('JS loaded');

document.addEventListener('DOMContentLoaded', () => {
  const deleteBtns = document.querySelectorAll('.delete');

  deleteBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      if(!confirm('Are you sure?')) e.preventDefault();
    });
  });

});
