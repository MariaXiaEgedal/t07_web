// const mycategory = new URLSearchParams(window.location.search).get("category");
// console.log("produktliste loader... med category", mycategory)

// const listContainer = document.querySelector(".product_list_container");
// const overskrift = document.querySelector("h2")

// overskrift.innerHTML = mycategory;

// fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
//   .then((response) => response.json())
//   .then(showProducts);
//   // .then((data) => showList(data));

// function showProducts(data) {
  
//   console.log(data);
//   markup = data

//     .map(
//       (product) => `
//         <article class="product ${product.discount && "onsale"} ${product.soldout && "soldout"}">
//           <a href="product.html?id=${product.id}" class="product_link">
//             <div class="image_container">
//               <img
//                 src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
//                 alt="Blue T20 Indian"
//               />
//             </div>
//           </a>
//           <div class="product_info">
//             <p class="brand">${product.brandname}</p>
//             <h3>${product.productdisplayname}</h3>
            
//                <p class="price">
//               ${product.discount
//                   ? `<s>${product.price},-</s> ${(
//                       product.price -
//                       (product.discount * product.price) / 100
//                     ).toFixed(2)},-`
//                   : `${product.price},-`
//               }
//             </p>
//             ${
//               product.discount
//                 ? <div class="discount">${product.discount}%</div>
//                 : ""
//             }
            
//           </div>
//         </article>
//       `
//     )
//     .join("");
//   console.log(markup);
//   listContainer.innerHTML = markup;
// }

const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader... med category", mycategory);

const listContainer = document.querySelector(".product_list_container");
const overskrift = document.querySelector("h2");

overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then(showProducts);

function showProducts(data) {
  console.log(data);

  const markup = data
    .map((product) => {
      const discountedPrice = product.discount
        ? (product.price - (product.discount * product.price) / 100).toFixed(2)
        : product.price;

      return `
        <article class="product ${product.discount ? "onsale" : ""} ${product.soldout ? "soldout" : ""}">
          <a href="product.html?id=${product.id}" class="product_link">
            <div class="image_container">
              <img
                src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                alt="${product.productdisplayname}"
              />
              ${product.discount ? `<div class="discount-label">${product.discount}%</div>` : ""}
              ${product.soldout ? `<div class="soldout_label">Udsolgt</div>` : ""}
            </div>
          </a>
          <div class="product_info">
            <p class="brand">${product.brandname}</p>
            <h3>${product.productdisplayname}</h3>
            <div class="price_container">
              ${product.discount ? `<p class="old_price">${product.price},-</p>` : ""}
              <p class="new_price">${discountedPrice},-</p>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}

