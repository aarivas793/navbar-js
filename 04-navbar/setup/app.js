// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

toggleBtn.addEventListener('click', function () {
  // if (navLinks.classList.contains('show-links')) {
  //   navLinks.classList.remove('show-links');
  // } else {
  //   navLinks.classList.add('show-links');
  // }
  navLinks.classList.toggle('show-links');
});
