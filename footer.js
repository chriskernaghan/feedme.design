fetch('/footer.html')
    .then(function(response) { return response.text(); })
    .then(function(html) {
        document.getElementById('footer-placeholder').outerHTML = html;
    });
