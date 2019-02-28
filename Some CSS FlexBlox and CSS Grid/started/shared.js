var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");

for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click', function () {        
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open')
        }, 10);
    });    
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton)
    modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    if(modal)
        modal.classList.remove('open');

    backdrop.classList.remove('open')
    
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 200);
    
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
   
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('animation started',event);
})

ctaButton.addEventListener('animationend', function(event) {
    console.log('animation ended',event);
})

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('animation iteration',event);
})