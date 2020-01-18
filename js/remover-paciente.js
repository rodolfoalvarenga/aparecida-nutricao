var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    
    if (event.target.tagName == 'TD') { // Não remove o cabeçalho
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function() {
            event.target.parentNode.remove();
         }, 500);
    }

});