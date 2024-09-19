document.getElementById('cash-out-btn').addEventListener('click', () => {
    const cashInForm = document.getElementById('cash-in-form');

    const cashOutForm = document.getElementById('cash-out-form');

    cashInForm.classList.add('hidden');
    cashOutForm.classList.remove('hidden');

});

document.getElementById('cash-in-btn').addEventListener('click', () => {
    const cashInForm = document.getElementById('cash-in-form');

    const cashOutForm = document.getElementById('cash-out-form');


    cashInForm.classList.remove('hidden');
    cashOutForm.classList.add('hidden');
});

