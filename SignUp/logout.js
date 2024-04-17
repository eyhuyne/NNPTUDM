const logoutBtn = document.querySelector(".logout-btn")

logoutBtn.addEventListener("click",()=>{
    window.location.replace("login.html")
    document.querySelector('#logout-btn').disabled = true;
})