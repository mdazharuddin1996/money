document.getElementById('continue-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const moneyInput = parseFloat(document.getElementById('money-input').value);

    const pinInput = document.getElementById('pin-input').value;
    let totalMoney = parseFloat(document.getElementById('total-amount').innerText);
    console.log(totalMoney);
    
        document.getElementById('total-amount').innerText = totalMoney + moneyInput;

  

});