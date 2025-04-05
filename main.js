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
}