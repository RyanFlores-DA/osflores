var ames = '';
let arrayId = [];
let arrayMesP = [];
let arrayValor = [];
let arrayAno = [];
let arrayDescricao = [];

function dadosApi() {

  axios.get('https://covidapidiogenes.herokuapp.com/priori/')
    .then(response => criaListaDinamica2(response.data))
    .catch(error => console.log(error))
  const criaListaDinamica2 = (dados) => {
    dados.map(x => {
      console.log('2°', Date.now());
      arrayId.push(x.ad)
      arrayMesP.push(x.mes)
      arrayValor.push(x.valor)
      arrayDescricao.push(x.priori)
      arrayAno.push(x.aano)
      //console.log('All be function');
      var teste = document.getElementById("teste").appendChild;
      for (i = 0; i < 1; i++) {
        document.getElementById("tabela").appendChild(criarTabela([
          ["id", "Descrição", "Mês", "Ano", "Valor"],
          [x.id, x.priori, x.mes, x.ano, x.valor],

        ]));
        teste.innerHTML = arrayId[i];
      }

    })
  }

}
console.log(arrayId)



function criarTabela(conteudo) {
  console.log('3°', Date.now());
  console.log('Entrou na function')
  var tabela = document.createElement("table");
  tabela.className = "table tablesorter";
  var thead = document.createElement("thead");
  thead.className = " text-primary";
  var tbody = document.createElement("tbody");
  var th = document.createElement("th");
  var td = document.createElement("td");
  var thd = function (i) { return (i == 0) ? "th" : "td"; };

  for (var i = 0; i < conteudo.length; i++) {
    var tr = document.createElement("tr");
    tr.className = " text-justify";
    for (var o = 0; o < conteudo[i].length; o++) {
      var t = document.createElement(thd(i));
      t.className = " text-center";
      var texto = document.createTextNode(conteudo[i][o]);
      t.appendChild(texto);
      tr.appendChild(t);
    }
    (i == 0) ? thead.appendChild(tr) : tbody.appendChild(tr);
  }
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  return tabela;
}




var push = document.getElementById("push");
function hey() {
  console.log(p.value)
  console.log('Tentando enviar');
  const _data = {
    mes: m.value,
    ano: a.value,
    priori: p.value,
    valor: v.value
  };
  fetch('https://covidapidiogenes.herokuapp.com/v1/priori/', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}