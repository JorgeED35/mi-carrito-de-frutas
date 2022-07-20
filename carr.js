const carrito = document.getElementById("carrito")
const template = document.getElementById("template")
const footer = document.getElementById("footer")
const templateFt = document.getElementById("templateFt")
const fragment = document.createDocumentFragment(true)

document.addEventListener('click', e => {
    //console.log(e.target.matches(".card .btn-outline-primary"))
    if(e.target.matches(".card .btn-outline-primary")){
      //  console.log(first)
        addToCarr(e);
    }

   // console.log(e.target.matches("div .btn-success"))
    if(e.target.matches("#carrito div .btn-success")){
      btnAddObj(e);
    }
    
    //console.log(e.target.matches('#carrito div .btn-danger'))
    if(e.target.matches('#carrito div .btn-danger')){
      btnRedObj(e);
    }


})

let carrObj = [];

const addToCarr = (e) => {
    //console.log(e.target.dataset.fruta)
    
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.price) 
    };
       // console.log(producto)

     const indic = carrObj.findIndex((item) => item.id === producto.id);

   // console.log(indic)

    if(indic === -1){
      carrObj.push(producto)
    } else{
        carrObj[indic].cantidad ++
       /*  carrObj[indic].precio = carrObj[indic].cantidad * producto.precio */
    }

    
    
     if(carrObj.hasOwnProperty(producto.titulo)){
        producto.cantidad = carrObj[producto.titulo].cantidad + 1;
    }

    carrObj[producto.titulo] = producto;

  pintarCarrito();


}; 

const pintarCarrito = () =>{

carrito.textContent = "";

    carrObj.forEach(item => {
    const clone = template.content.cloneNode(true) 
    clone.querySelector('.text-white .lead').textContent = item.titulo
    clone.querySelector('.badge').textContent = item.cantidad
    clone.querySelector('div .lead span').textContent = item.precio * item.cantidad
    clone.querySelector('.btn-danger').dataset.id = item.id
    clone.querySelector('.btn-success').dataset.id = item.id
    
    fragment.appendChild(clone)
})

carrito.appendChild(fragment)
pintarFooter();
} 

const pintarFooter = () => {
  footer.textContent=""

  const total =carrObj.reduce(
    (acc,current) => acc + current.cantidad * current.precio, 0
  );

  const clone = templateFt.content.cloneNode(true) 
  clone.querySelector('span').textContent = total;

  footer.appendChild(clone)
}

const btnAddObj = (e) => {
  console.log('mediste click', e.target.dataset.id)
  carrObj = carrObj.map(item => {
    if( item.id === e.target.dataset.id){
      item.cantidad ++
    }
    return item
  })
  pintarCarrito()
};

const btnRedObj = (e) =>{
  console.log('mediste click', e.target.dataset.id)
   carrObj = carrObj.filter(item =>{
    if(item.id === e.target.dataset.id){
      if(item.cantidad > 0){
        item.cantidad--
        if(item.cantidad === 0) return
        return item
      }
    }else{return item}
  })
  pintarCarrito()
};
