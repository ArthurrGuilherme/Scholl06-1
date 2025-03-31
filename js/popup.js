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
/*Container04*/
    /*Checks*/
        function verificarResposta(button) {
            let questionDiv = button.closest('.question');
            let checkboxes = questionDiv.querySelectorAll('.option');
            let respostaCorreta = questionDiv.dataset.correct;
            let erroMessage = questionDiv.dataset.errorMessage;
            let correta = false;
            let erro = false;

            checkboxes.forEach(checkbox => {
                if (checkbox.checked && checkbox.value === respostaCorreta) {
                    correta = true;
                }
                if (checkbox.checked && checkbox.value !== respostaCorreta) {
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
                    text: erroMessage
                });
                checkboxes.forEach(checkbox => checkbox.checked = false);
                button.style.display = 'none';
            }
        }

        document.querySelectorAll('.question').forEach(question => {
            let checkboxes = question.querySelectorAll('.option');
            let button = question.querySelector('.verificarBtn');
            
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    let algumMarcado = Array.from(checkboxes).some(cb => cb.checked);
                    button.style.display = algumMarcado ? 'block' : 'none';
                });
            });
            
            button.addEventListener('click', function() {
                verificarResposta(button);
            });
        });
    /*Checks*/
/*Container04*/