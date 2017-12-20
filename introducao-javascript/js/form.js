var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //pega as informações do form
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteForm(form);

    //cira tr e td's
    var pacienteTr = document.createElement("tr");

    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");
    var tdImc = document.createElement("td");


    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;
    tdImc.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGordura);
    pacienteTr.appendChild(tdImc);

    //adiciona na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);
    console.log(pacienteTr);
});

function obtemPacienteForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}