let cartPage=document.getElementById("cartPage")
let itemPrice=document.getElementById("totalprice")
 let cartProduct=JSON.parse(localStorage.getItem("cart"))
 console.log(itemPrice)
 console.log(cartProduct)
 function renderCart(){
let uniqueId=""
 if(cartProduct.length>0){
    let price=0
    let input=""
    cartProduct.map((val)=>{
        uniqueId = val.id
        price+=val.price
        input+=`
        
        <div class="cart">
        <div>
        <img class="cartImg" src=${val.images[0]} alt=${val.title} >
        </div>
        <div>${val.title} </div>
        <div>${val.price}</div>
        <div>${price}</div>
        <div>  </div>
        <div    ><p class="delete-item"><i    class="fa fa-trash" aria-hidden="true"></i></p></div>
        </div>`
       
    })
     cartPage.innerHTML=input
     itemPrice.innerHTML=`${price.toFixed(2)}`
     console.log(price);
     const deleteButtons = document.querySelectorAll('.delete-item');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.closest('.delete-item').getAttribute('data-index');
                deleteItem(index);
            });
        });
 }
 else{ 
    cartPage.innerHTML+=`
    
    <img  id = "cartimg"  src="https://img.icons8.com/?size=100&id=kqlTT3Fp2Ga1&format=png&color=000000" alt="">
     <h2>Cart is empty</h2>`
 }}
 function deleteItem(index) {
    // Remove the item from the cartProduct array
    cartProduct.splice(index, 1);
    // Update local storage
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    // Re-render the cart
    renderCart();
}

// Initial render
renderCart();


  
