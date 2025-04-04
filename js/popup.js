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
/*Container 08*/
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
    function mostrarPopup3() {
        Swal.fire({
            title: '<strong >Situação 2</strong>',
            html: `<div id="Sweetstrong">
                <p>Amanda é aluna de um curso de Administração. Como a avaliação final de uma determinada disciplina, ela, junto a um grupo de estudantes, deverá apresentar um estudo de caso prático sobre como as inteligências artificiais generativas podem ser usadas em análises de dados de um determinado mercado consumidor.</p>
                    <br>
                <p>Metodologias de análise de dados e mercados eram algo considerado razoavelmente fáceis de se fazer para Amanda e seus colegas de trabalho, mas o mesmo não poderia ser dito sobre inteligência artificial, já que em seu grupo o contato com este tipo de ferramenta havia sido muito superficial. Nas reuniões de planejamento das atividades do trabalho, havia  divergências sobre o que fazer e muitas dúvidas sobre como as inteligências artificiais operam e como podem ser exploradas.  </p>
                    <br>
                <p>O grupo torna-se disfuncional logo após os debates feitos durante a reunião. Tanto o fato da forma de apresentação, quanto a relação entre colegas está conflitante o suficiente para não haver evoluções significativas do trabalho. Amanda sugere que o grupo se reorganize, priorizando o estudo do que são as IA’s e como elas podem ser utilizadas em cenários como o solicitado pelo trabalho final da disciplina.</p>
                    <br>
                <p>Na reunião seguinte, os demais colegas chegam com muitos aprendizados a compartilhar e começam a esboçar algumas ideias de como poderiam apresentar o caso prático de uso de inteligência artificial na análise de dados de mercado.</p>
                    <br>
                <p>Neste caso,  Amanda demonstrou resiliência e adaptabilidade ao não se deixar levar pelo estresse e pressão inicial ocorrida no grupo, focando-se na busca pela resolução do problema. Em algumas situações, como o caso de Amanda, as nossas capacidades de resiliência e adaptabilidade pode nos levar a assumir algum papel de liderança ou de destaque. </p>
        </div>
                `
        })
    }
/*Container 08*/
/*Container 09 */
    function mostrarPopup4() {
        Swal.fire({
            title: '',
            html: `<div id="Sweetstrong">
                <strong >Analise o problema, tentando compreendê-lo como uma oportunidade</strong >
                    <br>
                <p>mude a forma como você encara os desafios, veja uma chance de aprender com a situação.</p>
                <p>Questione: “O que posso retirar de aprendizagem disso?”</p>
                    <br>
                <strong >Divida o problema em partes:</strong >
                    <br>
                <p>se o problema parece muito grande, divida-o em pequenas partes. Crie uma estratégia para resolver as questões mais urgentes ou críticas.</p>
                </div>
                `
        })
    }
    function mostrarPopup5() {
        Swal.fire({
            title: '',
            html: `<div id="Sweetstrong">
                <strong >Mantenha-se aberto comunicativamente:</strong >
                    <br>
                <p>seja transparente e direto sobre os desafios. Se necessário, busque apoio com colegas mais experientes.</p>
                    <br>
                <strong >Procure desenvolver a autogestão emocional:</strong >
                    <br>
                <p>momentos de pressão, tente manter a calma, isso ajudará muito em achar uma solução para o problema.</p>
                </div>
                `
        })
    }
    function mostrarPopup6() {
        Swal.fire({
            title: '',
            html: `<div id="Sweetstrong">
                <strong >Inspire-se por meio de exemplos em soluções criativas:</strong >
                    <br>
                <p>abordagens novas, inovadoras, criativas são bem-vindas.  Procure se inspirar por meio de exemplos, histórias e casos criativos!</p>
                    <br>
                <strong >Aprenda com feedbacks:</strong >
                    <br>
                <p>aceite as críticas construtivas, use para melhorar suas atividades e desempenho</p>
                </div>
                `
        })
    }
    function mostrarPopup7() {
        Swal.fire({
            title: '<strong ></strong>',
            html: `<div id="Sweetstrong">
                <strong >Procure desenvolver as suas capacidades de flexibilidade:</strong >
                    <br>
                <p>esteja pronto para mudar de estratégia, se necessário. Invista no aprendizado contínuo, escute outras opiniões e procure aprender a lidar com as diferenças</p>
                    <br>
                <strong >Trabalhe em equipe:</strong >
                    <br>
                <p>a colaboração auxiliará no desenvolvimento de soluções mais rápidas e eficazes. Compartilhe sempre, compartilhe aprendizados.</p>
                </div>
                `
        })
    }
    function mostrarPopup8() {
        Swal.fire({
            title: '',
            html: `<div id="Sweetstrong">
                <div id="Sweetstrong">
                <strong >Celebre as pequenas vitórias:</strong >
                    <br>
                <p>reconheça os progressos, pequenas vitórias são importantes e aumentam a confiança para enfrentar os desafios. Pequenas vitórias são vitórias também!</p>
                    <br>
                <strong >Cuide de sua saúde mental e física:</strong >
                    <br>
                <p> encontre o seu equilíbrio. Procure aprender sobre si, identifique os limites que podem ser superados, mas também os que devem ser respeitados, isso ajudará a enfrentar os desafios.</p>
                </div>
                `
        })
    }
/*Container 09 */













