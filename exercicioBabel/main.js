class listadeConv{
    constructor(){
        this.convidados = []
    }

    adicionar(nome, idade, cpf){
        this.convidados.push({nome: nome, idade: idade, cpf:cpf});
        limparCampos();
    }

    listar(){
        console.log(this.convidados);
    }
}

var listaCon = new listadeConv();

document.getElementById("listarConvs").onclick = function(){
    listaCon.listar();
};

document.getElementById("novoConvidado").onclick = function(){
    var nome = document.getElementById("nomePessoa").value;
    var cpf = document.getElementById("cpfEntrada").value;
    var idade = document.getElementById("idadePessoa").value;
    listaCon.adicionar(nome,idade,cpf);
};

function limparCampos(){
    document.getElementById("nomePessoa").value = "";
    document.getElementById("cpfEntrada").value = "";
    document.getElementById("idadePessoa").value = "";
}