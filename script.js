// Убираем блюр при клике
function revealPhoto(wrapper) {
    wrapper.classList.add("revealed");
}

/* Плавное появление при скролле */
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".image-wrapper, .caption, .row, .title, .subtitle"
    );

    elements.forEach(el => el.classList.add("fade-in"));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
});
