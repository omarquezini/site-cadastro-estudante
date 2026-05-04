

let form = document.getElementById('cadastro'); // corrigi o ID do form
let lista = document.getElementById('listaAluno'); // corrigi o ID da lista

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idadeAluno').value; // ID correto
    const login = document.getElementById('loginAluno').value; // ID correto
    const pizza = document.getElementById('pizzaFavorita').value; // ID correto

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos - Login: ${login} - Pizza favorita: ${pizza}`;

    lista.appendChild(novoItem);

    form.reset();
});