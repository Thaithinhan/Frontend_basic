const Products = function (
  id,
  model,
  type,
  describe,
  isBestSeller,
  isLimited,
  price,
  image
) {
  this.id = id;
  this.model = model;
  this.type = type;
  this.describe = describe;
  this.isBestSeller = isBestSeller;
  this.isLimited = isLimited;
  this.price = price;
  this.image = image;
};
const products_list = [
  new Products(
    1,
    "ABCN1",
    "man",
    "Philippe Auguste PA5016F - Đồng hồ Nam - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    false,
    false,
    3600000,
    "image/Nam1.jpg"
  ),
  new Products(
    2,
    "ABCN2",
    "man",
    "Philippe Auguste PA5016F - Đồng hồ Nam - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    false,
    false,
    4000000,
    "image/Nam2.jpg"
  ),
  new Products(
    3,
    "ABCN3",
    "man",
    "Philippe Auguste PA5016F - Đồng hồ Nam - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    true,
    true,
    50000000,
    "image/Nam3.jpg"
  ),
  new Products(
    4,
    "ABCN4",
    "man",
    "Philippe Auguste PA5016F - Đồng hồ Nam - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    true,
    false,
    5000000,
    "image/Nam4.jpg"
  ),
  new Products(
    5,
    "ABCN5",
    "man",
    "Philippe Auguste PA5016F - Đồng hồ Nam - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    false,
    true,
    10000000,
    "image/Nam5.jpg"
  ),
  new Products(
    6,
    "ABCN6",
    "man",
    "Philippe Auguste PA5016F - Đồng hồ Nam - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    true,
    false,
    10000000,
    "image/Nam6.jpg"
  ),
  new Products(
    7,
    "ABCNU1",
    "woman",
    "Philippe Auguste PA5016F - Đồng hồ Nữ - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    false,
    false,
    3000000,
    "image/nu.jpg"
  ),
  new Products(
    8,
    "ABCNU2",
    "woman",
    "Philippe Auguste PA5016F - Đồng hồ Nữ - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    false,
    true,
    30000000,
    "image/nu2.jpg"
  ),
  new Products(
    9,
    "ABCNU3",
    "woman",
    "Philippe Auguste PA5016F - Đồng hồ Nữ - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    false,
    true,
    45000000,
    "image/nu3.jpg"
  ),
  new Products(
    10,
    "ABCNU4",
    "woman",
    "Philippe Auguste PA5016F - Đồng hồ Nữ - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    true,
    false,
    19000000,
    "image/nu4.jpg"
  ),
  new Products(
    11,
    "ABCNU5",
    "woman",
    "Philippe Auguste PA5016F - Đồng hồ Nữ - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    true,
    false,
    19000000,
    "image/nu5.jpg"
  ),
  new Products(
    12,
    "ABCNU6",
    "woman",
    "Philippe Auguste PA5016F - Đồng hồ Nữ - Size mặt 42 mm - Sapphire - Quartz/Pin - Chịu nước 5 ATM",
    true,
    true,
    50000000,
    "image/nu6.jpg"
  ),
];
////////////TẠO FUNCTION RENDER SẢN PHẨM///////////////
function render_product(products) {
  let show_product = document.querySelector(".show_product");
  show_product.innerHTML = "";
  products.forEach((product, index) => {
    let li = `  <li>
            <a href="#"
              ><img src="${product.image}" alt=""
            /></a>
            <p>Model: ${product.model}</p>
            <p>Loại đồng hồ: ${product.type}</p>
            <p>Mô tả: ${product.describe}</p>
            <span class="sale-up">-20%</span>
            <p class="price">${product.price}đ</p>
             <button class="btn_edit" onclick="edit_product(this, ${product.id})">EDIT</button>
            <button class="btn_del" onclick="delete_product(this, ${product.id})">DELETE</button>
             <button class="btn_add_cart" onclick="add_toCart(this)" ><i class="fa-solid fa-cart-plus"></i> BUY THIS</button>
          </li>`;
    show_product.innerHTML += li;
  });
}
// hiển thị ban đầu////
const best_sell = products_list.filter((product) => product.isBestSeller);
render_product(best_sell);
function show_product(element, id) {
  event.preventDefault();
  let search_input = document.getElementById("search_input");
  search_input.setAttribute("data-search", id);
  //TẠO THÊM CLASS ACTIVE
  const li_show_product = document
    .querySelector(".list_menu_hot")
    .querySelectorAll("li");
  li_show_product.forEach((li) => {
    li.classList.remove("active");
  });
  //THÊM DẤU HIỆU NHẬN BIẾT SỬA XOÁ
  document.querySelector(".show_product").setAttribute("data-delete", id);
  document.querySelector(".show_product").setAttribute("data-edit", id);
  element.closest("li").classList.add("active");
  // console.log(element.closest("li").getAttribute("data-delete"));
  if (id == "best_sell") {
    const product_clicked = products_list.filter(
      (product) => product.isBestSeller
    );
    render_product(product_clicked);
  }
  if (id == "limited") {
    const product_clicked1 = products_list.filter(
      (product) => product.isLimited
    );
    render_product(product_clicked1);
  }
  if (id == "for_man") {
    const product_clicked = products_list.filter(
      (product) => product.type == "man"
    );
    render_product(product_clicked);
  }
  if (id == "for_woman") {
    const product_clicked = products_list.filter(
      (product) => product.type == "woman"
    );
    render_product(product_clicked);
  }
}
//FUNCTION SEARCH SẢN PHẨM
function search_product(value) {
  let search_input = document.getElementById("search_input");
  let data_search = search_input.getAttribute("data-search");
  if (data_search == "best_sell") {
    const search_product = products_list.filter(
      (product) =>
        product.isBestSeller &&
        product.model.toLowerCase().includes(value.toLowerCase().trim())
    );
    render_product(search_product);
  }
  if (data_search == "for_man") {
    const search_product = products_list.filter(
      (product) =>
        product.type == "man" &&
        product.model.toLowerCase().includes(value.toLowerCase().trim())
    );
    render_product(search_product);
  }
  if (data_search == "for_woman") {
    const search_product = products_list.filter(
      (product) =>
        product.type == "woman" &&
        product.model.toLowerCase().includes(value.toLowerCase().trim())
    );
    render_product(search_product);
  }
  if (data_search == "limited") {
    const search_product = products_list.filter(
      (product) =>
        product.isLimited &&
        product.model.toLowerCase().includes(value.toLowerCase().trim())
    );
    render_product(search_product);
  }
}
//HÀM RENDER CÓ ĐIỀU KIỆN HIỂN THỊ THEO THÔNG TIN
function render_condition() {
  if (
    document.querySelector(".show_product").getAttribute("data-delete") ==
    "best_sell"
  ) {
    const del_product = products_list.filter((product) => product.isBestSeller);
    render_product(del_product);
  }
  if (
    document.querySelector(".show_product").getAttribute("data-delete") ==
    "for_man"
  ) {
    const del_product = products_list.filter(
      (product) => product.type == "man"
    );
    console.log(
      document.querySelector(".show_product").getAttribute("data-delete")
    );
    render_product(del_product);
  }
  if (
    document.querySelector(".show_product").getAttribute("data-delete") ==
    "for_woman"
  ) {
    const del_product = products_list.filter(
      (product) => product.type == "woman"
    );
    render_product(del_product);
  }
  if (
    document.querySelector(".show_product").getAttribute("data-delete") ==
    "limited"
  ) {
    const del_product = products_list.filter((product) => product.isLimited);
    render_product(del_product);
  }
}
//FUNCTION DELETE PRODUCT///
function delete_product(element, id) {
  products_list.forEach((product, index) => {
    if (product.id == id) {
      products_list.splice(index, 1);
    }
    render_condition();
  });
}
//ADDD FUNCTION
function open_add_form(element) {
  document.querySelector("#add_product").style.top = "0%";
}
function finish_add() {
  let new_model = document.querySelector("#new_model");
  let new_type = document.querySelector("#new_type");
  let new_describe = document.querySelector("#new_describe");
  let new_price = document.querySelector("#new_price");
  let new_image = document.querySelector("#new_image");
  let isBestSeller = document.getElementsByName("isBestSeller");
  let isLimited = document.getElementsByName("isLimited");
  let new_product = {
    id: products_list.length + 1,
    model: new_model.value,
    type: new_type.value,
    describe: new_describe.value,
    price: Number(new_price.value),
  };
  if (isBestSeller[0].checked) {
    new_product.isBestSeller = true;
  } else {
    new_product.isBestSeller = false;
  }
  if (isLimited[0].checked) {
    new_product.isLimited = true;
  } else {
    new_product.isLimited = false;
  }
  const file = new_image.files[0];
  const reader = new FileReader();
  let src;
  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      src = reader.result;
      new_product.image = src;
      products_list.push(new_product);
      console.log(products_list);
      render_condition();
      document.querySelector("#new_model").value = "";
      document.querySelector("#new_type").value = "";
      document.querySelector("#new_describe").value = "";
      document.querySelector("#new_price").value = "";
    },
    false
  );
  if (file) {
    reader.readAsDataURL(file);
  }
  document.querySelector("#add_product").style.top = "-100%";
}
//FUNCTION EDIT PRODUCT//
function edit_product(element, id) {
  document.querySelector("#edit_product").style.left = "calc(50% - 250px)";
  products_list.forEach((product) => {
    if (product.id == id) {
      document.querySelector("#edit_model").value = product.model;
      document.querySelector("#edit_type").value = product.type;
      document.querySelector("#edit_describe").value = product.describe;
      document.querySelector("#edit_price").value = product.price;
      document.querySelector("#edit_id").value = id;
    }
  });
}
function finish_edit() {
  let edit_model = document.querySelector("#edit_model");
  let edit_type = document.querySelector("#edit_type");
  let edit_describe = document.querySelector("#edit_describe");
  let edit_price = document.querySelector("#edit_price");
  let edit_id = document.querySelector("#edit_id");
  let edit_isBestSeller = document.getElementsByName("edit_isBestSeller");
  let edit_isLimited = document.getElementsByName("edit_isLimited");
  products_list.forEach((product, index) => {
    if (product.id == edit_id.value) {
      (product.id = Number(edit_id.value)),
        (product.model = edit_model.value),
        (product.type = edit_type.value),
        (product.describe = edit_describe.value),
        (product.price = Number(edit_price.value));
      let edit_image = document.querySelector("#edit_image");
      const file = edit_image.files[0];
      const reader = new FileReader();
      let src;
      reader.addEventListener(
        "load",
        () => {
          // convert image file to base64 string
          src = reader.result;
          product.image = src;
          console.log(products_list);
          render_condition();
          document.querySelector("#new_model").value = "";
          document.querySelector("#new_type").value = "";
          document.querySelector("#new_describe").value = "";
          document.querySelector("#new_price").value = "";
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    }
    return;
  });
  document.querySelector("#edit_product").style.left = "-300%";
}
//FUNCTION ADD TO CART
let buy_product = 0;
function add_toCart() {
  let cart = document.querySelector("#cart").querySelector("b");
  buy_product += 1;
  cart.innerText = `[${buy_product}]`;
}
