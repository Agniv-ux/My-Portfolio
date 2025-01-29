document.addEventListener("DOMContentLoaded", function () {
    // Create the back-to-top button
    let backToTop = document.createElement("button");
    backToTop.innerText = "↑ Top";
    backToTop.id = "backToTop";
    document.body.appendChild(backToTop);

    // Style the button
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.fontSize = "16px";
    backToTop.style.background = "#222";
    backToTop.style.color = "white";
    backToTop.style.border = "none";
    backToTop.style.cursor = "pointer";
    backToTop.style.borderRadius = "5px";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "1000";
    
    // Show button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Scroll to top when clicked
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
