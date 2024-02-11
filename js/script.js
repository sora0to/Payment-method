const addPeymentMethod = document.querySelector('.AddPeymentMethod');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

addPeymentMethod.addEventListener('click', function () {
    popup.style.display = 'block';
});

close.addEventListener('click', function () {
    popup.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if(event.target == popup) {
        popup.style.display = 'none';
    }
});