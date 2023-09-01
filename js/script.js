const loadProduct=async ()=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data=await  res.json();
    const product=data.data;
    displayProduct(product);
}

const displayProduct=(products=>{
    // console.log(products);

    const productContainer=document.getElementById('product-nav');

    products.forEach((product) => {
        // console.log(product);
        const productNav=document.createElement('div');
        productNav.classList=``
        productNav.innerHTML=`
        <button onclick="handleProduct('${product.category_id}')" class="btn btn-active rounded-lg">${product.category}</button>
        `
        productContainer.appendChild(productNav);

    });



})

    // lets try to get the id from the categories alada alada babe

const handleProduct= async(categoryId)=>{
    console.log(categoryId);

    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data=await res.json();
    const productCard=document.getElementById('product-contianer');
    productCard.textContent=''


    console.log(data.data);

    
    data.data.forEach((product)=>{
        const createProduct=document.createElement('div');
        createProduct.innerHTML=`
        
        <div class="card w-96 h-96 bg-base-100 shadow-xl ">
        <figure><img src="${product.thumbnail}" alt="product" /></figure>
        <div class="card-body">
          <div class="flex gap-4">

          <div>
          <div class="avatar ">
            <div class="w-10 rounded-full">
              <img src="${product.authors[0].profile_picture}" />
             </div>
            </div>
          </div>
          <div>
          <h2 class="card-title text-lg">${product.title}</h2>
          </div>

          </div>
          <div class="flex gap-4">
          <div>
          <p>${product.authors[0]?.profile_name}</p>
          </div>

          <div>
          <p>${product.authors[0].verified?"<img src='./image/verified.png' class='w-5'>":"" }</p>
          </div>
          </div>
         <p>${product.others.views} views</p>
        </div>
      </div>
        
        `
        productCard.appendChild(createProduct);
    })
}


loadProduct();
handleProduct(1000);

