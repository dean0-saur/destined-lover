document.getElementById("submit-name").addEventListener("click", () => {
    const name = document.getElementById("name-data").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (name === "") {
        result.textContent = "Please enter your name.";
    } else if (name === "dane") {
        result.innerHTML = 'Your destined lover is: <a href="https://www.instagram.com/manuda_008/?hl=en">Manuda</a>!';
    } else if (name === "manuda") {
        result.innerHTML = 'Your destined lover is: <a href="https://www.instagram.com/t.deanosaurus/?hl=en">Dane</a>!';
    } else if (name === "johan") {
        result.innerHTML = 'Your destined lover is: Penelope!';
    } else if (name === "mario") {
        result.innerHTML = 'Your destined lover is: Yamal!';
    } else if (name === "dion") {
        result.innerHTML = 'Your destined lover is: Christian Dior!'; 
    } else if (name === "alexis") {
        result.innerHTML = 'Your destined lover is: Andre!'; 
    } else if (name === "gab") {
        result.innerHTML = 'Your destined lover is: um sorry i forgot ur gf\'s name..'; 
    } else {
        result.textContent = "Your destined lover is: You don't have one LMFAO";
    }
});
