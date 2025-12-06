// Fungsi untuk navigasi antar halaman
function navigateTo(page) {
    switch(page) {
        case 'pengajuanFormDosen':
            window.location.href = 'pengajuanFormDosen.html';
            break;
        case 'kelolaPengajuanDosen':
            window.location.href = 'kelolaPengajuanDosen.html';
            break;
        case 'riwayatBimbingan':
            window.location.href = 'riwayatBimbingan.html';
            break;
        case 'beranda':
            window.location.href = 'beranda.html';
            break;
        default:
            console.log('Halaman tidak ditemukan');
    }
}

// Fungsi untuk inisialisasi event listeners
function initializeNavigation() {
    // Event listener untuk tombol di beranda.html
    const ajukanBtn = document.querySelector('.pengajuan-bimbingan .btn-primary');
    const lihatAjuanBtn = document.querySelector('.pengajuan-bimbingan .btn-secondary');
    
    if (ajukanBtn) {
        ajukanBtn.addEventListener('click', function() {
            navigateTo('pengajuanFormDosen');
        });
    }
    
    if (lihatAjuanBtn) {
        lihatAjuanBtn.addEventListener('click', function() {
            navigateTo('kelolaPengajuanDosen');
        });
    }
    
    // Event listener untuk menu sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const menuText = this.textContent.trim();
            
            if (menuText.includes('Menu utama')) {
                navigateTo('beranda');
            } else if (menuText.includes('Riwayat Bimbingan')) {
                navigateTo('riwayatBimbingan');
            } else if (menuText.includes('Pengajuan bimbingan')) {
                navigateTo('pengajuanFormDosen');
            } else if (menuText.includes('Kelola Pengajuan')) {
                navigateTo('kelolaPengajuanDosen');
            }
            // Untuk menu progressTA dan Jadwal, tambahkan navigasi jika diperlukan
        });
    });
}

// Jalankan inisialisasi ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
});