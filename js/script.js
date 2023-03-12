let sign;
let tiles;
let subtotal;
let shipping;
let grandTotal;

sign = 'Montague House';
tiles = sign.length
console.log(tiles)
let elSign = document.getElementById('sign');
elSign.textContent = ' ' + sign;

subtotal = tiles * 5;
console.log(subtotal);
let elTiles = document.getElementById('tiles');
elTiles.textContent = ' ' + '$' + subtotal;

shipping = 50;
let elShipping = document.getElementById('shipping');
elShipping.textContent = ' ' + '$' + shipping;

grandTotal = subtotal + shipping;
console.log(grandTotal);
let elgrandTotal = document.getElementById('total');
elgrandTotal.textContent = ' ' + '$' + grandTotal;