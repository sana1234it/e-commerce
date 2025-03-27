let allproduct=JSON.parse(localStorage.getItem("allproduct"))
let uniqueId = JSON.parse(localStorage.getItem("id"))

let productCnt = document.getElementById("productCnt");
let uniqueProduct= allproduct.find((val)=>{
    return val.id=== uniqueId
})
console.log(uniqueProduct)
let imageUrl = uniqueProduct.images[0]
let description = uniqueProduct.description
let title = uniqueProduct.title
let category = uniqueProduct.category
let price = uniqueProduct.price
productCnt.innerHTML= `
<div class="bg-gray-100 dark:bg-gray-200 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src=${imageUrl} alt="Product Image">
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button id="addtocart" class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full 
                        font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                       
                        <button  class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white
                         py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                      
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-black mb-2">${title}</h2>
                <p class="text-gray-600 dark:text-gray-500 text-sm mb-4">
                    <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. 
                    Integer euismod libero id mauris malesuada tincidunt.-->
                    ${category}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-800">Price:</span>
                        <span  class="text-gray-600 dark:text-gray-600">${price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-800">Availability:</span>
                        <span class="text-gray-600 dark:text-gray-600">In Stock</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-800">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-800 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-800">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-800">Product Description:</span>
                    <p class="text-gray-600 dark:text-gray-600 text-sm mt-2">
                       
                        ${description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>



`


///logic to add cart
let addtocart = document.getElementById("addtocart");
console.log(addtocart)
addtocart.addEventListener("click",()=>{
let cartProduct = JSON.parse(localStorage.getItem("cart"))||
[]
let isPresent= cartProduct.find((val)=>{
    return val.id ===uniqueProduct.id
})
console.log(isPresent)
if(isPresent){
    alert("product already in cart")
}
else{
    cartProduct.push(uniqueProduct);
    localStorage.setItem("cart",JSON.stringify(cartProduct))
    alert("product added to cart")
}
// cartProduct.push(uniqueProduct);
// localStorage.setItem("cart",JSON.stringify(cartProduct))
// alert("product added to cart")
window.location.href="cart.html"
})