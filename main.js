const inputTarefa = document.querySelector('.inputTarefa');

const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', addLista);

function addLista(event) {
    event.preventDefault();

    const tarefaDIV = document.createElement('div');
    tarefaDIV.classList.add('lista');
    const novaLista = document.createElement('li');
    novaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';
    novaLista.classList.add('itemLISTA');
    tarefaDIV.appendChild(novaLista);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-plus-square"></i>';
    completedBtn.classList.add('completedBtn');
    tarefaDIV.appendChild(completedBtn);

    const lixeira = document.createElement('button');
    lixeira.innerHTML = '<i class="fas fa-plus-square"></i>';
    lixeira.classList.add('lixeira');
    tarefaDIV.appendChild(lixeira);

    listaDIV.appendChild(tarefaDIV);
}

const listaDIV = document.querySelector('.listaDIV');
listaDIV.addEventListener('click', deleteCheck);

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === 'lixeira') {
        const lista = item.parentElement;
        lista.classList.add('queda');
        lista.addEventListener('transitionend', function () {
            lista.remove();
        });
    }

    if (item.classList[0] === 'completedBtn') {
        const lista = item.parentElement;
        lista.classList.toggle('completed');
    }
}