/*Questão01*/
const draggables = document.querySelectorAll('.draggable');
            const dropzone = document.getElementById('dropzone');
            let hasDropped = false;  // Flag to check if an item has been dropped
    
            draggables.forEach(draggable => {
                draggable.addEventListener('dragstart', (e) => {
                    // Só permite o drag se ainda não foi feito um drop
                    if (hasDropped) {
                        e.preventDefault();
                        return;
                    }
                    e.dataTransfer.setData('text', e.target.id);
                    dropzone.classList.add('highlight-drop');
                });
            });
    
            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
    
            dropzone.addEventListener('dragleave', () => {
                dropzone.classList.remove('highlight-drop');
            });
    
            dropzone.addEventListener('drop', (e) => {
                if (hasDropped) return;  // Se já houve um drop, não faz nada
    
                e.preventDefault();
                dropzone.classList.remove('highlight-drop');
    
                const itemId = e.dataTransfer.getData('text');
                const draggedItem = document.getElementById(itemId);
                dropzone.appendChild(draggedItem);
                hasDropped = true;  // Marcar que o item foi dropado
    
                // Verificar se o item soltado é o correto ou errado
                if (itemId === 'drag3') {
                    // Resposta certa
                    Swal.fire({
                        title: 'Resposta Certa!<br><br>',
                        html: 'Você escolheu o item correto.<br><br>',
                        icon: 'success',
                    });
                } else if (itemId === 'drag4') {
                    // Resposta errada
                    Swal.fire({
                        title: 'Resposta correta:<br><br>',
                        html: 'c) Coragem envolve tomar decisões difíceis, mesmo quando sentimos medo ou insegurança.<br><br>',
                        icon: 'error',
                    }).then(() => {
                        // Recarregar a página após o feedback de resposta errada
                        location.reload();
                    });
                }else if (itemId === 'drag3') {
                    // Resposta errada
                    Swal.fire({
                        title: 'Resposta correta:<br><br>',
                        html: 'c) Coragem envolve tomar decisões difíceis, mesmo quando sentimos medo ou insegurança.<br><br>',
                        icon: 'error',
                    }).then(() => {
                        // Recarregar a página após o feedback de resposta errada
                        location.reload();
                    });
                }else if (itemId === 'drag1') {
                    // Resposta errada
                    Swal.fire({
                        title: 'Resposta correta:<br><br>',
                        html: 'c) Coragem envolve tomar decisões difíceis, mesmo quando sentimos medo ou insegurança.<br><br>',
                        icon: 'error',
                    }).then(() => {
                        // Recarregar a página após o feedback de resposta errada
                        location.reload();
                    });
                } else if (itemId === 'drag5') {
                    // Resposta errada
                    Swal.fire({
                        title: 'Resposta correta:<br><br>',
                        html: 'c) Coragem envolve tomar decisões difíceis, mesmo quando sentimos medo ou insegurança.<br><br>',
                        icon: 'error',
                    }).then(() => {
                        // Recarregar a página após o feedback de resposta errada
                        location.reload();
                    });
                } else {
                    // Para outros itens que não são nem o certo nem o errado
                    Swal.fire({
                        title: 'Resposta correta:',
                        text: 'c) Coragem envolve tomar decisões difíceis, mesmo quando sentimos medo ou insegurança.',
                        icon: 'warning',
                    });
                }
            });
/*Questão01*/
/*Questão02*/
const draggables2 = document.querySelectorAll('.draggable02');
    const dropzone2 = document.getElementById('dropzone2');
    let hasDropped2 = false;

    draggables2.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            if (hasDropped2) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.setData('text', e.target.id);
            dropzone2.classList.add('highlight-drop2');
        });
    });

    dropzone2.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropzone2.addEventListener('dragleave', () => {
        dropzone2.classList.remove('highlight-drop2');
    });

    dropzone2.addEventListener('drop', (e) => {
        if (hasDropped2) return;

        e.preventDefault();
        dropzone2.classList.remove('highlight-drop2');

        const itemId2 = e.dataTransfer.getData('text');
        const draggedItem2 = document.getElementById(itemId2);

        // Adiciona o item no dropzone (removendo os anteriores)
        dropzone2.innerHTML = "";
        dropzone2.appendChild(draggedItem2);
        hasDropped2 = true;

        if (itemId2 === 'dragItem2') {
            Swal.fire({
                title: 'Resposta Certa!<br><br>',
                html: 'Você escolheu a opção correta.<br><br>',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Resposta correta:<br><br>',
                html: 'b) Encarar desafios e buscar formas de superá-los, mesmo quando não temos todas as respostas. <br><br>',
                icon: 'error',
                confirmButtonText: 'Tentar novamente'
            }).then(() => {
                location.reload();
            });
        }
    });
/*Questão02*/    
/*Questão03*/ 
const draggables3 = document.querySelectorAll('.draggable03');
const dropzone3 = document.getElementById('dropzone3');
let hasDropped3 = false;

draggables3.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        if (hasDropped3) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData('text', e.target.id);
        dropzone3.classList.add('highlight-drop3');
    });
});

dropzone3.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropzone3.addEventListener('dragleave', () => {
    dropzone3.classList.remove('highlight-drop3');
});

dropzone3.addEventListener('drop', (e) => {
    if (hasDropped3) return;

    e.preventDefault();
    dropzone3.classList.remove('highlight-drop3');

    const itemId3 = e.dataTransfer.getData('text');
    const draggedItem3 = document.getElementById(itemId3);

    // Adiciona o item no dropzone (removendo os anteriores)
    dropzone3.innerHTML = "";
    dropzone3.appendChild(draggedItem3);
    hasDropped3 = true;

    if (itemId3 === 'dragItemC') {
        Swal.fire({
            title: 'Resposta Certa!<br><br>',
            html: 'Você escolheu a opção correta.<br><br>',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Resposta correta: <br><br>',
            html: 'c) Encarar os desafios de frente, mesmo sem ter todas as respostas, buscando aprender ao longo do caminho.<br><br>',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        }).then(() => {
            location.reload();
        });
    }
});