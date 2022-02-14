// Input
let search = document.getElementById('search-bar');
let bod = document.querySelector('body');

// Book Classes
let books = document.querySelectorAll('.img');

// Adding Search Class
let button = document.querySelector('i');

button.addEventListener('click', searchNow)
search.addEventListener(
    'keyup',
    searchNow
)


function searchNow() {
    let value = search.value.toLowerCase();
    books.forEach((book) => {
        if (book.querySelector('a').textContent.trim().toLowerCase().indexOf(value) != -1) {
            book.style.display = '';
            bod.style.background = '';
        }
        else {
            book.style.display = 'none';
            bod.style.background = '';
        }
        bod.style.background = 'linear-gradient(120deg,rgba(51, 88, 255, 0.952),rgb(95, 226, 95)) no-repeat center center/cover'
    })
}