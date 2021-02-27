const number = document.getElementById('number');
const percent = document.getElementById('percent');
const btn = document.getElementById('btn');
const resultElement = document.getElementById('result');

const test = (number, percent) => {
  const finalPercent = (number * percent) / 100;
  resultElement.innerHTML = number - finalPercent + ' rub.';
};

btn.addEventListener('click', () => {
  test(number.value, percent.value);
});
