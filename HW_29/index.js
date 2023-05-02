const voting = document.querySelectorAll('.card');

voting.forEach((option) => {
    option.addEventListener('click', () => {
        const count = parseFloat(option.querySelector('.count').innerHTML);
        option.querySelector('.count').innerHTML = count + 1;
    });
});