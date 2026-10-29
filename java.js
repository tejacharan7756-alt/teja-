
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const status = document.getElementById("status");
const results = document.getElementById("results");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const query = input.value.trim();

    console.log(query);
});
