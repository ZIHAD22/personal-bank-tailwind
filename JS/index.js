const submitBtn = document.getElementById("sumbit-btn");
const passwordFild = document.getElementById("password-fild");
const emailFild = document.getElementById("email-fild");
submitBtn.addEventListener("click" , function() {
    const email = emailFild.value;
    const password = passwordFild.value;
    if(email == "personal@gmail.com" && password == "1234"){
        window.location.href = "bank.html"
    }
})