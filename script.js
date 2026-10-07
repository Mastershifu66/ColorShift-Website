document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const id = link.getAttribute("href");

        if (!id || id === "#") return;

        const target = document.querySelector(id);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* Always show the current year without manual updates. */
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Small live color movement in the hero, based on pointer position. */
const hero = document.querySelector(".hero");
const orbOne = document.querySelector(".orb-one");
const orbTwo = document.querySelector(".orb-two");

if (hero && orbOne && orbTwo && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    hero.addEventListener("pointermove", event => {
        const rect = hero.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        orbOne.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
        orbTwo.style.transform = `translate(${x * -12}px, ${y * -12}px)`;
    });

    hero.addEventListener("pointerleave", () => {
        orbOne.style.transform = "";
        orbTwo.style.transform = "";
    });
}
