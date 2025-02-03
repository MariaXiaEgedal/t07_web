const listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categorie/`)
  .then((response) => response.json())
  .then(showCategori);

function showCategori(data) {
  console.log("mine data er: ", data);
 
    const markup = data
    .map
        (element)=> `
          <section class="category_list_container">
            <a href="productlist.html">${element.category}</a>
         </section> 
         `
            )
            .join("");

        console.log("min markup er ", markup);
        document.querySelector("ul").innerHTML = markup;
    }
