const logoutBtn = document.querySelector(".logout-btn");

const cardAddMoney = document.querySelector(".card-add-money");
const cardCashout = document.querySelector(".card-cashout");
const cardTransferMoney = document.querySelector(".card-transfer-money");
const cardGetBonus = document.querySelector(".card-get-bonus");
const cardPayBill = document.querySelector(".card-pay-bill");
const cardTransactions = document.querySelector(".card-transactions");

const addMoneySection = document.querySelector(".add-money-section");
const cashoutSection = document.querySelector(".cashout-section");
const transferMoneySection = document.querySelector(".transfer-money-section");
const getBonusSection = document.querySelector(".get-bonus-section");
const payBillSection = document.querySelector(".pay-bill-section");
const transactionsSection = document.querySelector(".transactions-section");

const addMoneyBtn = document.getElementById('add-money-btn')
const withdrawMoneyBtn = document.getElementById('withdraw-money-btn')

const transactionsDataList = [];

logoutBtn.addEventListener("click", (event) => {
  window.location.href = "../index.html"
})

cardAddMoney.addEventListener("click", (event) => {
  toggleFuntion(event)
  addMoneySection.classList.remove("hidden");
  addMoneySection.classList.add("block");

})

cardCashout.addEventListener("click", (event) => {
  toggleFuntion(event)
  cashoutSection.classList.remove("hidden");
  cashoutSection.classList.add("block");
})

cardTransferMoney.addEventListener("click", (event) => {
  toggleFuntion(event)
  transferMoneySection.classList.remove("hidden");
  transferMoneySection.classList.add("block");

})

cardGetBonus.addEventListener("click", (event) => {
  toggleFuntion(event)
  getBonusSection.classList.remove("hidden");
  getBonusSection.classList.add("block");

})

cardPayBill.addEventListener("click", (event) => {
  toggleFuntion(event)
  payBillSection.classList.remove("hidden");
  payBillSection.classList.add("block");

})

cardTransactions.addEventListener("click", (event) => {
  toggleFuntion(event)
  transactionsSection.classList.remove("hidden");
  transactionsSection.classList.add("block");
  const div = document.createElement("div");
  div.innerHTML = "";

  for (transaction of transactionsDataList) {
    div.innerHTML = `
          <div class="flex justify-between items-center p-6 my-3 bg-white rounded-2xl shadow-2xl">
          <div class="flex items-center">
            <div class="h-[46px] w-[46px] bg-[#08080836] rounded-full mr-2 flex justify-center items-center">
              <img src="${transaction.img}" class="h-[24px] w-[24px]" alt="">
            </div>
            <div>
              <h3 class="text-[16px]">${transaction.name}</h3>
              <p class="text-[12px]">${transaction.date}</p>
            </div>
          </div>
          <button class="h-[24px] w-[24px] cursor-pointer"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
    `
    transactionsSection.appendChild(div);
  }

})


function toggleFuntion(button) {
  targetCard = button.currentTarget;

  const childrenSections = transactionsSection.parentNode.children;
  for (const child of childrenSections) {
    if (child.classList.contains("block")) {
      child.classList.remove("block");
      child.classList.add("hidden")
    }
  }
  const childrenCards = targetCard.parentNode.children;
  for (const child of childrenCards) {
    if (child.classList.contains("border-[#0874f2]")) {
      child.classList.remove("border-[#0874f2]");
      child.classList.remove("bg-[#0874f20d]");
      child.classList.add("border-gray-300")
    }
  }
  targetCard.classList.remove("border-gray-300");
  targetCard.classList.add("border-[#0874f2]");
  targetCard.classList.add("bg-[#0874f20d]");
}

addMoneyBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const selectBank = document.getElementById("select-bank");
  const accountNumber = document.getElementById("account-number");
  const addAmount = document.getElementById("add-amount");
  const pinNumber = document.getElementById("pin-number");

  if (selectBank.value === "Select from here" ||
    isNaN(parseInt(accountNumber.value)) ||
    isNaN(parseInt(addAmount.value)) ||
    isNaN(parseInt(pinNumber.value))) {
    alert("invalide")
  } else if (accountNumber.value.length !== 12) {
    alert("Account number has to be 12 Digits");
  } else if (addAmount.value < 300) {
    alert("Amount has to be at least 500 taka");
  } else if (pinNumber.value.length != 4) {
    alert("Pin Number has to be 4 Digits");
  }
  else {
    const balance = document.getElementById("balance");
    const currentBalance = parseInt(balance.innerText) + parseInt(addAmount.value);
    balance.innerText = currentBalance;
    selectBank.innerText === "Select from here";
    accountNumber.value = "";
    addAmount.value = "";
    pinNumber.value = "";
    const transactionsData = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
      img: "../assets/wallet1.png"
    }
    transactionsDataList.unshift(transactionsData);
  }
});

withdrawMoneyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const accountNumber = document.getElementById("cashout-account-number");
  const cashoutAomunt = document.getElementById("cashout-amount");
  const pinNumber = document.getElementById("cashout-pin-number");
  const balance = document.getElementById("balance");

  if (isNaN(parseInt(accountNumber.value)) ||
    isNaN(parseInt(cashoutAomunt.value)) ||
    isNaN(parseInt(pinNumber.value))) {
    alert("invalide")
  } else if (accountNumber.value.length !== 12) {
    alert("Account number has to be 12 Digits");
  } else if (cashoutAomunt.value < 300 && cashoutAomunt.value > 50000 && cashoutAomunt.value > parseInt(balance.innerText)) {
    alert("incorrect Amount");
  } else if (pinNumber.value.length != 4) {
    alert("Pin Number has to be 4 Digits");
  }
  else {
    const currentBalance = parseInt(balance.innerText) - parseInt(cashoutAomunt.value);
    balance.innerText = currentBalance;
    accountNumber.value = "";
    cashoutAomunt.value = "";
    pinNumber.value = "";

    const transactionsData = {
      name: "Withdraw Money",
      date: new Date().toLocaleTimeString(),
      img: "../assets/send1.png"
    }
    transactionsDataList.unshift(transactionsData);
  }
})







