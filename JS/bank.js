const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const depositFild = document.getElementById("deposit-fild");
const withdrawFild = document.getElementById("withdraw-fild");
const depositTo = document.getElementById("deposit-to");
const withdrawTo = document.getElementById("withdraw-to");
const balance = document.getElementById("total-bln");


depositBtn.addEventListener("click" , function() {
    if(depositFild.value != ""){
        const previesBalance = parseInt(balance.innerText);
        const previesDeposit = parseInt(depositTo.innerText);
        const depositValue = parseInt(depositFild.value);
        const totalDeposit = previesDeposit + depositValue;
        const totalBalance = previesBalance + depositValue;
        depositTo.innerText = totalDeposit;
        balance.innerText = totalBalance;
        depositFild.value = "";
    }else{
        console.log("please enter a valid deposit value");
    }
})

withdrawBtn.addEventListener("click" , function() {
    if(withdrawFild.value != ""){
        const previesBalance = parseInt(balance.innerText);
        const previesWithdraw = parseInt(withdrawTo.innerText);
        const withdrawValue = parseInt(withdrawFild.value);
        const totalWithdraw = previesWithdraw + withdrawValue;
        const totalBalance = previesBalance - withdrawValue;
        withdrawTo.innerText = totalWithdraw;
        balance.innerText = totalBalance;
        withdrawFild.value = "";
    }else{
        console.log("please enter a valid withdraw value");
    }
})