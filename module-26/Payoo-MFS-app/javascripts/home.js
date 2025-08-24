document.getElementById('add-money-btn')
  .addEventListener('click', (event) => {
    event.preventDefault();

    const balance = parseInt(document.getElementById("balance").value);
    const selectBank = document.getElementById("select-bank").value;
    const accountNumber = parseInt(document.getElementById("account-number").value);
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
  })