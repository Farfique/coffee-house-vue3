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
      this.index = 0;

      this.arrowLeft.addEventListener('click', () => {
        this.incrementIndex('LEFT');
        this.updateProduct();
      });
      this.arrowRight.addEventListener('click', () => {
        this.incrementIndex('RIGHT');
        this.updateProduct();
      });
      

    }

  async init() {  
    await this.initProducts();
    this.createBullets();

    }

  

  async initProducts() {
    await this.getProducts();
    this.showProduct(this.index);
    //addEventListener
  }

  async getProducts(){
    let data = 'src/assets/json/home-coffee.json';
    let result = await fetch(data);
    this.products = await result.json();
    console.log("products= " + this.products);
    console.log("product1 = " + this.products[0].title);
  }

  incrementIndex(direction) {
    let len = this.products.length;

    if (this.index == len - 1 && direction == "RIGHT") {
      this.index = 0;
    }
    else if (this.index == 0 && direction == "LEFT") {
      this.index = len - 1;
    }
    else if (direction == "RIGHT") {
      this.index++;
    }
    else {
      this.index--;
    }
  }

  updateProduct() {
    this.showProduct(this.index);
    this.changeActiveBullet();
  }

  showProduct(index) {
    if (index > 2 || index < 0)
      index = 0;
    if (this.products[index]) {
      console.log("saving title");
      this.titleCoffee.innerHTML = this.products[index].title;
      this.pictureCoffee.src = this.products[index].imgUrl;
      this.descriptionCoffee.innerHTML = this.products[index].description;
      this.priceCoffee.innerHTML = this.products[index].price;
    }

  }

  createBullets() {
    while (this.bulletsContainer.firstChild) {
        this.bulletsContainer.removeChild(this.bulletsContainer.lastChild);
    };

    for (let i = 0; i < this.products.length; i++){
      let item = document.createElement('li');
      item.className = 'coffee-slider-item';
      if (i == this.index) {
        item.classList.add('coffee-slider-active');
        this.activeBullet = item;
      }
      this.bulletsContainer.appendChild(item);
    }
  }

  changeActiveBullet() {
    if (!!this.activeBullet) {
      this.activeBullet.classList.remove('coffee-slider-active');
    }
    if (this.index > this.bulletsContainer.childElementCount || this.index < 0) {
      this.index = 0;
    }
    let newActiveItem = this.bulletsContainer.childNodes.item(this.index);
    newActiveItem.classList.add('coffee-slider-active');
    this.activeBullet = newActiveItem;
    
  }
}

