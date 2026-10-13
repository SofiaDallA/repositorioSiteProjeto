document.addEventListener("DOMContentLoaded", () =>{
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click",() => {
        navMenu.classList.toggle("active")
    });//fecha menu responsivo
}); //final função evento

// Seleciona todos os links (<a>) que estão dentro do elemento com a classe "nav-menu"
    const navLinks= document.querySelectorAll(".nav-menu a");
    // Percorre cada link selecionado individualmente, laço de repetição
    navLinks.forEach((link) => {
        // Adiciona um evento para executar uma função quando o usuário clicar no link
        link.addEventListener("click", () =>{
        // Remove a classe "active" do menu, fazendo com que ele feche
        navMenu.classList.remove("active");
        });
    });

    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;
// o let cria uma variável interna dentro da estrutura que você criou
    function showSlide(index){
// o laço de repetição permite ter repetição, temos 3 slides no html       
        slides.forEach((slide) =>
        slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));
        slideAtual = (index + slides.length) % slides.length;
        slides[slideAtual].classList.add("active");
        slides[slideAtual].classList.add("active");
    }

    //showSlide-nome da função, quando chamarmos a função