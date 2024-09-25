const navbar = document.getElementById('navbar');
let currentBalance = document.getElementById('currenTotalBalance').innerText;
console.log(currentBalance);

const history = [];

function showDonation() {
  document.getElementById('donationSection').classList.remove('hidden');
  document.getElementById('historySection').classList.add('hidden');
}
function showHistory() {
  const historySection = document.getElementById('historySection');
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '';
  for (const entry of history) {
    const listItem = document.createElement('h2');
    listItem.innerText = `${entry.amount} Taka, ${entry.cause},  \n Date: ${entry.date}`;
    historyList.appendChild(listItem);
  }
  document.getElementById('donationSection').classList.add('hidden');
  historySection.classList.remove('hidden');
}
function handleDonate(cause, totalId, inputId) {
  const amountInput = document.getElementById(inputId);
  const totalElement = document.getElementById(totalId);
  const donationAmount = parseInt(amountInput.value);

  if (donationAmount > 0) {
    if (donationAmount > currentBalance) {
      alert("Insufficient balance to make this donation.");
      return;
    }
    const currentTotal = parseInt(totalElement.innerText);
    totalElement.innerText = currentTotal + donationAmount;
    currentBalance -= donationAmount;
    document.getElementById('currenTotalBalance').innerText = `${currentBalance}`;
    const date = new Date().toLocaleString();
    history.push({ cause, amount: donationAmount, date });
    document.getElementById('congratulationsModal').classList.remove('hidden');
    amountInput.value = '';
  } else {
    alert('Please enter a valid donation amount.');
  }
}
function closeModal() {
  document.getElementById('congratulationsModal').classList.add('hidden');
}