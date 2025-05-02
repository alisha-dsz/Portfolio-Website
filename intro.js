const box1 = document.getElementById('link1');
box1.addEventListener('mouseenter', () => {
  box1.style.transform = 'scale(1.1)';
});
box1.addEventListener('mouseleave', () => {
  box1.style.transform = 'scale(1)';
});

const box2 = document.getElementById('link2');
box2.addEventListener('mouseenter', () => {
  box2.style.transform = 'scale(1.1)';
});
box2.addEventListener('mouseleave', () => {
  box2.style.transform = 'scale(1)';
});

const box3 = document.getElementById('button-msg');
box3.addEventListener('mouseenter', () => {
  box3.style.transform = 'scale(1.1)';
});
box3.addEventListener('mouseleave', () => {
  box3.style.transform = 'scale(1)';
});
box3.addEventListener('click', () => {
  alert('Hiii! Thanks for viewing my task 1 :)');
});
