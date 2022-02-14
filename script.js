// Input
let search = document.getElementById('search-bar');

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
        }
        else {
            book.style.display = 'none';
        }
    })
}