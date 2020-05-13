"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var listadeConv = /*#__PURE__*/function () {
  function listadeConv() {
    _classCallCheck(this, listadeConv);

    this.convidados = [];
  }

  _createClass(listadeConv, [{
    key: "adicionar",
    value: function adicionar(nome, idade, cpf) {
      this.convidados.push({
        nome: nome,
        idade: idade,
        cpf: cpf
      });
      limparCampos();
    }
  }, {
    key: "listar",
    value: function listar() {
      console.log(this.convidados);
    }
  }]);

  return listadeConv;
}();

var listaCon = new listadeConv();

document.getElementById("listarConvs").onclick = function () {
  listaCon.listar();
};

document.getElementById("novoConvidado").onclick = function () {
  var nome = document.getElementById("nomePessoa").value;
  var cpf = document.getElementById("cpfEntrada").value;
  var idade = document.getElementById("idadePessoa").value;
  listaCon.adicionar(nome, idade, cpf);
};

var limparCampos = function limparCampos() {
  //uso de arrow function
  document.getElementById("nomePessoa").value = "";
  document.getElementById("cpfEntrada").value = "";
  document.getElementById("idadePessoa").value = "";
};
