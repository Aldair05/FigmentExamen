
//Variables
const deportivos = document.getElementById('galeria-deportivos');
const camiones = document.getElementById('galeria-camiones');
const suv = document.getElementById('galeria-suv');
const nombre = document.getElementById('nombre');
const direccion = document.getElementById('direccion');
const correo = document.getElementById('correo');
const btnEnviar = document.getElementById('btnEnviar');
const formulario = document.getElementById('formulario');

addEventListener();


//AddenventListener
function addEventListener(){
    btnEnviar.disabled= true;
    btnEnviar.addEventListener('click',enviarFormulario);
    //Campos del formulario 
    nombre.addEventListener('blur',validarCampo);
    direccion.addEventListener('blur',validarCampo);
    correo.addEventListener('blur',validarCampo);
  
}

function enviarFormulario(e){
    e.preventDefault();
    alert('Se enviaron los datos');
    formulario.reset();
    nombre.style.borderColor='';
    direccion.style.borderColor ='';
    correo.style.borderColor =''; 
}

function validarCampo (){

    validarLongitud(this);

    if(nombre.value.length> 0 && direccion.value.length > 0 && correo.value.length > 0){
        btnEnviar.disabled =false; 
    }

}

function validarLongitud(campo){      
    if(campo.value.length > 0){
        campo.style.borderColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderColor = 'red';
        campo.classList.add('error');
    }
}



function filtroAutos(e){
    console.log(e.id);
    if(e.id === 'btn-deportivos'){
        deportivos.style.display = 'flex';
        camiones.style.display = 'none';
        suv.style.display = 'none';
    }else if(e.id === 'btn-camiones'){
        camiones.style.display ='flex';
        deportivos.style.display ='none';
        suv.style.display = 'none';
    }else if(e.id === 'btn-suv'){
        suv.style.display ='flex';
        deportivos.style.display ='none';
        camiones.style.display ='none';
    }else if(e.id === 'btn-todos'){
        deportivos.style.display = 'flex';
        camiones.style.display = 'flex';
        suv.style.display = 'flex';
    }
}




$('#modal1').on('shown.bs.modal', function (e) {
    $("#img-modal").attr('src', e.relatedTarget.children[0].src);
   
  })


  $('li a').click(function (e) {
    e.preventDefault();
    var strAncla = $(this).attr('href');
    $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top
    }, 1000);

});