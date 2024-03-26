// Login Button Event Handler
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const profileArea = document.getElementById('profile-area');
    profileArea.style.display = "block";
});


// Deposit Button Event Handler


function updateSpan(id, amount) {
    let amountNumber = document.getElementById(id).innerText;
    amountNumber = parseFloat(amountNumber);
    const total = amount + amountNumber;
    document.getElementById(id).innerText = total;
}


const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', () => {
    // deposit input field declare
    let depositAmount = document.getElementById('depositAmount').value;
    depositAmount = parseFloat(depositAmount);
    // deposit money 
    updateSpan("depositMoney", depositAmount)
    // balance amount 
    updateSpan("balanceMoney", depositAmount);
    document.getElementById('depositAmount').value = "";

});
