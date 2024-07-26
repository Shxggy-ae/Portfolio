function toggleMenu() {
    const menu =document.querySelector(".menu-links");
    const menu =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom het standaard submitgedrag

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validatie voor naam
    if (name === '') {
        showError('nameError', 'Naam is verplicht.');
        isValid = false;
    } else {
        hideError('nameError');
    }

    // Validatie voor email
    if (email === '') {
        showError('emailError', 'Email is verplicht.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Voer een geldig emailadres in.');
        isValid = false;
    } else {
        hideError('emailError');
    }

    // Validatie voor bericht
    if (message === '') {
        showError('messageError', 'Bericht is verplicht.');
        isValid = false;
    } else {
        hideError('messageError');
    }

    // Als alles geldig is, kan het formulier worden verzonden
    if (isValid) {
        alert('Formulier succesvol verzonden!');
        // Hier zou je de daadwerkelijke formulierverzending kunnen afhandelen
        document.getElementById('contactForm').reset();
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
