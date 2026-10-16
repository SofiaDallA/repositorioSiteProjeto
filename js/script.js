document.addEventListener("DOMContentLoaded", () =>{
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click",() => {
        navMenu.classList.toggle("active");
    });//fecha menu responsivo

// Seleciona todos os links (<a>) que estão dentro do elemento com a classe "nav-menu"
    const navLinks = document.querySelectorAll(".nav-menu a");
    // Percorre cada link selecionado individualmente, laço de repetição
    navLinks.forEach((link) => {
        // Adiciona um evento para executar uma função quando o usuário clicar no link
        link.addEventListener("click", () =>{
        // Remove a classe "active" do menu, fazendo com que ele feche
        navMenu.classList.remove("active")
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
        // Quem carrega é o html primeiro
        slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));
        slideAtual = (index + slides.length) % slides.length;
        slides[slideAtual].classList.add("active");
        dots[slideAtual].classList.add("active");
    }

    //showSlide-nome da função, quando chamarmos a função
    function nextSlide(){
        showSlide(slideAtual + 1);
    }
    function prevSlide(){
        showSlide(slideAtual - 1);
    }

    function startSlide(){
        // slide intervalo vai receber uma função pronta. 5000 são 5 segundos
        slideIntervalo = setInterval(nextSlide,5000);
    }
    // limpar o intervalo e passo por parametro o valor definindo no SlideIntervalo
    function stopSlide(){
        console.log("valor intervalo", slideIntervalo);
        clearInterval(slideIntervalo);
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopSlide();
        startSlide();
    });

    prevBtn.addEventListener("click", () => {
        nextSlide();
        stopSlide();
        startSlide();
    });
        dots.forEach((dot) =>{
            dot.addEventListener("click", (e) => {
                const index = parseInt(e.target.getAttribute("data-index"));
                showSlide(index);
                stopSlide();
                startSlide();
            });
        });
        startSlide();
        //validação do formulário
        const contatoForm = document.getElementById("contatoForm");
        const nome = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        function isValidEmail(email){
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
            return emailRegex.test(email);
        }


        contatoForm.addEventListener("submit", (event) => {
            //preventDefault não permitirá enviar o formulário se não estiver com todas as informações corretas e preenchidas
            event.preventDefault();
            let isValid = true;
            //validação do campo nome (verificar mínimo 3 caracteres)
            if(nome.value.trim().length < 3)
            {
                showError(nome,"O nome deve ter no mínimo três caracteres");
                isValid = false;
            }

            //validação do campo e-mail
            if(isValidEmail(email.value.trim()))
            {
                showError(email,"Insira um e-mail válido");
                isValid = false;
            }

            //validação do campo mensagem (mínimo dez caracteres)
            // o trim tira qualquer espaço a mais
            if(isValidMensagem(mensagem.value.trim()))
            {
                showError(mensagem,"insira uma mensagem válida");
                isValid = false;
            }
            //validar se estiver tudo correto
            if(isValid)
            {
                clearError();
                alert("Mensagem enviada com sucesso");
                contatoForm.reset();
            }

        });
        
        function showError(inputElement, mensagem){
            const formGroup = inputElement.parentElement;
            inputElement.classList.add("input-error");
            const errorMensagem = document.createElement("small")
            errorMensagem.className = "error-text";
            errorMensagem.innerText = mensagem;
            //appendChild, adicionamos o novo texto como sendo o filho o erro mensagem
            formGroup.appendChild(errorMensagem);
        }
}); //final função evento
