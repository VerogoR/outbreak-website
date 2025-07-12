document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('show');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // const animateOnScroll = function() {//.feature-card, 
    //     const elements = document.querySelectorAll('.feature-block, .screenshot-item, .platform-card');
        
    //     elements.forEach(element => {
    //         const elementPosition = element.getBoundingClientRect().top;
    //         const windowHeight = window.innerHeight;
            
    //         if (elementPosition < windowHeight - 100) {
    //             element.style.opacity = '1';
    //             element.style.transform = 'translateY(0)';
    //         }
    //     });
    // };
    // //.feature-card, 
    // const animatedElements = document.querySelectorAll('.feature-block, .screenshot-item, .platform-card');
    // animatedElements.forEach(element => {
    //     element.style.opacity = '0';
    //     element.style.transform = 'translateY(20px)';
    //     element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    // });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});