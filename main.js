document.addEventListener('DOMContentLoaded', () => {
    let search = document.querySelector('.search-box');
    let searchIcon = document.querySelector('#search-icon');

    if (searchIcon) { 
        console.log("masuk");
        searchIcon.addEventListener('click', () => {
            search.classList.toggle('active'); 
        });
    }
});



