
const up = document.getElementById("up");
const sk2 = document.getElementById("sk2");
const contactForm = document.getElementById("contact");
const contactSuccess = document.getElementById("contact-success");
const submitAnother = document.getElementById("submit-another");
const submitButton = contactForm.querySelector('button[type="submit"]');

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent > 25) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Sending...';

    window.setTimeout(() => {
        contactForm.setAttribute("hidden", "");
        contactSuccess.removeAttribute("hidden");
    }, 1500);
});

submitAnother.addEventListener("click", () => {
    contactSuccess.setAttribute("hidden", "");
    contactForm.reset();
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
    contactForm.removeAttribute("hidden");
});

// up.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });


