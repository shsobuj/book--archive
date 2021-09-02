//  load input
const searchBook = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;

    //cannot empty text
    if (searchField.value == '') {
        alert('Search field cannot be empty.')
    }

    else {
        //load date url
        const url = `https://openlibrary.org/search.json?q=${searchText}`;

        searchField.value = '';

        fetch(url)
            .then(res => res.json())
            .then(data => displayShow(data.docs));

    };
}

//show display data
const displayShow = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    //card number update
    document.getElementById('cardsNumber').innerText = `Total Result Cards : ${docs.length}`;

    docs.forEach(docs => {
        //create new div
        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = `

         <div style="border:4px;" class= h-100">
              
             <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="w-100" alt=""</div>

                <h5 class="card-title">Book Name: ${docs.title}</h5>
                <p class="card-text">Author Name: ${docs.author_name} </p>
                <p class="card-text">Published Date: ${docs.publish_date}</p>
                <p class="card-text">Published Year: ${docs.publish_year}</p>
            
            </div>
        </div>`

        searchResult.appendChild(div)
    })
}


