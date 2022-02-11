// Input
let search = document.getElementById('search-bar');

// Book Classes
let books = document.querySelectorAll('.img');

function searchForItems(){
    let searchValue = search.value;
    if (searchValue === books[0].querySelector('a').innerHTML){
    console.log(books[0].querySelector('a').innerHTML);
    }

}

search.addEventListener('keyup' , searchForItems)

