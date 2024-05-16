document.addEventListener("DOMContentLoaded", () => {
    const bingoVal = document.getElementById("tableBingo");
    const array = [];

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 10; j++) {

            const cell = document.createElement("td");

            cell.classList.add("bingoNum");

            const numberContent = document.createElement("h3");

            numberContent.innerText = Math.floor(Math.random() * 76);

            cell.appendChild(numberContent);
            row.appendChild(cell);

            array.push(numberContent.innerText);
        }

        bingoVal.appendChild(row);
    }
});




