//lista de convidados
var convidados = [
  { id: 1, nome: "Gabriel", idade: 18 },
  { id: 2, nome: "leo", idade: 19 },
  { id: 3, nome: "ju", idade: 22 },
];

// pega os ids do html e tras eles para a variavel do javascript
var el_lista = document.getElementById("lista");
var el_input_nome = document.getElementById("input_nome");
var el_input_idade = document.getElementById("input_idade");
var el_btn = document.getElementById("btn");
var cont = 0;

//function para adicionar novos convidados
el_btn.onclick = function () {
  var nome = el_input_nome.value;
  var idade = el_input_idade.value;

  if (nome !== "" && idade !== "") {
    if (idade <= 110) {
      cont = convidados.length + 1;
      convidados.push({ id: cont, nome: nome, idade: idade });
      el_input_nome.value = "";
      el_input_idade.value = "";

      listar_convidados();
    } else {
      alert("Idade maior do que 110 anos");
    }
  } else {
    alert("Preencha todos os campos!");
  }
};

//function que chama o laço de repetiçao para mostrar os convidados na page
function listar_convidados() {
  //limpa os convidados pré definidos
  el_lista.innerHTML = "";
  for (const convidado of convidados) {
    var el_li = document.createElement("li");
    var el_convidado = document.createTextNode(
      `${convidado.id} - ${convidado.nome}, ${convidado.idade} anos`
    );

    var el_excluir = document.createElement("a");
    el_excluir.setAttribute("href", "#");
    el_excluir.onclick = function () {
      convidados = convidados.filter(function (item) {
        return item.nome !== convidado.nome;
      });
      listar_convidados();
    };
    var el_excluir_texto = document.createTextNode(" Excluir");

    el_excluir.appendChild(el_excluir_texto);
    el_li.appendChild(el_convidado);
    el_li.appendChild(el_excluir);
    el_lista.appendChild(el_li);
  }
}

listar_convidados();