
var changeToX = document.getElementById("search-icon");
var hideUnhideSearchBox = document.getElementById("search_conteer");

changeToX.addEventListener("click", () => {
    if (hideUnhideSearchBox.style.display == "none" || hideUnhideSearchBox.style.display == "") {
        hideUnhideSearchBox.style.display = "flex";
        hideUnhideSearchBox.style.opacity = "1";
        changeToX.classList.remove("fa-magnifying-glass");
        changeToX.classList.add("fa-xmark");
    } else {
        hideUnhideSearchBox.style.display = "none";
        hideUnhideSearchBox.style.opacity = "0";
        changeToX.classList.remove("fa-xmark");
        changeToX.classList.add("fa-magnifying-glass");
    }
});
document.getElementById('search').addEventListener('input', function () {
    let filter = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#items-list li');

    let resultsFound = false;

    items.forEach(function (item) {
        let text = item.textContent.trim().toLowerCase();
        if (text.includes(filter)) {
            item.style.display = 'block';
            item.style.opacity = "1";
            resultsFound = true;
        } else {
            item.style.display = 'none';
        }
    });

    let mError = document.getElementById('massage-error');

    if (!resultsFound) {
        mError.style.display = "flex";
    } else {
        mError.style.display = "none";
    }
});

document.getElementById('close-icon-of-error').addEventListener("click", function () {
    let mError = document.getElementById('massage-error');
    mError.style.display = "none";
});
