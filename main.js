let nums = document.querySelectorAll('.nums .num');
let section = document.querySelector('.three');
let started = false; // function started ? no

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => {
                num.innerHTML = '0';
                startCount(num);
            });
            started = true; // function started ? yes
        }
    } else{
        started = false // function started ? no
    }
};

function startCount(element) {
    let goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
};