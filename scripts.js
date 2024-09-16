document.addEventListener("DOMContentLoaded", function () {
    // Controle do menu
    const menuButtons = document.querySelectorAll('.menu-button');

    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.menu-description').forEach(description => {
                description.style.display = 'none';
            });

            const contentId = button.getAttribute('data-content');
            const descriptionToShow = document.getElementById(contentId);
            if (descriptionToShow) {
                descriptionToShow.style.display = 'block';
            }
        });
    });

    // Controle do slideshow
    let slideIndex = 1;

    function showSlide(n) {
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    window.prevSlide = function() {
        showSlide(slideIndex -= 1);
    };

    window.nextSlide = function() {
        showSlide(slideIndex += 1);
    }

    showSlide(slideIndex);

    const prevButton = document.querySelector('.slide-prev');
    const nextButton = document.querySelector('.slide-next');

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    // Validação e envio do formulário de contato
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateEmail(email)) {
            formResponse.textContent = "Sua mensagem foi enviada com sucesso!";
            formResponse.style.color = "green";
            // Aqui você pode adicionar o código para enviar o e-mail
            // Por exemplo, com uma chamada AJAX ou usando uma API de envio de e-mail.
        } else {
            formResponse.textContent = "Por favor, insira um e-mail válido.";
            formResponse.style.color = "red";
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
