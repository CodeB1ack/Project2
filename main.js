// Search Bar //

const toggleSearch = () => {
const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    searchButton.addEventListener('click', () => {
        searchForm.classList.toggle('active-search');
    });
    
    searchInput.addEventListener('keydown', (e) => {
        
        if (e.key === 'Enter') {
            searchForm.classList.remove('active-search');
            e.preventDefault();
            searchInput.value = '';
            searchForm.classList.remove('active-search');
        }
    });
};

toggleSearch();

//Giphy API//

function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)

    var giphyApiKey = "qTl4hmkMzsJBMmrACSVWVZVbiywYnYs4"
    var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`

    fetch(giphyApiUrl).then(function(data) {
        return data.json()
        })
        .then (function(json) {
           console.log(json.data[0].images.fixed_height.url) 
           var imgPath = json.data[0].images.fixed_height.url
           var img = document.createElement("img") 
            img.setAttribute("src", imgPath)
            document.body.appendChild(img)
        })
}