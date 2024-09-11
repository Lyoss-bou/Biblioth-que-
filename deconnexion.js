// Fonction pour gérer la déconnexion
function handleLogout() {
    // Supprimer les informations de session du localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedUserEmail");

    // Rediriger vers la page de connexion
    window.location.href = "./connexion.html";
}
