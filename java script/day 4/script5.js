var a="The product qty total";
console.log(a);
var products = [
  {
    productID: 1,
    name: "Product 1",
    price: 40,
    qty: 200
  },
  {
    productID: 2,
    name: "Product 2",
    price: 20,
    qty: 250
  },
  {
    productID: 3,
    name: "Product 3",
    price: 10,
    qty: 200
  }
];
var grandTotal = 0;

products.forEach(function(product) {
  let totalPrice = product.price * product.qty;
  grandTotal += totalPrice;

  console.log(
    product.name + 
    " | Price: " + product.price +
    " | Qty: " + product.qty +
    " | Total: " + totalPrice
  );
});

console.log("Grand Total of All Products:", grandTotal);