
document.addEventListener('DOMContentLoaded', () => {
let baseDeDatos =[
    {
        id: 1,
        nombre: "Camiseta básica Unisex",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-cottonbro-6776724-min.jpg",
      },
      {
        id: 2,
        nombre: "Top de deporte verde caqui",
        precio: 10.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-angela-roma-7479737-min.jpg",
      },
      {
        id: 3,
        nombre: "Camiseta con dibujo",
        precio: 6.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-dmitriy-ganin-7772803-min.jpg",
      },
      {
        id: 4,
        nombre: "Body plantas",
        precio: 8.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-enrico-martins-3841045-min.jpg",
      },
      {
        id: 5,
        nombre: "Top animal print",
        precio: 5.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-hannah-bickmore-12551558-min.jpg",
      },
      {
        id: 6,
        nombre: "Camiseta logo Aquas",
        precio: 7.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-lorence-lozano-3053824-min.jpg",
      },
      {
        id: 7,
        nombre: "Sobrecamisa marrón",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-megan-ruth-11411384-min.jpg",
      },
      {
        id: 8,
        nombre: "Top beige",
        precio: 9.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-monstera-5303015-min.jpg",
      },
      {
        id: 9,
        nombre: "Camiseta de flores",
        precio: 8.95,
        stock: 10,
        img:"../../../img/img_mujer/pexels_rodrigo_feksa_5626159-min.jpg" ,
      },
      {
        id: 10,
        nombre: "Camiseta de Q. T.",
        precio: 9.99,
        stock: 10,
        img:"../../../img/img_mujer/pexels_wilson_vitorino_2480369-min.jpg" ,
      },
      {
        id: 11,
        nombre: "Chaquetón de tela",
        precio: 22.99,
        stock: 10,
        img:"../../../img/img_mujer/pexels_алекке_блажин_11075319-min.jpg" ,
      },
      {
        id: 12,
        nombre: "Top básico manga hueca",
        precio: 3.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_карина_каржавина_7945747-min.jpg",
      },
      {
        id: 13,
        nombre: "Camiseta negra manga hueca",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-bankole-adeoni-7206287-min.jpg",
      },
      {
        id: 14,
        nombre: "Top colores",
        precio: 10.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-jennifer-enujiugha-2395921-min.jpg",
      },
      {
        id: 15,
        nombre: "Camiseta con rotos",
        precio: 6.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-juan-vargas-3715196-min.jpg",
      },
      {
        id: 16,
        nombre: "Top punto",
        precio: 8.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_monstera_7691354-min.jpg",
      },
      {
        id: 17,
        nombre: "Camisa amarilla",
        precio: 5.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-mikhail-nilov-7623517-min.jpg",
      },
      {
        id: 18,
        nombre: "Top blanco",
        precio: 7.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels_roy_reyna_3007759-min.jpg",
      },
      {
        id: 19,
        nombre: "Camisa blanca",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_tanya_satina_6558016-min.jpg",
      },
      {
        id: 20,
        nombre: "Top negro",
        precio: 9.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-cottonbro-4937224-min.jpg",
        
      },
      {
        id: 21,
        nombre: "Pantalón de vestir negro",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_raka_miftah_3522692-min.jpg",
      },
      {
        id: 22,
        nombre: "Pantalón cuadros vichy",
        precio: 10.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-monica-turlui-7396655-min.jpg",
      },
      {
        id: 23,
        nombre: "Pantalón rosa",
        precio: 26.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_shvets_production_7544664-min.jpg",
      },
      {
        id: 24,
        nombre: "Pantalón de vestir en varios colores",
        precio: 18.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_monstera_7691068-min.jpg",
      },
      {
        id: 25,
        nombre: "Pantalón lino gris",
        precio: 15.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-jeys-tubianosa-3538028-min.jpg",
      },
      {
        id: 26,
        nombre: "Pantalón tela naranja",
        precio: 17.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels_nina_hill_10019032-min.jpg",
      },
      {
        id: 27,
        nombre: "Pantalón tela negro",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_tanya_satina_6558016-min.jpg",
      },
      {
        id: 28,
        nombre: "Pantalón rojo pitillo",
        precio: 19.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_thức_lê_hữu_1390602-min.jpg",
      },
      {
        id: 29,
        nombre: "Jeans azul oscuro",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-heitor-verdi-2343661-min.jpg",
      },
      {
        id: 30,
        nombre: "Jeans slim azul lavado",
        precio: 14.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-cottonbro-4505454-min.jpg",
      },
      {
        id: 31,
        nombre: "Jeans azul marino",
        precio: 26.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-anubhaw-anand-3765976-min.jpg",
      },
      {
        id: 32,
        nombre: "Jeans negros con rotos",
        precio: 18.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-kristin-vogt-61120-min.jpg",
      },
      {
        id: 33,
        nombre: "Jeans azul lavado",
        precio: 25.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_wesley_souza_2068349-min.jpg",
      },
      {
        id: 34,
        nombre: "Jeans azul claro rotos",
        precio: 27.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-godisable-jacob-1346187-min.jpg",
      },
      {
        id: 35,
        nombre: "Jeans bajo despeluchado",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-godisable-jacob-1068638-min.jpg",
      },
      {
        id: 36,
        nombre: "Jeans mom fit azul claro",
        precio: 19.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-bianca-2363825-min.jpg",
      },
      {
        id: 37,
        nombre: "Zapatos tacon negro",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-apostolos-vamvouras-2285500-min.jpg",
      },
      {
        id: 38,
        nombre: "Zapatos blancos lazo",
        precio: 14.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-godisable-jacob-1374910-min.jpg",
      },
      {
        id: 39,
        nombre: "Zapatos tacón amarillo",
        precio: 16.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-godisable-jacob-1416377-min.jpg",
      },
      {
        id: 40,
        nombre: "Sneakers blancas",
        precio: 18.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-hamza-nouasria-12628400-min.jpg",
      },
      {
        id: 41,
        nombre: "Zapatos tacón rojo",
        precio: 15.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-karolina-grabowska-5713301-min.jpg",
      },
      {
        id: 42,
        nombre: "Zapatos tacón blancos",
        precio: 17.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-matheus-oliveira-10831402-min.jpg",
      },
      {
        id: 43,
        nombre: "Zapatos abiertos blancos",
        precio: 18.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-jonathan-borba-11994891-min.jpg",
      },
      {
        id: 44,
        nombre: "Botas doble plataforma negras",
        precio: 19.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_rosivan_morais_5857593-min.jpg",
      },
      {
        id: 45,
        nombre: "Bikini blanco flores braga alta",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_murat_esibatir_4355493-min.jpg",
      },
      {
        id: 46,
        nombre: "Bikini con pareo a juego",
        precio: 14.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-dazzle-jam-1038039-min.jpg",
      },
      {
        id: 47,
        nombre: "Bikini braga alta rojo",
        precio: 14.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-dalila-dalprat-1847005-min.jpg",
      },
      {
        id: 48,
        nombre: "Bikini diferentes colores",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_wesley_carvalho_3622619-min.jpg",
      },
      {
        id: 49,
        nombre: "Bikini triangular",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-dellon-thomas-2792080-min.jpg",
      },
      {
        id: 50,
        nombre: "Bikini rayas",
        precio: 14.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-leah-kelley-3722173-min.jpg",
      },
      {
        id: 51,
        nombre: "Bañador básico en varios colores",
        precio: 16.99,
        stock: 10,
        img:"../../../img/img_mujer/pexels_roberto_nickson_2647973-min.jpg",
      },
      {
        id: 52,
        nombre: "Bikini asimétrico",
        precio: 10.99,
        stock: 10,
        img:"../../../img/img_mujer/pexels_oriana_polito_1550913-min.jpg",
      },
      {
        id: 53,
        nombre: "Gafas transparentes aviador",
        precio: 12.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-gabriel-antonio-2065805-min.jpg",
      },
      {
        id: 54,
        nombre: "Gafas de pasta",
        precio: 14.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-lisa-1068866-min.jpg",
      },
      {
        id: 55,
        nombre: "Gorro amarillo",
        precio: 16.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels_thaís_silva_2119500-min.jpg",
      },
      {
        id: 56,
        nombre: "Reloj plateado",
        precio: 16.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-lilartsy-1374128-min.jpg",
      },
      {
        id: 57,
        nombre: "Reloj rosa",
        precio: 15.99,
        stock: 10,
        img: "../../../img/img_mujer/pexels-jess-bailey-designs-1162519-min.jpg",
      },
      {
        id: 58,
        nombre: "Pendientes dorados aros",
        precio: 17.95,
        stock: 10,
        img: "../../../img/img_mujer/pexels-anna-nekrashevich-8058602-min.jpg",
      },
      {
        id: 59,
        nombre: "Pendientes perlas blanco",
        precio: 12.99,
        stock: 10,
        img:"../../../img/img_mujer/pexels-cottonbro-9428790-min.jpg",
      },
      {
        id: 60,
        nombre: "Pendientes plata",
        precio: 19.99,
        stock: 10,
        img:"../../../img/img_mujer/pexels-aleksandr-slobodianyk-989967-min.jpg",
      },

]

let carrito = [];
const divisa = '€';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonComprar = document.querySelector('#boton-comprar');
const miLocalStorage = window.localStorage;
const d = document;

function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');

        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;

        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', `${info.img}`);

        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Añadir';
        miNodoBoton.setAttribute('marcador',`${info.id}`);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

function searchFilters (input, selector) {
  d.addEventListener("keyup", (e) => {
    if(e.target.matches(input)) {

    if(e.key === "Escape")e.target.value="";

      d.querySelectorAll(selector).forEach((el) =>
      el.textContent.toLowerCase().includes(e.target.value)
        ?el.classList.remove("filter")
        :el.classList.add("filter")
      )
    }
  })
}
searchFilters(".card-filter", ".card");

let checkboxs = document.querySelectorAll('input[type="checkbox"]');
let data = {
  camisetas: false,
  pantalones: false,
  jeans: false,
  zapatos: false,
  bikinis: false,
  accesorios: false
}

checkboxs.forEach(checkbox => {
  checkbox.addEventListener('change', function (e) {
    data[this.id]=this.checked
    display_by_data()
  });
})

function display_by_data(){
  console.log(data);
}



function añadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    let mensaje = "¡Se ha añadido al carrito!";
    let icono = "success";
    agregarObjeto(mensaje, icono);
    renderizarCarrito();

    guardarCarritoEnLocalStorage();

}


function renderizarCarrito() {

    DOMcarrito.textContent = '';

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {

            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          
            return itemId === item ? total += 1 : total;
        },0);

        

        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');

        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';  
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });

    DOMtotal.textContent = calcularTotal();
}


function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;    
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
  
}


function calcularTotal() {

    return carrito.reduce((total, item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {
    
    carrito = [];

    renderizarCarrito();

    localStorage.clear();
}

function guardarCarritoEnLocalStorage(){
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

DOMbotonComprar.addEventListener('click', ()=>{
  if(carrito==0){
    Swal.fire({
      icon: 'error',
      title: 'Algo ha ido mal...',
      text: 'No hay nada en el carrito para comprar.'
    })  
  }
  else{
    window.location.href="../../pasareladepago/pasarelapago.html";
  }

})

function agregarObjeto (mensaje, icono) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: icono,
    title: mensaje
  })
}
function  alertaCarrito (mensaje, icono) {
  Swal.fire({
    title: 'Aviso',
    text: mensaje, 
    icon: icono,
    confirmButtonText: '¡Entendido!'
  })
}

DOMbotonVaciar.addEventListener('click', () => {
  let mensaje = 'Has eliminado todos los elementos del carrito';
  let icono = "warning";
  
  if(carrito.length != 0){
    alertaCarrito(mensaje, icono);
  }
  vaciarCarrito();
 
});

cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();

});











