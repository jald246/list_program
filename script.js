// NOTE: PLEASE READ EACH INSTRUCTION COMMENT CAREFULLY TO HELP YOU PROCESS THIS PROJECT
// IF YOU ARE STUCK ASK AN INSTRUCTOR FOR HELP, ALWAYS WRITE THE CODE BELOW THE ASSIGNMENTS.

productArray = [newProduct];
function addProduct() {
  // Assignment 1
  // You need to change the id that this collects to product.
  let input = document.getElementById("product").value;
    function addElement() {
        let result = document.createElement("div");
        let newContent = document.createTextNode("Hi there")
        result.appendChild(newContent);
        let currentDiv = document.getElementById("output");
        document.body.insertBefore(result, currentDiv);
    }

   if (input === ""){
    alert("Please enter a product")
   } 
   else {

   }
   return false

   let output = document.getElementById("output")

  let newProduct = { input };
  let products = [newProduct]
  products.push("Hammer")

  console.log(productArray)

  return false;
}