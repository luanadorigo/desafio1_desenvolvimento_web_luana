const form = document.querySelector('#formulario')

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const formData = new FormData(form);
    const json = {};

    for (const[key,value] of formData.entries()){
        json[key] = value;
    }

    console.log(json);

    form.reset();
});


document.getElementById("salvarReserva").addEventListener("click", function() {
    var placaVeiculo = document.getElementById("placaVeiculo").value;
    var nomeDoProprietario = document.getElementById("nomeDoProprietario").value;
    var numeroDoApartamento = document.getElementById("numeroDoApartamento").value;
    var blocoDoApartamento = document.getElementById("blocoDoApartamento").value;
    var modeloDoVeiculo = document.getElementById("modeloDoVeiculo").value;
    var corDoVeiculo = document.getElementById("corDoVeiculo").value;
    var numeroDaVagaDoEstacionamento = document.getElementById("numeroDaVagaDoEstacionamento").value;
    
    if (placaVeiculo === "" || nomeDoProprietario === "" || numeroDoApartamento === "" || blocoDoApartamento === "" || modeloDoVeiculo === "" || corDoVeiculo === "" || numeroDaVagaDoEstacionamento === "") {
      alert("Por favor, preencha todas as informações!");
    } else {
      alert("Cadastrado com sucesso!");
    };})

    function redirecionarTela() {
        window.location.href = 'vagas_disponiveis.html';
    }


teste();
