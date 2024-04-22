const form = document.getElementById('form-inputs');
const nomes = [];
const telefones = [];

let contatos = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    atualizaLista();
    incluiContatos();

});

function atualizaLista() {
    const inputNome = document.getElementById('nome-contato')   
    const inputTelefone = document.getElementById('telefone-contato') 

    if(nomes.includes(inputNome.value)) {
        alert (`O nome: ${inputNome.value} já foi inserido!`)
    } else {

        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value} </td>`;
        linha += `<td>${inputTelefone.value} </td>`;
        linha += '</tr>';
    
        contatos += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function incluiContatos() {
    const nomeTabela = document.getElementById('contato'); 
    nomeTabela.innerHTML = contatos;
}

