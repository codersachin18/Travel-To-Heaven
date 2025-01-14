function opensidebar() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display = "flex";
  mobileMenu.style.justifyContent = "center";
  mobileMenu.style.alignItems = "center";
  mobileMenu.style.backgroundColor = "rgba(41, 40, 40, 0.38)";
  mobileMenu.style.flexDirection = "column";
}

function closesidebar(){
  const hidemobile = document.querySelector(".mobile-menu")
  hidemobile.style.display = "none"
}


