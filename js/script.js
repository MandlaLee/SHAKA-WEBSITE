/* =========================================================
   SHAKA'S ADVENTURE WEBSITE JS
   js/shaka.js
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });
    });
}


/* =========================================================
   WAITLIST FORM PLACEHOLDER
========================================================= */

const waitlistForm = document.querySelector(".waitlist-form");

if (waitlistForm) {
    waitlistForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = waitlistForm.querySelector("input");

        if (!input.value.trim()) {
            alert("Please enter your email address.");
            return;
        }

        alert("You have joined the Shaka's Adventure waitlist.");
        input.value = "";
    });
}
