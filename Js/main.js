const Email = document.querySelector(".Email");
const DesktopMenu = document.querySelector(".desktop-menu");
Email.addEventListener("click", ToogleSubMenu);

function ToogleSubMenu() {
  const isMyOrderClosed = MyOrder.classList.contains("Inactivo");
  if (!isMyOrderClosed) {
    MyOrder.classList.add("Inactivo");
  }
  DesktopMenu.classList.toggle("Inactivo");
}

const Menu = document.querySelector(".Menu");
const MobileMenu = document.querySelector(".Mobile-Menu");
Menu.addEventListener("click", ToogleSubMenuMobile);
function ToogleSubMenuMobile() {
  const isMyOrderClosed = MyOrder.classList.contains("Inactivo");
  if (!isMyOrderClosed) {
    MyOrder.classList.add("Inactivo");
  }
  MobileMenu.classList.toggle("Inactivo");
}

const Carrito = document.querySelector(".Carrito");
const MyOrder = document.querySelector(".MyOrder");
Carrito.addEventListener("click", ToogleSubMenuCarro);

function ToogleSubMenuCarro() {
  const isDesktopMenuClosed = DesktopMenu.classList.contains("Inactivo");
  const isMobileMenuClosed = MobileMenu.classList.contains("Inactivo");
  if (!isDesktopMenuClosed) {
    DesktopMenu.classList.add("Inactivo");
  }
  if (!isMobileMenuClosed) {
    MobileMenu.classList.add("Inactivo");
  }
  MyOrder.classList.toggle("Inactivo");
}

const cardsContainer = document.querySelector(".cards-container")

const productList = [];
productList.push({
  name: "Teclado",
  price: 120,
  image:
    "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Pantalla",
  price: 330,
  image:
    "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Compu",
  price: 620,
  image:
    "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "Pc-MasterRise",
    price: 620,
    image:
      "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInfoDiv.append(productPrice, productName);
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "/Assets/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
