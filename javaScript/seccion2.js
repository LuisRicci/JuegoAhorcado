var seccion1 = document.querySelector(".seccion1")
var seccion2 = document.querySelector(".seccion2");
var seccion3 = document.querySelector(".seccion3");
let botonNuevo = document.querySelector(".btn-iniciar")
let botonNueva = document.querySelector(".btn-nueva")
let botonGuardar = document.querySelector(".boton-guardar")
let botonCancelar = document.querySelector(".boton-cancelar")

botonNuevo.onclick = juegoDirecto;
botonNueva.onclick = botonesFuera;
botonGuardar.onclick = validar;
botonCancelar.onclick = cancelar;


var listaLetras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
                   "Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

    function botonesFuera(){
         seccion1.classList.add("ocultar")
         seccion2.classList.remove("ocultar")
        }
                
    function cambiarSecciones(){
         seccion2.classList.add("ocultar")
         seccion3.classList.remove("ocultar");
        }

    function cancelar(){
        seccion2.classList.add("ocultar")
        seccion1.classList.remove("ocultar")
    }
                
    function juegoDirecto(){
    seccion1.classList.add("ocultar")
    seccion3.classList.remove("ocultar")
    }              


    function limpiarTexto(){
        var entrada = document.querySelector(".palabra");
        entrada.value = "";
    }


    function validar(){
        var entrada = document.querySelector(".palabra");
        if(entrada.value.length == 0){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error! ingresar una palabra al juego',
                showConfirmButton: true,
              })
            return;
        }
    
        for(var i = 0; i < entrada.value.length; i++){
            if(!listaLetras.includes(entrada.value.toUpperCase()[i])){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error! El juego solo admite caracteres alfabeticos',
                    showConfirmButton: true,
                  })
                limpiarTexto()
                return;
            }
        } 

        if(entrada.value.length  >= 9){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Aviso! solo palabras de 8 letras',
                showConfirmButton: true,
              })
            limpiarTexto()
            return;
        }

    
        if(!listaPalabras.includes(entrada.value.toUpperCase())){
            agregarPalabranueva(entrada.value.toUpperCase());
            Swal.fire({
                title: 'Jugar ahora? o agregar palabras',
                text: "Puedes adicionar muchas más palabras",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#663174',
                cancelButtonColor: '#097579',
                cancelButtonText: 'agregar palabras',
                confirmButtonText: 'jugar ahora'
              }).then((result) => {
                if (result.isConfirmed) {
                    

                  Swal.fire(
                    cambiarSecciones(),
                  )
                }

              })
              limpiarTexto()
        }
    }            

    