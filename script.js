var preloader = document.getElementById('preloader');
window.addEventListener('load', function() {
    preloader.style.display = 'none';
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function showsidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hidesidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    // Buka popup
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            const popup = document.querySelector('.popup-gallery');
            popup.querySelector('img').setAttribute('src', imgSrc);
            popup.style.display = 'block';
        });
    });

    // Tutup popup
    document.querySelector('.popup-gallery').addEventListener('click', function(e) {
        if(e.target.tagName === 'SPAN' || e.target === this) {
            this.style.display = 'none';
        }
    });
});

const ToTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        ToTop.classList.add("active");
    } else {
        ToTop.classList.remove("active");
    }
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top <= offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header ul a[href*=" + id + "]").classList.add("active");
            });
        }
    })
};

