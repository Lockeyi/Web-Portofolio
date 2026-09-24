document.addEventListener('DOMContentLoaded', () => {
    // 1. MANIPULASI DOM: Menu Navigasi Mobile (Hamburger Toggle)
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinksMenu = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    // Buka/Tutup menu saat tombol hamburger diklik
    hamburgerBtn.addEventListener('click', () => {
        navLinksMenu.classList.toggle('active');
    });

    // Tutup menu otomatis saat salah satu link diklik (di tampilan mobile)
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinksMenu.classList.remove('active');
        });
    });

    // 2. MANIPULASI DOM: Sapaan Dinamis Berdasarkan Waktu
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingText = 'Halo,';

    if (currentHour >= 5 && currentHour < 12) {
        greetingText = 'Selamat Pagi,';
    } else if (currentHour >= 12 && currentHour < 15) {
        greetingText = 'Selamat Siang,';
    } else if (currentHour >= 15 && currentHour < 18) {
        greetingText = 'Selamat Sore,';
    } else {
        greetingText = 'Selamat Malam,';
    }

    // Memasukkan teks sapaan ke dalam elemen HTML
    greetingElement.textContent = greetingText;
});