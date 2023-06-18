document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    });