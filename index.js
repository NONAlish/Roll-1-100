const btn = document.getElementById('btn');
const labels = document.querySelectorAll('.mylabel');

const min = 1;
const max = 100;

btn.onclick = function () {
  labels.forEach(label => {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    label.textContent = randomNum;
  });
};
