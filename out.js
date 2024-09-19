document.getElementById('out-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const moneyOut = parseFloat(document.getElementById('money-out').value);

    // console.log(moneyOut)

    const pinOut = document.getElementById('pin-out').value;
    let totalMoney = parseFloat(document.getElementById('total-amount').innerText);
    // console.log(totalMoney);
    if (pinOut === '4321') {
        document.getElementById('total-amount').innerText = totalMoney - moneyOut;

    } else {
        alert('yor pin wrong')
    }

});