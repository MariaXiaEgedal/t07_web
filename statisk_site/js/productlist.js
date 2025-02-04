const listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";

  products
    .map((product) => {
      markup += `
          <article class="product ${product.discount && "onsale"} ${product.soldout && "soldout"}">
            <a href="product.html" class="product_link">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="Sahara Team India Fanwear Round Neck Jersey"
            />
            </a>
            <div class="product_info">
              <p>${product.brandname}</p>
              <h3>${product.productdisplayname}</h3>
              <p>DKK ${product.price},-</p>
            </div>
          </article>
      `;

    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
