let participants = [];

// Função para carregar os participantes do LocalStorage
function loadParticipants() {
    const storedParticipants = localStorage.getItem('participants');
    if (storedParticipants) {
        participants = JSON.parse(storedParticipants);
        updateList();
        updateSorteios();
    }
}

// Função para salvar os participantes no LocalStorage
function saveParticipants() {
    localStorage.setItem('participants', JSON.stringify(participants));
}

// Função para adicionar um novo participante
function addParticipant(nome, idade, hobbies, foto, endereco, sorteio) {
    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome || !sorteio) {
        alert('Nome e Nome do Sorteio são obrigatórios!');
        return;
    }

    participants.push({ nome, idade, hobbies, foto, endereco, sorteio, sorteadoPor: null, sorteado: null });
    saveParticipants();
    updateList();
    updateSorteios();
    alert('Cadastro realizado com sucesso!');
}

// Função para remover um participante
function removeParticipant(nome) {
    participants = participants.filter(p => p.nome !== nome);
    saveParticipants();
    updateList();
}

// Função para realizar o sorteio
function sortearAmigo() {
    const nomeSorteio = document.getElementById('nomeSorteio').value;
    const sorteioAtual = document.getElementById('opcaoSorteio').value;

    const participante = participants.find(p => p.nome === nomeSorteio && p.sorteio === sorteioAtual);
    if (participante && !participante.sorteado) {
        let possibleMatches = participants.filter(p => p.nome !== participante.nome && p.sorteio === sorteioAtual && !p.sorteadoPor);
        if (possibleMatches.length > 0) {
            let match = possibleMatches[Math.floor(Math.random() * possibleMatches.length)];

            // Verificar se a pessoa está sorteando a si mesma
            if (match.nome === participante.nome) {
                // Tentar novamente com outra pessoa
                possibleMatches = possibleMatches.filter(p => p.nome !== participante.nome);
                if (possibleMatches.length > 0) {
                    match = possibleMatches[Math.floor(Math.random() * possibleMatches.length)];
                } else {
                    alert('Não há participantes suficientes para realizar o sorteio.');
                    return;
                }
            }

            participante.sorteado = match.nome;
            match.sorteadoPor = participante.nome;
            saveParticipants();
            mostrarResultado(match);
            fecharSorteio();
        } else {
            alert('Não há participantes suficientes para realizar o sorteio.');
        }
    } else {
        alert('Nome inválido, sorteio inválido ou você já sorteou.');
    }
}

// Função para mostrar o resultado do sorteio
function mostrarResultado(match) {
    const detalhesSorteado = document.getElementById('detalhesSorteado');
    detalhesSorteado.innerHTML = `
        <p><strong>Nome:</strong> ${match.nome}</p>
        <p><strong>Idade:</strong> ${match.idade}</p>
        <p><strong>Hobbies:</strong> ${match.hobbies}</p>
        <p><strong>Endereço:</strong> ${match.endereco}</p>
        <img src="${match.foto}" alt="Foto de ${match.nome}" class="foto-sorteado">
    `;
    document.getElementById('modalResultado').style.display = 'block';
}

// Função para fechar o modal de resultado
function fecharResultado() {
    document.getElementById('modalResultado').style.display = 'none';
}

