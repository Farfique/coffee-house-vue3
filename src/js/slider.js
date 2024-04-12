export default class Slider {
    constructor(){
      this.sliderContainer = document.querySelector('.favorite-coffee-slider-container');
      this.arrowLeft = this.sliderContainer.querySelector('.arrow-left');
      this.arrowRight= this.sliderContainer.querySelector('.arrow-right');
      this.pictureCoffee = this.sliderContainer.querySelector('.coffee-slider-img-img');
      this.titleCoffee = this.sliderContainer.querySelector('.coffee-slider-title');
      this.descriptionCoffee = this.sliderContainer.querySelector('.coffee-slider-description');
      this.priceCoffee = this.sliderContainer.querySelector('.coffee-slider-price');
      this.bulletsContainer = this.sliderContainer.querySelector('.coffee-slider-counter');
      this.activeBullet;
      this.products = [];
    }

  async init() {
     

    
    await this.initProducts();
    }

  

  async initProducts() {
    await this.getProducts();
    this.showProduct(1);
    //addEventListener
  }

  async getProducts(){
    let data = 'src/assets/json/home-coffee.json';
    let result = await fetch(data);
    this.products = await result.json();
    console.log("products= " + this.products);
    console.log("product1 = " + this.products[0].title);
  }

  showProduct(index) {
    if (index > 2 || index < 0)
      index = 0;
    if (this.products[index]) {
      console.log("saving title");
      this.titleCoffee.innerHTML = this.products[index].title;
      this.pictureCoffee.src = this.products[index].imgUrl;
    }

  }

  createBullets() {
    
  }
}

