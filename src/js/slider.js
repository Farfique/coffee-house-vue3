export default class Slider {
    constructor(){
      this.sliderContainer = document.querySelector('.favorite-coffee-slider-container');
      this.coffeeSlides = this.sliderContainer.querySelector('.coffee-slides');
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

      window.addEventListener('resize', () => {
        this.showProduct(this.index);
      })
      

    }

  async init() {  
    await this.initProducts();
    this.createBullets();

    }

  

  async initProducts() {
    await this.getProducts();
    console.log("prampam");
    this.createAllSlides();
    this.showProduct(this.index);
    //addEventListener
  }

  async getProducts(){
    let data = 'src/assets/json/home-coffee.json';
    let result = await fetch(data);
    this.products = await result.json();
    console.log("products= " + this.products);
    console.log("product1 = " + this.products[0].title);
    console.log("what happened?");
  }

  incrementIndex(direction) {
    let len = this.products.length;

    console.log("index before increment: " + this.index);

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
    console.log("index after increment: " + this.index);
  }

  updateProduct() {
    this.showProduct(this.index);
    this.changeActiveBullet();
  }

  showProduct(index) {
    if (index > 2 || index < 0)
      index = 0;
    if (this.products[index]) {
      let slideWidth = window.getComputedStyle(this.coffeeSlides.firstChild).getPropertyValue('width');
      console.log('slideWidth = ', slideWidth);
      console.log('type = ', typeof (slideWidth));
    if (slideWidth.includes('px')) {
        slideWidth = slideWidth.substring(0, slideWidth.length - 2);
        console.log('slideWidth = ', slideWidth);
        slideWidth = (+slideWidth);
      } 
      let gap = 20;
      let newSlideWidth = slideWidth + gap;
      console.log('newSlideWidth = ', newSlideWidth);
      console.log('left = ', window.getComputedStyle(this.coffeeSlides).getPropertyValue('left'));
      this.coffeeSlides.style.left = -1 * newSlideWidth * index + "px";
      console.log('left = ', window.getComputedStyle(this.coffeeSlides).getPropertyValue('left'));
    }

  }

  createAllSlides() {

    if (this.coffeeSlides.children.length > 0) {
      let newCoffeeSlides = document.createElement('div');
      newCoffeeSlides.classList.add('coffee-slides');
      this.coffeeSlides.parentNode.replaceChild(newCoffeeSlides, this.coffeeSlides);
      this.coffeeSlides = newCoffeeSlides;
    }

    for (let i = 0; i < this.products.length; i++){
      let slide = document.createElement('div');
      slide.classList.add('coffee-slider-content');

      let imgContainer = document.createElement('div');
      imgContainer.classList.add('coffee-slider-img');
      let img = document.createElement('img');
      img.classList.add('coffee-slider-img-img');
      img.src = this.products[i].imgUrl;
      img.alt = this.products[i].title;
      imgContainer.appendChild(img);
      slide.appendChild(imgContainer);

      let title = document.createElement('h3');
      title.classList.add('coffee-slider-title');
      title.innerText = this.products[i].title;
      slide.appendChild(title);

      let description = document.createElement('p');
      description.classList.add('coffee-slider-description');
      description.innerText = this.products[i].description;
      slide.appendChild(description);

      let price = document.createElement('h3');
      price.classList.add('coffee-slider-price');
      price.innerText = this.products[i].price;
      slide.appendChild(price);

      this.coffeeSlides.appendChild(slide);
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

      item.addEventListener('click', () => {
        this.index = i;
        this.updateProduct();
       });
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

