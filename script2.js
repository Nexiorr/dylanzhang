document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const homeSection = document.getElementById("home");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    navbar.classList.add("transparent");
                } else {
                    navbar.classList.remove("transparent");
                }
            });
        },
        {
            root: null,
            threshold: 0,
        }
    );

    observer.observe(homeSection);
});
