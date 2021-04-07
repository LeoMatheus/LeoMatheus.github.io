const btnAdicionar = document.getElementById('add');



btnAdicionar.addEventListener('click', () => {
    addNewNote();
    
})

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('Note');

    note.innerHTML = `<div class="note">
    <div class="tools">
    
    <select class="opcUrgencia">
      <optgroup label="Nivel de atendimento">
    <option value="SP">Sem Pressa</option>
    <option value="PA">Prestar atenção</option>
    <option value="U">Urgente</option>
    </select>
      <button class="edit"><i class="far fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash"></i></button>
      

    </div>
    <div class="main hidden">
    </div>
     <textarea></textarea>
     </div>
    `;




    const btnEditar = note.querySelector('.edit');
    const btnDeletar = note.querySelector('.delete');
    

    const principal = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    btnEditar.addEventListener('click', () => {
        principal.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const {
            value
        } = e.target;
        principal.innerHTML = marked(value);
    });

    


    btnDeletar.addEventListener('click', () => {
        note.remove();
    });

    document.getElementsByClassName('hero-func')[0].appendChild(note);
}


