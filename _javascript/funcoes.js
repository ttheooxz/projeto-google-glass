function mudaIcone (foto) {
  return document.getElementById("icone").src = foto;
}

function calculoTotal () {
  var qtd = parseInt (document.getElementById('cQtd').value);
  total = qtd*1500
  document.getElementById('cTotal').value = total.toFixed (2);
}