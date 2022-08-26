const DOMbotonPagar = document.querySelector('#btn_pagar');
const numeroTarjeta = document.querySelector('#number_card');
const nombreTarjeta = document.querySelector('#name_card');
const fechaTarjeta = document.querySelector('#date_card');
const ccvTarjeta = document.querySelector('#ccv_card');

DOMbotonPagar.addEventListener('click', ()=>{
    if(numeroTarjeta.value == 0 || nombreTarjeta.value == "" || fechaTarjeta.value == 0 || ccvTarjeta.value == 0){
        Swal.fire({
            icon: 'error',
            title: 'Algo ha ido mal...',
            text: 'Los datos introducidos son erróneos'
      })   
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'Pago realizado con éxito',
            text: 'Los datos introducidos son correctos'
          })   
    }
  })

