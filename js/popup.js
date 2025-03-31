/*Container03*/
    /*Popup*/
        function mostrarPopup(id) {
            document.getElementById(id).style.display = "flex";
            document.getElementById(id).setAttribute("aria-hidden", "false");
        }

        function fecharPopup(id) {
            document.getElementById(id).style.display = "none";
            document.getElementById(id).setAttribute("aria-hidden", "true");
        }

        function checkInput(inputId, btnContainerId) {
            const inputText = document.getElementById(inputId).value;
            const btnContainer = document.getElementById(btnContainerId);
            if (inputText.trim() !== "") {
                btnContainer.style.visibility = "visible";
                btnContainer.style.display = "flex"; // Certifica que ele aparece
            } else {
                btnContainer.style.visibility = "hidden";
                btnContainer.style.display = "none"; // Oculta corretamente
            }
        }

        function enviarTexto(inputId, popupId, mensagem) {
            const inputValue = document.getElementById(inputId).value;
            if (!inputValue.trim()) {
                Swal.fire('Erro', 'Por favor, preencha o campo!', 'error');
                return;
            }

            Swal.fire({
                title: 'Exemplo de resposta',
                html: `<p>${mensagem}</p>`,
                icon: 'success',
                confirmButtonText: 'Fechar'
            }).then(() => fecharPopup(popupId));
        }
    /*Popup*/
/*Container03*/









function verificarResposta() {
    let checkboxes = document.querySelectorAll('.option');
    let correta = false;
    let erro = false;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.value === "true") {
            correta = true;
        }
        if (checkbox.checked && checkbox.value === "false") {
            erro = true;
        }
    });

    if (correta && !erro) {
        Swal.fire({
            icon: 'success',
            title: 'Parabéns!',
            text: 'Você selecionou a resposta correta!'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ops!',
            text: 'Resposta incorreta, tente novamente.'
        });
        checkboxes.forEach(checkbox => checkbox.checked = false);
        document.getElementById('verificarBtn').style.display = 'none';
    }
}

document.querySelectorAll('.option').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let algumMarcado = Array.from(document.querySelectorAll('.option')).some(cb => cb.checked);
        document.getElementById('verificarBtn').style.display = algumMarcado ? 'block' : 'none';
    });
});
