// Mobil Menü Mantığı
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    // Hamburger ikonu animasyonu (X şekline dönmesi için CSS eklenebilir ama basit tutuyoruz)
});

// Linke tıklayınca menüyü kapat
document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    navLinks.classList.remove("active");
}));


// Scroll Reveal (Aşağı kaydırdıkça belirme efekti)
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
    }
}


// İstatistik Sayacı Animasyonu (Sadece ekrana girdiğinde çalışır)
const counters = document.querySelectorAll('.counter');
let hasCounted = false;

const speed = 200; // Sayma hızı

const runCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20); // ms cinsinden hız
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Sayacın görünüp görünmediğini kontrol et
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const position = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition && !hasCounted) {
        runCounters();
        hasCounted = true;
    }
});
// Footer'daki Yılı Otomatik Güncelle
document.getElementById("year").textContent = new Date().getFullYear();