function Slider() {

  let products;

  let sliderContainer = document.querySelector('.favorite-coffee-slider-container');
  let arrowLeft = sliderContainer.querySelector('.arrow-left');
  let arrowRight= sliderContainer.querySelector('.arrow-right');
  let pictureCoffee = sliderContainer.querySelector('.coffee-slider-img-img');
  let titleCoffee = sliderContainer.querySelector('.coffee-slider-title');
  let descriptionCoffee = sliderContainer.querySelector('.coffee-slider-description');
  let priceCoffee = sliderContainer.querySelector('.coffee-slider-price');
  let bulletsContainer = sliderContainer.querySelector('.coffee-slider-counter');
  let activeBullet;

  async function initProducts() {
    await getProducts();
    showProduct(0);
    //addEventListener
  }

  async function getProducts(){
    data = 'src/assets/json/home-coffee.json';
    let result = await fetch(data);
     products = await result.json();
  }

  function showProduct(index) {
    if (index > 2 || index < 0)
      index = 0;

  }

  function createBullets() {
    
  }
}

