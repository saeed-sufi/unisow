class Menu {
  constructor() {
    this.menuIcon = document.querySelector(".menu-icon")
    this.headerMenu = document.querySelector(".header__menu")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", this.toggleMenu.bind(this))
  }

  toggleMenu() {
    this.menuIcon.classList.toggle("menu-icon--rotate")
    this.headerMenu.classList.toggle("header__menu--visible")
  }
}

export default Menu