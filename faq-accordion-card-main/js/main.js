let acc = Array.from( document.getElementsByClassName("accordion") );

acc.forEach(item => {
    item.addEventListener("click", function() {
        item.classList.toggle("active");
        console.log(item.classList)
        let panel = item.nextElementSibling;
        console.log(panel);
        console.log(panel.style.display);
        panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
    });
});