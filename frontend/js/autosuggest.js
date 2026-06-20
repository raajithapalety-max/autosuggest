var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("searchbar");
var searchSuggestions = document.getElementById("search-suggestions");

searchBar.addEventListener("input", function () {
    var query = searchBar.value.trim();

    if (query === "") {
        searchSuggestions.innerHTML = "";
        return;
    }

    fetchSuggestions(query);
});

function fetchSuggestions(query) {
    var fullAPI =
        API_URL +
        "?q=" +
        encodeURIComponent(query) +
        "&weighted=true&algorithm=trie&limit=8";

    fetch(fullAPI)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            showSuggestions(data);
        })
        .catch(function (err) {
            console.log("Error: " + err);
        });
}

function showSuggestions(data) {
    var values = data.results;

    if (data.count === 0) {
        searchSuggestions.innerHTML =
            "<div class='suggestion-item'>No matching results found</div>";
        return;
    }

    var htmlString = "";

    for (var i = 0; i < values.length; i++) {
        htmlString +=
            "<div class='suggestion-item'>" +
            values[i].text +
            "</div>";
    }

    searchSuggestions.innerHTML = htmlString;
}