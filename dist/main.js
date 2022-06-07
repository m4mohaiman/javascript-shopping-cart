let shop = document.getElementById('shop');

let storeProduct = [];


//data 
let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-3.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
  ];
//data end


const createShop = () => {
    return (
        shop.innerHTML = shopItemsData.map((product)=>{
            let { id , name , price , desc , img } = product;
            return `
            <div class="col-3">
                    <div id=product-id-${id} class="item">
                          <img src="${img}" alt="">
                          <div class="details">
                              <h4 class="mt-2">${name}</h4>
                              <p class="mt-2">${desc}</p>
                              <div class="price-quantity mt-3">
                                 <h5 class="">BDT ${price}</h5>
                                <div class="buttons">
                                   <i onclick="minus(${id})" class="bi bi-dash-circle"></i>
                                    <div id=${id} class="quantity">0</div>
                                   <i onclick="plus(${id})" class="bi bi-plus-circle"></i>
                                </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                   `
        }).join("")
    )
}

createShop()


let plus = (id) => {
    let selectedProduct = id;

    let serachProduct = storeProduct.find((product)=> product.id === selectedProduct.id);

    if(serachProduct === undefined){
        storeProduct.push({
            id:selectedProduct.id,
            item:1,
        });
    } else {
        serachProduct.item +=1;
    }

    console.log(storeProduct);
    
}

let minus = (id) => {
    let selectedProduct = id;
    console.log(selectedProduct.id);
}

let update = () => {

}