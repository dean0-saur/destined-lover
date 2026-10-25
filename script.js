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
        result.textContent = 'Your destined lover is: Penelope!';
    } else if (name === "clev") {
        result.textContent = 'Your destined lover: Johan!';
    } else if (name === "mario") {
        result.innerHTML = 'Your destined lover is: Yamal!';
    } else if (name === "dion") {
        result.innerHTML = 'Your destined lover is: Christian Dior!'; 
    } else if (name === "alexis") {
        result.innerHTML = 'Your destined lover is: Andre!'; 
    } else if (name === "gab") {
        result.innerHTML = 'Your destined lover is: um sorry i forgot ur gf\'s name..'; 
    } else {
        const randomIndex = Math.floor(Math.random() * 5) + 1;
        if (randomIndex === 1) {
            result.innerHTML = 'You don\'t have one AHAHAHHA';
        } else if (randomIndex === 2) {
            result.innerHTML = 'Hala, no one...';
        } else if (randomIndex === 3) {
            result.innerHTML = 'OMG, IT\'S.... no one.';
        } else if (randomIndex === 4) {
            result.innerHTML = 'It\'s your sister, dude';
        } else if (randomIndex === 5) {
            result.innerHTML = 'Hoo lee sheet, it\'s your brother...';
        }
    }
});
