$(document).ready(function () {
    // Attache un gestionnaire d'événement click à tous les boutons ayant la classe 'learn-more'
    $('.learn-more').on('click', function () {
        // Récupère l'URL depuis l'attribut data-url
        const url = $(this).data('url');
        if (url) {
            // Redirige vers l'URL spécifiée
            window.location.href = url;
        }
    });
});
