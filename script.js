// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {

  function includeHTML(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return Promise.resolve();
    return fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Failed to load ' + url);
        return response.text();
      })
      .then(html => {
        el.innerHTML = html;
      })
      .catch(err => {
        console.warn(err);
      });
  }

  // muat header & footer (keduanya relatif terhadap lokasi file)
  const headerPromise = includeHTML('#site-header', 'header.html');
  const footerPromise = includeHTML('#site-footer', 'footer.html');

  // setelah header dimuat, atur link aktif
  headerPromise.then(() => {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#site-header a.nav-link').forEach(a => {
      // cocokkan dengan nama file akhir (index.html, profil-desa.html, dsb.)
      const href = a.getAttribute('href');
      if (!href) return;
      if (href === path || (href === 'index.html' && path === '')) {
        a.classList.add('active');
      }
    });
  });

  // fallback kecil jika footer tidak menampilkan tahun
  footerPromise.then(() => {
    const y = new Date().getFullYear();
    document.querySelectorAll('#site-footer #year').forEach(el => el.textContent = y);
  });

});
