
const up = document.getElementById("up");
const sk2 = document.getElementById("sk2");

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

// up.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });


