document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('formCad');
    const infoContainer = document.getElementById('infoContainer');
    const infoSection = document.getElementById('infoSection');
    const btnExcluirTodos = document.getElementById('btnExcluirTodos');

    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault();


        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

 
        const infoDiv = document.createElement('div');
        infoDiv.className = 'infoItem';
        infoDiv.innerHTML = `
            <strong>Nome:</strong> ${nome} <br>
            <strong>Email:</strong> ${email} <br>
            <strong>Telefone:</strong> ${telefone} <br>
           
        `;


        infoContainer.appendChild(infoDiv);

       
        infoSection.classList.remove('hidden');

       
        formCad.reset();
    });


   

    btnExcluirTodos.addEventListener('click', () => {
        infoContainer.innerHTML = '';
        infoSection.classList.add('hidden');
    });
});
