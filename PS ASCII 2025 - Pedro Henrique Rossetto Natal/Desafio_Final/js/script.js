document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const buttons = document.querySelectorAll('.buttons button');
    const topics = document.querySelectorAll('.topics p');

    topics.forEach(topic => topic.classList.remove('active'));

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            topics.forEach(topic => topic.classList.remove('active'));
            topics[index].classList.add('active');
        });
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}