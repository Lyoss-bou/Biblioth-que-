document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const visaInput = document.getElementById('visa');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const copiesInputs = document.querySelectorAll('.copie input[type="radio"]');
    const expirationDateInput = document.querySelector('input[type="date"]');
    const today = new Date().toISOString().split('T')[0]; // Format de date au format YYYY-MM-DD

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const visaNumber = visaInput.value;
        const firstName = nameInput.value;
        const lastName = surnameInput.value;
        const copies = Array.from(copiesInputs).find(radio => radio.checked)?.value;
        const expirationDate = expirationDateInput.value;

        let isValid = true;
        let errorMessage = '';

        if (!validateVisa(visaNumber)) {
            isValid = false;
            errorMessage += 'Le numéro de visa est invalide.\n';
        }

        if (!validateName(firstName)) {
            isValid = false;
            errorMessage += 'Le prénom est requis.\n';
        }

        if (!validateName(lastName)) {
            isValid = false;
            errorMessage += 'Le nom est requis.\n';
        }

        if (!validateCopies(copies)) {
            isValid = false;
            errorMessage += 'Le nombre de copies est requis.\n';
        }

        if (!validateDates(today, expirationDate)) {
            isValid = false;
            errorMessage += 'La date d\'expiration doit être postérieure à la date du jour.\n';
        }

        if (isValid) {
            alert('Formulaire soumis avec succès!');
            // Vous pouvez soumettre le formulaire ici si nécessaire
            // form.submit();
        } else {
            alert(errorMessage);
        }
    });

    function validateVisa(visaNumber) {
        return /^\d{6,}$/.test(visaNumber);
    }

    function validateName(name) {
        return name && name.trim() !== '';
    }

    function validateCopies(copies) {
        return copies && copies.trim() !== '';
    }

    function validateDates(today, expirationDate) {
        return new Date(today) < new Date(expirationDate);
    }
});
