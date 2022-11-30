window.onload = () => {
    console.log("betöltődött")
}

function factorialize(n) {                    // recursive
    if (n < 0)
        return 0;

    else if (n == 0 || n == 1)
        return 1;

    else {
        return (n * factorialize(n - 1));
    }
}


function pascal() {
    let n = document.getElementById("input").value;

    for (var row = 0; row < 10; row++) {
        let ogDiv = document.getElementById("pascal")
        let newRow = document.createElement("div")
        newRow.classList.add("sor")
        ogDiv.appendChild(newRow);
        for (var col = 0; col <= row; col++) {
            let newElement = document.createElement("div")
            newElement.classList.add("elem")
            newRow.appendChild(newElement);
            newElement.innerHTML = factorialize(col)
        }
    }

    document.getElementById("input").value = 0;
}

