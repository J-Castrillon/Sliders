'use strict'; 

addEventListener('load',()=>{
    // Declaración de variables; 
    const sliderContent = document.querySelector('#slider-content'); 
    let sliderImg = document.querySelectorAll('.sliderImg');
    let sliderLast = sliderImg[sliderImg.length - 1]; // Obtenemos la última imagen para este caso; 
    const leftButton = document.querySelector('#button-left'); 
    const rightButton = document.querySelector('#button-right'); 

    
    // Instrucciones; 
    // Sigue estando la primera imágen como primera vista
    sliderContent.insertAdjacentElement('afterbegin', sliderLast); // Ubicamos la última imágen al comienzo del slider;

    rightButton.addEventListener('click',()=>{
        next(); 
    }); 

    leftButton.addEventListener('click',()=>{
        prev(); 
    }); 

    setInterval(()=>{
        // Para que el recorrido sea automático; 
        next(); 
    },5000); 


    // Funciones;
    let next = ()=>{
        let sliderFirst = document.querySelectorAll('.sliderImg')[0]; //Esta vez nos interesa la primera imágen; 
        sliderContent.style.marginLeft = "-200%"; 
        sliderContent.style.transition = "all 0.5s";
        
        setTimeout(()=>{
            sliderContent.style.transition = "none"; 
            sliderContent.insertAdjacentElement('beforeend', sliderFirst);
            sliderContent.style.marginLeft = "-100%"; 
        },500);
    };

    let prev = ()=>{
        let sliderImg = document.querySelectorAll('.sliderImg');
        let sliderLast = sliderImg[sliderImg.length - 1];
        sliderContent.style.marginLeft = '0%';
        sliderContent.style.transition = "all 0.5s";

        setTimeout(()=>{
            sliderContent.style.transition = "none"; 
            sliderContent.insertAdjacentElement('afterbegin',sliderLast); 
            sliderContent.style.marginLeft = '-100%';

        },500); 
    };  
}); 