
/*Container03*/
    /*Questão01*/
        function mostrarPopup() {
            document.getElementById("popup").style.display = "flex";
        }

        function fecharPopup() {
            document.getElementById("popup").style.display = "none";
        }

        function checkInput() {
            const inputText = document.getElementById("input-text").value;
            const btnContainer = document.getElementById("btn-container");

            if (inputText.trim() !== "") {
                btnContainer.style.display = "flex";
            } else {
                btnContainer.style.display = "none"; 
            }
        }

        function enviarTexto() {
            const inputValue = document.getElementById("input-text").value;
            if (!inputValue.trim()) {
                Swal.fire('Erro', 'Por favor, preencha o campo!', 'error');
                return;
            }

            // SweetAlert message
            Swal.fire({
                title: 'Resposta Enviada!<br><br>',
                html: '<p>Sua resposta foi enviada com sucesso!</p><br><br>',
                icon: 'success',
                confirmButtonText: '<button id="BtnSweet">Fechar</button>'
            });

            fecharPopup(); 
        }
    /*Questão01*/
/*Container03*/