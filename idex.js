document.getElementById('login-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const phoneNumberInput = document.getElementById('phone-number').value;
    const pinNumberInput = document.getElementById('pin-number').value;

    if (phoneNumberInput === "01903175832" && pinNumberInput === '4321') {
        window.location.href='/index-home.html'
    } else {
        alert('Your phone number Or pin wrong');
    };
});