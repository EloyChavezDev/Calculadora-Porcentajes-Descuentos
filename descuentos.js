const precioOriginal=100;
const descuento =15;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById ("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText ="El precio con descuento son: $" + precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function Cuponera() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case "A":
        descuento = 15;
      break;
      case "pero_no_le_digas_a_nadie":
        descuento = 30;
      break;
      case "secreto":
        descuento = 25;
      break;
      default: descuento = 0;
    }
  
    if (descuento === 0){
        resultP.innerText = "Cupon no valido pagaras el total de: $" + priceValue;
    }else{
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
  }


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });