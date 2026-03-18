fetch('/nav.html')
    .then(function(response) { return response.text(); })
    .then(function(html) {
        document.getElementById('nav-placeholder').outerHTML = html;

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

        // Prevent page reload when clicking anchor links on the homepage
        document.querySelectorAll('a[href^="/index.html#"]').forEach(function(link) {
            link.addEventListener('click', function(e) {
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    e.preventDefault();
                    var target = document.querySelector(link.getAttribute('href').replace('/index.html', ''));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    });
