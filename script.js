let form = document.getElementById('cadastroForm');

let lista = document.getElementById('listaAlunos');

form.addEventListener('submit', function(event){
    event.preventDefault()

    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idAluno').value;
    const imail = document.getElementById('imailAluno').value;

    const novoIntem = document.createElement('li');
    novoIntem.innerHTML = `<strong> ${nome} </strong> - ${idade} anos ${imail}`;

    lista.appendChild(novoIntem);

    form.reset();
});