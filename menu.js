document.getElementById("menu-toggle").addEventListener("click", function () {
    const cartDrawer = document.querySelector(".cart-drawer");
    cartDrawer.style.right = "0"; 
});

document.getElementById("close-cart").addEventListener("click", function () {
    const cartDrawer = document.querySelector(".cart-drawer");
    cartDrawer.style.right = "-300px"; 
});

const menuToggle = document.getElementById("menu-toggle");
    const cartDrawer = document.getElementById("cart-drawer");
    const closeCartDrawer = document.getElementById("close-cart-drawer");

    menuToggle.addEventListener("click", () => {
        cartDrawer.style.right = "0"; 
    });

    closeCartDrawer.addEventListener("click", () => {
        cartDrawer.style.right = "-100%";
    });