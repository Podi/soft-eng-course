window.onload = () => {
    letöltés();
}

var viccek;

function download() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => downloadFinished(data)
        );
}
function downloadFinished(d) {
    console.log("Sikeres letöltés");
    console.log(d);
    viccek = d;

    for (var i = 0; i < viccek.length; i++) {
        var j = document.createElement("div");
        j.innerHTML = viccek[i].text;
        document.getElementById("jokeList").appendChild(j);
        console.log("created " + i)
    }
}
document.onload = download();
