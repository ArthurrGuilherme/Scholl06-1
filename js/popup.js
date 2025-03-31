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

function mostrarPopup2() {
    Swal.fire({
        title: '<strong >Situação 1</strong>',
        html: `<div id="Sweetstrong">
            <p>Dalila é estudante de Economia e faz parte de um projeto em parceria entre a sua universidade e uma empresa do ramo energético que visa captar jovens talentos para compor os diversos times da referida empresa. Somente os alunos com histórico de elevado desempenho acadêmico e participação em atividades extracurriculares são selecionados para o processo seletivo. </p>
                <br>
            <p>Ela estava muito confiante de que estaria entre os selecionados, mas no último semestre, depois de muitas dores, incômodos e idas ao médico, foi diagnosticada com doença celíaca, o que lhe impôs uma restrição de consumo de alimentos com a presença de glúten. </strong></p>
                <br>
            <p>Dalila precisou passar por diversos profissionais e orientações com nutricionistas para ajustar os seus hábitos alimentares, também por seções de psicoterapia para se reorganizar em relação a sua nova condição. Em meio a tudo isso, ela passou a temer pelo processo seletivo, já que todas estas adaptações e novos sentimentos afetaram os seus estudos e prazos e, portanto, havia o receio de suas notas diminuírem.</p>
                <br>
            <p>Ela decide conversar sobre a sua situação com a professora Carolline, coordenadora do seu curso. Carolline orienta-lhe a adequar seus horários de estudos as suas novas rotinas de alimentação e exercícios. Além disso, se coloca à disposição de Dalila para outras conversas, se necessário for. 
            Com este suporte e se sentindo mais confiante, Dalila segue se esforçando para manter o seu excelente desempenho acadêmico.</p>
                <br>
            <p>Neste caso, podemos notar como as adversidades da vida podem nos afetar em relação aos nossos objetivos e metas, mas também podemos aprender com Dalila que ter resiliência e adaptabilidade além de coragem de falar sobre problemas, contar com uma rede de apoio e nos flexibilizarmos as novas condições podem, mesmo que com muito esforço, nos ajudar a retomarmos a caminho rumo aos nossos objetivos e sonhos. </p>
       </div>
            `
    })
}


