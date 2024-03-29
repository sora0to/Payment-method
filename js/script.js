document.addEventListener('DOMContentLoaded', function () {
    const addPeymentMethod = document.querySelector('.AddPeymentMethod');
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close');

    const newCard = document.getElementById('new__card');
    const submitCard = document.getElementById('submit_card');
    const cancelCard = document.getElementById('cancel__card');

    const numberCard = document.querySelector('.number__card');
    const expiriesCard = document.querySelector('.expiries__card');

    // popup
    addPeymentMethod.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    close.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    cancelCard.addEventListener('click', function () {
        popup.style.display = 'none';
    })

    // create new card
    submitCard.addEventListener('click', function (event) {
        event.preventDefault();

        const cardHolder = document.getElementById('card_holder').value;
        const expiryDate = document.getElementById('expiry_date').value;
        const cardNumber = document.getElementById('card_number').value;
        const cvv = document.getElementById('cvv').value;

        numberCard.textContent = cardNumber;
        expiriesCard.textContent = expiryDate;

        newCard.style.display = 'block';

        popup.style.display = 'none';
    });
});