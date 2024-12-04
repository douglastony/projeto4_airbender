document.addEventListener('DOMContentLoaded', function() {
    const trailerSection = document.querySelector('.trailer');
    const aboutSection = document.querySelector('.about');
    const heroSection = document.querySelector('.hero');
    const characters = document.querySelectorAll('.characters__content__list__each');

    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        
        if (window.scrollY < 200 ) {
            header.classList.remove('header--is-visible');
        } else {
            header.classList.add('header--is-visible');
        }
    })


    // Isolando as seções que vão se beneficiar do mesmo script
    const aboutButtons = aboutSection.querySelectorAll('[data-tab-button]');
    const aboutTabs = aboutSection.querySelectorAll('[data-tab-id]');
    
    const trailerButtons = trailerSection.querySelectorAll('[data-tab-button]');
    const trailerTabs = trailerSection.querySelectorAll('[data-tab-id]');


    // Troca de sessões "Enredo" e "História"
    for (let i = 0; i < aboutButtons.length; i++) {
        aboutButtons[i].addEventListener('click', function(botao) {
            const alvo = botao.target.dataset.tabButton;
            const abaAlvo = aboutSection.querySelector(`[data-tab-id=${alvo}]`); // Selecione as abas dentro da seção "about"
            hideEmAll(aboutTabs); // Esconde as abas dentro da seção "about"
            removeActiveButton(aboutButtons, 'about__content__nav__button--is-active'); // Remove a classe ativa dos botões da seção "about"
            abaAlvo.hidden = false;
            botao.target.classList.add('about__content__nav__button--is-active');
        });
    }
    
    // Troca de Trailers
    for (let i = 0; i < trailerButtons.length; i++) {
        trailerButtons[i].addEventListener('click', function(botao) {
            const alvo = botao.target.dataset.tabButton;
            const abaAlvo = trailerSection.querySelector(`[data-tab-id=${alvo}]`); // Corrigido para trailerSection.querySelector
            hideEmAll(trailerTabs); // Esconde as abas dentro da seção "trailer"
            removeActiveButton(trailerButtons, 'trailer__content__nav__button--is-active'); // Remove a classe ativa dos botões da seção "trailer"
            abaAlvo.hidden = false;
            botao.target.classList.add('trailer__content__nav__button--is-active');
        });
    }

    characters.forEach((character) => {
        character.addEventListener('click', function () {
            // Verifica se o personagem já está ativo
            if (this.classList.contains('characters__content__list__each--is-active')) {
                // Remove a classe ativa e reseta todos os personagens
                resetCharacters();
            } else {
                // Remove o estado ativo de todos os personagens
                characters.forEach((char) => {
                    char.classList.remove('characters__content__list__each--is-active');
                    char.classList.add('characters__content__list__each--is-inactive');
                });

                // Ativa o personagem clicado
                this.classList.remove('characters__content__list__each--is-inactive');
                this.classList.add('characters__content__list__each--is-active');
            }
        });
    });
})

// Função para esconder as abas de uma seção
function hideEmAll(tabs) {
    tabs.forEach(tab => {
        tab.hidden = true;
    });
}

// Função para remover a classe ativa dos botões de uma seção
function removeActiveButton(buttons, activeClass) {
    buttons.forEach(button => {
        button.classList.remove(activeClass);
    });
}

// Função para resetar os personagens
function resetCharacters() {
    const characters = document.querySelectorAll('.characters__content__list__each');
    characters.forEach((char) => {
        char.classList.remove('characters__content__list__each--is-active');
        char.classList.remove('characters__content__list__each--is-inactive');
    });
}
