const loadProduct = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const product = data.data;
  displayProduct(product);
};

const displayProduct = (products) => {
  // console.log(products);
 
  const productContainer = document.getElementById("product-nav");

  products.forEach((product) => {
    // console.log(product);
    const productNav = document.createElement("div");
    productNav.classList = ``;
    productNav.innerHTML = `
        <button onclick="handleProduct('${product.category_id}')" class="btn btn-active rounded-lg">${product.category}</button>
        `;
    productContainer.appendChild(productNav);
  });
};

// lets try to get the id from the categories alada alada babe

const handleProduct = async (categoryId) => {
//   console.log(categoryId);

  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  const productCard = document.getElementById("product-contianer");
  const emptyCard = document.getElementById("emty-container");
  emptyCard.textContent = "";
  productCard.textContent = "";




//   console.log(data.data.length);
  if (data.data.length == 0) {
    // length jokon 0 hobe array er tokon ei section ta show korbe div a

    // console.log(data.data.length);

    const createProduct = document.createElement("div");
    createProduct.innerHTML = `
            <div class="flex justify-center">
            <img src='./image/Icon.png' >
            </div>
            
            <div class="w-full  text-center">
            <h1 class='text-5xl'>Oops!! Sorry, There is no <br> content here</h1>

            </div>
            `;
    emptyCard.appendChild(createProduct);
  } else {



    data.data.forEach((product) => {

      console.log(product.others.views);
        // sorting by view
  
  // function productSortBtView(){
  //   product.sort((a,b)=>
  //   {
  //     const card1=parseFloat(a.others.views.replace("K",""))*1000;
  //     const card2=parseFloat(b.others.views.replace("K",""))*1000;
  //     return card1 - card2
  //   });
  
  //   handleProduct(product);
  
  // }
  


        // const views=product.others.views;
        // console.log(views);


        // console.log(product.others.posted_date);
        // lets try to make the mili second into hour and minute
        if(product?.others?.posted_date==''){

        }
        else{
            
                const miliSecond=product?.others?.posted_date;
            // console.log(miliSecond);
            let seconds=Math.floor((miliSecond/1000)%60)
            // console.log(seconds);
            let minutes=Math.floor((miliSecond/(1000*60))%60);
            // console.log(minutes);
            let hours=Math.floor((miliSecond/(1000*60*60)%24));
            // console.log(hours+"hr"+minutes+"min");

            hours=(hours<10)?+hours:hours;
            minutes=(minutes<10)?"0"+minutes:minutes;
            seconds=(seconds<10)?"0"+seconds:seconds;

            // banga cura babe korlam bt hoise muta muti 
            const converted=`${hours}hrs ${minutes}min ago`
            // console.log(converted);
            if(converted=='0hrs 00min ago'){
                const createProduct = document.createElement("div");

                createProduct.innerHTML = `
                      
                <div class="card w-88 h-[500px] bg-base-100 shadow-xl ">
               <div>
               
               <figure><img src="${product?.thumbnail}" alt="product" /></figure>
               <div >
               <p class="text-black"></p>
               </div>
               </div>
                <div class="card-body">
                  <div class="flex gap-4">
        
                  <div>
                  <div class="avatar ">
                    <div class="w-10 rounded-full">
                      <img src="${product.authors[0]?.profile_picture}" />
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
                  <p>${
                    product.authors[0].verified
                      ? "<img src='./image/verified.png' class='w-5'>"
                      : ""
                  }</p>
                  </div>
                  </div>
                 <p>${product.others?.views} views</p>
                </div>
              </div>
                
                `;
          productCard.appendChild(createProduct);
                
            }

            else{
                const createProduct = document.createElement("div");
                createProduct.innerHTML = `
                      
                      <div class="card w-88 h-[500px] bg-base-100 shadow-xl ">
                     <div>
                     
                     <figure><img src="${product?.thumbnail}" alt="product" /></figure>
                     <div class="absolute right-0 bottom-[250px] bg-gray-700 p-2 rounded-lg">
                     <p class="text-white">${converted}</p>
                     </div>
                     </div>
                      <div class="card-body">
                        <div class="flex gap-4">
              
                        <div>
                        <div class="avatar ">
                          <div class="w-10 rounded-full">
                            <img src="${product.authors[0]?.profile_picture}" />
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
                        <p>${
                          product.authors[0].verified
                            ? "<img src='./image/verified.png' class='w-5'>"
                            : ""
                        }</p>
                        </div>
                        </div>
                       <p>${product.others?.views} views</p>
                      </div>
                    </div>
                      
                      `;
                productCard.appendChild(createProduct);
            }
           
            
        }


     
    });
  }
};

// function for sorting 

// function productSortBtView(){
//   products.sort((a,b)=>
//   {
//     const card1=parseFloat(a.others.views.replace("K",""))*1000;
//     const card2=parseFloat(b.others.views.replace("K",""))*1000;
//     return card1 - card2
//   });

//   handleProduct(products);

// }

// document.getElementById('sortBtn').addEventListener("click",productSortBtView);
loadProduct();
handleProduct(1000);
