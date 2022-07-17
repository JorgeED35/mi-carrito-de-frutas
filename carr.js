const carrito = document.getElementById("carrito")
const template = document.getElementById("template")
const fragment = document.createDocumentFragment(true)
const btnButtons = document.querySelectorAll('.card .btn')

const carrObj = [];

const addToCarr = (e) => {
    console.log(e.target.dataset.fruta)
    
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1 
    };

    const indic = carrObj.findIndex((item) => item.id === producto.id);

    console.log(indic)

    if(indic === -1){
        carrObj.push(producto)
    } else{
        carrObj[indic].cantidad ++
    }

    console.log(carrObj)
    
    if(carrObj.hasOwnProperty(producto.titulo)){
        producto.cantidad = carrObj[producto.titulo].cantidad + 1;
    }

    carrObj[producto.titulo] = producto;
    pintarCarrito(carrObj);


};

const pintarCarrito = (array) =>{

carrito.textContent = "";

    array.forEach(item => {
    const clone = template.content.firstElementChild.cloneNode(true) 
    clone.querySelector('.lead').textContent = item.titulo
    clone.querySelector('.badge').textContent = item.cantidad


    fragment.appendChild(clone)
})

carrito.appendChild(fragment)

}

btnButtons.forEach(btn => btn.addEventListener("click",addToCarr)) 

/* ///////MAP
const numbers = [1,2,3,4,5,6,7,8,9,10]

const numPlus = numbers.map((suma => suma* 2))
console.log(numPlus)
 */
 //////Filter

 /*
 const plussV = [
    [1,2],
    [3,4],
    [5,6]
]
const plusValue = plussV.reduce((acc,valueA) => acc.concat(valueA)) 
const valuePlane = [].concat(...plussV);
const valuePlane = plussV.flat();
*/
/*  const monts = "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dec"

 const arrMonts = monts.split(",")

 console.log(arrMonts)

 const newText = arrMonts.join("/")
 console.log(newText) */