document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");
    const navBar = document.getElementById("navbar");

    // Toggle mobile menu
    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Auto-close on link click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("active"));
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
        if (!navBar.contains(e.target) && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
    });

    // Shrink navbar on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navBar.classList.add("shrink");
        } else {
            navBar.classList.remove("shrink");
        }
    });

    // Highlight active link
    const currentURL = window.location.href;
    document.querySelectorAll(".nav-link").forEach(link => {
        if (currentURL.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Calendar
    flatpickr("#dateInput", {
        mode: "range",
        minDate: "today",
        dateFormat: "Y-m-d"
    });

    // Guest Dropdown
    const guestsInput = document.getElementById("guestsInput");
    const guestsPanel = document.getElementById("guestsPanel");

    guestsInput.addEventListener("click", (e) => {
        guestsPanel.style.display = "block";
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        guestsPanel.style.display = "none";
    });

    document.querySelectorAll(".counter button").forEach(btn => {
        btn.addEventListener("click", () => {
            const span = btn.parentElement.querySelector("span");
            let value = parseInt(span.textContent);
            if (btn.classList.contains("plus")) value++;
            if (btn.classList.contains("minus") && value > 0) value--;
            span.textContent = value;

            const adults = document.querySelector("span[data-type='adults']").textContent;
            const children = document.querySelector("span[data-type='children']").textContent;
            const rooms = document.querySelector("span[data-type='rooms']").textContent;
            guestsInput.value = `${adults} adults · ${children} children · ${rooms} room${rooms > 1 ? 's' : ''}`;
        });
    });
});