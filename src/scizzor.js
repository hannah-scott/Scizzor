var currentPage = 0;
var pages = [
    "FRONT", 
    "INNERFRONT",
    "1",
    "2",
    "3",
    "4",
    "5",
    "BACK"
];

function getPagePath(page) {
    return "media/panels/" + page + ".png";
}

function setup() {
    console.log("Current page: ", currentPage)
    setPage(currentPage);
}

function nextPage(id) {
    if (id < pages.length - 1) {
        console.log(id);
        setPage(id + 1);
    }
}

function previousPage(id) {
    if (id > 0){
        console.log(id);
        setPage(id - 1);
    }
}

function setPage(id) {
    currentPage = id;
    document.getElementById("currentPage").setAttribute("src", getPagePath(pages[currentPage]));
    document.getElementById("pageNum").innerHTML = (currentPage + 1) + " / " + pages.length;
}

setup();