# Amigo Secreto

Esta aplicação é uma plataforma para gerenciar participantes e realizar sorteios de Amigo Secreto. Os participantes podem ser cadastrados com informações detalhadas e os sorteios podem ser realizados de forma dinâmica.

## Funcionalidades

- **Cadastro de Participantes**: Permite cadastrar participantes com nome, idade, hobbies, foto e endereço.
- **Listagem de Participantes**: Exibe uma lista de participantes cadastrados.
- **Sorteio de Amigo Secreto**: Realiza o sorteio de Amigo Secreto entre os participantes cadastrados.
- **Armazenamento Local**: Os dados dos participantes são armazenados no LocalStorage do navegador.

## Tecnologias Utilizadas

- **HTML**: Estrutura da aplicação.
- **CSS**: Estilização da aplicação.
- **JavaScript**: Funcionalidade e lógica da aplicação.
- **LocalStorage**: Armazenamento dos dados localmente no navegador.

## Como Usar

1. Clone o repositório para a sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
    ```
2. Abra o arquivo index.html no seu navegador.

3. Na seção "Cadastrar Participante", preencha os campos obrigatórios (Nome e Nome do Sorteio) e os demais campos opcionais (Idade, Hobbies, Foto, Endereço). Clique no botão "Cadastrar" para adicionar o participante.

4. Os participantes cadastrados serão exibidos na lista abaixo.

5. Para realizar um sorteio, clique no botão "Sorteios". Preencha o seu nome e selecione o sorteio desejado. Clique no botão "Sortear Amigo" para realizar o sorteio.

6. O resultado do sorteio será exibido com as informações do participante sorteado.

## Estrutura de Arquivos
`index.html`: Contém a estrutura HTML da aplicação.

`style.css`: Contém as regras de estilo CSS para a aplicação.

`app.js`: Contém a lógica JavaScript para gerenciar os participantes e realizar o sorteio.

## Funções Principais
`loadParticipants()`
Carrega os participantes do LocalStorage e atualiza a lista de participantes e sorteios na interface.

`saveParticipants()`
Salva os participantes no LocalStorage.

`addParticipant(nome, idade, hobbies, foto, endereco, sorteio)`
Adiciona um novo participante à lista de participantes.

`removeParticipant(nome)`
Remove um participante da lista.

`sortearAmigo()`
Realiza o sorteio de Amigo Secreto entre os participantes cadastrados.

`mostrarResultado(match)`
Mostra o resultado do sorteio na interface.

`updateList()`
Atualiza a lista de participantes na interface.

`abrirSorteio()`
Abre o modal para realizar o sorteio.

`fecharSorteio()`
Fecha o modal de sorteio.

`updateSorteios()`
Atualiza as opções de sorteio no modal.

## Gif da Aplicação
![Assista ao GIF](/assets/gif/gif-do-app.gif)

## Explicação da aplicação no YouTube

[Assista ao vídeo](https://youtu.be/EeTtMjJniDI)


## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests e entrar em contato.
