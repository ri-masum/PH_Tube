const loadProduct=async ()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data=await  res.json();
    const product=data.data;
    displayProduct(product);
}

const displayProduct=(products=>{
    console.log(products);

    const productContainer=document.getElementById('product-nav');

    products.forEach((product) => {
        const productNav=document.createElement('div');
        productNav.classList=``
        productNav.innerHTML=`
        <button class="btn btn-active rounded-lg">${product.category}</button>
        `
        productContainer.appendChild(productNav);

    });
})

loadProduct();