// Typed Text Effect
if (typeof Typed !== "undefined") {
    new Typed(".typedText", {
        strings: ["ML Engineer", "Data Scientist", "AI Engineer"],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: false,
        showCursor: false,
        smartbackspace: true,
    });
}

// Smooth Scroll for Nav Links
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// Download CV Button
const downloadBtns = document.querySelectorAll(".btn");
downloadBtns.forEach(btn => {
    if (btn.textContent.toLowerCase().includes("download")) {
        btn.addEventListener("click", () => {
            const a = document.createElement("a");
            a.href = "resume_AI.ML.pdf";
            a.download = "Saurabh_Vishwakarma_Resume.pdf";
            a.click();
        });
    }
});
