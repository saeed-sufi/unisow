class ScrollX {
  constructor() {
    this.scrollLeftBtn = document.querySelector(".fa-arrow-left")
    this.scrollRightBtn = document.querySelector(".fa-arrow-right")
    this.container = document.querySelector(".featured__coins")
    this.step = this.container.scrollWidth / this.container.childElementCount

    this.events()
  }

  events() {
    this.scrollLeftBtn.addEventListener("click", this.scrollLeft.bind(this))
    this.scrollRightBtn.addEventListener("click", this.scrollRight.bind(this))
  }
  
  scrollLeft() {
    this.container.scrollLeft -= this.step
  }
  
  scrollRight() {
      this.container.scrollLeft += this.step
  }
}

export default ScrollX
