// Vérification de l'état de connexion au chargement de la page
window.onload = function() {
/*    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "./index.html"; // Redirige si l'utilisateur est déjà connecté
    }*/

    // Animation d'apparition du formulaire (si nécessaire)
    let formSection = document.getElementsByClassName("formSection");
    if (formSection.length > 0) {
        formSection[0].style.top = "-100vh";
        setTimeout(() => {
            formSection[0].style.top = "0";
        }, 100);
    }
};

// Fonction pour valider l'email
function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) != null;
}

// Fonction pour gérer la soumission du formulaire de connexion
function handleLogin(event) {
    event.preventDefault(); // Empêche le rafraîchissement de la page

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const email = formValues.email;
    const password = formValues.password;

    // Valider l'email
    if (!validateEmail(email)) {
        document.getElementById('errorMessage').textContent = "Email invalide.";
        return;
    }

    // Récupérer les informations de l'utilisateur
    const storedUser = JSON.parse(localStorage.getItem(email));
    
    // Débogage : vérifier les données récupérées
    console.log("Données stockées : ", storedUser);
    console.log("Email saisi : ", email);
    console.log("Mot de passe saisi : ", password);

    // Vérifier si l'utilisateur existe et si le mot de passe correspond
    if (!storedUser || storedUser.password !== password) {
        document.getElementById('errorMessage').textContent = "Email ou mot de passe incorrect.";
        return;
    }

    // Si l'email et le mot de passe sont corrects
    document.getElementById('errorMessage').textContent = ""; // Réinitialiser le message d'erreur
    alert("Connexion reussie !");

    // Si l'utilisateur est validé, le connecter et stocker les informations dans le localStorage
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedUserEmail", email); // Stocke l'email de l'utilisateur connecté

    // Rediriger vers la page d'accueil
    window.location.href = "./index.html";
}
/*
// Associer la fonction de gestion de connexion au formulaire
document.getElementById('loginForm').addEventListener('submit', handleLogin);*/
