window.onload = function (e) {
    console.log("Oldal betöltve...");
    document.getElementById("előre_gomb").onclick = elore;
    document.getElementById("vissza_gomb").onclick = vissza;
    kerdesBetoltes(questionId)
}

var joValasz;
var questionId = 4

fetch('/questions/1')
    .then(response => response.json())
    .then(data => kerdesMegjelenites(data)
    );

function kerdesMegjelenites(kerdes) {
    if (!kerdes) return; //Ha undefined a kérdés objektum, nincs mit tenni
    console.log(kerdes);
    document.getElementById("kérdés_szöveg").innerText = kerdes.questionText
    document.getElementById("válasz1").innerText = kerdes.answer1
    document.getElementById("válasz2").innerText = kerdes.answer2
    document.getElementById("válasz3").innerText = kerdes.answer3
    jóVálasz = kerdes.correctAnswer;
    if (kerdes.image) {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
        document.getElementById("kép").classList.remove("rejtett")
    }
    else {
        document.getElementById("kép").classList.add("rejtett")
    }
    //Jó és rossz kérdések jelölésének levétele
    document.getElementById("válasz1").classList.remove("jó", "rossz");
    document.getElementById("válasz2").classList.remove("jó", "rossz");
    document.getElementById("válasz3").classList.remove("jó", "rossz");
}

function kerdesBetoltes(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kerdesMegjelenites(data));
}    

function valasztas(n) {
    if (n != joValasz) {
        document.getElementById(`válasz${n}`).classList.add("rossz");
        document.getElementById(`válasz${joValasz}`).classList.add("jó");
    }
    else {
        document.getElementById(`válasz${joValasz}`).classList.add("jó");
    }
}

function elore() {
    questionId++;
    kérdésBetöltés(questionId)
}

function vissza() {
    questionId--;
    kérdésBetöltés(questionId)
}