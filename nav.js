fetch('/nav.html')
    .then(function(response) { return response.text(); })
    .then(function(html) {
        document.getElementById('nav-placeholder').outerHTML = html;

        // Hamburger logic (runs after nav is injected)
        var hamburger = document.getElementById('hamburger');
        var mobileMenu = document.getElementById('mobileMenu');

        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        document.querySelectorAll('.mobile-menu a, .nav-links a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });
    });
