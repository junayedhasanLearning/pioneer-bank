// Login Button Event Handler
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', ()=>{
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const profileArea = document.getElementById('profile-area');
    profileArea.style.display = "block";
});


// Deposit Button Event Handler