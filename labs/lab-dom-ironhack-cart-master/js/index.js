// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
//... your code goes here

  const price = product.querySelector(".price span").innerText ;
  const quantity = product.querySelector(".quantity input").value;

  // const price = "25.00"
  // const quantity = 0;

  const subtotal = parseInt(price) * quantity;
  const subtotalTd = product.querySelector(".subtotal span");

  subtotalTd.innerText = subtotal;

  return subtotal;

  // product.querySelector('.subtotal span').innerText = parseInt(price) * quantity

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product"); 

  let total = 0;

  allProducts.forEach(item => total += updateSubtotal(item));

  // ITERATION 3
  //... your code goes here

  const totalPrice = document.querySelector("#total-value span");

  totalPrice.innerText = total;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  console.log('The target in remove is:', target);
  //... your code goes here

  const row = target.parentNode.parentNode;

  const parent =  row.parentNode;

  parent.removeChild(row);

  calculateAll();

}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  //PARTE 1
  const createRow = document.querySelector(".create-product");
  let newProductNameInput = createRow.querySelector("input");
  let newProductNameValue = newProductNameInput.value;
  let newProductPriceInput = createRow.querySelector("input[type='number']");
  let newProductPriceValeu = Number(newProductPriceInput.valueAsNumber).toFixed(2);

  //PARTE 2
  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
            <td class="name">
            <span>${newProductNameValue}</span>
            </td>
            <td class="price">$<span>${newProductPriceValeu}</span></td>
            <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
            </td>
            <td class="subtotal">$<span>0</span></td>
            <td class="action">
            <button class="btn btn-remove">Remove</button>
           </td>`;

  //PARTE 3
  const parent = document.querySelector("#cart tbody");

  parent.appendChild(newTableRow);

  const removeButtons = newTableRow.querySelector(".btn-remove");
  removeButtons.addEventListener("click", removeProduct);


  newProductNameInput.value = "";
  newProductPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');

  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  //Borrar productos
  const removeButtons = document.querySelectorAll (".btn-remove")

  removeButtons.forEach(button => button.addEventListener("click", removeProduct));


  const createBtn = document.querySelector("#create");

  if (createBtn){
    createBtn.addEventListener("click", createProduct);
  }




});
