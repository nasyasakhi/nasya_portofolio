function animateCV() {
    const star = document.querySelector('.star');
    const cvButton = document.querySelector('.my_cv');

    // Tambahin animasi smooth
    star.style.transition = 'transform 0.5s ease-in-out';
    cvButton.style.transition = 'transform 0.3s ease-in-out';

    // Rotate bintang & scale button
    star.style.transform = 'rotate(180deg)';
    cvButton.style.transform = 'scale(1.2)';

    setTimeout(() => {
        star.style.transform = 'rotate(0deg)'; // Balikin ke posisi awal
        cvButton.style.transform = 'scale(1)';
    }, 600); // Sedikit lebih lama buat efek smooth
}

// BTN PORTOFOLIO
document.addEventListener("DOMContentLoaded", function () {
    const btnToggle = document.querySelector(".btn_toggle");

    btnToggle.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

// Animasi muncul untuk service-box
function revealServicesOnScroll() {
    const serviceBoxes = document.querySelectorAll('.service-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // animasi 1x
            }
        });
    }, {
        threshold: 0.1
    });

    serviceBoxes.forEach(box => {
        observer.observe(box);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    revealServicesOnScroll();

    // BTN PORTOFOLIO toggle
    const btnToggle = document.querySelector(".btn_toggle");
    btnToggle.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

const books = document.querySelectorAll('.book');

    books.forEach(book => {
      book.addEventListener('click', () => {
        // Tutup semua buku lainnya
        books.forEach(b => {
          if (b !== book) b.classList.remove('open');
        });

        // Toggle buku yang diklik
        book.classList.toggle('open');
      });
    });





