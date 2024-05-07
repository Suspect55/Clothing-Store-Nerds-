function formatExpiryDate(event) {
const input = event.target;
const value = input.value.replace(/\D/g, ''); 

    if (value.length > 2) {
        input.value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    } 
    else{
        input.value = value;
    }
}

function formatInputText(event) {
    const input = event.target;
    input.value = input.value.toUpperCase();
}

function paid(){
    alert("Thank you for your purchase!");
    window.location.href = "index.html";
}