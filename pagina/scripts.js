document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões do menu
    const menuButtons = document.querySelectorAll('.menu-button');

    // Adiciona um ouvinte de evento para cada botão do menu
    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove a classe 'active' de todas as descrições
            document.querySelectorAll('.menu-description').forEach(description => {
                description.style.display = 'none';
            });

            // Adiciona a classe 'active' à descrição correspondente
            const contentId = button.getAttribute('data-content');
            const descriptionToShow = document.getElementById(contentId);
            if (descriptionToShow) {
                descriptionToShow.style.display = 'block';
            }
        });
    });
});