// Captura o botão pelo ID
var botaoEnviar = document.getElementById('botao');

// Adiciona um ouvinte de evento para o clique no botão
botaoEnviar.addEventListener('click', function() {
    // Captura os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var qtde = document.getElementById('qtde').value;
    var produto = document.getElementById('produto').value;
    var valorUnitario = document.getElementById('valor_unitario').value;

    document.getElementById("nome").value = "";
    document.getElementById("qtde").value = "";
    document.getElementById("produto").value = "";
    document.getElementById("valor_unitario").value = "";



    // Verifica se algum dos campos do formulário está em branco
    if (nome.trim() === '' || qtde.trim() === '' || produto.trim() === '' || valorUnitario.trim() === '') {
        alert('Por favor, preencha todos os campos antes de adicionar uma nova linha.');
        return; // Sai da função para evitar adicionar a linha em branco

        

    }

    var tabela = document.getElementById('tabela-precos').getElementsByTagName('tbody')[0];
    var novaLinha = document.createElement('tr');

    var celulaNome = document.createElement('td');
    celulaNome.textContent = nome;
    novaLinha.appendChild(celulaNome);

    var celulaServico = document.createElement('td');
    celulaServico.textContent = produto;
    novaLinha.appendChild(celulaServico);

    var celulaQuantidade = document.createElement('td');
    celulaQuantidade.textContent = qtde;
    novaLinha.appendChild(celulaQuantidade);

    var celulaValor = document.createElement('td');
    celulaValor.textContent = valorUnitario;
    novaLinha.appendChild(celulaValor);

    var celulaTotal = document.createElement('td');
    celulaTotal.textContent = calculaTotal(parseFloat(qtde), parseFloat(valorUnitario));
    novaLinha.appendChild(celulaTotal);

    tabela.appendChild(novaLinha);


    celulaNome.classList.add("nome");
novaLinha.classList.add("cliente"); // Adiciona a classe "cliente" à nova linha


});

// Função para o cálculo do valor total
function calculaTotal(qtdeEncomenda, unitarioProduto) {
    var total = qtdeEncomenda * unitarioProduto;
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}                                                                                    


