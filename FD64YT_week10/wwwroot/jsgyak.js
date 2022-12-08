window.onload = () => {
    console.log("betöltődött")
}

function factorialize(n) {                    // recursive
    if (n < 0)
        return 0;
    else if (n == 0 || n == 1)
        return 1;
    else {
        return (n * factorialize(n - 1))
    }
}


function pascal() {
    for (var row = 0; row < 10; row++) {
        let ogDiv = document.getElementById("pascal");
        let newRow = document.createElement("div");
        newRow.classList.add("sor");
        ogDiv.appendChild(newRow);
        for (var col = 0; col <= row; col++) {
            let newElement = document.createElement("div");
            newElement.classList.add("elem");
            newRow.appendChild(newElement);
            var num = factorialize(row) / (factorialize(col) * factorialize(row - col))
            newElement.innerHTML = num;
            var fade = num / 100;
            newElement.style.backgroundColor = "rgba(18, 176, 176, " + fade + ")";
        }
    }
}



