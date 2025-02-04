const categoriesContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showlist(data));

function showlist(categories) {
  console.log("mine data er: ", categories);
  const markup = categories
    .map(
        (category)=> `
            <a href="productlist.html">${category.category}</a>
         `
            )
            .join("");
categoriesContainer.innerHTML = markup;
        }
