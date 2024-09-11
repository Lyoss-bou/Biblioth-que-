// Fonction pour valider l'email
function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) != null;
}

// Fonction pour valider le mot de passe
function validatePassword(password){
    return /.*[0-9].*/.test(password);
}

// Fonction de validation du formulaire
function validateRegistration(event) {
    event.preventDefault(); // Empêche le rafraîchissement de la page

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const email = formValues.email;
    const password = formValues.password;
    const passwordConfirm = document.getElementById('M2P1').value;

    // Valider l'email
    if (!validateEmail(email)) {
        document.getElementById('errorMessage').textContent = "Email invalide.";
        return;
    }

    // Valider le mot de passe
    if (!validatePassword(password)) {
        document.getElementById('errorMessage').textContent = "Le mot de passe doit contenir au moins un chiffre.";
        return;
    }

    // Vérifier si les deux mots de passe correspondent
    if (password !== passwordConfirm) {
        document.getElementById('errorMessage').textContent = "Les mots de passe ne correspondent pas.";
        return;
    }

    // Stocker les informations dans le localStorage avec l'email comme clé
    const user = {
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user)); // Utiliser l'email comme clé
    alert("Compte créé avec succès !");
}

// Animation d'apparition du formulaire (si nécessaire)
window.onload = function() {
    let formSection = document.getElementsByClassName("formSection");
    if (formSection.length > 0) {
        formSection[0].style.top = "-100vh";
        setTimeout(() => {
            formSection[0].style.top = "0";
        }, 100);
    }
};
