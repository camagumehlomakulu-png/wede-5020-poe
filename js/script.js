document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // DARK MODE (UNIFIED)
    // =========================

    const toggleBtn =
        document.getElementById("darkToggle") ||
        document.getElementById("darkModeBtn");

    // load saved mode
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            localStorage.setItem(
                "darkMode",
                document.body.classList.contains("dark-mode")
            );
        });
    }


    // =========================
    // BACK TO TOP
    // =========================

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            topBtn.style.display =
                window.scrollY > 300 ? "block" : "none";
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    // =========================
    // SCROLL REVEAL
    // =========================

    const sections = document.querySelectorAll("section");

    const reveal = () => {
        const trigger = window.innerHeight * 0.85;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < trigger) {
                section.classList.add("show");
            }
        });
    };

    sections.forEach(s => s.classList.add("hidden"));

    window.addEventListener("scroll", reveal);
    reveal();


    // =========================
    // COUNTERS
    // =========================

    const counters = document.querySelectorAll(".counter");
    let started = false;

    const runCounters = () => {
        counters.forEach(counter => {
            const update = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;
                const inc = target / 100;

                if (current < target) {
                    counter.innerText = Math.ceil(current + inc);
                    setTimeout(update, 20);
                } else {
                    counter.innerText = target;
                }
            };
            update();
        });
    };

    const stats = document.querySelector(".stats-section");

    if (stats) {
        window.addEventListener("scroll", () => {
            const top = stats.getBoundingClientRect().top;

            if (top < window.innerHeight && !started) {
                runCounters();
                started = true;
            }
        });
    }

});