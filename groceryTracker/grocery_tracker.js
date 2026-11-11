function groceryTracker(grocery1, grocery2, grocery3) {
    return grocery1 + grocery2 + grocery3;
}

function calculateGroceryTotal() {
    const grocery1 = parseFloat(document.getElementById("grocery1").value);
    const grocery2 = parseFloat(document.getElementById("grocery2").value);
    const grocery3 = parseFloat(document.getElementById("grocery3").value);

    const total = groceryTracker(grocery1, grocery2, grocery3);

    document.getElementById("result").innerText = `The total amount is: $ ${total.toFixed(2)}`;
    
}