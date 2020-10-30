(function () {
    const buttons = document.querySelectorAll('.btn-counter');
    let counter = 0;

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('btn-lower')) {
                counter--;
            } else if (button.classList.contains('btn-add')) {
                counter++;
            } else if (button.classList.contains('btn-reset')) {
                counter = 0;
            }

            //selecting the counter number display to change when buttons clicked
            const counter_number = document.getElementById('counter-number');
            counter_number.textContent = counter;

            if (counter >= 1) {
                counter_number.style.color = 'rgb(63, 216, 46)';
            } else if (counter < 0) {
                counter_number.style.color = 'rgb(228, 32, 32)';
            } else {
                counter_number.style.color = 'rgb(200, 229, 233)';
            }
        })
    });
})();