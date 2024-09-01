document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.search-btn');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.getElementById('.search-input');
    const searchClose = document.getElementById('search-close');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        });
    });

    searchClose.addEventListener('click', function() {
        searchBar.style.visibility = 'hidden';
        searchBar.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
    });
});