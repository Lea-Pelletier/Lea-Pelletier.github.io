document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");

    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-menu");
    mobileMenu.appendChild(closeButton);

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    // Close obile menu
    closeButton.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.classList.contains("hamburger") || this.classList.contains("close-menu")) return;

            e.preventDefault();
            const href = this.href;
            document.body.style.opacity = 0; 

            setTimeout(() => {
                window.location.href = href;
            }, 400); 
        });
    });
});
