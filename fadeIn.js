const logo = document.getElementById("header-on-scroll");
const article1 = document.querySelector("#main .article:nth-child(2)");
const article2 = document.querySelector("#main .article:nth-child(3)");
const article3 = document.querySelector("#main .article:nth-child(4)");
const endText = document.getElementById("end-text");
const footer = document.getElementById("footer");

document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            logo.style.opacity = "1";
        } else {
            logo.style.opacity = "0";
        }

        if (scrollPosition > 500) {
            article1.style.opacity = "1";
        } else {
            article1.style.opacity = "0";
        }

        if (scrollPosition > 900) {
            article2.style.opacity = "1";
        } else {
            article2.style.opacity = "0";
        }

        if (scrollPosition > 1500) {
            article3.style.opacity = "1";
        } else {
            article3.style.opacity = "0";
        }

        if (scrollPosition > 1800) {
            endText.style.opacity = "1";
            footer.style.opacity = "1";
        } else {
            endText.style.opacity = "0";
            footer.style.opacity = "0";
        }

	});