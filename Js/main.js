const Email = document.querySelector(".Email");
const DesktopMenu = document.querySelector(".desktop-menu");
Email.addEventListener('click',ToogleSubMenu);

function ToogleSubMenu(){
    DesktopMenu.classList.toggle("Inactivo");
}

const Menu = document.querySelector(".Menu")
const MobileMenu = document.querySelector(".Mobile-Menu")
Menu.addEventListener("click",ToogleSubMenuMobile)
function ToogleSubMenuMobile(){
    MobileMenu.classList.toggle("Inactivo");
}

const Carrito = document.querySelector(".Carrito")
const MyOrder = document.querySelector(".MyOrder")
Carrito.addEventListener("click",ToogleSubMenuCarro)

function ToogleSubMenuCarro(){
    MyOrder.classList.toggle("Inactivo")
    console.log("CLICK")
}

