const searchBtn = document.getElementById('search-btn');
const searchInput = document.querySelector('.search-input');
const main = document.querySelector('main');

searchBtn.addEventListener('click', () => {
    //searchInput.classList.add('active-search');
    searchInput.classList.toggle('active-search');
})

main.addEventListener('click', () => {
    searchInput.classList.remove('active-search');
})