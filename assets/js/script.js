// Login Button Event Handler
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const profileArea = document.getElementById('profile-area');
    profileArea.style.display = "block";
});



function updateSpan(id, amount) {
    let amountNumber = document.getElementById(id).innerText;
    amountNumber = parseFloat(amountNumber);
    const total = amount + amountNumber;
    document.getElementById(id).innerText = total;
};

function getInputValue(id){
    let inputValue = document.getElementById(id).value;
    inputValue = parseFloat(inputValue);
    return inputValue;
};

// Deposit Button Event Handler
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', () => {
    // deposit input field declare
    let depositAmount = getInputValue('depositAmount');
    // deposit money 
    updateSpan("depositMoney", depositAmount)
    // balance amount 
    updateSpan("balanceMoney", depositAmount);
    document.getElementById('depositAmount').value = "";

});


// Withdraw Button Event Handler

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', () => {
    const withdrawAmount = getInputValue('withdrawAmountInput');

    updateSpan("totalWithdrawAmount", withdrawAmount);
    updateSpan("balanceMoney", (-1 * withdrawAmount));

    document.getElementById('withdrawAmountInput').value = "";
});