3// let displayData=document.getElementById("displayData")
let displayData=document.querySelector("#displayData")
console.log(displayData)

 
// datafetch
// fetch("https://dummyjson.com/products")
// .then((e)=>{ return e.json()})
// // get data from second then
// .then((e)=>{
//     let{products}=e
//     // console.log(e.products)
//     DisplayAllProduct(dataproducts)
// })
// .catch((error)=>{console.error(error)})

// async and await
// async function fetchData(url) {
//     let  response=await fetch(url)
//     let data=await response.json()
//     console.log(data.products)
//     DisplayAllProduct(data.products)
    
// }
let all_products=""
// if get error use catch statement

async function fetchData(url) {
    let  response=await fetch(url)
    try{ 
        let data=await response.json()
        console.log(data.products)
        all_products=data.products
        let jsonData=JSON.stringify(all_products)
        localStorage.setItem("allproduct",jsonData)

        DisplayAllProduct(data.products)
    }
    catch(err){
        console.error(err)
    }
    
}
fetchData("https://dummyjson.com/products")

function DisplayAllProduct(p){
    console.log(p)
    let input=""
    p.map((val)=>{
        console.log(val)
        let productId=val.id
        let title=val.title
        let brand=val.brand
        category=val.category
        let rating=val.rating
        let productImg=val.images[0]
        input=input+`
        <div>
        <img src=${productImg} alt=${title} height="200px" width="200px">
        <p>${ title}</p>
        <h2>${brand}</h2>
        <p>${category}</h5>
       
        <h2>${rating}</h2>
        <a href="Product.html" target="_blank"><button onclick="getId(${productId})"  >view more</button></a>
        </div>`
         
    }
    )
      console.log(input)
      displayData.innerHTML=input;  
    
}
function getId(id){
    console.log(id)
    localStorage.setItem("id",id)

}
let searchcnt=document.getElementById("search")
searchcnt.addEventListener("input",(e)=>{
    let unValue=e.target.value.toLowerCase();
    console.log(unValue)
    let filterData= all_products.filter((val)=>{
        return val.title.toLowerCase().includes(unValue) || val.category.toLowerCase().includes(unValue)

    })
    console.log(filterData)
    DisplayAllProduct(filterData)
})