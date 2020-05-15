apBotao = document.getElementById("botao");
enCampo = document.getElementById("campo");
listaTodos = document.getElementById("lista");

var todos = JSON.parse(localStorage.getItem('todos'))||[];

listar();

apBotao.onclick = function adicionar(){
    var elEnCampo = enCampo.value;
    todos.push(elEnCampo);
    enCampo.value = '';
    listar();
}

function listar(){
    listaTodos.innerHTML = '';
    for(item of todos){
        var elPonto = document.createElement('li');
        var elTodo = document.createTextNode(item+' ');
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        var pos = todos.indexOf(item);
        linkElement.setAttribute('onclick', 'excluir('+pos+')');

        elPonto.appendChild(elTodo);
        elPonto.appendChild(linkElement);
        listaTodos.appendChild(elPonto);
        salvar();
    }
    
}

function excluir(posicao){
    todos = todos.filter(function(item,index){
        return item[index]!==item[posicao];
    })
    salvar();
    listar();
}

function salvar(){
    localStorage.setItem('todos',JSON.stringify(todos));
}