// Função para atualizar a lista de participantes na interface
function updateList() {
    const listElement = document.getElementById('listaAmigos');
    listElement.innerHTML = '';
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = `${participant.nome} (${participant.sorteio})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeParticipant(participant.nome);
        li.appendChild(removeButton);
        listElement.appendChild(li);
    });
}

// Função para abrir o modal de sorteio
function abrirSorteio() {
    updateSorteios();
    document.getElementById('modalSorteio').style.display = 'block';
}

// Função para fechar o modal de sorteio
function fecharSorteio() {
    document.getElementById('modalSorteio').style.display = 'none';
}

// Função para atualizar as opções de sorteio no modal
function updateSorteios() {
    const sorteios = [...new Set(participants.map(p => p.sorteio))];
    const selectElement = document.getElementById('opcaoSorteio');
    selectElement.innerHTML = '';
    sorteios.forEach(sorteio => {
        const option = document.createElement('option');
        option.value = sorteio;
        option.textContent = sorteio;
        selectElement.appendChild(option);
    });
}

// Evento para adicionar um participante
document.getElementById('adicionarBtn').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const hobbies = document.getElementById('hobbies').value;
    const foto = document.getElementById('foto').value;
    const endereco = document.getElementById('endereco').value;
    const sorteio = document.getElementById('sorteio').value;
    addParticipant(nome, idade, hobbies, foto, endereco, sorteio);
});

// Carregar participantes ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadParticipants();
});


// let participants = [];

// // Função para carregar os participantes do LocalStorage
// function loadParticipants() {
//     const storedParticipants = localStorage.getItem('participants');
//     if (storedParticipants) {
//         participants = JSON.parse(storedParticipants);
//         updateList();
//         updateSorteios();
//     }
// }

// // Função para salvar os participantes no LocalStorage
// function saveParticipants() {
//     localStorage.setItem('participants', JSON.stringify(participants));
// }

// // Função para adicionar um novo participante
// function addParticipant(nome, idade, hobbies, foto, endereco, sorteio) {
//     participants.push({ nome, idade, hobbies, foto, endereco, sorteio, sorteadoPor: null, sorteado: null });
//     saveParticipants();
//     updateList();
//     updateSorteios();
//     alert('Cadastro realizado com sucesso!');
// }

// // Função para remover um participante
// function removeParticipant(nome) {
//     participants = participants.filter(p => p.nome !== nome);
//     saveParticipants();
//     updateList();
// }

// // Função para realizar o sorteio
// function sortearAmigo() {
//     const nomeSorteio = document.getElementById('nomeSorteio').value;
//     const sorteioAtual = document.getElementById('opcaoSorteio').value;

//     const participante = participants.find(p => p.nome === nomeSorteio && p.sorteio === sorteioAtual);
//     if (participante && !participante.sorteado) {
//         let possibleMatches = participants.filter(p => p.nome !== participante.nome && p.sorteio === sorteioAtual && !p.sorteadoPor);
//         if (possibleMatches.length > 0) {
//             let match = possibleMatches[Math.floor(Math.random() * possibleMatches.length)];

//             // Verificar se a pessoa está sorteando a si mesma
//             if (match.nome === participante.nome) {
//                 // Tentar novamente com outra pessoa
//                 possibleMatches = possibleMatches.filter(p => p.nome !== participante.nome);
//                 if (possibleMatches.length > 0) {
//                     match = possibleMatches[Math.floor(Math.random() * possibleMatches.length)];
//                 } else {
//                     alert('Não há participantes suficientes para realizar o sorteio.');
//                     return;
//                 }
//             }

//             participante.sorteado = match.nome;
//             match.sorteadoPor = participante.nome;
//             saveParticipants();
//             mostrarResultado(match);
//             fecharSorteio();
//         } else {
//             alert('Não há participantes suficientes para realizar o sorteio.');
//         }
//     } else {
//         alert('Nome inválido, sorteio inválido ou você já sorteou.');
//     }
// }

// // Função para mostrar o resultado do sorteio
// function mostrarResultado(match) {
//     const detalhesSorteado = document.getElementById('detalhesSorteado');
//     detalhesSorteado.innerHTML = `
//         <p><strong>Nome:</strong> ${match.nome}</p>
//         <p><strong>Idade:</strong> ${match.idade}</p>
//         <p><strong>Hobbies:</strong> ${match.hobbies}</p>
//         <p><strong>Endereço:</strong> ${match.endereco}</p>
//         <img src="${match.foto}" alt="Foto de ${match.nome}" class="foto-sorteado">
//     `;
//     document.getElementById('modalResultado').style.display = 'block';
// }

// // Função para fechar o modal de resultado
// function fecharResultado() {
//     document.getElementById('modalResultado').style.display = 'none';
// }

// // Função para atualizar a lista de participantes na interface
// function updateList() {
//     const listElement = document.getElementById('listaAmigos');
//     listElement.innerHTML = '';
//     participants.forEach(participant => {
//         const li = document.createElement('li');
//         li.textContent = `${participant.nome} (${participant.sorteio})`;
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remover';
//         removeButton.onclick = () => removeParticipant(participant.nome);
//         li.appendChild(removeButton);
//         listElement.appendChild(li);
//     });
// }

// // Função para abrir o modal de sorteio
// function abrirSorteio() {
//     updateSorteios();
//     document.getElementById('modalSorteio').style.display = 'block';
// }

// // Função para fechar o modal de sorteio
// function fecharSorteio() {
//     document.getElementById('modalSorteio').style.display = 'none';
// }

// // Função para atualizar as opções de sorteio no modal
// function updateSorteios() {
//     const sorteios = [...new Set(participants.map(p => p.sorteio))];
//     const selectElement = document.getElementById('opcaoSorteio');
//     selectElement.innerHTML = '';
//     sorteios.forEach(sorteio => {
//         const option = document.createElement('option');
//         option.value = sorteio;
//         option.textContent = sorteio;
//         selectElement.appendChild(option);
//     });
// }

// // Evento para adicionar um participante
// document.getElementById('adicionarBtn').addEventListener('click', () => {
//     const nome = document.getElementById('nome').value;
//     const idade = document.getElementById('idade').value;
//     const hobbies = document.getElementById('hobbies').value;
//     const foto = document.getElementById('foto').value;
//     const endereco = document.getElementById('endereco').value;
//     const sorteio = document.getElementById('sorteio').value;
//     addParticipant(nome, idade, hobbies, foto, endereco, sorteio);
// });

// // Carregar participantes ao iniciar
// document.addEventListener('DOMContentLoaded', () => {
//     loadParticipants();
// });

