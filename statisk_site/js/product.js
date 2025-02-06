const productContainer = document.querySelector(".productContainer");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then(showProduct); 
  
  function showProduct(data) {
    console.log(data);

    productContainer.innerHTML = `
      <figure class="image_container">
        
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
          alt=""
          class="productImage"
        />
        <div class="discount-label ${data.discount ? "isOnSale" : ""}">
        ${data.discount ? `-${data.discount}%` : ""}
        </div>
        <span class="soldout_label">Sold Out</span>
      </figure>

      

      <div class="single_product_info">
        <h3 class="brand">${data.brandname}</h3>
        <h2 class="product_name">${data.productdisplayname}</h2>
        <p class="inventory_number">Inventory number ${data.id}</p>

        <div class="price_container"> 
         <p class="">
            ${
              data.discount
               ? `<s>${data.price},-</s> ${(data.price - (data.discount * data.price) / 100).toFixed(2)},-`
                 : `${data.price},-`
              }
          </p>
        </div>
      
        <p class="color">Color: <span class="color-indicator">${data.basecolour}</span></p>

        <div class="size_container">
          <p>Size</p>
          <div class="size_options">
            <span class="size">XS</span>
            <span class="size">S</span>
            <span class="size">M</span>
            <span class="size">L</span>
            <span class="size">XL</span>
          </div>
        </div>

        <button class="add-to-cart">Add to cart</button>
      </div>
    `;
  }