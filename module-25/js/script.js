const h1demo = document.getElementById('demo');
const input1 = document.getElementById('input');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  h1demo.innerText = input1.value;

})

