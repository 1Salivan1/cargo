const anchors = document.querySelectorAll("a.anchor");

anchors.forEach(function(link) {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        scrollTarget.scrollIntoView({
            behavior: "smooth"
        })
    });
})