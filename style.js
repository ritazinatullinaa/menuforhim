const asapOption = document.getElementById('asapOption');
const customOption = document.getElementById('customOption');
const orderTimeInput = document.getElementById('orderTime');

let timeChoice = 'asap'; // по умолчанию

asapOption.addEventListener('click', () => {
  timeChoice = 'asap';
  asapOption.classList.add('selected');
  customOption.classList.remove('selected');
  orderTimeInput.classList.remove('active');
});

customOption.addEventListener('click', () => {
  timeChoice = 'custom';
  customOption.classList.add('selected');
  asapOption.classList.remove('selected');
  orderTimeInput.classList.add('active');
  orderTimeInput.focus();
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = Array.from(document.querySelectorAll('input[name="menu"]:checked')).map(i => i.value);

  let time = '';
  if (timeChoice === 'custom') {
    time = orderTimeInput.value;
    if (!time) {
      alert('Пожалуйста, укажите время!');
      orderTimeInput.focus();
      return;
    }
  } else {
    time = 'как можно скорее';
  }

  if (selected.length === 0) {
    alert('Пожалуйста, выберите хотя бы одно блюдо!');
    return;
  }

  // дальше добавляйте заказ как в вашем коде
  // ...
});
