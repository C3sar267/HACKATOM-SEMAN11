
        const formulario = document.getElementById('formulario');
        

        formulario.addEventListener('submit', (e) => {
                e.preventDefault();


                const nombre = document.getElementById('nombre');
                console.log(nombre.value);

                if(nombre.value === ''){
                    console.log("campos vacios");
                }

//objeto literal 

                else{

                    const usuario ={
                        nombre:nombre.value
                    }
                    console.log(usuario);
                }

        
        })








      function alertaChecked(){ 
        alert(document.miFormulario.miCheck.checked) 
 } 
 function alertaValue(){ 
        alert(document.miFormulario.miCheck.value) 
 } 
 function metodoClick(){ 
        document.miFormulario.miCheck.click() 
 } 





 //aqui eliminar item function y agregar items

 // declare variabeles to hold DOM elements
const searchBar = document.getElementById('searchBar');
const addToList = document.querySelector('.addToList');
const unordered = document.getElementById('unordered');

/*declare functions to add searchBar input value and append it
to unordered list when addToList button is clicked */
function appendToList(x) {
  let fAwesome = document.createElement('i');
  fAwesome.className = 'fa fa-trash';
  fAwesome.setAttribute('aria-hidden', 'true');

  let newItem = document.createElement('li');
  x.value = x.value || 'No Item';
  newItem.textContent = x.value;
  newItem.appendChild(fAwesome);
  unordered.appendChild(newItem);
  x.value = '';
};

addToList.addEventListener('click', () => {
  appendToList(searchBar);
});

searchBar.addEventListener('keydown', (e) => {
  if(e.defaultPrevented) {
    return;
  };
  switch (e.key) {
    case 'Enter':
    appendToList(searchBar);
    default:
    return;
  }
});















